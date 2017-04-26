function judgeLogger() {
    var board=getItembyID("boardpanel");
    for(var t=0;t<localStorage.length-2;t++){
        var frame=document.createElement("div");
        frame.setAttribute("class","frame");
        var span1=document.createElement("span");
        span1.setAttribute("class","rolename");
        span1.innerHTML=localStorage.getItem(t);
        var span2=document.createElement("span");
        span2.setAttribute("class","rolenumber");
        span2.innerHTML=t+1;
        frame.appendChild(span1);
        frame.appendChild(span2);
        board.appendChild(frame);
    }
}
function backRole() {
    var backRole=getItembyID("backRole");
    backRole.onclick=function () {
        pageJump("role.html");
    }

}
function startGame() {
    var startGame=getItembyID("startGame");
    startGame.onclick=function () {
        pageJump("judgebook.html");
    }
}
addLoadEvent(judgeLogger);
addLoadEvent(backRole);
addLoadEvent(startGame);