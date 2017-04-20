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
        if(i>sessionStorage.length-2){
            passRole.value="法官查看";
            hideItem("flop");
            showItem("roleuncover");
        }else{
            showItem("roleuncover");
            hideItem("flop");
            passRole.value="隐藏并传递给"+(i+2)+"号";
            i++;
        }
        hideItem("checkRole");
        showItem("passRole");

        var rolenameshow=getItembyID("rolenameshow");
        rolenameshow.innerHTML= sessionStorage.getItem(i);
        showItem("rolenameshow");
        var numberplate=getItembyID("numberplate");
        numberplate.innerHTML=i+1;
    }
}
function passRole() {
    var passRole = getItembyID("passRole");
    var checkRole=getItembyID("checkRole");
    passRole.onclick = function () {
        if(passRole.value=="法官查看"){
            pageJump("judgelogger.html");
        }else{
            hideItem("passRole");
            hideItem("roleuncover");
            hideItem("rolenameshow");
            showItem("flop");
            showItem("checkRole");
            var numberplate=getItembyID("numberplate");
            numberplate.innerHTML=i+1;
            checkRole.value = "查看" + (i+1) + "号身份";
        }
    }
}

addLoadEvent(passRole);
addLoadEvent(checkRole);
addLoadEvent(backAssign);
addLoadEvent(gameOver);