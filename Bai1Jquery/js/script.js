$(document).ready(function () {
    $(".content").hide();
    var Click = "";
    //Change picture when clicked
    $(".about").click( function(){
        var Clicked = $(".about").index($(this)) + 1;
        $(".about").eq(Clicked - 1).attr("src","images/about" + Clicked + "_mb_hover.jpg");
         $(this).next().slideToggle();
        //close tagIndex old
        if(Click != Clicked && Click !="") {
           $(".about").eq(Click - 1).attr("src", "images/about" + Click + "_mb.jpg");
            $(".about").eq(Click - 1).next().hide();
        }
        //change Img when index equal
        if(Click == Clicked) {
            $(".about").eq(Clicked - 1).attr("src", "images/about" + Clicked + "_mb.jpg");
            Click = "";
            return;
        }
        timeOut(Clicked - 1);
    Click = Clicked;
    });
     aboutInfo();
});
//Close the others
function timeOut(Clicked) {
    setTimeout( function(){
        $(".about").eq(Clicked).css({pointerEvents: "auto"})
    }, 600);
}

//when click show info
function aboutInfo() {
    $(".content__img").click(function () {
        $("#common__product").animate({top: "50px"});
        $(".about").css({pointerEvents:""})
        $("#common__product").show();
        
    });
    $(".common__product__img--close").click(function () {
        $("#common__product").hide();
        $("#common__product").animate({top: "-500px"});
    });
}
