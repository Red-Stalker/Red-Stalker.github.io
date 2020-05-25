$(document).ready(function(){
	  $('.slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 2,
	  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots:true
      }
    }]
	})
});

$(document).ready(function(){
  $(window).resize(function(){ 
    if ($(window).width()>540){
      $('iframe').attr( {width : '400', height : '280' } );
    }else{
       $('iframe').attr( {width : '250', height : '174' } );
    }   
  });
});





