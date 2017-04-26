var color_begin="#24a7c6";
var color_after_clicked="#83b09a";
function stopGame() {
    var stopGame=getItembyID("stopGame");
    stopGame.onclick=function () {
        pageJump("home.html");
    }
}
function backJudgebtn() {
    var judgelog=getItembyID("judgelog");
    judgelog.onclick=function () {
        pageJump("judge.html");
    }
}
function backJudgeArrow() {
    var judgelog=getItembyID("backJudge");
    judgelog.onclick=function () {
        pageJump("judge.html");
    }
}
function getKillInfo() {
    var enviro_;
    var id=getQueryString("id");
    var role=getQueryString("role");
    var environment=getQueryString("environment");
    if(id!=null&&role!=null&&environment!=null){
        var id_=decodeURIComponent(id);
        var role_=decodeURIComponent(role);
        var environment_=decodeURIComponent(environment);
        var killInfo=document.getElementById("killInfo");
        if(environment_=="全民投票"){
              enviro_="白天：";
            killInfo.innerHTML=id_+"号被全民投票投死，真实身份是"+role_;
        }else{
            enviro_="黑夜：";
            killInfo.innerHTML=id_+"号被杀手杀死，真实身份是"+role_;
        }
        var tmp=JSON.parse(sessionStorage.getItem("logger"))+1;
        sessionStorage.setItem(tmp,enviro_+killInfo.innerHTML);
        sessionStorage.setItem("logger",tmp);
    }
}
function killAction() {
    var killAction=getItembyID("killAction");
    var triangle1=getItembyID("triangle-left1");
    killAction.onclick=function () {
        if(localStorage.getItem("killAction")==color_after_clicked){
            Showbo.Msg.alert("请进行游戏下一项活动")
        }else{
            var date1=new Date();
            var startTime=date1.getTime();
            document.cookie="startTime="+startTime;
            window.location.href="killer.html?from=killAction";
            killAction.style.backgroundColor=color_after_clicked;
            triangle1.style.borderRightColor=color_after_clicked;
            localStorage.setItem("killAction",color_after_clicked);
            document.cookie="triangle1="+color_after_clicked;
        }
    }
}
function lastWords() {
    var lastWords=getItembyID("lastWords");
    var triangle2=getItembyID("triangle-left2");
    lastWords.onclick=function () {
        if(localStorage.getItem("lastWords")==color_after_clicked){
            Showbo.Msg.alert("请进行游戏下一项活动")
        }else{
        if(localStorage.getItem("killAction")!=color_after_clicked){
            Showbo.Msg.alert("请按顺序操作");
        }else{
            Showbo.Msg.confirm("请死者亮明身份并且发表遗言");
            lastWords.style.backgroundColor=color_after_clicked;
            triangle2.style.borderRightColor=color_after_clicked;
            localStorage.setItem("lastWords",color_after_clicked);
            document.cookie="triangle2="+color_after_clicked;
        }
    }
    }
}
function discuss() {
    var discuss=getItembyID("discuss");
    var triangle3=getItembyID("triangle-left3");
    discuss.onclick=function () {
        if(localStorage.getItem("discuss")==color_after_clicked){
            Showbo.Msg.alert("请进行游戏下一项活动")
        }else{
        if(localStorage.getItem("lastWords")!=color_after_clicked){
            Showbo.Msg.alert("请按顺序操作");
        }else {
            Showbo.Msg.confirm("玩家依次发言讨论");
            discuss.style.backgroundColor=color_after_clicked;
            localStorage.setItem("discuss",color_after_clicked);
            triangle3.style.borderRightColor=color_after_clicked;
            document.cookie="triangle3="+color_after_clicked;
        }
    }
    }
}
function voteAction() {
    var voteAction = getItembyID("voteAction");
    var triangle4 = getItembyID("triangle-left4");
    voteAction.onclick = function () {
        if (localStorage.getItem("voteAction") == color_after_clicked) {
            Showbo.Msg.alert("请进行游戏下一项活动")
        } else {
            if (localStorage.getItem("discuss") != color_after_clicked) {
                Showbo.Msg.alert("请按顺序操作");
            } else {
                window.location.href = "killer.html?from=voteAction";
                voteAction.style.backgroundColor = color_after_clicked;
                localStorage.setItem("voteAction", color_after_clicked);
                triangle4.style.borderRightColor = color_after_clicked;
                document.cookie = "triangle4=" + color_after_clicked
                var testm = JSON.parse(sessionStorage.getItem("nthDay")) + 1;
                sessionStorage.setItem("nthDay", testm);
            }
        }
    }
}
function judgelog() {
    var judgelog=getItembyID("judgelog");
    judgelog.onclick=function () {
        window.location.href="killer.html?from=judgelog";
    }
}

