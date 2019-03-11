$(function () {
    window.onhashchange = ruterchange;
    ruterchange();

    getsession();
    $('#zhuxiao').on('click',zhuxiao);
});
var ahash;
function ruterchange() {
    switch (location.hash) {
        case '#shouye':$('#root').load('../modules/shouye/shouye.html');break;
        case '#woyaotouzi':$('#root').load('../modules/woyaotouzi/woyaotouzi.html');break;
        case '#woyaojiekuan':$('#root').load('../modules/woyaojiekuan/woyaojiekuan.html');break;
        case '#gerenzhongxin':$('#root').load('../modules/gerenzhongxin/gerenzhongxin.html');break;
        case '#xiugaiuserinfo':$('#root').load('../modules/xiugaiuserinfo/xiugaiuserinfo.html');break;
        case '#jiekuanxiangqing':$('#root').load('../modules/jiekuanxiangqing/jiekuanxiangqing.html');break;
        default:$('#root').load('../modules/shouye/shouye.html');break;
    }
    //清除所有
    if (ahash)
        ahash.css('backgroundColor','');
    ahash = $("a[href='" + location.hash +  "']");
    ahash.css('backgroundColor','#ccc');
}
function getsession() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:80/phpproject/p2pserver/getsession.php',
        xhrFields: {
            withCredentials: true   //是否携带cookie true允许
        },
        crossDomain: true,  //是否跨域
        success: function(res){
            if(res !== 'nologin'){
                sessionStorage.islogin = true;
                $('#user').html(res).attr('href','/');}


            else
                $('#user').html('请登录');
        }
    })
}
function zhuxiao() {
    $.ajax({
        type: 'get',
        url: 'http://localhost:80/phpproject/p2pserver/delsession.php',
        xhrFields: {
            withCredentials: true   //是否携带cookie true允许
        },
        crossDomain: true,  //是否跨域
        success: function(res){
            sessionStorage.islogin = false;
            alert('注销成功');
            // getsession();
            window.location.reload();
        }
    })
}