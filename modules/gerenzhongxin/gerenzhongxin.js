$(function () {
    getuserinfo();
});
function getuserinfo() {
    if (sessionStorage.islogin === 'true'){
        $.ajax({
            type: 'get',
            url: 'http://localhost:80/phpproject/p2pserver/getuserinfo.php',
            xhrFields: {
                withCredentials: true   //是否携带cookie true允许
            },
            crossDomain: true,  //是否跨域
            success: function(res){
                var data = JSON.parse(res);
                // console.log(data);

                for (var key in data){
                    $('#'+key).html(data[key]);
                }
            }
        })
    } else {
        alert('请登录在操作');

        window.location.href='./';
    }


}