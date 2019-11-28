
$(".menu li").hover(function (){
    $(this).find(".drop_box").stop().slideToggle();
    $(this).find("a").addClass("active");
    $(this).siblings().find("a").removeClass("active")
})