$(document).ready(function () {
    $(".content").hide();
    var oldIndexClicked = "";
    $(".about").bind("click", function(){
        var idClicked = "#" + $(this).attr("id");
        $(idClicked).attr("src","images/" +$(this).attr("id")+ "_hover.jpg");
        $(this).next().slideToggle();
        if(oldIndexClicked != idClicked) {
            var indexClick = oldIndexClicked.substring(1,7);
            $(oldIndexClicked).attr("src", "images/" +indexClick+ ".jpg");
            $(oldIndexClicked).next().hide();
        }
        if(oldIndexClicked == idClicked) {

            $(idClicked).attr("src", "images/" +$(this).attr("id")+ ".jpg");
            oldIndexClicked = "";
            return;
        }

    oldIndexClicked = idClicked;
        $(".content__img").click(function () {
            $(".about").css({pointerEvents: "none"})
            $("#comman__product").animate({top: "70px"});
        });
        $(".comman__product__img--close").click(function () {
            $("#comman__product").animate({top: "-500px"});
            $(".about").css({pointerEvents: "auto"})
        });
    });
});

