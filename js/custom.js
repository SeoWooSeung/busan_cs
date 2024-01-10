$(function(){
$('.main_visual_silde').slick({
    arrows:false,
    dots:true,
    vertical:true,    
});



$('.mopen').on('click',function () {
    $('.gnb').toggleClass('on')
});

$('.gnb').on('wheel',function(e){
    if($('.gnb').hasClass('on'))
e.preventDefault();
});



});