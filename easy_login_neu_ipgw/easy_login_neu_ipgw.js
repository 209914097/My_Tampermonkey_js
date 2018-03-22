// ==UserScript==
// @name         easy login neu ipgw
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  轻松的登陆东北大学IP网关
// @author       seel
// @match        http://ipgw.neu.edu.cn/srun_portal_pc.php?ac_id=1&
// @require     http://localhost/jquery/jquery.js
// @require   http://localhost/jquery/jquery.cookie.js
// ==/UserScript==

//方法1
(function() {
    var  form=document.forms.form2;
    var user = form.username;
    var pw = form.password;
    var list=[201717,201108,217057,200005,10005,17001,17064,17065,17038,17048,17052,17059,17050,17064,17062,17061,17079,17087,17081,16037,10082,00148,16070,16007];
    user.value="";
    if( $.cookie( "keypress")==1){

        pw.value=user.value=list[parseInt(Math.random()*list.length)];//产生0-25包括0，但不包括25的随机整数，若list.length=25
        //alert(pw.value);
        form.submit();
    }
    user.onkeyup=function(){

        if(event.keyCode==32)   {
             $.cookie( "keypress" ,  1 , { path: '/', expires: 'Session' });
            pw.value=user.value=list[parseInt(Math.random()*list.length)];//产生0-25包括0，但不包括25的随机整数，若list.length=25
            //alert(pw.value);
            form.submit();
        }

    };

//Remember someone password is the function of below part,It can be removed from this whole script//
var sub_bt=document.getElementsByClassName('btn btn-primary')[0];

function setCookie(cname,cvalue,exdays){
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires;
}

sub_bt.onclick=function(){
    setCookie(user.value,pw.value,30);
};
//Remember someone password is the function of upper part,It can be removed from this whole script//
})();


//方法2
//(function() {
//    var  form=document.forms.form2;
//    var user = form.username;
//    var pw = form.password;
//    user.value="";
//    user.onkeyup=function(){
//
//        if(user.value.toLowerCase()=="q")   {
//            pw.value=user.value="20817";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="w")   {
//            pw.value=user.value="201108";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="e")   {
//            pw.value=user.value="201707";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="r")   {
//            pw.value=user.value="60005";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="t")   {
//            pw.value=user.value="1715";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="y")   {
//            pw.value=user.value="17021";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="u")   {
//            pw.value=user.value="170034";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="i")   {
//            pw.value=user.value="10065";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="o")   {
//            pw.value=user.value="17038";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="p")   {
//            pw.value=user.value="70042";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="a")   {
//            pw.value=user.value="10052";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="s")   {
//            pw.value=user.value="70019";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="d")   {
//            pw.value=user.value="17055";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="f")   {
//            pw.value=user.value="70014";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="g")   {
//            pw.value=user.value="10624";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="h")   {
//            pw.value=user.value="17065";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="i")   {
//            pw.value=user.value="201087";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="j")   {
//            pw.value=user.value="10079";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="k")   {
//            pw.value=user.value="17082";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="l")   {
//            pw.value=user.value="17084";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="z")   {
//            pw.value=user.value="60007";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="x")   {
//            pw.value=user.value="10082";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="c")   {
//            pw.value=user.value="1608";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="v")   {
//            pw.value=user.value="1600";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="b")   {
//            pw.value=user.value="16002";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="n")   {
//            pw.value=user.value="1093";
//            form.submit();
//        }
//
//        if(user.value.toLowerCase()=="m")   {
//            pw.value=user.value="1037";
//            form.submit();
//        }
//    };
//
//})()
