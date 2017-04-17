/**
 * Created by Administrator on 2017/4/17.
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
function adddition() {
    if(!document.getElementById("addition")) return false;
    var subRole=document.getElementById("addition");
    subRole.onclick=function () {

        if(!document.getElementById("slidebar")) return false;
        var bar=document.getElementById("slidebar");
        var newvalue=parseInt(bar.value)+1;
// alert(getstep)
        bar.value=newvalue;
        bar.style.background='linear-gradient(to right, #059CFA, white ' + (newvalue/14)*100+ '%, white)';

}
}


function substraction() {
    if(!document.getElementById("substraction")) return false;
    var subRole=document.getElementById("substraction");
    subRole.onclick=function () {

        if(!document.getElementById("slidebar")) return false;
        var bar=document.getElementById("slidebar");
        var newvalue=parseInt(bar.value)-1;
        bar.value=newvalue;
       bar.style.background='linear-gradient(to right, #059CFA, white ' + (newvalue/14)*100+ '%, white)';
        // $input.css( 'background', 'linear-gradient(to right, #059CFA, white ' + this.value + '%, white)' );



    }
}

function subthumb() {
    if(!document.getElementById("slidebar")) return false;
    var bar=document.getElementById("slidebar");
    var oldlocation=parseInt(bar.value);
    var newlocation=oldlocation-1;
    bar.value=newlocation;
    bar.style.background = 'linear-gradient(to right, #fab344,#fab344 ' + (newlocation / 15) * 100 + '%,#fae6be ' + (100 - (newlocation / 15) * 100) + '% ,#fae6be)';
}
function addthumb() {
    if(!document.getElementById("slidebar")) return false;
    var bar=document.getElementById("slidebar");
    var oldlocation=parseInt(bar.value);
    var newlocation=oldlocation+1;
    bar.value=newlocation;
    bar.style.background = 'linear-gradient(to right, #fab344,#fab344 ' + (newlocation / 15) * 100 + '%,#fae6be ' + (100 - (newlocation / 15) * 100) + '% ,#fae6be)';

}

addLoadEvent(adddition);
addLoadEvent(substraction);