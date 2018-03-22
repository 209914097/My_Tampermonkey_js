// ==UserScript==
// @name         Remember me
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Remember my password
// @author       seel
// @match        http://ipgw.neu.edu.cn/srun_portal_pc.php?ac_id=1&
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// ==/UserScript==

(function() {
 var  form=document.forms.form2;
 var user = form.username;
 var pw = form.password;
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
})();
