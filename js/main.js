 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: false,
				stagePadding: 0,
		    margin: 20,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 0,
	        	stagePadding: 10,
	          items: 2
	        },
	        1000:{
	        	margin: 0,
	        	stagePadding: 0,
	          items: 2
	        },
	        1200:{
	        	margin: 0,
	        	stagePadding: 0,
	          items: 3
	        }
		    }
			});
		}

		$('.nonloop-block-13').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
	    autoplay: true,
			stagePadding: 0,
	    margin: 20,
	    nav: true,
			navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
	    responsive:{
        600:{
        	margin: 0,
        	stagePadding: 0,
          items: 2
        },
        1000:{
        	margin: 0,
        	stagePadding: 0,
          items: 2
        },
        1200:{
        	margin: 0,
        	stagePadding: 0,
          items: 3
        }
	    }
		});

		if ( $('.slide-one-item').length > 0 ) {
			$('.slide-one-item').owlCarousel({
		    center: false,
		    items: 1,
		    loop: true,
				stagePadding: 0,
		    margin: 0,
		    autoplay: true,
		    pauseOnHover: false,
		    nav: true,
		    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
		  });
	  }
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		if ( $('#date-countdown').length > 0 ) {
			$('#date-countdown').countdown('2020/10/10', function(event) {
			  var $this = $(this).html(event.strftime(''
			    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
			    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
			    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
			    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
			    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
			});
		}
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();
	
//	construction form
	$(".plot-details-container .btn-next").on("click", function(){
		$('.form-header .plot-details').addClass('filled').removeClass('active').addClass('plot-click');
		$('.form-header .project-details').removeClass('filled').addClass('active');
		$(this).parent().parent().parent().addClass('d-none');
		$('.project-details-container').removeClass('d-none');
		
	});
	
	$(".project-details-container .btn-next").on("click", function(){
		$('.form-header .project-details').addClass('filled').removeClass('active').addClass('project-click');
		$('.form-header .attachments').removeClass('filled').addClass('active');
		$(this).parent().parent().parent().addClass('d-none');
		$('.attachments-container').removeClass('d-none');
		
	});

	$(".attachments-container .btn-next").on("click", function(){
		$('.form-header .attachments').addClass('filled').removeClass('active').addClass('attachment-click');
		$('.form-header .application-summary').removeClass('filled').addClass('active');
		$(this).parent().parent().parent().addClass('d-none');
		$('.summary-container').removeClass('d-none');
		
	});
	
	$(".summary-container .btn-next").on("click", function(){
		$('.form-header .application-summary').addClass('filled').removeClass('active').addClass('summary-click');
		$('.form-header .checkout').addClass('filled').addClass('active');
		$(this).parent().parent().parent().addClass('d-none');
		$('.payment-container').removeClass('d-none');
		

		
	});
	
	$('body').on("click", ".application-summary.filled", function(){
		showsummary();
	});
	
	$('body').on("click", ".checkout.filled", function(){
		showpay();
	});
	
	
	$(".project-details-container .btn-prev").on("click", function(){
		showplot();
		
	});
	
	$('body').on("click",".plot-click.filled", function(){
		showplot();
		
	});
	
	$(' body').on("click"," .project-click", function(){
		showproject();

	});

	$(' body').on("click"," .attachment-click", function(){
		showattachments();

	});

	function showattachments(){
		$('.form-header .attachments').addClass('filled').addClass('active').addClass('checkout-click').siblings().removeClass('active');
		$('.attachments-container').removeClass('d-none').siblings('fieldset').addClass('d-none');
	}
	
	function showsummary(){
		$('.form-header .application-summary').addClass('filled').addClass('active').addClass('checkout-click').siblings().removeClass('active');
		$('.plot-details-container').removeClass('d-none').siblings('fieldset').addClass('d-none');
	}
	
	function showpay(){
		$('.form-header .checkout').addClass('filled').addClass('active').addClass('checkout-click').siblings().removeClass('active');
		$('.payment-container').removeClass('d-none').siblings('fieldset').addClass('d-none');
	}
	function showplot(){
		$('.form-header .plot-details').addClass('filled').addClass('active').siblings().removeClass('active');
		$('.project-details-container').addClass('d-none');
		$('.plot-details-container').removeClass('d-none').siblings('fieldset ').addClass('d-none');
	}
	
	function showproject(){
		$('.form-header .project-details').addClass('filled').addClass('active').siblings().removeClass('active');
		$('.project-details-container').removeClass('d-none').siblings('fieldset').addClass('d-none');
	}
	
	function showsummary(){
		$('.form-header .application-summary').addClass('filled').addClass('active').siblings().removeClass('active');
		$('.summary-container').removeClass('d-none').siblings('fieldset').addClass('d-none');
	}
	
	
	
	
	$('.summary-container .btn-prev').on('click', function(){
		showproject();
		$('.application-summary').addClass('filled');
	});
	
	$('.mobile').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.mpesa-payment').removeClass('d-none').siblings().addClass('d-none');
	});
	$('.credit-card').on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.card-payment').removeClass('d-none').siblings().addClass('d-none');
	});
	
