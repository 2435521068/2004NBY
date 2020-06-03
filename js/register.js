var btn = document.querySelector('#btn')
var userInput = document.querySelector('#userInput')
var pwdInput = document.querySelector('#pwdInput')

utils.on(btn, 'click', function (e) {
    e = e || window.event
    // 取到用户名和密码发送后端
    var username = userInput.value
    alert(username)
    var pwd = pwdInput.value
    utils.post('./api/user/register.php', { username, pwd }, resp => {
        console.log(resp)
        if (resp.code === 1) {
            alert(`${resp.msg}，即将跳转登录页`)
            location.replace('./login.html')
            
        } else {
            alert(resp.msg)
        }
    })
    // 阻止默认行为，让表单不提交
    if (e.preventDefault) {
        e.preventDefault()
    } else {
        return false
    }
})
