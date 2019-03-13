var nowpage = 1;    //当前页数
var maxpage;        //最大页数
var PAGECELL = 5; //每页显示行数
var isInit = false;

$(function(){
    getborrowlist(nowpage);
    // $('#up_btn').on('click', upPage);
    // $('#next_btn').on('click', nextPage);
});



//点击上一页
function upPage() {
    if (nowpage - 1 !== 0) {
        //翻页
        getborrowlist(--nowpage)
    }
}
//点击下一页
function nextPage() {
    if (nowpage + 1 <= maxpage)
        getborrowlist(++nowpage)
}

//初始化jquery插件
function initjquerypage() {
    if(isInit) return;

    isInit = true;

    $('#page_box').paging({
        initPageNo: 1, // 初始页码
        totalPages: maxpage, //总页数
        slideSpeed: 1000, // 缓动速度。单位毫秒
        jump: false, //是否支持跳转
        callback: function(page) { // 回调函数
            getborrowlist(page)
        }
    })
}


//获取借款列表
function getborrowlist(page){
    $.ajax({
        type: 'get',
        url: 'http://localhost:80/phpproject/p2pserver/getjiekuanlist.php',
        xhrFields: {
            withCredentials: true   //是否携带cookie true允许
        },
        data:{
            pagecell:PAGECELL,
            page:page,
        },
        crossDomain: true,  //是否跨域
        success: function(res){
            // console.log(res);
            var data = JSON.parse(res);

            //保存最大页数
            maxpage = data.maxpage;
            //刷新列表数据
            refreshTable(data.arr);
            initjquerypage();
            // $('#page_label').html(page + ' / ' + maxpage)
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
                    <td><button onclick="clickInfo('${JSON.stringify(obj).replace(/"/g, '&quot;')}')" class="btn btn-danger myInfobtn">查看</button></td>
                </tr>`
    }

    $('#borrow_list_table').html(str);
    // $('#infobtn').on('click',clickbtn).bind(this.list);

}
//点击查看按钮
function clickInfo(info){
    sessionStorage.borrowinfo = info;
    location.href = '#borrowinfo'
}
