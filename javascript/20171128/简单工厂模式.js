//例子  用登录注册提示
var LoginAlert = function(text) {
    this.content = text;
}
LoginAlert.prototype.show = function() {
    alert(this.content)
}
var userNameAlert = new LoginAlert('用户名不能多于16个字母数字')
userNameAlert.show()
var passWordAlert = new LoginAlert('输入的密码不正确')
passWordAlert.show()


var LoginConfirm = function(text) {
    this.content = text;
}
LoginConfirm.prototype.show = function() {
    alert(this.content)
}
var loginFailConfirm = new LoginConfirm('用户名不能多于16个字母数字')
loginFailConfirm.show();


var LoginPrompt = function(text) {
    this.content = text;
}
LoginPrompt.prototype.show = function() {
    alert(this.content)
}
// ...................

var PopFactory= function(name) {
    switch(name) {
        case 'alert' :
            return new LoginAlert()
        case 'confirm' :
            return new LoginConfirm()
        case 'prompt' :
            return new LoginPrompt()
    }
}

function createPop(type, text) {
    var o = new Object();
    o.content = text;
    o.show= function() {
        // 显示方法
    };
    if(type == 'alert') {
        // 差异部分
    }
    if(type == 'prompt') {
        // 差异部分
    }
    if(type == 'confirm') {
        // 差异部分
    }
    return o;
}
// 调用，创建提示框
var userNameAlert = createPop('alert', '提示文字')








