var rotation = [1080,-720,-360,360,720,1080]; // value roatation
var id = 1;
// Randomly selected in 5 pictures
function createLeaves(id) {
  idleaves = RandomNumber(1,5);
  var img =  $('<img />', {
            id: 'leaves-'+ id +'-js',
            // class: 'leaves--hidden-js',
            src: 'images/leaves'+ idleaves +'.png',
            alt: 'leaves1'
            }).appendTo('.container');
    return img;
}
function RandomNumber(min , max) {
    return Math.floor(Math.random() * (max-min) + min );
} 
setInterval(function(){
    var leaves = createLeaves(id++);
    var time = RandomNumber(7,18);
    var maxWidth = $(document).width();
    var x_start = RandomNumber(0,maxWidth);
    var x_end = RandomNumber(0,maxWidth);
    var y_end = 700;
   TweenMax.fromTo($(leaves), time, {
          x: x_start

    },
    {
       x: x_end,
       y: y_end,
       rotationX:rotation[RandomNumber(1,10)],
       rotationY:rotation[RandomNumber(0,5)],
       onComplete: function () { // While complete animate
        removeLeaves(leaves);
       }
    });
},700);
