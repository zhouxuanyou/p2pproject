$(function(){
    getborrowlist()
});



//获取借款列表
function getborrowlist(){
    $.ajax({
        type: 'get',
        url: 'http://localhost:80/phpproject/p2pserver/getjiekuanlist.php',
        xhrFields: {
            withCredentials: true   //是否携带cookie true允许
        },
        crossDomain: true,  //是否跨域
        success: function(res){
            // console.log(res);
            var list = JSON.parse(res);
            refreshTable(list)
        }
    })
}


//刷新借款列表
function refreshTable(list){
    var str = ``;

    for(var obj of list){
        str += `<tr>
                    <td>${obj.nickname}</td>
                    <td>${obj.title}</td>
                    <td>${obj.interest}.00%</td>
                    <td>${obj.borrowmoney}</td>
                    <td>${obj.repaytype === 0 ? '按月到期' : '按月分期' }</td>
                    <td>${((obj.investmoney / obj.borrowmoney) * 100).toFixed(2)}%</td>
                    <td><button class="btn btn-danger">查看</button></td>
                </tr>`
    }

    $('#borrow_list_table').html(str)

}
