(function ($) {
"use strict";

/* slicknav_menu */
$(document).ready(function(){
	
	$('#nav-1').slicknav();
	$('#nav-2').slicknav();
	$('#nav-3').slicknav();
	$('#nav-4').slicknav();
	$('#nav-5').slicknav();
	$('#nav-6').slicknav();
	$('#nav-7').slicknav();
	$('#nav-8').slicknav();
	$('#nav-9').slicknav();
	$('#nav-10').slicknav();
	$('#nav-11').slicknav();
	$('#nav-12').slicknav();
	$('#nav-13').slicknav();
	$('#nav-14').slicknav();
	$('#nav-15').slicknav();
	$('#nav-16').slicknav();
	$('#nav-17').slicknav();
	$('#nav-18').slicknav();
	$('#nav-19').slicknav();
	$('#nav-20').slicknav();
	$('#nav-21').slicknav();
	$('#nav-22').slicknav();
	$('#nav-demo').slicknav();
	$(".slicknav_menu").appendTo(".bg-2");
	$(".slicknav_menu").appendTo(".mobile-menu");
	$('#nav').slicknav();
	$(".slicknav_menu").appendTo(".menu-pack");
	
$('.toggle-menu').click(function(){
	$('.exo-menu').toggleClass('display');
	
 });	

 
/* SIDE BAR NAV */	
$('.burger, .overlay').click(function(){
  $('.burger').toggleClass('clicked');
  $('.overlay').toggleClass('show');
  $('nav').toggleClass('show');
  $('body').toggleClass('overflow');
});	


/* Preloader */ 
    $(window).on('load', function () {
        var preLoder = $(".hola");
        preLoder.fadeOut(1000);
    });


/* Type Text */
    if ($("#typewriting").length) {
        var app = document.getElementById("typewriting");
        var typewriter = new Typewriter(app, {
            loop: true
        });
        typewriter.typeString('Way to achieve success').pauseFor(2000).deleteAll()
            .typeString('Style to achieve success').pauseFor(2000).deleteAll()
            .typeString('Method to achieve success').start();
    }

    if ($("#personal").length) {
        var app = document.getElementById("personal");
        var personal = new Typewriter(app, {
            loop: true
        });
        personal.typeString('软件开发工程师').pauseFor(2000).deleteAll()
            .typeString('阿里云官方认证博主').pauseFor(2000).deleteAll()
            .typeString('后端开发者').pauseFor(2000).deleteAll()
            .typeString('全栈开发者').start();
    }

	
/*START HOME WATER JS*/
	if (typeof $.fn.ripples == 'function') {
		try {
		$('.ripple').ripples({
			resolution: 500,
			perturbance: 0.01
		});
	} catch (e) {
		$('.error').show().text(e);
	}
}	


/* PARTICLES ONE */	
if ($("#particles-js").length) {
    if ($(window).width() > 992) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 95,
                    "density": {"enable": true, "value_area": 946.9771699587272}
                },
                "color": {"value": "#ffffff"},
                "shape": {
                    "type": "circle",
                    "stroke": {"width": 0, "color": "#000000"},
                    "polygon": {"nb_sides": 5},
                    "image": {"src": "img/github.svg", "width": 100, "height": 100}
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
                },
                "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {"enable": false, "mode": "repulse"},
                    "onclick": {"enable": true, "mode": "push"},
                    "resize": true
                },
                "modes": {
                    "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                    "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                    "repulse": {"distance": 200, "duration": 0.4},
                    "push": {"particles_nb": 4},
                    "remove": {"particles_nb": 2}
                }
            },
            "retina_detect": true
        });
    }
}

