//封装所有的请求
const IP = 'http://localhost:80/phpproject/p2pserver';    //IP地址

//get请求
// api： 请求url地址  实例：  /getsession.php
// data: 本次请求的参数
// callback: 请求成功的回调函数
function apiget(api, callback, data = {}){
    $.ajax({
        type: 'get',
        url: IP + api,
        xhrFields: {
            withCredentials: true   //是否携带cookie true允许
        },
        crossDomain: true,  //是否跨域
        data: data,
        success: callback
    })
}

//post请求
function apipost(api, callback, data = {}){
    $.ajax({
        type: 'post',
        url: IP + api,
        xhrFields: {
            withCredentials: true   //是否携带cookie true允许
        },
        crossDomain: true,  //是否跨域
        data: data,
        success: callback
    })
}