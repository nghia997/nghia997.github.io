$(document).ready(function () {
        var leaf = 5;
        for( var i = 0; i <= 45; i++) {
            // Random and add image
            var randomImg = 1 + Math.floor(Math.random() * leaf);
            var imgLeaf = "leaves" + randomImg;
            var myImage = $('<img/>');
            myImage.attr('class', "leaves");
            myImage.attr('src',"images/" + imgLeaf + ".png");
            $(".container").append(myImage);
            animm($("img").eq(i));
        }
});
// @class, animatetion this class
function animm(myImage){
    TweenMax.set(myImage,{attr:{class:'leaves'},x:Random(-1000,1000),y:Random(-180,-150),z:Random(-100,100)});
    TweenMax.to(myImage,Random(6,15),{y:1000+100,ease:Linear.easeNone,repeat:-1,delay:-15});
    TweenMax.to(myImage,Random(4,8),{x:'+=50',rotationZ:Random(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
    TweenMax.to(myImage,Random(2,8),{rotationX:Random(0,360),rotationY:Random(0,360),repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-1});
};
//@value start, @value end, Random(start,end)
function Random(start, end) {
    return Math.random() * (end - start) + start;
};