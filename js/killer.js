function judgeLogger() {
    var board=getItembyID("boardpanel");
    for(var t=1;t<localStorage.length-5;t++){
        var element=document.createElement("div");
        element.setAttribute("class","elementboard")
        element.setAttribute("id",(t+1));
        var frame=document.createElement("div");
        frame.setAttribute("class","frame");
        frame.setAttribute("id","frame");
        var span1=document.createElement("span");
        span1.setAttribute("class","rolename");
        span1.setAttribute("id",t);
        span1.innerHTML=JSON.parse(localStorage.getItem(t)).role;
        var span2=document.createElement("span");
        span2.setAttribute("class","rolenumber");
        span2.setAttribute("id","rolenumber");
        span2.innerHTML=t;
        frame.appendChild(span1);
        frame.appendChild(span2);
        element.appendChild(frame);
        var knife=document.createElement("img");
        knife.setAttribute("src","images/knife.png");
        knife.setAttribute("class","knife");
        element.appendChild(knife);
        board.appendChild(element);
    }
}
function killSomebody() {
    var killSure=document.getElementById("killSure");
    if(killSure.value=="返回"){}
    else{
        if(!document.getElementsByClassName("elementboard")) return false;

        var parent=document.getElementsByClassName("elementboard");
        for(var i=0;i<localStorage.length-6;i++) {
            parent[i].onclick=function (e) {
                var e=e||window.event;
                target=e.target||e.srcElement;
                var imgs=document.getElementsByClassName("knife");
                for(var j=0;j<localStorage.length-6;j++){
                    imgs[j].style.visibility="hidden";
                }
                imgs[target.id-1].style.visibility="visible";
            }
        }
    }
}
function killSure() {
    var killSure=document.getElementById("killSure");
    killSure.onclick=function () {
        if(killSure.value=="返回"){
            pageJump("judgebook.html");
        }else{
            var changecolorid=target.id;
            var tmp=JSON.parse(localStorage.getItem(changecolorid));
            tmp.bgColor="#83b09a";
            var pagetitle=getItembyID("pagetitle");
            if(tmp.role=="杀手"){

                if(pagetitle.innerHTML!="全民投票"){
                    Showbo.Msg.alert("你是杀手不能杀死本职业，请选择其他玩家杀死");
                }else{
                    if(tmp.status=="alive"){
                        tmp.status="dead";
                        localStorage.setItem(changecolorid,JSON.stringify(tmp));
                        var rolenames=document.getElementsByClassName("rolename");
                        rolenames[changecolorid-1].style.backgroundColor="#83b09a";
                        window.location.href="judgebook.html?id="+changecolorid+"&role="+tmp.role+"&environment="+pagetitle.innerHTML;
                    }else{
                        Showbo.Msg.alert("当前玩家已死亡，请选择其他玩家");
                    }
                }
            }else{
                if(tmp.status=="alive"){
                    tmp.status="dead";
                    localStorage.setItem(changecolorid,JSON.stringify(tmp));
                    var rolenames=document.getElementsByClassName("rolename");
                    rolenames[changecolorid-1].style.backgroundColor="#83b09a";
                    window.location.href="judgebook.html?id="+changecolorid+"&role="+tmp.role+"&environment="+pagetitle.innerHTML;
                }else{
                    Showbo.Msg.alert("当前玩家已死亡，请选择其他玩家");
                }
            }
        }
    }
}
function pageOnload() {
    var fromBtn=getQueryString("from");

    if(fromBtn!=null){
        var fromBtn_=decodeURIComponent(fromBtn);
        if(fromBtn_=="killAction"){
            var pagetitle=getItembyID("pagetitle");
            pagetitle.innerHTML="杀手杀人";
            var promtPop=getItembyID("promtPop");
            promtPop.innerHTML="狙击手请睁眼，（狙击手告诉法官是否开枪）狙击手请选择要杀的对象<img class='sound' src='images/sound.png' /><span id='triangle-left' class='triangle-bottom'> </span>";
            var promtmessage=getItembyID("promtmessage");
            promtmessage.innerHTML="点击下方玩家头像，对被狙击的对象进行标记";
        }
        if(fromBtn_=="voteAction"){
            var pagetitle=getItembyID("pagetitle");
            pagetitle.innerHTML="全民投票";
            var promtPop=getItembyID("promtPop");
            promtPop.innerHTML="发言讨论结束，请大家投票<img class='sound' src='images/sound.png' /><span id='triangle-left' class='triangle-bottom'> </span>";
            var promtmessage=getItembyID("promtmessage");
            promtmessage.innerHTML="点击得票数最多人的头像";
        }
        if(fromBtn_=="judgelog"){
            var pagetitle=getItembyID("pagetitle");
            pagetitle.innerHTML="法官日志";
            getItembyID("killSure").value="返回";
        }
    }
    judgeLogger();
    for(var j=1;j<localStorage.length-5;j++){
    var tmp=JSON.parse(localStorage.getItem(j));
    if(tmp.bgColor!="#f5c97b"){
        var rolenames=document.getElementsByClassName("rolename");
        rolenames[j-1].style.backgroundColor="#83b09a";
        }
    }
}
function backJudgeBook() {
    var backJudgeBook=getItembyID("backJudgeBook");
    backJudgeBook.onclick=function () {
        pageJump("judgebook.html");
    }
}
addLoadEvent(pageOnload)
addLoadEvent(killSomebody);
addLoadEvent(killSure)
addLoadEvent(backJudgeBook);

