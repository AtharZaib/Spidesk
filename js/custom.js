

  $.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});
  

 wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();



 var owl = $('#our_product .owl-carousel');
  owl.owlCarousel({
    loop:true,
    nav:true,
    slideSpeed : 2000,
    dots: false,
    dotsSpeed: 2000,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed:  800,
    margin:30,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },            
      960:{
        items:3
      },
      1200:{
        items:3
      }
    }
  });

$('#carousel').carousel();

$(document).ready(function() {

    /***Fancy Box POPUP***/

    $('.video_vimeo').fancybox();

    $('.get_quote_form').fancybox();

});





 $(function() {
         
           
         
           
         
            //  Variable number of visible items with variable sizes
            $('#foo3').carouFredSel({
                responsive: true,
                width: '100%',
                height: '100%',
                mousewheel: true,
                swipe: {
                    onMouse: true,
                    onTouch: true
                },
         
         
                auto: false,
                scroll: 1,
                items: {
         width: 434,
        height: '100%',
            visible: {
                        min: 1,
                        max: 3,
         
                    }
                }
            });
            
           
         
          
         
           
         
         });






$('.slider-area .owl-carousel').owlCarousel({
    loop:true,
   
    nav:false,
    slideSpeed : 2000,
    dots: false,
    dotsSpeed: 2000,
     lazyLoad: true,
         autoplay: true,
         autoplaySpeed:  800,
         items:3,
         margin:10,
    responsive:{
       0:{
                 items:1
             },
             600:{
                 items:2
             },            
             960:{
                 items:2
             },
             1200:{
                 items:3
             }
    }
})





// popup-start



        $('.order_button2').click( function(){
            $('.popup-form').show(300).addClass('visibleit');
            $('.popup-form2').show(300).addClass('visibleit');
            $('.cus-overlay').fadeIn(300);
            var a = "Start Your Project";
            $('.tophead h2').css('margin','15px 0 15px 0');
            $('.tophead h2').html(a);
            $('.tophead h3').css('display','none');
        });
        $('section.packages a, section.branding_solution .order_button, section.cta ul li a, .branding-mob-btn .order_button').click( function(){
            $('.popup-form').show(300).addClass('visibleit');
            $('.popup-form2').show(300).addClass('visibleit');
            $('.cus-overlay').fadeIn(300);
            var a = "Activate Your Coupon";
            $('.tophead h2').html(a);
            $('.tophead h3').css('display','block');
        });
$(document).ready(function() {

    $('.popup_open').click(function() {
        $('.popup-form').show(300).addClass('visibleit');
        $('.cus-overlay').fadeIn(300);
    })
    $('a.close').click(function() {
        $('.cus-overlay').trigger('click');
    });
    $('a.close').click(function() {
        $('.cus-overlay').trigger('click');
    });
    $('.cus-overlay').click(function() {
        $(this).fadeOut(300);
        $('.popup-form').removeClass('visibleit');
        $('.popup-form').fadeOut();
        $('#popupformLead2').fadeOut();
        $('#ouibounce-modal').fadeOut(200);
        $('.floating-form-wrap').animate({'margin-right': '-584px'})
    })
});        






 $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });



var owl = $('.pack_slider');
    owl.owlCarousel({
        loop:false,
        nav:true,
        slideSpeed : 2000,
        dots: false,
        dotsSpeed: 2000,
        lazyLoad: true,
        autoplay: false,
        autoplaySpeed:  800,
        margin:30,
        items:3,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsive:{
          0:{
              items:1,
          },
          600:{
              items:2,
          },
          900:{
              items:3
          }
      }

    });

    

    // var block = false;
    //   $(".pack_slider div").mouseenter(function(){
    //    if(!block) {
    //     block = true;
    //     owl.trigger('stop.owl.autoplay')
    //     block = false;
    //     }
    //   });
    //   $(".pack_slider div").mouseleave(function(){
    //    if(!block) {
    //     block = true;
    //     owl.trigger('play.owl.autoplay',[1000])
    //     block = false;
    //    }
    //   });


$('#layer-one').mouseParallax({ moveFactor: 5 });
    $('#layer-two').mouseParallax({ moveFactor: 10 });
    $('#layer-three').mouseParallax({ moveFactor: 15 });



  var owl = $('#projec-single-slider .owl-carousel');
    owl.owlCarousel({
    loop:true,
    nav:false,
    slideSpeed : 7000,
    dots: true,
    dotsSpeed: 2000,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplaySpeed: 800,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    responsive:{
    0:{
    items:1
    },
    600:{
    items:1
    },
    960:{
    items:1
    },
    1200:{
    items:1
    }
    }
});

     
// $('#navlist li').click(function(e) {
//     $( this ).parent().find( 'li.active ' ).removeClass( 'active' );
//             $( this ).addClass( 'active' );
// });


    var url = window.location.pathname; //sets the variable "url" to the pathname of the current window
    var activePage = url.substring(url.lastIndexOf('/') + 1); //sets the variable "activePage" as the substring after the last "/" in the "url" variable
        $('#navlist li a').each(function () { //looks in each link item within the primary-nav list
            var linkPage = this.href.substring(this.href.lastIndexOf('/') + 1); //sets the variable "linkPage" as the substring of the url path in each &lt;a&gt;
 
            if (activePage == linkPage) { //compares the path of the current window to the path of the linked page in the nav item
                $(this).parent().addClass('active'); //if the above is true, add the "active" class to the parent of the &lt;a&gt; which is the &lt;li&gt; in the nav list
            }
        })

$(".navbar-toggle").click(function(){
    $("#navlist").slideToggle("slow");
  });

// $( ".navbar-toggle" ).click(function() {     
//     if($('.navbar-collapse:hidden').length)
//         $('.navbar-collapse').show("slide", { direction: "up" }, 1000);
//     else
//         $('.navbar-collapse').hide("slide", { direction: "up" }, 1000);        
// });