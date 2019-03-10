$(function () {
    $('#change_btn').on('click', xiugaiuserinfo);
});
function xiugaiuserinfo() {
    if (sessionStorage.islogin === 'true'){
        $.ajax({
            type: 'post',
            url: 'http://localhost:80/phpproject/p2pserver/xiugaiuserinfo.php',
            xhrFields: {
                withCredentials: true   //是否携带cookie true允许
            },
            data: {
                nickname: $('#change_nickname').val(),
                pwd: $('#change_pwd').val(),
                phone: $('#change_phone').val(),
                email: $('#change_email').val(),
                education: $('#change_edu').val()
            },
            crossDomain: true,  //是否跨域
            success: function(res){
                if(res === 'ok'){
                    alert('修改成功');
                    location.href = '/login.html';}
                else
                    alert('修改失败')
            }
        })
    } else {
        alert('请登录在操作');

        window.location.href='./';
    }


}