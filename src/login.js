$(function () {
    if(location.search.indexOf('fail') !== -1){
        //失败
        $('#fail_str').css('display','block')
    }
    $('#login_form').on('submit',checkform);
    $('#code_input').on('change', checkcode )
});


function checkcode(){
    // getCode()//获取左侧canvas生成的字符串验证码
    if($('#code_input').val() === getCode())
        console.log('验证成功!');
    else
        console.log('验证失败!');
}

function checkform() {
    if($('#code_input').val() === getCode())
        return true;
    else{
        alert('验证码输入错误!');
        return false
    }
}