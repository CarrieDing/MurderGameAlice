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

var count=document.getElementById("playerCount").value;
    if(!checkNumber(count)||count>18||count<4){
        confirm("请输入正确的玩家数量。");
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
        alert(shuffle(arr));
        pageJump("role.html");
    }

}

function deal() {
    if(!document.getElementById("deal")) return false;
    var deal=document.getElementById("deal");
    deal.onclick=function () {
        createRoles();
    }
}

addLoadEvent(gotoAssignment);
addLoadEvent(deal);