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

function test() {
    var gotoAssignemnt=document.getElementById("test");
    gotoAssignemnt.addEventListener("click",function () {
        self.location="assignment.html";
    });

}

function gotoAssignment() {
    var gotoAssignemnt=document.getElementById("simpleVer");
    gotoAssignemnt.onclick=function(){
        self.location="assignment.html";
    };
}
addLoadEvent(gotoAssignment);