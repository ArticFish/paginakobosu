$(document).ready(function(){

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        $("#descarga").html('<a href="https://drive.google.com/file/d/1vPWYj_7VOdGqQXsZfMLJWC2LR5q_hXXg/view?usp=share_link">Descargar</a>');
    }else{
        var url = "static/img/qr.png";
        $("#descarga").html('<img src="'+url+'" alt="">')
    }
});