const username = document.querySelector('.username');
const password = document.querySelector('.password');
/*      username用户名文本框
*   onfocus：当光标点击文本框时，如果值为邮箱/ID/手机号，则赋值为空字符
*   onblur：当光标未点击文本框时，如果值未空，则赋值为邮箱/ID/手机号
*   password原理同上
*  */
username.onfocus = function () {
    if (username.value === '邮箱/ID/手机号') {
        username.value = '';
        this.style.color = 'black';
    }
    this.style.border = '1px solid #904747';
}
username.onblur = function () {
    if (this.value === '') {
        this.value = '邮箱/ID/手机号';
        this.style.color = '#666666';
    }
    this.style.border = '1px solid #999';
}

password.onfocus = function () {
    if (password.value === '密码') {
        password.value = '';
        this.style.color = 'black';
    }
    this.type = 'password';
    this.style.border = '1px solid #904747';
}
password.onblur = function () {
    if (this.value === '') {
        this.value = '密码';
        this.style.color = '#666666';
        this.type = 'text';
    } else {
        this.type = 'password'
    }
    this.style.border = '1px solid #999';
}