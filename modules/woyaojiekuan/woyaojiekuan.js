$(function(){


    //信用申请
    $('#borrow_btn_1').on('click',clickBtn);
    //车申请
    $('#borrow_btn_2').on('click',clickBtn);
    //房申请
    $('#borrow_btn_3').on('click',clickBtn);

});

//点击借款申请
function clickBtn(e){
    // location.href = '?key=borrow1#perborrow'

    //绑定点击按钮的ID
    sessionStorage.clickType = e.target.id;
    location.href = '#jiekuanxiangqing';
    //url完整的顺序
    //协议 域名 端口 虚拟路径 文件名 查询(?的参数) 锚点#

}