function pageLoad() {
    if(localStorage.getItem("killAction")==color_after_clicked&&localStorage.getItem("lastWords")==color_after_clicked &&localStorage.getItem("discuss")==color_after_clicked &&localStorage.getItem("voteAction")==color_after_clicked){
        var date2=new Date();
        var endTime=date2.getTime();
        var startTime=getCookie("startTime");
        var intervaltest=calcTime(startTime,endTime);
        var whichday=Number(getCookie("天数"));
        document.cookie="第"+(whichday+1)+"天="+intervaltest;
        document.cookie="天数="+(whichday+1);
        localStorage.setItem("killAction",color_begin);
        localStorage.setItem("lastWords",color_begin);
        localStorage.setItem("discuss",color_begin);
        localStorage.setItem("voteAction",color_begin);
        document.cookie="triangle1="+color_begin;
        document.cookie="triangle2="+color_begin;
        document.cookie="triangle3="+color_begin;
        document.cookie="triangle4="+color_begin;
    }
    var countFarm=0,farmStatuscount=0,killerStatuscount=0,countKiller=0;
    for(var i=1;i<localStorage.length-5;i++){
        var t1=JSON.parse(localStorage.getItem(i));
        if(t1.role=="平民"){
            countFarm++;
            if(t1.status=="dead"){farmStatuscount++}
        }else{
            countKiller++;
            if(t1.status=="dead"){killerStatuscount++;}
        }
    }
    if((farmStatuscount==countFarm||killerStatuscount==countKiller)){
        var date2=new Date();
        var endTime=date2.getTime();
        var startTime=getCookie("startTime");
        var intervaltest=calcTime(startTime,endTime);
        var whichday=Number(getCookie("天数"));
        document.cookie="第"+(whichday+1)+"天="+intervaltest;
        pageJump("result.html?killer="+(countKiller-killerStatuscount)+"&farm="+(countFarm-farmStatuscount)+"&countKiller="+countKiller);
    }else{
        for(var n=1;n<=JSON.parse(sessionStorage.getItem("nthDay"));n++){
            var adddiv=document.createElement("div");
            adddiv.innerHTML="第"+NumberToChinese((n+1))+"天";
            adddiv.setAttribute("class","days");
            document.getElementById("addays").appendChild(adddiv);
        }
            if(localStorage.getItem("killAction")==color_after_clicked){setColor("killAction","triangle-left1");}
            else{document.getElementById("killInfo").innerHTML="";}
            if(localStorage.getItem("lastWords")==color_after_clicked){setColor("lastWords","triangle-left2");}
            if(localStorage.getItem("discuss")==color_after_clicked){setColor("discuss","triangle-left3");}
            if(localStorage.getItem("voteAction")==color_after_clicked){setColor("voteAction","triangle-left4");}
        }
}
function setColor(itemID,triangle) {
    getItembyID(itemID).style.backgroundColor=color_after_clicked;
    getItembyID(triangle).style.borderRightColor=color_after_clicked;
}
addLoadEvent(stopGame);
addLoadEvent(backJudgebtn);
addLoadEvent(backJudgeArrow);
addLoadEvent(killAction)
addLoadEvent(voteAction)
addLoadEvent(getKillInfo);
addLoadEvent(lastWords);
addLoadEvent(discuss);
addLoadEvent(judgelog);
addLoadEvent(pageLoad);