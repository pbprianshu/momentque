
$(window).on('load', function(){
  $('.parent').fadeOut(3000);
  
});

   
$('#mySlider').on('slide.bs.carousel', function (e) {

    
    var $e = $(e.relatedTarget);
    ;
    
    $('.carousel#mySlider.active').addClass('sliding');

   $e.removeClass('active-next');
    
    
    
    var $next = $e.next();
    var $nextnext = $e.next().next();
    
   if ($next.length==0){
      $next = $('.carousel-item#secondsleek').eq(0);
    }
    
    if ($nextnext.length==0){
      $nextnext = $('.carousel-item#secondsleek').eq(1);
    }
    $next.addClass('active-next');
    
   
    $('.carousel#mySlider.active').removeClass('active');

      
    
    setTimeout(function(){
        $('.carousel#mySlider.active, .carousel#mySlider.active-next').removeClass('sliding');
    },1000);
});

    $('.navbar-nav li').on("click", function() {
      $('.navbar-nav li').removeClass("active");
      $(this).addClass("active");
      
    });

    
    




