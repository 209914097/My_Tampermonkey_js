// ==UserScript==
// @name         easy login neu ipgw
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  轻松的登陆东北大学IP网关
// @author       seel
// @match        http://ipgw.neu.edu.cn/srun_portal_pc.php?ac_id=1&
// @require     http://localhost/jquery/jquery.js
// @require   http://localhost/jquery/jquery.cookie.js
// ==/UserScript==

//方法1
(function() {
    try{
        var  form=document.forms.form2;
        var user = form.username;
        var pw = form.password;
        var list=[888,666,3742];

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
    }
    catch(err){
        //断网重连//
        function NetPing() {
            var Ping=function(a){this.opt=a||{},this.favicon=this.opt.favicon||"/favicon.ico",this.timeout=this.opt.timeout||0};Ping.prototype.ping=function(a,b){function c(a){d&&clearTimeout(d);var c=new Date-e;if("function"==typeof b)return"error"===a.type?(console.error("error loading resource"),b("error",c)):b(null,c)}this.img=new Image;var d,e=new Date;this.img.onload=c,this.img.onerror=c,this.timeout&&(d=setTimeout(c,this.timeout)),this.img.src=a+this.favicon+"?"+ +new Date},"undefined"!=typeof exports?"undefined"!=typeof module&&module.exports&&(module.exports=Ping):window.Ping=Ping;

            var p = new Ping();
            p.ping("https://www.zhihu.com/", function(err, data) {
                // Also display error if err is returned.
                if (err) {
                    console.log("error disconnect");
                    self.location = 'http://ipgw.neu.edu.cn/';
                } else {
                    console.log('connect');
                }
            });
        }
        setInterval(NetPing, 15000);//15秒ping一次

        //断网重连//
    }
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
