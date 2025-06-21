
// header sticky
$(window).scroll(function(){
      if ($(this).scrollTop() > 274) {
          $('header').addClass('fixed');
      } else {
          $('header').removeClass('fixed');
      }
});

$(document).ready(function () {	
	$('.menu-icon').click(function () {
		$('body').toggleClass('showSidebar');
	});
	$('.btn-close-sidebar,.sidebar-menu ul li a').click(function (event) {
		$('body').removeClass('showSidebar');
	});
	if ($('.custom-tab').length > 0) {
		$('.custom-tab').click(function(){  
			$(".tab").removeClass('tab-active');
			$(".tab[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
			$(".custom-tab").removeClass('active');
			$(this).parent().find(".custom-tab").addClass('active');
		});
	}
	if ($('.home-travel-slider').length > 0) {
		$('.home-travel-slider').slick({
			speed: 1000,
			autoplay: true,
			slidesToShow: 5,
			draggable:false,
			focusOnSelect:false,
			slidesToScroll: 1,
			arrows: false,
			buttons: false,
			responsive: [
				{
				  breakpoint: 767,
				 settings: "unslick"
				},
			]
		});
	}
	if ($('.client-logo-list').length > 0) {
		$('.client-logo-list').slick({
			speed: 1000,
			autoplay: true,
			slidesToShow: 7,
			draggable:false,
			slidesToScroll: 1,
			variableWidth: true,
			arrows: false,
			buttons: false,
			responsive: [
				 {
					breakpoint: 9999,
					settings: "unslick"
				},
				{
				  breakpoint: 1600,
				  settings: {
					slidesToShow: 6,
				  }
				},
				{
				  breakpoint: 1400,
				  settings: {
					slidesToShow: 5,
				  }
				},
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				},
				{
				  breakpoint: 991,
				  settings: {
					slidesToShow: 3,
				  }
				},
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 575,
				  settings: {
					slidesToShow: 2,
				  }
				}
			]
		});
	}
	if ($('.instagram-slider').length > 0) {
		$('.instagram-slider').slick({
			speed: 1000,
			autoplay: true,
			slidesToShow: 7,
			slidesToScroll: 1,
			arrows: false,
			buttons: false,
			responsive: [
				{
				  breakpoint: 1600,
				  settings: {
					slidesToShow: 6,
				  }
				},
				{
				  breakpoint: 1400,
				  settings: {
					slidesToShow: 5,
				  }
				},
				{
				  breakpoint: 1200,
				  settings: {
					slidesToShow: 4,
				  }
				}
			]
		});
	}
	if($('.recipe-filter').length > 0) {
		$(".filter-title a").on("click", function(e){
			e.preventDefault();
			if($(this).parent().hasClass("active"))
			{
				$(this).parent().removeClass("active");
				$(this).parent().parent().find(".filter-list").slideUp();
			}
			else
			{
				$(this).parent().addClass("active");
				$(this).parent().parent().find(".filter-list").slideDown();
			}
		});
	}



	if ($('.banner-list').length > 0) {
		$(document).on('mouseenter', '.banner-list .expertise h1 a', function () {
			var subchildId = $(this).parent('.expertise h1').attr('data-subchild');
			$('.banner-list .expertise').removeClass('active');
			$(this).parent('.expertise').addClass('active');
			$('.banner-item-descriptions .item').removeClass('show');
			$('.banner-item-descriptions .item').removeClass('active');
			$('#' + subchildId).addClass('show')
		});
	}
	if ($('.we_serve_slick.marquee').length > 0) {
		$('.we_serve_slick.marquee').slick({
			speed: 5000,
			autoplay: true,
			autoplaySpeed: 0,
			centerMode: false,
			cssEase: 'linear',
			slidesToShow: 1,
			draggable:false,
			focusOnSelect:false,
			pauseOnFocus:false,
			pauseOnHover:false,
			slidesToScroll: 1,
			variableWidth: true,
			infinite: true,
			initialSlide: 1,
			arrows: false,
			buttons: false
		});
	}
	if ($('.we_serve_slick.marquee_rtl').length > 0) {
		$('.we_serve_slick.marquee_rtl').slick({
			speed: 5000,
			autoplay: true,
			autoplaySpeed: 0,
			centerMode: false,
			cssEase: 'linear',
			draggable:false,
			focusOnSelect:false,
			pauseOnFocus:false,
			pauseOnHover:false,
			slidesToShow: 1,
			slidesToScroll: 1,
			variableWidth: true,
			infinite: true,
			initialSlide: 1,
			arrows: false,
			buttons: false,
			rtl:true
		});
	}
	if ($('.process-images').length > 0) {
		$('.process-images').slick({
			speed: 5000,
			autoplay: true,
			autoplaySpeed: 0,
			centerMode: true,
			cssEase: 'linear',
			slidesToShow: 3,
			draggable:false,
			focusOnSelect:false,
			pauseOnFocus:false,
			pauseOnHover:false,
			slidesToScroll: 1,
			infinite: true,
			initialSlide: 1,
			arrows: false,
			buttons: false,
			responsive: [
				{
				  breakpoint: 767,
				  settings: {
					slidesToShow: 2,
				  }
				},
				{
				  breakpoint: 575,
				  settings: {
					slidesToShow: 1,
					speed: 3000,
				  }
				}
			]
		});
	}	
	
	
});
$(window).on("load resize", function (e) {
	if ($('.our-approach-list').length > 0) {
		$('.our-approach-list h3').matchHeight();
		$('.our-approach-list p').matchHeight();
	}
	if ($('.our-engagement-models-list').length > 0) {
		$('.our-engagement-models-list .box ul').matchHeight();
		$('.our-engagement-models-list .box .short-desc').matchHeight();
	}
	if ($('.about-values-list').length > 0) {
		$('.about-values-list .content p').matchHeight();
	}
});

/*  service page */
var sections = $('.item-section');
var nav = $('nav');
var nav_height = nav.outerHeight();
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();  
  sections.each(function() {
    var top = $(this).offset().top - nav_height - 150,
        bottom = top + $(this).outerHeight();    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});
$(document).ready(function(){  	
	jQuery('.scrollTo').click(function(e) {
        var jump = jQuery(this).attr('href');
        var new_position = jQuery(jump).offset();
        var scroll = -150;	
        jQuery('html, body').stop().animate({ scrollTop: new_position.top + scroll }, 2000, function(){
            var new_position = jQuery(jump).offset();
            jQuery('html, body').stop().animate({ scrollTop: new_position.top + scroll }, 2000);			
        });		
        e.preventDefault();
    });	
});	