/* PARTICLES TWO */
if ($("#particles-js-two").length) {
    if ($(window).width() > 992) {
        particlesJS("particles-js-two", {
           "particles": {
			"number": {
            "value": 60,
            "density": {"enable": true, "value_area": 1042.21783956259}
        },
        "color": {"value": "#e6e6e6"},
        "shape": {
            "type": "circle",
            "stroke": {"width": 0, "color": "#000000"},
            "polygon": {"nb_sides": 5},
            "image": {"src": "img/github.svg", "width": 100, "height": 100}
        },
        "opacity": {
            "value": 0.4734885849793636,
            "random": false,
            "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
        },
        "size": {
            "value": 12.03412060865523,
            "random": true,
            "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}
        },
        "line_linked": {"enable": false, "distance": 64.13648243462092, "color": "#ffffff", "opacity": 0.4, "width": 1},
        "move": {
            "enable": true,
            "speed":3,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": false, "mode": "repulse"},
            "onclick": {"enable": false, "mode": "push"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
            "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
            "repulse": {"distance": 200, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
        }
    },
    "retina_detect": false
      });
    }
}


/* slider-active */
$('.slider-active-owl').owlCarousel({
    loop:true,
    nav:true,
	autoplay:true,
	dots:false,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


/* slider-active */
$('.tittle-warper-slider').owlCarousel({
    loop:true,
    nav:true,
	autoplay:true,
	dots:true,
	navText:false,
	autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
	
	
/* TILT JS */	
	const tilt = $('.js-tilt').tilt()
	tilt.on('change', function(e, transforms){
		
	});
	$('.portfolio-tilt').tilt({
        maxTilt: 3,
        glare: true,
        maxGlare: .6,
        reverse: true
    });

	
/*  Parallax   */
    $(".ami-parallax").parallax('50%', .4);

	
/* MEGA MENU NAV */
$(function() {   
	$('#nav-toggle').on('click', function() {
		$('body').toggleClass('nav-open');
	});
	
});

	
/* SCROLL UP */
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="fa fa-angle-up"></i>',
});


/* COUNTER UP */
$('.counter').counterUp({
    delay: 10,
    time: 1000
}); 


/* ACTIVE POPUP IMAGE */  
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect  : "elastic",
            closeEffect : "elastic",
            wrapCSS     : "project-fancybox-title-style"
        });
    }
  

/* POPUP VIDEO */  
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {  
                    title : { type : 'inside' },
                    media : {}
                },

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });    
    }

	
/* Progress Bar */ 
$(document).ready(function(){
	$('.bar1').barfiller({duration: 3000 });
	$('.bar2').barfiller({duration: 3000 });
	$('.bar3').barfiller({duration: 3000 });
	$('.bar4').barfiller({duration: 3000 });
});


/* TEXT ROTATING JS */
var words = document.getElementsByClassName('word');
var wordArray = [];
var currentWord = 0;
if (words.length > 0){

words[currentWord].style.opacity = 1;
for (var i = 0; i < words.length; i++) {
  splitLetters(words[i]);
}

function changeWord() {
  var cw = wordArray[currentWord];
  var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
  for (var i = 0; i < cw.length; i++) {
    animateLetterOut(cw, i);
  }
  
  for (var i = 0; i < nw.length; i++) {
    nw[i].className = 'letter behind';
    nw[0].parentElement.style.opacity = 1;
    animateLetterIn(nw, i);
  }
  
  currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
}

function animateLetterOut(cw, i) {
  setTimeout(function() {
		cw[i].className = 'letter out';
  }, i*80);
}

function animateLetterIn(nw, i) {
  setTimeout(function() {
		nw[i].className = 'letter in';
  }, 340+(i*80));
}

function splitLetters(word) {
  var content = word.innerHTML;
  word.innerHTML = '';
  var letters = [];
  for (var i = 0; i < content.length; i++) {
    var letter = document.createElement('span');
    letter.className = 'letter';
    letter.innerHTML = content.charAt(i);
    word.appendChild(letter);
    letters.push(letter);
  }
  
  wordArray.push(letters);
}

changeWord();
setInterval(changeWord, 4000);

}


/* SCROLL REVEAL */
  window.sr = ScrollReveal();
  sr.reveal('.reveal-top, .reveal-bottom, .reveal-left, .reveal-right', {
    delay: 700,
    easing: 'ease',
    duration: 800,
    scale: 0,
  });
  sr.reveal('.reveal-top', {
    origin: 'top',
  },250);
  sr.reveal('.reveal-bottom', {
    origin: 'bottom',
  },250);  
  sr.reveal('.reveal-left', {
    origin: 'left',
  },250);
  sr.reveal('.reveal-right', {
    origin: 'right',
  },250);
  
  
/* PORTFOLIO-AREA */
    $('.portfolio-area').on( 'click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });

     var $grid = $('.grid.filter').isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: '.grid-item'
      }
    });
		
//for filter menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});


/*  BLOG DETAILS SLIDER  */  
    if($(".blog-details-slider".length)) {
        $(".blog-details-slider").owlCarousel({
            mouseDrag: true,
            smartSpeed: 300,
            margin: 30,
			items: 2,
            loop:true,
			dots:true,
            autoplay:true,
            responsive: {
                0 : {
                    items: 1,
                    margin: 0
                },

                992 : {
                    items: 2,
                }
            }
        });
    }


