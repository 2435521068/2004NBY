var btn = document.querySelector('#btn')
var userInput = document.querySelector('#userInput')
var pwdInput = document.querySelector('#pwdInput')

utils.on(btn, 'click', function (e) {
    e = e || window.event
    var username = userInput.value
    var pwd = pwdInput.value
    utils.post('./api/user/login.php', { username, pwd }, resp => {
        console.log(resp)
        if (resp.code === 1) {
            utils.setCookie('username', username, { path: '/'})
            alert(`${resp.msg}，即将返回首页`)
            location.href = './index.html'
            cookie.Expires = DateTime.Now;
        } else {
            alert(resp.msg)
        }
    })

    if (e.preventDefault) {
        e.preventDefault()
    } else {
        return false
    }
})