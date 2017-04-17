/**
 * Created by Administrator on 2017/4/12.
 */
function addLoadEvent(func) {
    var oldonload=window.onload;
    if(typeof window.onload!='function'){
        window.onload=func;
    }else{
        window.onload=function () {
            oldonload();
            func();
        }
    }
}
function shuffle(v) {
    for(var j,x,i=v.length;i;j=parseInt(Math.random()*i),x=v[--i],v[i]=v[j],v[j]=x);
    return v;
}
function checkNumber(num) {
    var reg=/^[0-9]+.?[0-9]*$/;
    if(reg.test(num)){
        return true;
    }
    return false;
}
function pageJump(url) {
    self.location=url;
}
function gotoAssignment() {
    if(!document.getElementById("simpleVer")) return false;
    var gotoAssignemnt=document.getElementById("simpleVer");
    gotoAssignemnt.onclick=function(){
        pageJump("assignment.html");
    };
}

function createRoles() {
var count=document.getElementById("players").value;
    if(!checkNumber(count)||count>18||count<4){
        Showbo.Msg.confirm("请输入正确的玩家数量。");
    }else{
        var arr=[count];
        if(count>=4&&count<6){
            arr[0]="杀手";
            for(j=1;j<count;j++){
                arr[j]="平民";
            }
        }
        if(count>=6&&count<9){
            arr[0]="杀手";
            arr[1]="杀手";
            for(j=2;j<count;j++){
                arr[j]="平民";
            }
        }
        if(count>=9&&count<12){
            arr[0]="杀手";
            arr[1]="杀手";
            arr[2]="杀手";
            for(j=3;j<count;j++){
                arr[j]="平民";
            }
        }
        if(count>=12&&count<16){
            arr[0]="杀手";
            arr[1]="杀手";
            arr[2]="杀手";
            arr[3]="杀手";
            for(j=4;j<count;j++){
                arr[j]="平民";
            }
        }
        if(count>=16&&count<19){
            arr[0]="杀手";
            arr[1]="杀手";
            arr[2]="杀手";
            arr[3]="杀手";
            arr[4]="杀手";
            for(j=5;j<count;j++){
                arr[j]="平民";
            }
        }

        shuffle(arr);
        if(!document.getElementById("colm1")) return false;
        var colm1=document.getElementById("colm1");

        if(!document.getElementById("colm2")) return false;
        var colm2=document.getElementById("colm2");




        for(var t=0;t<Math.ceil(count/2);t++){
            // alert(Math.ceil(count/2));
            if(arr[t]=="平民"){
                var para=document.createElement("p");
                para.style.marginBottom="10px";

                var txt=document.createElement("span");
                txt.style.width="6px";
                txt.style.height="6px";
                txt.style.display="inline-block";
                txt.style.background="#69d1e9";
                txt.style.marginRight="10px";
                para.appendChild(txt);
                var str=arr[t]+"1人";
                var rolename=document.createTextNode(str);
                // rolename.fontSize="1.5rem";
                 para.appendChild(rolename);
                colm1.appendChild(para);
            }
            else{
                var para=document.createElement("p");
                para.style.marginBottom="10px";
                var txt=document.createElement("span");
                txt.style.width="6px";
                txt.style.height="6px";
                txt.style.display="inline-block";
                txt.style.background="#fbb435";
                txt.style.marginRight="10px";
                para.appendChild(txt);
                var str=arr[t]+"1人";
                var rolename=document.createTextNode(str);

                para.appendChild(rolename);
                colm1.appendChild(para);
            }
        }

        for(var k=Math.ceil(count/2);k<count;k++){
            if(arr[k]=="平民"){
            var para=document.createElement("p");
            para.style.marginBottom="10px";
            var txt=document.createElement("span");
            txt.style.width="6px";
            txt.style.height="6px";
            txt.style.display="inline-block";
            txt.style.background="#69d1e9";
                txt.style.marginRight="10px";
            para.appendChild(txt);
            var str=arr[k]+"1人";
            var rolename=document.createTextNode(str);

            para.appendChild(rolename);
            colm2.appendChild(para);
            }
            else{
                var para=document.createElement("p");
                para.style.marginBottom="10px";
                var txt=document.createElement("span");
                txt.style.width="6px";
                txt.style.height="6px";
                txt.style.display="inline-block";
                txt.style.background="#fbb435";
                txt.style.marginRight="10px";
                para.appendChild(txt);
                var str=arr[k]+"1人";
                var rolename=document.createTextNode(str);

                para.appendChild(rolename);
                colm2.appendChild(para);
            }
        }
    }
}
/*暂时保留以备后用*/
function playerChanged() {
    if(!document.getElementById("players")) return false;
    var playerInput=document.getElementById("players");

    playerInput.oninput=function(){
        OnInputChanged(event);
    };
    playerInput.onpropertychange=function(){
        OnInputChanged(event);
    };
    if(playerInput.addEventListener)
        playerInput.addEventListener('input',OnInputChanged,false);
}
function OnInputChanged(event) {
    if(!document.getElementById("players")) return false;
    var count=document.getElementById("players");
    if(event.target.value=="")
    {
        // createRoles();
        // ghost.innerHTML = "杀手  人";
        // farm.innerHTML = "农民  人";
    }
    else{
        count=event.target.value;
        checkNumber(count)
        if(count>=4&&count<6){
            createRoles();

            // ghost.innerHTML = "杀手 1 人";
            // farm.innerHTML = "农民 " + (count - 1) + " 人";
        }
        if(count>=6&&count<9){
            createRoles();
            // ghost.innerHTML = "杀手 2 人";
            // farm.innerHTML = "农民 " + (count - 2) + " 人";
        }
        if(count>=9&&count<12){
            createRoles();
            // ghost.innerHTML = "杀手 3 人";
            // farm.innerHTML = "农民 " + (count - 3) + " 人";
        }
        if(count>=12&&count<16){
            createRoles();
            // ghost.innerHTML = "杀手 4 人";
            // farm.innerHTML = "农民 " + (count - 4) + " 人";
        }
        if(count>=16&&count<19){
            createRoles();
            // ghost.innerHTML = "杀手 5 人";
            // farm.innerHTML = "农民 " + (count - 5) + " 人";
        }
    }
}
function deal() {
    if(!document.getElementById("deal")) return false;
    var deal=document.getElementById("deal");
    deal.onclick=function () {
        if(!document.getElementById("colm1")) return false;
        var checkSet=document.getElementById("colm1");
        if(!checkSet.hasChildNodes()) {
            Showbo.Msg.alert("请先点击设置进行配置");
        } else{
            pageJump("role.html");
        }

    }
}
function returnChooseVersion() {
    if(!document.getElementById("leftArrow")) return false;
    var returnChooseVer=document.getElementById("leftArrow");
    returnChooseVer.onclick=function () {

        pageJump("home.html");
    }
}
function backAssign() {
    if(!document.getElementById("backAssign")) return false;
    var backAssign=document.getElementById("backAssign");
    backAssign.onclick=function () {
        if(!document.getElementById("flop")) return false;
        var flop=document.getElementById("flop");
        flop.style.display="block";
        pageJump("assignment.html");
    }
}
function returnAssign() {
    if(!document.getElementById("leftArrow")) return false;
    var returnAssign=document.getElementById("leftArrow");
    returnAssign.onclick=function () {
        pageJump("assignment.html");
    }
}
function gameOver() {
    if(!document.getElementById("returnChooseVersion")) return false;
    var returnChooseVer=document.getElementById("returnChooseVersion");
    returnChooseVer.onclick=function () {
        var result=Showbo.Msg.confirm("结束本轮游戏吗？");
        if(!document.getElementById("testbyalice")) return false;
        var confirmbtn=document.getElementById("testbyalice");
        confirmbtn.onclick=function () {
            if(!document.getElementById("flop")) return false;
            var flop=document.getElementById("flop");
            flop.style.display="block";
            pageJump("home.html");
        }

    }
}
function checkRole() {
    if(!document.getElementById("checkRole")) return false;
    var checkRole=document.getElementById("checkRole");
    checkRole.onclick=function () {
        checkRole.style.display="none";

        if(!document.getElementById("passRole")) return false;
        var passRole=document.getElementById("passRole");
        passRole.style.display="block";

        if(!document.getElementById("roleuncover")) return false;
        var roleuncover=document.getElementById("roleuncover");
        roleuncover.style.display="block";

        if(!document.getElementById("rolename")) return false;
        var rolename=document.getElementById("rolename");
        rolename.style.display="block";

        if(!document.getElementById("flop")) return false;
        var flop=document.getElementById("flop");
        flop.style.display="none";
    }
}
function setClick() {
    if(!document.getElementById("grandChild2")) return false;
    var setClick=document.getElementById("grandChild2");
    setClick.onclick=function () {
        if(!document.getElementById("colm1")) return false;
        var removeRoles=document.getElementById("colm1");
        while(removeRoles.hasChildNodes()){
            removeRoles.removeChild(removeRoles.firstChild);
        }

        if(!document.getElementById("colm2")) return false;
        var removeRoles2=document.getElementById("colm2");
        while(removeRoles2.hasChildNodes()){
            removeRoles2.removeChild(removeRoles2.firstChild);
        }

        createRoles();
    }
}
function adddition() {
    if (!document.getElementById("addition")) return false;
    var addRole = document.getElementById("addition");
    addRole.onclick = function () {

        if (!document.getElementById("slidebar")) return false;
        var bar = document.getElementById("slidebar");

        var getstep=document.getElementById("slidebar").step;
        var newvalue = parseInt(bar.value) + 1;
        bar.value = newvalue;
        bar.style.background = 'linear-gradient(to right, #d58512, #fcc671 ' + (newvalue / 14) * 100 + '%, #fcc671)';

        if(!document.getElementById("players")) return false;
        var setValue=document.getElementById("players");
        var oldvalue=parseInt(setValue.value);
        var step=parseInt(getstep);
        var newvalue=oldvalue+step;
        if(newvalue>18){
            Showbo.Msg.alert("最大值不能超过18");

            setValue.value=18;
        }else{
            setValue.value=newvalue;
        }
    }
}
function substraction() {
    if (!document.getElementById("substraction")) return false;
    var subRole = document.getElementById("substraction");
    subRole.onclick = function () {

        if (!document.getElementById("slidebar")) return false;
        var bar = document.getElementById("slidebar");
        var getstep=document.getElementById("slidebar").step;
        var newvalue = parseInt(bar.value) - 1;
        bar.value = newvalue;
        bar.style.background = 'linear-gradient(to right, #d58512, #fcc671 ' + (newvalue / 14) * 100 + '%, #fcc671)';


        if(!document.getElementById("players")) return false;
        var setValue=document.getElementById("players");
        var oldvalue=parseInt(setValue.value);
        var step=parseInt(getstep);
        var newvalue=oldvalue-step;
        if(newvalue<4){
            Showbo.Msg.alert("最小值不能少于4");
            setValue.value=4;
        }else{
            setValue.value=newvalue;
        }
    }
}

addLoadEvent(gotoAssignment);
addLoadEvent(deal);
addLoadEvent(returnAssign);
addLoadEvent(returnChooseVersion);
addLoadEvent(gameOver);
addLoadEvent(checkRole);
addLoadEvent(setClick);
addLoadEvent(backAssign);

addLoadEvent(adddition);
addLoadEvent(substraction);
