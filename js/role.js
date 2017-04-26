/**
 * Created by Administrator on 2017/4/20.
 */
var i=0;
function backAssign() {
    var backAssign=getItembyID("backAssign");
    backAssign.onclick=function () {
        var flop=getItembyID("flop");
        flop.style.display="block";
        pageJump("assignment.html");
    }
}

function gameOver() {
    var returnChooseVer=getItembyID("returnChooseVersion");
    returnChooseVer.onclick=function () {
        var result=Showbo.Msg.confirm("结束本轮游戏吗？");
        var confirmbtn=getItembyID("testbyalice");
        confirmbtn.onclick=function () {
            var flop=getItembyID("flop");
            flop.style.display="block";
            pageJump("home.html");
        }
    }
}

function checkRole() {
    var checkRole=getItembyID("checkRole");
    checkRole.onclick=function () {

        var passRole=getItembyID("passRole");
        if(i>localStorage.length-8){
            passRole.value="法官查看";
            hideItem("flop");
            showItem("roleuncover");
            showItem("tips");
        }else{
            showItem("roleuncover");
            hideItem("flop");
            showItem("tips");
            passRole.value="隐藏并传递给"+(i+2)+"号";
            var numberplate=getItembyID("numberplate");
            numberplate.innerHTML=i+1;
            i++;
        }
        hideItem("checkRole");
        showItem("passRole");

        var rolenameshow=getItembyID("rolenameshow");
        var getRole=JSON.parse(localStorage.getItem(i));
        if(getRole.role=="杀手"){
            rolenameshow.innerHTML= "角色："+getRole.role+"<br />"+"<span style='color:#f56b81'>词组："+localStorage.getItem("杀手词组")+"</span>";
            // rolenameshow.innerHTML= "角色："+localStorage.getItem(i-1)+"<br />"+"<span style='color:#f56b81'>词组："+localStorage.getItem("setname2")+"</span>";
        }else{
            rolenameshow.innerHTML= "角色："+getRole.role+"<br />"+"<span style='color:#f56b81'>词组："+localStorage.getItem("平民词组")+"</span>";
        }

        showItem("rolenameshow");
    }
}
function passRole() {
    var passRole = getItembyID("passRole");
    var checkRole=getItembyID("checkRole");
    passRole.onclick = function () {
        if(passRole.value=="法官查看"){
            pageJump("judge.html");
        }else{
            hideItem("passRole");
            hideItem("roleuncover");
            hideItem("rolenameshow");
            hideItem("tips");
            showItem("flop");
            showItem("checkRole");
            var numberplate=getItembyID("numberplate");
            numberplate.innerHTML=i+1;
            checkRole.value = "查看" + (i+1) + "号身份";
        }
    }
}
function inital() {
    hideItem("tips");
}
addLoadEvent(inital);
addLoadEvent(passRole);
addLoadEvent(checkRole);
addLoadEvent(backAssign);
addLoadEvent(gameOver);