/* BRAND-ACTIVE */
 $('.brand-active').slick({
   slidesToShow: 5,
   slidesToScroll: 1,
   autoplay:true,
   autoplaySpeed: 2000,
	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
	]
 });
 
 
 /* BRAND-ACTIVE */
 $('.brand-active-three').slick({
   slidesToShow: 5,
   slidesToScroll: 1,
   dots: true,
   centerMode: true,
   autoplay:false,
   autoplaySpeed: 2000,
	responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
	]
 });
 
 
/* SLICK SLIDER */ 
  $(".slick-slider-grids-1").slick({
        dots: true,
        vertical: true,
		nav: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 2,
    });
	
	$(".slick-slider-grids-2").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 3
      });
	$(".slick-slider-grids-3").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
	  
	$(".slick-slider-grids-4").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
  
});


/* COUNTDOWN */
$('.countdown').countdown({
    date: '10/10/2020',
    render: function(date) {
      return $(this.el).html("<span class='days'>" + date.days + "<span>days</span></span><span class='hour'>" + (this.leadingZeros(date.hours)) + "<span>hours</span></span><span class='min'>" + (this.leadingZeros(date.min)) + "<span>min</span></span><span class='sec'>" + (this.leadingZeros(date.sec)) + "<span>sec</span></span>");
    }            
});


/* header_sticky */
 $(window).on('scroll',function() {
   var scroll = $(window).scrollTop();
   if (scroll < 150) {
    $("#header-sticky").removeClass("scroll-header");
   }else{
    $("#header-sticky").addClass("scroll-header");
   }
 });
 
 
/* MENU NAVBAR */   
window.addEventListener('load', function(){
	// #nav-11
	var movingBar = new MovingBar('#nav-11');
	// #nav-12
	var delLineBar = new DelLineBar('#nav-12');
	// btn-13 : Hover Moving Dot
	var movingDot = new MovingDot('#nav-13');
});


// btn-11 : Moving Bar
function MovingBar( nav ){ 
	
	var $navMovingBar = document.querySelector( nav );
	if ($navMovingBar == null) {
		return;
	}
	var	$btnMenu11 = $navMovingBar.querySelectorAll('li'),
		bar = document.createElement('span'),
		width, left;

	bar.classList.add('effect');
	$navMovingBar.appendChild( bar );

	for( var i=0, max=$btnMenu11.length; i<max; i++ ){
		$btnMenu11[i].addEventListener('mouseenter', function(){
			width = this.offsetWidth,
			left = this.offsetLeft;
			barMovingCurrentMenu( width, left );
		});
	}

	function barMovingCurrentMenu( width, left ) {
		bar.style.width = width + 'px';
		bar.style.left = left + 'px';
	}
}

// btn-12 : Del Line Bar
function DelLineBar( nav ){
	var $navDelLineBar = document.querySelector( nav );
	if ($navDelLineBar == null) {
		return;
	}	
     var  $btnMenu12 = $navDelLineBar.querySelectorAll('a');


   for( var i=0, max=$btnMenu12.length; i<max; i++ ){
		$btnMenu12[i].addEventListener('mouseenter', function(){
			for( var j=0; j<$btnMenu12.length; j++ ){
				$btnMenu12[j].classList.remove('off');
				if( $btnMenu12[j] == this ) continue;
				$btnMenu12[j].classList.add('off');
			}
		});
	}

	$navDelLineBar.addEventListener('mouseleave', function(){
		for( var i=0, max=$btnMenu12.length; i<max; i++ ){
			if( !$btnMenu12[i].classList.contains('off') ) continue;
			$btnMenu12[i].classList.remove('off');
		}
	});
}

// btn-13 : Moving Dot
function MovingDot( nav ){
	var $navMovingDotBar = document.querySelector( nav );
	if ($navMovingDotBar == null) {
		return;
	}
	 var	$btnMenu13 = $navMovingDotBar.querySelectorAll('li'),
		 bar2 = document.createElement('span'),
		 width2, left2;

	bar2.classList.add('dot');
	$navMovingDotBar.appendChild( bar2 );

	for( var i=0, max=$btnMenu13.length; i<max; i++ ){
		$btnMenu13[i].addEventListener('mouseenter', function(){
			width2 = this.offsetWidth,
			left2 = this.offsetLeft;
			barMovingCurrentMenu2( width2, left2 );
		});
	}

	function barMovingCurrentMenu2( width, left ) {
		bar2.style.left = left + ( width / 2 ) + 'px';
		bar2.style.opacity = 1;
	}
}


 /*  TAB   */ 
