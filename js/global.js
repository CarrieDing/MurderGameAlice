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
function getItemValue(id) {
    var item = getItembyID(id);
    return item.value;
}
function changeValue(id,val) {
    var setValue=getItembyID(id);
    setValue.value=val;
}
function getItembyID(id) {
    if (!document.getElementById(id)) return false;
    return document.getElementById(id);
}
function pageJump(url) {
    self.location=url;
}
function hideItem(id) {
    var item=getItembyID(id);
    item.style.display="none";
}
function showItem(id) {
    var item=getItembyID(id);
    item.style.display="block";
}
function returnChooseVersion() {
    var returnChooseVer=getItembyID("leftArrow");
    returnChooseVer.onclick=function () {
        pageJump("home.html");
    }
}
function returnAssign() {
    var returnAssign=getItembyID("leftArrow");
    returnAssign.onclick=function () {
        pageJump("assignment.html");
    }
}
addLoadEvent(returnAssign);
addLoadEvent(returnChooseVersion);





