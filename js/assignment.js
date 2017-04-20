/**
 * Created by Administrator on 2017/4/20.
 */
/*input range action*/
function checkNumber(num) {
    var reg=/^[0-9]+.?[0-9]*$/;
    if(reg.test(num)){
        return true;
    }
    return false;
}
function shuffle(v) {
    for(var j,x,i=v.length;i;j=parseInt(Math.random()*i),x=v[--i],v[i]=v[j],v[j]=x);
    return v;
}
function playerChanged() {
    var playerInput=getItembyID("players");
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
    var count=getItembyID("players");
    if(event.target.value=="") {}
    else{
        count=event.target.value;
        // checkNumber(count)
        clearPanel("colm1");
        clearPanel("colm2");
        shuffleRole();
        var sliderbar=getItembyID("slidebar");
        sliderbar.value=count;
    }
}
function adddition() {
    var addRole =  getItembyID("addition");
    addRole.onclick = function () {
        var bar = getItembyID("slidebar");
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
        clearPanel("colm1");
        clearPanel("colm2");
        shuffleRole();
    }
}
function substraction() {
    var subRole = getItembyID("substraction");
    subRole.onclick = function () {
        var bar = getItembyID("slidebar");
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
        clearPanel("colm1");
        clearPanel("colm2");
        shuffleRole();
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
    var bar = getItembyID("slidebar");
    bar.onclick=function (event) {
        var e = event || window.event;
        var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        var x = e.pageX || e.clientX + scrollX;
        changeStep(bar,x);
        clearPanel("colm1");
        clearPanel("colm2");
        shuffleRole();
    }
}
function touchMove() {
    var bar = getItembyID("slidebar");
    bar.addEventListener('touchmove',function (event) {
        var touch = event.targetTouches[0];
        var x = touch.pageX;
        changeStep(bar,x);
        clearPanel("colm1");
        clearPanel("colm2");
        shuffleRole();
    });
}
function sliderColorChange(id,offsetDistance) {
    var bar = getItembyID(id);
    bar.style.background = 'linear-gradient(to right, #d58512, #fcc671 ' + (offsetDistance / 14) * 100 + '%, #fcc671)';
}
function clearPanel(id) {
        var removeItem=getItembyID(id);
        while(removeItem.hasChildNodes()){
            removeItem.removeChild(removeItem.firstChild);
        }
}
function setClick() {
    var setClick=getItembyID("grandChild2");
    setClick.onclick=function () {
        clearPanel("colm1");
        clearPanel("colm2");
        shuffleRole();
    }
}
function deal() {
    var deal=getItembyID("deal");
    deal.onclick=function () {
        var checkSet=getItembyID("colm1");
        if(!checkSet.hasChildNodes()) {
            Showbo.Msg.alert("请先点击设置进行配置");
        } else{
            pageJump("role.html");

        }
    }
}
function shuffleRole() {
    var count=getItembyID("players").value;
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
        arr=r1.concat(r2);
        shuffle(arr);
        for(var j=0;j<arr.length;j++){
            sessionStorage.setItem(j,arr[j]);
        }
        addRole2Panel(arr,count);
    }
}
function addRole2Panel(arr,count) {
    var colm1=getItembyID("colm1");
    var colm2=getItembyID("colm2");
    for(var t=0;t<Math.ceil(count/2);t++){
        if(arr[t]=="平民"){colm1.appendChild(createElement(arr,t,"#69d1e9"));}
        else{colm1.appendChild(createElement(arr,t,"#fbb435"));}
    }
    for(var k=Math.ceil(count/2);k<count;k++){
        if(arr[k]=="平民"){colm2.appendChild(createElement(arr,k,"#69d1e9"));}
        else{colm2.appendChild(createElement(arr,k,"#fbb435"));}
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
addLoadEvent(setClick);
addLoadEvent(adddition);
addLoadEvent(substraction);
addLoadEvent(sliderthumb);
addLoadEvent(touchMove);
addLoadEvent(playerChanged);
addLoadEvent(deal);