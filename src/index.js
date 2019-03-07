$(function () {
    window.onhashchange = ruterchange;
    ruterchange();
});
var ahash;
function ruterchange() {
    switch (location.hash) {
        case '#shouye':$('#root').load('../modules/shouye/shouye.html');break;
        case '#woyaotouzi':$('#root').load('../modules/woyaotouzi/woyaotouzi.html');break;
        case '#woyaojiekuan':$('#root').load('../modules/woyaojiekuan/woyaojiekuan.html');break;
        default:$('#root').load('../modules/shouye/shouye.html');break;
    }
    //清除所有
    if (ahash)
        ahash.css('backgroundColor','');
    ahash = $('a[href=' + location.hash +  ']');
    ahash.css('backgroundColor','#ccc');
}