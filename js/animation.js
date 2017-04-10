var mobile = window.matchMedia("screen and (min-width: 600px) ");
var $btn1 = $('.showHideMenu'); 
var $list = $('.menu'); 

$btn1.on('click', function() {
    $list.slideToggle().css('background-color','orange');
});

