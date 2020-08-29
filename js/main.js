$(".menu-options li a").click(function(e){
    e.preventDefault();
    $(".menu-options").removeClass("active-1");
    $(".menu-options").removeClass("active-2");
    $(".menu-options").removeClass("active-3");
    $(".menu-options").removeClass("active-4");
    $(".menu-options").removeClass("active-5");
    $(".menu-options").removeClass("active-6");
    $(".menu-options").removeClass("active-7");
    $(".menu-options li a").not(this).removeClass('active');
    $(this).addClass('active');
});
$(".menu-options li").eq(0).find("a").click(function(){
    $(".menu-options").addClass("active-1");
});
$(".menu-options li").eq(1).find("a").click(function(){
    $(".menu-options").addClass("active-2");
});
$(".menu-options li").eq(2).find("a").click(function(){
    $(".menu-options").addClass("active-3");
});
$(".menu-options li").eq(3).find("a").click(function(){
    $(".menu-options").addClass("active-4");
});
$(".menu-options li").eq(4).find("a").click(function(){
    $(".menu-options").addClass("active-5");
});
$(".menu-options li").eq(5).find("a").click(function(){
    $(".menu-options").addClass("active-6");
});
$(".menu-options li").eq(6).find("a").click(function(){
    $(".menu-options").addClass("active-7");
});
$("#toFecha").on('click',function(){
    $("#forCalendar").fadeIn('slow')
})
$("#toLigas").on('click',function(){
    $("#forOptionsLiga").fadeIn('slow')
})

$("#forCalendar").on('click',function(){
    $(this).fadeOut('slow')
})
$("#forCalendar table td").on('click',function(){
    $("#forCalendar").fadeOut('slow')
})


$("#forOptionsLiga").on('click',function(){
    $(this).fadeOut('slow')
})
$("#forOptionsLiga ul").on('click',function(){
    $("#forOptionsLiga").fadeOut('slow')
})

$('.modal').click(function(e) { 
    e.stopPropagation();
})
