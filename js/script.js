$(document).ready(function(){
    $("#res_01 .hamburger").click(function(){
        var $active=$(this).hasClass("active");
        if($active==false){
            $(this).addClass("active");
            $(this).siblings("nav").stop().slideDown();
        }else{
            $(this).removeClass("active");
            $(this).siblings("nav").stop().slideUp();
        }
    });

    $("#res_02 .hamburger").click(function(){
        $(this).siblings("nav").addClass("active");
    });
    $("#res_02 .close").click(function(){
        $(this).closest("nav").removeClass("active");
    });
});