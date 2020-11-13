var SERVER_PATH = 'http://127.0.0.1:8000/'
$(function () {
    var token = getCookie("token")
    if(!token){
        alert("当前未登陆，请先登陆")
        location.href="page-login.html"
    }

})
/**
 * 方法作用 注销
 * 请求接口 api/admin/logout
 * @author lizhongzheng <github.com/bixuande>
 */
function btn() {
    $.ajax({
        url: SERVER_PATH + "api/admin/logout",
        type: 'post',
        data: {
            token: getCookie("token")
        },
        dataType: 'json',
        success: function (data) {
            console.log(data)
            if (data.code === 200) {
                delCookie('token');
                console.log(data.msg);
                alert('注销成功');
                location.href = "page-login.html";
            } else if (data.code === 100) {
                console.log(data.msg);
            }
        },
        error: function (data) {
            console.log(data.msg);
        }
    })
}

/**
 * 获取token
 * @param c_name
 * @returns {string}
 */
function getCookie(c_name){
    //判断document.cookie对象里面是否存有cookie
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=")
        //如果document.cookie对象里面有cookie则查找是否有指定的cookie，如果有则返回指定的cookie值，如果没有则返回空字符串
        if (c_start!=-1){
            c_start=c_start + c_name.length+1
            c_end=document.cookie.indexOf(";",c_start)
            if (c_end==-1) c_end=document.cookie.length
            return unescape(document.cookie.substring(c_start,c_end))
        }
    }
    return ""
}

/**
 * 删除token方法
 * @param name
 */
function delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    // 这里需要判断一下cookie是否存在
    var c = getCookie(name);
    if (c != null){
        document.cookie = name + "=" + c + ";expires=" + exp.toGMTString();
    }
}
