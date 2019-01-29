$(window).scroll(function() {
if(Math.floor($(window).scrollTop() + $(window).height()) >= $(document).height() - 1) {
    //Change color
    $(".row").children("p").css("color","#ce2121");
    $(".header__blood").show();
    $(".color__pan").css("background-color","#330000").css("color","#850000");
    $(".content").css("background-color","#000000").css("color","#840000");
    $(".header__content").addClass("--header__body__content__effect-js").children("img").attr("src","images/header__content-hornor.png");
    $("h2").css("border-color","#330000");
    changeImage(true);
    $("html, body").css("overflow","hidden");
    $("html, body").animate({
        scrollTop: "0px",   
    }, 5000);
    setTimeout(function(){
        changeImage(false);
        $(".header__blood").hide();
        $(".row").children("p").removeAttr("style");
        $(".content").removeAttr("style");
        $(".header__content").removeClass("--header__body__content__effect-js").children("img").attr("src","images/header__content.png");
        $(".header__content").removeAttr("style");
        $("html, body").css("overflow","auto");
    },6000);
}

});
 // change the image when you are at the bottom of the page
function changeImage (typeImage) {
    if(typeImage)
        $(".row").each(function(index) {
            iImage = index + 1;
           $(this).children("img").attr("src","images/content__img-"+ iImage +"_hornor.jpg");
    });
    else {
        $(".row").each(function(index) {
            iImage = index + 1;
           $(this).children("img").attr("src","images/content__img-"+ iImage +".jpg");
        });
    }
 }
