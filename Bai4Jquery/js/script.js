var mose =0 ; // Location

$(document).mousemove(function(event){
  if(mose != 0) {
      if(mose < event.pageX){ // The layer moves to the right
          hoverLayer(3,1); 
          hoverLayer(2,0.5);
          hoverLayer(4,0.75);
      }
      else{ // The layer moves to the left
        hoverLayer(3,-1);
        hoverLayer(2,-0.5);
        hoverLayer(4,-0.75);
      }
      mose = event.pageX; //advertisement
  }
  else{
      mose = event.pageX;
  }
});

 /*hover move*/
function hoverLayer(idLayer,speed){
    $("#layer-"+idLayer+"-js").css({left: '+=' + speed});
}