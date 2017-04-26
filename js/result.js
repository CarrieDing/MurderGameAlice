
function backHome() {
    var backHome=getItembyID("gameAgain");
    backHome.onclick=function () {
        sessionStorage.clear();
        localStorage.clear();
        delCookie("startTime");
        delCookie("天数");
        pageJump("home.html");
    }
}
function getKillInfo() {
    var killer=getQueryString("killer");
    var farm=getQueryString("farm");
    var countKiller=getQueryString("countKiller");
    if(killer!=null&&farm!=null&&countKiller!=null){
        var killer_=decodeURIComponent(killer);
        var farm_=decodeURIComponent(farm);
        var countKiller_=decodeURIComponent(countKiller);
        var tongji=document.getElementById("tongji");
        tongji.innerHTML="杀手"+killer_+"人              平民"+farm_+"人";
        var conclude=document.getElementById("conclude");
        conclude.innerHTML="本轮游戏共抓出杀手"+(countKiller_-killer_)+"人，共经历了"+Math.floor((sessionStorage.length-1)/2)+"个白天，在杀人游戏中击败了67%的玩家！";
        if(killer_==0){
            var winner=getItembyID("winner");
            winner.innerHTML="平民胜利";
        }
        else{
            var winner=getItembyID("winner");
            winner.innerHTML="杀手胜利";
        }
    }
}
function resultpageLoad() {
    var timearr=[];
    if((sessionStorage.length-2)%2==0) {
        for (var i = 1; i < ((sessionStorage.length - 2) / 2); i++) {
            timearr[i] = getCookie("第"+i+"天");
        }
    }
        else{
            for(var j=1;j<(Math.ceil((sessionStorage.length-2)/2));j++){
                timearr[j]=getCookie("第"+j+"天");
            }
        }
    var totalHours=0;
    var totalMinutes=0;
    for(var j=1;j<timearr.length;j++){
        var tmp=timearr[j].split("小时")
        totalHours+=Number(tmp[0]);
        var tmp2=tmp[1].split("分钟");
        totalMinutes+=Number(tmp2[0]);
    }
    var totalTimeconclude=document.getElementById("totalTime");
    totalTimeconclude.innerHTML="本次游戏共计用时"+totalHours+"小时"+totalMinutes+"分钟";
    document.getElementById("farmword").innerHTML="平民词汇："+ localStorage.getItem("平民词组");
    document.getElementById("killerword").innerHTML="杀手词汇："+localStorage.getItem("杀手词组");
    for(var i=1;i<sessionStorage.length-1;i+=2){
    var logcontent1=sessionStorage.getItem(i);
    var logcontent2=sessionStorage.getItem((i+1));
    var divs=document.createElement("div");
    divs.setAttribute("class","logstyle");
    var para=document.createElement("p");
    var nthday=document.createElement("h4");
    nthday.innerHTML="第"+(i+1)/2+"天";
    para.innerHTML=getCookie("第"+(i+1)/2+"天");
    para.style.float="right";
    para.style.marginTop="-30px";
    para.style.marginRight="30px";
    var childp1=document.createElement("p");
    childp1.innerHTML=logcontent1;
    childp1.style.color="#a6a6a6";
    var childp2=document.createElement("p");
    childp2.innerHTML=logcontent2;
    childp2.style.color="#a6a6a6";
    var logpanel=document.getElementById("item3");
    divs.appendChild(nthday);
    divs.appendChild(para);
    divs.appendChild(childp1);
    divs.appendChild(childp2);
    logpanel.appendChild(divs);
    }
}
addLoadEvent(backHome);
addLoadEvent(getKillInfo);
addLoadEvent(resultpageLoad);
