// ==UserScript==
// @name         easy login neu ipgw
// @namespace    http://tampermonkey.net/
// @version      2.5
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
        user.onkeyup=function(event){

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
            //-----------------------------------------分割线----------改了别人的ping.js库---------------//   
             /**
             * Creates a Ping instance.
             * @returns {Ping}
             * @constructor
             */
            var Ping = function(opt) {
                this.opt = opt || {};
                this.favicon = this.opt.favicon || "/favicon.ico";
                this.timeout = this.opt.timeout || 0;
            };

            /**
             * Pings source and triggers a callback when completed.
             * @param source Source of the website or server, including protocol and port.
             * @param callback Callback function to trigger when completed. Returns error and ping value.
             * @param timeout Optional number of milliseconds to wait before aborting.
             */
            Ping.prototype.ping = function(source, callback) {
                this.img = new Image();
                var timer;

                var start = new Date();
            //     this.img.onload = pingCheck;
            //     this.img.onerror = pingCheck;
                if (this.timeout) { timer = setTimeout(this.img.onload=pingCheck, this.timeout); }

             /**
             请求超时时间设置实现原理
              setTimeout(this.img.onload=pingCheck, this.timeout)这句话很奇怪，本质上相当于执行以下2句伪代码
              (假设this.timeout=5000)
              (1)马上执行this.img.onload=pingCheck 故一旦出现图片onload事件，马上执行pingCheck。this.img.onload=pingCheck语句中pingCheck一直等待onload事件发生后返回的参数e出现
              （2）延时5秒执行pingCheck 延时5秒后，无论是否发生过图片onload事件都执行pingCheck，且一旦执行就抛出console.error("error loading resource")，因为pingCheck和this.img.onload=pingCheck不同，pingCheck中参数e一直是undefined,故一旦执行就抛出console.error("error loading resource")
              这样实际上执行了两次不同的pingCheck.
              如果网速佳，onload事件在5秒之前就发生，伪代码(1)中pingCheck先于伪代码(2)中的pingCheck执行,
              又因为pingCheck中if (timer) { clearTimeout(timer); }会杀死延时5秒执行的伪代码(2),所以只会看到pingCheck执行一次且马上执行无延时打印console.log('connect');
              若网速极差或者断网，onload事件没发生，伪代码(1)中pingCheck不执行（它要等待onload事件发生返回一个参数e出现，代入自身才执行），从而if (timer) { clearTimeout(timer); }不执行，不会杀死延时5秒执行的伪代码(2)
              5秒后onload事件仍没发生，伪代码(2)中pingCheck执行，因为参数 e永远是undefined 会抛出console.error("error loading resource");
              故此，会看到等待5秒后，若网络仍没连上，则会抛出console.error("error loading resource");的现象
              看起来就像超时请求设为5秒一样
              验证上述理论：
              删掉if (timer) { clearTimeout(timer); }
              这样在网络佳时，会输出'connect'5秒后输出"error loading resource"

             **/
                /**
                 * Times ping and triggers callback.     
                 */   
                function pingCheck(e) {
                    if (timer) { clearTimeout(timer); }
                    var pong = new Date() - start;

                    if (typeof callback === "function") {
                        if (e==undefined) {
                            console.error("error loading resource");
                            return callback("error", pong);
                        }
                        return callback(null, pong);
                    }
                }

                this.img.src = source + this.favicon + "?" + (+new Date()); // Trigger image load with cache buster
            };

            if (typeof exports !== "undefined") {
                if (typeof module !== "undefined" && module.exports) {
                    module.exports = Ping;
                }
            } else {
                window.Ping = Ping;
            }      
            //-----------------------------------------分割线----------改了别人的ping.js库---------------// 
            var p = new Ping({'timeout':5000});//设置请求超时为5秒
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
