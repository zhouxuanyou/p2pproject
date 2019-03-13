$(function () {
    getuserinfo();
    $('#btn_charge').on('click', clickCharge)
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

//点击用户充值
function clickCharge(){
    var datas = {
                money: 1000000
            };
    var success = function (res) {
        if(res === 'ok'){
            //重新刷新用户数据，显示充值完毕的金额!
            alert('充值成功!');
            getuserinfo()
        }
    };


    apiget('/savemoney.php',success,datas);

    // $.ajax({
    //     type: 'get',
    //     url: 'http://localhost:80/savemoney.php',
    //     xhrFields: {
    //         withCredentials: true   //是否携带cookie true允许
    //     },
    //     data: {
    //         money: 10000
    //     },
    //     crossDomain: true,  //是否跨域
    //     success: function(res){
    //         if(res == 'ok'){
    //             //重新刷新用户数据，显示充值完毕的金额!
    //             alert('充值成功!')
    //             getuserinfo()
    //         }
    //     }
    // })
}