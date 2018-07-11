// ==UserScript==
// @name         Remember me
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Remember my password
// @author       seel
// @match        http://ipgw.neu.edu.cn/srun_portal_pc.php?ac_id=1&
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// ==/UserScript==
(function() {
    var form = document.forms.form2;
    var user = form.username;
    var pw = form.password;
    var sub_bt = document.getElementsByClassName('btn btn-primary')[0];

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

    sub_bt.onclick = function() {
        var cookie = getCookie(user.value)
        if (cookie == "") {
            setCookie(user.value, pw.value, 30);
        } else if (cookie != "") {
            var temp = cookie + '+' + pw.value
            setCookie(user.value, temp, 30);
        }
    }
    ;
}
)();
