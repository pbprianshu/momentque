
$(window).on('load', function(){
  $('.parent').fadeOut(2000);


});




//$('#mySlider').on('slide.bs.carousel', function (e) {


    //var $e = $(e.relatedTarget);


    //$('.carousel#mySlider.active').addClass('sliding');

   //$e.removeClass('active-next');



    //var $next = $e.next();
    /*var $nextnext = $e.next().next();*/

  /* if ($next.length==0){
      $next = $('.carousel-item#secondsleek').eq(0);
    }

    if ($nextnext.length==0){
      $nextnext = $('.carousel-item#secondsleek').eq(1);
    }*/
    //$next.addClass('active-next');


    //$('.carousel#mySlider.active').removeClass('active');



    //setTimeout(function(){
      //  $('.carousel#mySlider.active, .carousel#mySlider.active-next').removeClass('sliding');
    //},1000);

//});
$(function() {
  $('.scrolls').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

AOS.init();
(function() {

	function init() {
		var speed = 250;
    var easing = mina.easeinout;

		[].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
			var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
				pathConfig = {
					from : path.attr( 'd' ),
					to : el.getAttribute( 'data-path-hover' )
				};

			el.addEventListener( 'mouseenter', function() {
				path.animate( { 'path' : pathConfig.to }, speed, easing );
			} );

			el.addEventListener( 'mouseleave', function() {
				path.animate( { 'path' : pathConfig.from }, speed, easing );
			} );
		} );
	}

	init();

})();
$('.slic').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [{
        breakpoint: 992,
        settings: {
            dots: true,
            arrows: false,
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});



    $('.navbar-nav li').on("click", function() {
      $('.navbar-nav li').removeClass("active");
      $(this).addClass("active");

    });



$(document).ready(function () {
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();
    });

    function hamburger_cross() {

      if (isClosed == true) {
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }

  $('[data-toggle="offcanvas"]').click(function () {
        $('#navbar-wrapper').toggleClass('toggled');
  });
});



jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "menu" link is shown
    var offset = 300;

    var navigationContainer = $('#cd-nav'),
        mainNavigation = navigationContainer.find('#cd-main-nav ul');

    //hide or show the "menu" link
    checkMenu();
    $(window).scroll(function(){
        checkMenu();
    });

    //open or close the menu clicking on the bottom "menu" link
    $('.cd-nav-trigger').on('click', function(){
        $(this).toggleClass('menu-is-open');
        //we need to remove the transitionEnd event handler (we add it when scolling up with the menu open)
        mainNavigation.off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend').toggleClass('is-visible');

    });

    function checkMenu() {
        if( $(window).scrollTop() > offset && !navigationContainer.hasClass('is-fixed')) {
            navigationContainer.addClass('is-fixed').find('.cd-nav-trigger').one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
                mainNavigation.addClass('has-transitions');
            });
        } else if ($(window).scrollTop() <= offset) {
            //check if the menu is open when scrolling up
            if( mainNavigation.hasClass('is-visible')  && !$('html').hasClass('no-csstransitions') ) {
                //close the menu with animation
                mainNavigation.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
                    //wait for the menu to be closed and do the rest
                    mainNavigation.removeClass('is-visible is-hidden has-transitions');
                    navigationContainer.removeClass('is-fixed');
                    $('.cd-nav-trigger').removeClass('menu-is-open');
                });
            //check if the menu is open when scrolling up - fallback if transitions are not supported
            } else if( mainNavigation.hasClass('is-visible')  && $('html').hasClass('no-csstransitions') ) {
                    mainNavigation.removeClass('is-visible has-transitions');
                    navigationContainer.removeClass('is-fixed');
                    $('.cd-nav-trigger').removeClass('menu-is-open');
            //scrolling up with menu closed
            } else {
                navigationContainer.removeClass('is-fixed');
                mainNavigation.removeClass('has-transitions');
            }
        }
    }
});
