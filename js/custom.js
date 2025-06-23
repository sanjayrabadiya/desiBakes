
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
	if ($('.cookbook-slider').length > 0) {
		$('.cookbook-slider').slick({
			speed: 1000,
			autoplay: true,
			autoplaySpeed: 5000,
			centerMode: true,
			cssEase: 'linear',
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: true,
			arrows: false,
			buttons: false,
			centerPadding:'0',
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
	if ($('.testimonial-slider').length > 0) {
		$('.testimonial-slider').slick({			
			centerMode: true,
			cssEase: 'linear',
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			arrows: true,
            prevArrow:"<button type='button' class='slick-prev'><img src='../images/arrow-left.png'></button>",
            nextArrow:"<button type='button' class='slick-next'><img src='../images/arrow-right.png'></button>",
			buttons: false,
			centerPadding:'0',
			
		});
	}	
});