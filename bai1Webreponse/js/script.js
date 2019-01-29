$(document).ready(function() {
    if($(document).width() < 641) {
        $(".chat__right").css("display","none");
    }
    $("#check__JP-js").change(function() {
        if(this.checked) { // hide text japan
            $(".text").children("p").children("b").removeAttr("style");
        }else {
            $(".text").children("p").children("b").css("opacity","0");
        }
    });
    $("#check__EN-js").change(function() { //hide text english
        if(this.checked) {
            $(".text").children(".dummy").removeAttr("style");
        }else {
            $(".text").children(".dummy").css("opacity","0");
        }
    });
    $("#man__smile").click(function(){
        if($(this).attr("src") == "images/pic-man-smile.png"){
            $(this).attr("src","images/pic-man-sad.png");
            $("#man__sad").attr("src","images/pic-man-smile.png");
            changeText(true);
        }
        else{
            $("#man__sad").attr("src","images/pic-man-sad.png");
            $(this).attr("src","images/pic-man-smile.png");
            changeText(false);
        }
    });
    $("#man__sad").click(function(){
        if($(this).attr("src") == "images/pic-man-smile.png"){
            $(this).attr("src","images/pic-man-sad.png");
            $("#man__smile").attr("src","images/pic-man-smile.png");
            changeText(false);
        }
        else{
            $("#man__smile").attr("src","images/pic-man-sad.png");
            $(this).attr("src","images/pic-man-smile.png");
            changeText(true);
        }
    });
});
function changeText(value){
    if(value){
        $(".chat__left").css("display","none");
        $(".chat__right").css("display","block");
    }
    else{
        $(".chat__left").css("display","block");
        $(".chat__right").css("display","none");
    }
}
$( window ).resize(function() {
    if($(document).width() > 1279) { 
        $(".chat__right").css("display","block");
        $(".chat__left").css("display","block");
    }
});