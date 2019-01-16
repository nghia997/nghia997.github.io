$(document).ready(function () {
    $(".content").hide();
    var oldIndexClicked = "";
    //when img click change img hover, this id slideup
    $(".about").bind("click", function(){
        var idClicked = "#" + $(this).attr("id");
        $(idClicked).attr("src","images/" +$(this).attr("id")+ "_mb_hover.jpg");
        $(this).next().slideToggle();
        //close tagIndex old
        if(oldIndexClicked != idClicked) {
            var oldIndex = oldIndexClicked.substring(1,7);
            $(oldIndexClicked).attr("src", "images/" +oldIndex+ "_mb.jpg");
            $(oldIndexClicked).next().hide();
        }
        //change Img when index equal
        if(oldIndexClicked == idClicked) {
            $(idClicked).attr("src", "images/" +$(this).attr("id")+ "_mb.jpg");
            oldIndexClicked = "";
            return;
        }
        timeOut(idClicked);
    oldIndexClicked = idClicked;
    });
    aboutInfo();
});
//when click show info
function aboutInfo() {
    $(".content__img").click(function () {
        $(".about").css({pointerEvents: "none"})
        $("#common__product").animate({top: "70px"});
    });
    $(".common__product__img--close").click(function () {
        $("#common__product").animate({top: "-500px"});
        $(".about").css({pointerEvents: "auto"})
    });
}
//  when selecting another tag, there will be a bunch of open ones  
function timeOut(idClicked) {
    setTimeout( function(){
    $(idClicked).css({pointerEvents: "auto"})
    });
}
