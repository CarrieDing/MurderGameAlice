/**
 * Created by Administrator on 2017/4/20.
 */
function gotoAssignment() {
    var gotoAssignemnt=getItembyID("simpleVer");
    gotoAssignemnt.onclick=function(){
        pageJump("assignment.html");
    };
}
addLoadEvent(gotoAssignment);