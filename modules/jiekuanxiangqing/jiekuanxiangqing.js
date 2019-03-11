$(function(){

    initType();
    $('.borrow_money_form').on('change', changeInput)

});

function initType() {

    switch (sessionStorage.clickType) {
        case 'borrow_btn_1':
            $('#borrow_title').html('信用贷');
            $('#borrow_money').html('查询中···');
            getUserEdu();
            break;

        case 'borrow_btn_2':
            $('#borrow_title').html('车押贷');
            $('#borrow_money').html('￥100,000');
            break;

        case 'borrow_btn_3':
            $('#borrow_title').html('房押贷');
            $('#borrow_money').html('￥1,200,000');
            break;
    }
}
//获取用户学历
function getUserEdu() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:80/phpproject/p2pserver/getuseredu.php',
        xhrFields: {
            withCredentials: true   //是否携带cookie true允许
        },
        crossDomain: true,  //是否跨域
        success: function (res) {
            let data = JSON.parse(res);

            switch (data.education) {
                case '博士': $('#borrow_money').html('￥200,000'); break;
                case '硕士': $('#borrow_money').html('￥150,000'); break;
                case '本科': $('#borrow_money').html('￥100,000'); break;
                case '专科': $('#borrow_money').html('￥50,000'); break;

                default: $('#borrow_money').html('￥5,000'); break;
            }
        }
    })
}

//动态计算奖金利息
function changeInput() {

    //借款金额
    var borrowmoney = $('input[name=borrowmoney]').val();
    //利息
    var interest = $('input[name=interest]').val();
    //借款期限
    var borrowtime = $('select[name=borrowtime]').val();
    //奖金
    var starmoney = $('input[name=starmoney]').val();

    if(borrowmoney !== '' && interest !== '' && borrowtime !== '' && starmoney !== '' ){
        var m = Number(borrowmoney) * Number(interest) / 100 / 12 * Number(borrowtime);
        //利息
        $('#borrow_money_1').html( m.toFixed(2) );


        var m2 = Number(borrowmoney) * Number(starmoney) / 100 / 12 * Number(borrowtime);
        //奖金
        $('#borrow_money_2').html( m2.toFixed(2) );


        //管理费
        $('#borrow_money_3').html( (borrowmoney * 0.02).toFixed(2) )
    }


}