$(document).ready(function() { 
	(function ($) { 
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		
		$('.tab ul.tabs li a').click(function (g) { 
			var tab = $(this).closest('.tab'), 
				index = $(this).closest('li').index();
			
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			
			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
			
			g.preventDefault();
		} );
	})(jQuery);

});

  
/*  ACCORDION   */
$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
});
  

/* NEVBAR SCROLLING JS */
  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
  
/* TESTIMONIALS SLIDER 3 */
    if ($(".testimonials-slider-2").length) {
        $(".testimonials-slider-2").owlCarousel({
			autoplay:true,
            smartSpeed: 600,
            margin: 0,
            loop:true,
			dots:false,
			nav:true,
			navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
			responsive:{
				0:{
					items:1
				},
				767:{
					items:2
				},
				1000:{
					items:2
				}
			}
        });
    }

/* TESTIMONIALS SLIDER 3 */
    if ($(".testimonials-slider-3").length) {
        $(".testimonials-slider-3").owlCarousel({
			autoplay:false,
            smartSpeed: 600,
            margin: 0,
			items: 3,
            loop:true,
			dots:true,
			nav:false,
			responsive:{
				0:{
					items:1
				},
				767:{
					items:2
				},
				1000:{
					items:3
				}
			}
        });
    }
	
	
/* TESTIMONIALS FIVE */
	var feedbackSlider = jQuery('.feedback-slider');
		feedbackSlider.owlCarousel({
		items: 1,
		nav: true,
		smartSpeed: 600,
		dots: true,
		autoplay: false,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
		responsive:{

			// breakpoint from 767 up
			767:{
				nav: true,
				dots: false
			}
		}
	});
	feedbackSlider.on("translate.owl.carousel", function(){
		$(".feedback-slider-item h3").removeClass("animated fadeIn").css("opacity", "0");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").removeClass("animated zoomIn").css("opacity", "0");
	});

	feedbackSlider.on("translated.owl.carousel", function(){
		$(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating").addClass("animated zoomIn").css("opacity", "1");
	});
	feedbackSlider.on('changed.owl.carousel', function(property) {
		var current = property.item.index;
		var prevThumb = $(property.target).find(".owl-item").eq(current).prev().find("img").attr('src');
		var nextThumb = $(property.target).find(".owl-item").eq(current).next().find("img").attr('src');
		var prevRating = $(property.target).find(".owl-item").eq(current).prev().find('span').attr('data-rating');
		var nextRating = $(property.target).find(".owl-item").eq(current).next().find('span').attr('data-rating');
		$('.thumb-prev').find('img').attr('src', prevThumb);
		$('.thumb-next').find('img').attr('src', nextThumb);
		$('.thumb-prev').find('span').next().html(prevRating + '<i class="fa fa-star"></i>');
		$('.thumb-next').find('span').next().html(nextRating + '<i class="fa fa-star"></i>');
	});
	$('.thumb-next').on('click', function() {
		feedbackSlider.trigger('next.owl.carousel', [300]);
		return false;
	});
	$('.thumb-prev').on('click', function() {
		feedbackSlider.trigger('prev.owl.carousel', [300]);
		return false;
	});

	
/* TESTIMONIALS SLIDER 3 */
    if ($(".testimonials-slider-7").length) {
        $(".testimonials-slider-7").owlCarousel({
			autoplay:true,
            smartSpeed: 600,
            margin: 0,
			items: 1,
            loop:true,
			dots:false,
			nav:true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				1000:{
					items:1
				}
			}
        });
    }
	
	
/* SWIPER SLIDER */
	var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });
	
/* SWIPER SLIDER 2 */	
	var galleryTop = new Swiper(".gallery-top", {
		nextButton: ".swiper-button-next",
		prevButton: ".swiper-button-prev",
		spaceBetween: 10,
		loop:true,
		autoplay:true,
		loopedSlides: 50,
	});	
	var galleryThumbs = new Swiper(".gallery-thumbs", {
		spaceBetween: 10,
		slidesPerView: "auto",
		touchRatio: 0.2,
		loop:true,
		autoplay:true,
		slideToClickedSlide: true,
		loopedSlides: 50,
		centeredSlides:true,
    thumbs: {
      swiper: galleryTop,
    },     
});

