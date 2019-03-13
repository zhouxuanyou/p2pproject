var datas;   //本次点击的借款数据
$(function(){

    datas = JSON.parse(sessionStorage.borrowinfo);

    for(var key in datas){
        $('#borrowinfo_' + key).html(datas[key]);
    }
    $('#borrowinfo_needmoney').html(datas.borrowmoney - datas.investmoney);
    $('#borrowinfo_btn').on('click', investMoney);
    // console.log(datas);
});

// console.log(data);
//点击投资
function investMoney(){
    var data = {
        borrowid: datas.id,
        investmoney: $('#borrowinfo_money').val()
    };
    var success = function (res) {
        switch(res){
            case 'error:money': alert('余额不足,请充值!');break;

            default:
             alert('投资成功!');
             location.href = '/';
            break;
        }
      };

    apiget('/investmoney.php',success,data)
}