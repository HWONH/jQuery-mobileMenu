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

    $("#res_03 .hamburger").click(function(){
        $(this).siblings(".dark_bg, nav").addClass("active");
    });
    $("#res_03 .dark_bg, #res_03 .close").click(function(){
        $("#res_03 .dark_bg, nav").removeClass("active");
    });
});