/* SWIPER SLIDER 3 */
	var SliderVerticalPagination = new Swiper('.slider-vertical', {
        slidesPerView: 1,
        spaceBetween: 0,
        direction: 'vertical',
        pagination: {
            el: '.swiper-vertical-pagination',
            clickable: true
        },
        mousewheel: {
            invert: false,
            mousewheel: true,
            sensitivity: 1,
            releaseOnEdges: true
        },
		autoHeight: true,
        keyboard: {
            enabled: true,
            onlyInViewport: true
        },
        on: {
            resize: function () {
                SliderVerticalPagination.update();
            }
        }
    });
	
/* SWIPER SLIDER 4 */	
	var swiper = new Swiper('.swiper-coverflow', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 3,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
	
/* FINANCE BANNER SLIDER  */	
	 $('.banner-text').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: false,
	    smartSpeed: 1000,
	  });
 
	
		
/* Client Slider */
    if ($(".testimonials-slider-finance").length) {
        $(".testimonials-slider-finance").owlCarousel({
			autoplay:false,
            smartSpeed: 600,
            margin: 0,
			items: 1,
            loop:true,
			dots:true,
			nav:false,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				1000:{
					items:1
				}
			}
        });
    }
	
/* slider-active */
$('.gym-slider-owl').owlCarousel({
    autoplay:true,
	smartSpeed: 600,
	margin: 0,
	loop:true,
	dots:true,
	nav:false,
	navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
	
	/* TESTIMONIALS SLIDER 3 */
    if ($(".gym-testimonials").length) {
        $(".gym-testimonials").owlCarousel({
			autoplay:false,
			smartSpeed: 600,
			margin: 0,
			loop:true,
			dots:true,
			nav:false,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				1000:{
					items:2
				}
			}
        });
    }
	
/* TESTIMONIALS SLIDER 3 */
    if ($(".seo-testimonials").length) {
        $(".seo-testimonials").owlCarousel({
			autoplay:false,
			smartSpeed: 600,
			margin: 0,
			loop:true,
			dots:true,
			nav:false,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				767:{
					items:2
				},
				1000:{
					items:3
				}
			}
        });
    }
	
/* brand-active */
$('.brand-active-saas').owlCarousel({
    loop:true,
    nav:false,
	dots:false,
	autoplay:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        768:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
})
	
	// review-active
$('.case-active').owlCarousel({
	loop:true,
	margin:30,
	items:1,
	autoplay:true,
	navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
	nav:false,
	dots:true,
	autoplayHoverPause: true,
	autoplaySpeed: 800,
	responsive:{
      0:{
          items:1,
          nav:false
      },
      767:{
          items:2,
      },
      992:{
          items:3
      },
      1200:{
          items:3
      },
      1500:{
          items:3
      }
  }
});
	
	
	/* STARTUP IMG SLIDER 3 */
    if ($(".img-absolute").length) {
        $(".img-absolute").owlCarousel({
			autoplay:true,
			smartSpeed: 600,
			margin: 0,
			loop:true,
			dots:false,
			nav:true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				1000:{
					items:1
				}
			}
        });
    }
	
$('.photograph-nav-toggle').click(function(){
	$('.mobile-menu-new').toggleClass('display');
	$('.photograph-nav-toggle').toggleClass('display');
	$('.photograph-main').toggleClass('display');
 });	

	if ($('.owl-screenshot').length) {
        $('.owl-screenshot').owlCarousel({
            loop: true,
            margin: 30,
            items: 4,
            nav: false,
            // autoplay: 2500,
            smartSpeed: 1500,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 80
                },
                576: {
                    items: 2
                },
                767: {
                    items: 3
                },
                1199: {
                    items: 4
                }
            }
        })
    }
	
		/*----------------------------------------------------*/
	/*  Testimonials Slider
    /*----------------------------------------------------*/
	if ($('.testimonials-grids-warp').length) {
		$('.testimonials-grids-warp').owlCarousel({
			loop: false,
			margin: 30,
			items: 1,
			autoplay: false,
			smartSpeed: 2500,
			dots: true
		});
	}
	
	/* STARTUP IMG SLIDER 3 */
    if ($(".review-part").length) {
        $(".review-part").owlCarousel({
			autoplay:true,
			smartSpeed: 600,
			margin: 0,
			loop:true,
			dots:false,
			nav:true,
			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
			responsive:{
				0:{
					items:1
				},
				767:{
					items:1
				},
				1000:{
					items:1
				}
			}
        });
    }
	
	
	


	
	
	
	
	
	
	

	

})(jQuery);