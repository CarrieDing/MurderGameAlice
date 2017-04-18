/**
 * Created by Administrator on 2017/4/12.
 */
/*Common function*/
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
function getItemValue(id) {
    var item = getItem(id);
    return item.value;
}
function changeValue(id,val) {
    var setValue=getItem(id);
    setValue.value=val;
}
function getItem(id) {
    if (!document.getElementById(id)) return false;
    return document.getElementById(id);
}
function pageJump(url) {
    self.location=url;
}
/*Jump action*/
function gotoAssignment() {
    var gotoAssignemnt=getItem("simpleVer");
    gotoAssignemnt.onclick=function(){
        pageJump("assignment.html");
    };
}
function deal() {
    var deal=getItem("deal");
    deal.onclick=function () {
        var checkSet=getItem("colm1");
        if(!checkSet.hasChildNodes()) {
            Showbo.Msg.alert("请先点击设置进行配置");
        } else{
            pageJump("role.html");
        }
    }
}
function returnChooseVersion() {
    var returnChooseVer=getItem("leftArrow");
    returnChooseVer.onclick=function () {
        pageJump("home.html");
    }
}
function backAssign() {
    var backAssign=getItem("backAssign");
    backAssign.onclick=function () {
        var flop=getItem("flop");
        flop.style.display="block";
        pageJump("assignment.html");
    }
}
function returnAssign() {
    var returnAssign=getItem("leftArrow");
    returnAssign.onclick=function () {
        pageJump("assignment.html");
    }
}
function gameOver() {
    var returnChooseVer=getItem("returnChooseVersion");
    returnChooseVer.onclick=function () {
        var result=Showbo.Msg.confirm("结束本轮游戏吗？");
        var confirmbtn=getItem("testbyalice");
        confirmbtn.onclick=function () {
            var flop=getItem("flop");
            flop.style.display="block";
            pageJump("home.html");
        }
    }
}
function createRole(num,role){
    var arr=Array(num);
    for(var i=0;i<num;i++)
        arr[i]=role;
    return arr;
}
function createElement(arr,index,color) {
    var para=document.createElement("p");
    para.style.marginBottom="10px";
    var txt=document.createElement("span");
    txt.style.width="6px";
    txt.style.height="6px";
    txt.style.display="inline-block";
    txt.style.background=color;
    txt.style.marginRight="10px";
    para.appendChild(txt);
    var str=arr[index]+"1人";
    var rolename=document.createTextNode(str);
    para.appendChild(rolename);
    return para;
}
function shuffleRole() {
    var count=getItem("players").value;
    if(!checkNumber(count)||count>18||count<4){
        Showbo.Msg.confirm("请输入4-18之间的整数。");
    }else{
        var r1,r2;
        if(count>=4&&count<6){
            r1=createRole(1,"平民");
            r2=createRole(count-1,"杀手");
        }
        if(count>=6&&count<9){
            r1=createRole(2,"平民");
            r2=createRole(count-2,"杀手");
        }
        if(count>=9&&count<12){
            r1=createRole(3,"平民");
            r2=createRole(count-3,"杀手");
        }
        if(count>=12&&count<16){
            r1=createRole(4,"平民");
            r2=createRole(count-4,"杀手");
        }
        if(count>=16&&count<19){
            r1=createRole(5,"平民");
            r2=createRole(count-5,"杀手");
        }
        var arr=r1.concat(r2);
        shuffle(arr);
       addRole2Panel(arr,count);
    }
}
function addRole2Panel(arr,count) {
    var colm1=getItem("colm1");
    var colm2=getItem("colm2");
    for(var t=0;t<Math.ceil(count/2);t++){
        if(arr[t]=="平民"){colm1.appendChild(createElement(arr,t,"#69d1e9"));}
        else{colm1.appendChild(createElement(arr,t,"#fbb435"));}
    }
    for(var k=Math.ceil(count/2);k<count;k++){
        if(arr[k]=="平民"){colm2.appendChild(createElement(arr,k,"#69d1e9"));}
        else{colm2.appendChild(createElement(arr,k,"#fbb435"));}
    }
}
function checkRole() {
    var checkRole=getItem("checkRole");
    checkRole.onclick=function () {
        checkRole.style.display="none";
        var passRole=getItem("passRole");
        passRole.style.display="block";
        var roleuncover=getItem("roleuncover");
        roleuncover.style.display="block";
        var rolename=getItem("rolename");
        rolename.style.display="block";
        var flop=getItem("flop");
        flop.style.display="none";
    }
}
function setClick() {
    var setClick=getItem("grandChild2");
    setClick.onclick=function () {
        var removeRoles=getItem("colm1");
        while(removeRoles.hasChildNodes()){
            removeRoles.removeChild(removeRoles.firstChild);
        }
        var removeRoles2=getItem("colm2");
        while(removeRoles2.hasChildNodes()){
            removeRoles2.removeChild(removeRoles2.firstChild);
        }
        shuffleRole();

    }
}
/*input range action*/
function adddition() {
    var addRole =  getItem("addition");
    addRole.onclick = function () {
        var bar = getItem("slidebar");
        var getstep=bar.step;
        var newvalue = parseInt(getItemValue("slidebar")) + 1;
        changeValue("slidebar",newvalue);
        sliderColorChange("slidebar",newvalue);
        var oldvalue=parseInt(getItemValue("players"));
        var step=parseInt(getstep);
        var newvalue=oldvalue+step;
        if(newvalue>18){
            Showbo.Msg.alert("最大值不能超过18");
            changeValue("players",18);
            changeValue("slidebar",18);
        }else{
            changeValue("players",newvalue);
        }
    }
}
function substraction() {
    var subRole = getItem("substraction");
    subRole.onclick = function () {
        var bar = getItem("slidebar");
        var getstep=bar.step;
        var newvalue = parseInt(getItemValue("slidebar")) - 1;
        changeValue("slidebar",newvalue);
        sliderColorChange("slidebar",newvalue);
        var oldvalue=parseInt(getItemValue("players"));
        var step=parseInt(getstep);
        var newvalue=oldvalue-step;
        if(newvalue<4){
            Showbo.Msg.alert("最小值不能少于4");
            changeValue("players",4);
            changeValue("slidebar",4);
        }else{
            changeValue("players",newvalue);
        }
    }
}
function changeStep(item,locationX) {
    var spaceline=parseInt(item.offsetWidth)/14;
    var x0=item.offsetLeft;
    var t1=locationX-x0;
    if(t1<=0) {
        changeValue("slidebar",4);
        changeValue("players",4);
    }
    if(t1>0&&t1<=item.offsetWidth){
        var movestep=Math.ceil((t1-item.offsetWidth)/spaceline);
        var newvalue=18+movestep;
        changeValue("slidebar",newvalue);
        sliderColorChange("slidebar",newvalue);
        changeValue("players",newvalue);
    }
}
function sliderthumb() {
    var bar = getItem("slidebar");
    bar.onclick=function (event) {
        var e = event || window.event;
        var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        var x = e.pageX || e.clientX + scrollX;
        changeStep(bar,x);
    }
}
function touchMove() {
    var bar = getItem("slidebar");
    bar.addEventListener('touchmove',function (event) {
        var touch = event.targetTouches[0];
        var x = touch.pageX;
        changeStep(bar,x);
    });
}
function sliderColorChange(id,offsetDistance) {
    var bar = getItem(id);
    bar.style.background = 'linear-gradient(to right, #d58512, #fcc671 ' + (offsetDistance / 14) * 100 + '%, #fcc671)';
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
addLoadEvent(sliderthumb);
addLoadEvent(touchMove);