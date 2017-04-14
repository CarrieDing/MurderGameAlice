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
        // document.write("A=",arr.join(","),"<br />A.shuffle()=",shuffle(arr));
        // alert(shuffle(arr));
        pageJump("role.html");
    }
}
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
        ghost.innerHTML = "杀手  人";
        farm.innerHTML = "农民  人";
    }
    else{
        count=event.target.value;
        checkNumber(count)
        if(count>=4&&count<6){
            ghost.innerHTML = "杀手 1 人";
            farm.innerHTML = "农民 " + (count - 1) + " 人";
        }
        if(count>=6&&count<9){
            ghost.innerHTML = "杀手 2 人";
            farm.innerHTML = "农民 " + (count - 2) + " 人";
        }
        if(count>=9&&count<12){
            ghost.innerHTML = "杀手 3 人";
            farm.innerHTML = "农民 " + (count - 3) + " 人";
        }
        if(count>=12&&count<16){
            ghost.innerHTML = "杀手 4 人";
            farm.innerHTML = "农民 " + (count - 4) + " 人";
        }
        if(count>=16&&count<19){
            ghost.innerHTML = "杀手 5 人";
            farm.innerHTML = "农民 " + (count - 5) + " 人";
        }
    }
}
function deal() {
    if(!document.getElementById("deal")) return false;
    var deal=document.getElementById("deal");
    deal.onclick=function () {
        createRoles();
    }
}


function returnChooseVersion() {
    if(!document.getElementById("leftArrow")) return false;
    var returnChooseVer=document.getElementById("leftArrow");
    returnChooseVer.onclick=function () {
        pageJump("chooseVersion.html");
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
            pageJump("chooseVersion.html");
        }

    }
}
addLoadEvent(gotoAssignment);
addLoadEvent(deal);
addLoadEvent(playerChanged);
addLoadEvent(returnAssign);
addLoadEvent(returnChooseVersion);
addLoadEvent(gameOver);