//	on file upload
	
	$('#ownership-docs').on('change', function(){
		
		if($(this).length==0){
			$(this).siblings().children('.selected-file').addClass('d-none');
		}
		else{
			$(this).siblings().children('.selected-file').removeClass('d-none');
		}
	});
	
	$('#site-plan').on('change', function(){
		
		if($(this).length==0){
			$(this).siblings().children('.selected-file').addClass('d-none');
		}
		else{
			$(this).siblings().children('.selected-file').removeClass('d-none');
		}
	});
	
	$('#survay-plan').on('change', function(){
		
		if($(this).length==0){
			$(this).siblings().children('.selected-file').addClass('d-none');
		}
		else{
			$(this).siblings().children('.selected-file').removeClass('d-none');
		}
	});
	
	$('#button-addon2').on('click', function(){
		$('.phoner').text($('#phone-wallet').val());
		setTimeout(function(){
			$('#mpesa-modal .confirmed-payment').removeClass('d-none').siblings().addClass('d-none');
			$('.waiting-payment p').text("Transaction was successful. As soon as your permit is ready, you will be contacted.");
		},8000);
		
		
	});
	
	
	$('#credit-btn').on('click', function(){
		
		setTimeout(function(){
			$('#credit-modal .confirmed-payment').removeClass('d-none').siblings().addClass('d-none');
			$('.waiting-payment p').text("Transaction was successful. As soon as your permit is ready, you will be contacted.");
		},8000);
		
		
	});
	
	$('#mpesa-modal button').on('click',function(){
		location.reload(true);
	});
	$('#credit-modal button').on('click',function(){
		location.reload(true);
	});

	$('input.personnel-attachment').on('change', function(){
	
		if($(this).value != ""){
			$(this).siblings('label').removeClass('border-danger').children('p').html('<i class="mdi mdi-check-all"></i> File selected').removeClass('text-danger').addClass('text-success');
			alert('chnaged');
		}
		else{
	
		}
	
	});
	
});

function eng_details(){
	$('.eng-details').removeClass('d-none');

}

function arch_details(){
	// If the length of the element's string is 0 then open modal
	var architecture_input = document.getElementById("architecture");

	if (architecture_input.value.length == 0)
	{ 
		$('#arch-modal').modal('show'); 

		return false; 
	}  else{

	$('.arch-details').removeClass('d-none');

	}	
	return true; 


}

function cont_details(){
	$('.contructor-details').removeClass('d-none');

}

$('body').on('click','.permit-form .form-header div.clickMe', function(){
	var theIndex=$(this).index();
	$('.permit-form fieldset').eq(theIndex).removeClass('d-none').siblings('fieldset').addClass('d-none');
	$(this).addClass('active').siblings().removeClass('active')

});
$('.permit-form fieldset .btn-next').on('click', function(){
	

	var theParent=$(this).parent().parent().parent();
	var theParentIndex=theParent.index();	
	var numOfChildren=$('.permit-form').children('fieldset').last().index();

	var theNavigation=$('.permit-form .form-header div').eq(theParentIndex);
	
	if(theParentIndex!==numOfChildren){
		$(this).parent().parent().parent().addClass('d-none');
		theParent.next().removeClass('d-none');	
		theNavigation.addClass('active').addClass('clickMe').siblings().removeClass('active');	
		theNavigation.prev().addClass('filled').addClass('clickMe')
	}


});

$('.permit-form fieldset .btn-prev').on('click', function(){
	

	var theParent=$(this).parent().parent().parent();
	var theParentIndex=theParent.index();	
	var numOfChildren=$('.permit-form').children('fieldset').last().index();
	var theNavigation=$('.permit-form .form-header div').eq(theParentIndex-2);
	
	if(theParentIndex!==1){
		$(this).parent().parent().parent().addClass('d-none');
		theParent.prev().removeClass('d-none');
		theNavigation.addClass('active').siblings().removeClass('active');
		
	}


});




    //================================================
  //map scripts
  //================================================
  $('.map-key-card').on('click', function(){
	$('.map-card').removeClass('d-none');
	});

	$('.close-map-key').on('click', function(){
  $('.map-card').addClass('d-none');
  });
  