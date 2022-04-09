$(function(){
    //  одинаковая высота ==========================================
    // function blocksMatchHeight(arr) {
    // for (var i = 0; i< arr.length; i++) {
    //   $(arr[i]).matchHeight();
    // }
    // }
    // var alignElemets = function(){
    //   blocksMatchHeight([
    //     '.owl-item'
    //   ]); 
    // }

    // $(function() {
    //   $('.rev-bl .owl-item').matchHeight({
    //     property: 'height',
    //   });
    // });
    //  одинаковая высота ==========================================
    // ========================== galery =============================
    $('.small-gl .small-gl__it img').click(function(event) {
      var gimg = $(this).attr('src');
      $('#largeImg').attr('src', gimg);
      $('.large-pic a').attr('href', gimg);
    });

    $('.site-vnut .slid-bl button').addClass('btn-fx');
    $('.site-vnut .btn-fx').detach().appendTo('.site-vnut .header-mid .centered');

    $('.burger-menu').on("click", function(event) {
        $(this).toggleClass('close');
        $('.header__nav').toggleClass("opened");
        $('.burger-menu').toggleClass("opened");
        $('.menu-close').toggleClass("opened");
        $('.dark-fn').fadeIn();
        $html.toggleClass('oveflowHidden');
    });

    $('.menu-close').on("click", function(event) {
        $('.header__nav').removeClass("opened");
        $(this).toggleClass("opened");
        $('.burger-menu').removeClass("close");
        $('.dark-fn').fadeOut();
        $html.removeClass('oveflowHidden');
    });

    $('.dark-fn').on('click', function(){
      $('.header__nav').removeClass("opened");
      $('.menu-close').removeClass("opened");
        $('.burger-menu').removeClass("close");
        $(this).fadeOut();
        $html.removeClass('oveflowHidden');
    })
    
    $('ul').on('click', 'li > span', function() {
      $(this).toggleClass('active');
      $(this).parent('li').find('> ul').stop().slideToggle(500);
      $(this).parent('li').siblings().find('> ul').stop().slideUp('.active', 2000);
      $(this).parent('li').toggleClass('active');
      $(this).parent('li').siblings().removeClass('active');
  });
    
    // =============== slider===============================================
  
  $('.owl-carousel .owl-nav').addClass('centered');

  $('.rev-bl').addClass('owl-carousel').owlCarousel({
    items : 1,
    dots : false,
    autoHeight: true,
    nav : true,
    navText: ["<img src='img/prev.svg'>","<img src='img/next.svg'>"],
    responsive : {
        // breakpoint from 0 up
        0 : {
          items: 1,
          margin: 0, 
          // autoHeight: true,
        },
        // breakpoint from 768 up
        600 : {
            // autoHeight: false,
            items: 2,
            margin: 20 
        }
    }
  });
  $('.we-bl').addClass('owl-carousel').owlCarousel({
    items : 3,
    loop: true,
    dots : true,
    // autoHeight: true,
    nav : true,
    navText: ["<img src='img/owl-prevD.svg'>","<img src='img/owl-nextD.svg'>"],
    responsive : {
        // breakpoint from 0 up
        0 : {
          items: 1,
          margin: 0 
        },
        // breakpoint from 768 up
        770 : {
            items: 2,
            margin: 30 
        },
        1219 : {
           items: 3,
            margin: 40 
        }
    }
  });
  $('.ourw-bl').addClass('owl-carousel').owlCarousel({
    items : 4,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots : false,
    // autoHeight: true,
    nav : false,
    // navText: ["<img src='img/owl-prevD.svg'>","<img src='img/owl-nextD.svg'>"],
    responsive : {
        // breakpoint from 0 up
        0 : {
          items: 1,
          margin: 0, 
          dots : true
        },
        // breakpoint from 768 up
        560 : {
            items: 2,
            margin: 20,
            dots : true
        },
        700 : {
            items: 3,
            margin: 20, 
            dots : true
        },
        1023 : {
            items: 4,
            margin: 0, 
            dots : false
        },
        1219 : {
            items: 4 
        }
    }
  });

  $('.more-pro').addClass('owl-carousel').owlCarousel({
    items : 4,
    dots : false,
    nav : true,
    navText: ["<img src='img/owl-prevD.svg'>","<img src='img/owl-nextD.svg'>"],
    responsive : {
        // breakpoint from 0 up
        0 : {
          items: 1,
          margin: 0, 
        },
        // breakpoint from 768 up
        560 : {
            items: 2,
        },
        700 : {
            items: 3, 
        },
    }
  });

    // =============== slider end  ===============================================
    
   // =============== Input styler ===============================================
  $('.hdr-bot__form select, select, input').styler({
        selectSearch: true,
    });
      
  $('.form-bl-file input').styler();
  $('.form-bl__form-chek input, .mod-form__chek input').styler();
  //  =============== Input styler end ===============================================
   $('.site__menu-item a').on('click', function() {
        $(this).parent('li').find('>ul').toggleClass('active');
        $(this).parent('li').siblings().find('>ul').removeClass('active');
    });
});

        

// ================================= media function =======================================================
    var mql45 = window.matchMedia('all and (max-width: 767px)');if(mql45.matches){
        $('.sl-bot').addClass('owl-carousel').owlCarousel({
        items : 3,
        loop: true,
        autoplay : true,
        smartSpeed : 300,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        dots : true,
        navText: ["<img src='img/prev.svg'>","<img src='img/next.svg'>"],
        autoHeight: true,
        nav : false,
        responsive: {
          0 : {
              items: 1,
              nav : true,
              dots: false,
            },
            // breakpoint from 768 up
          550 : {
              nav : false,
              items: 2,
            } 
        }
      });
    }

      
    var mql = window.matchMedia('all and (max-width: 770px)');if(mql.matches){
      $(".left-content__nav").detach().appendTo('.site-vnut .header__nav');
      $(".left-content__nav").addClass('header-menu');
      $(".pro-tab").detach().appendTo('.btn-m');

    };
    
    var mql = window.matchMedia('all and (max-width: 560px)');if(mql.matches){
      $(".news-more-pic").removeAttr('align');
        $('.sl-mid').addClass('owl-carousel').owlCarousel({
          items : 2,
          loop: true,
          autoplay : true,
          smartSpeed : 300,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          dots : true,
          autoHeight: true,
          nav : false,
          responsive: {
            0 : {
                items: 1,
              },
              // breakpoint from 768 up
            480 : {
                items: 2,
              } 
          }
        });

         $('.ser-bl').addClass('owl-carousel').owlCarousel({
          items : 1,
          loop: true,
          autoplay : true,
          smartSpeed : 300,
          animateOut: 'fadeOut',
          animateIn: 'fadeIn',
          dots : false,
          autoHeight: true,
          nav : true,
          navText: ["<img src='img/prev.svg'>","<img src='img/next.svg'>"],
          
        });


    };
//============================ hover img end =========================================================================

$(window).scroll(function() { 
  if($(this).scrollTop() >= 1000) {
  $('.button-up').fadeIn();
  } else {
  $('.button-up').fadeOut();
  }
  });
  $('.button-up').click(function() {
  $('body,html').animate({scrollTop:0},800);
 
});

// jQuery(document).ready(function($) {
//   $({blurRadius: 5}).animate({blurRadius: 0}, {
//   duration: 1000,
//   easing: 'swing',
//   step: function() {
//     $(".lines").css({
//       "-webkit-filter": "blur("+this.blurRadius+"px)",
//       "filter": "blur("+this.blurRadius+"px)"
//     });
//   }
// });
// var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
// $(".lines").each(function() {
//   var tcount = $(this).data("count");
//   $(this).animateNumber({ number: tcount,
//     easing: 'easeInQuad',
//     "font-size": "40px",
//     numberStep: comma_separator_number_step},
//     1000);
// });
  
//    $("#slider").rangeSlider();


// });

  $( function() {
    $( ".range-vt" ).slider({
      range: true,
      min: 0,
      step: 0.1,
      max: 20,
      values: [.0, 20],
      slide: function( event, ui ) {
        $(this).parent('.filtr-bl__item').find("#first" ).val(ui.values[0] + " Вт");
        $(this).parent('.filtr-bl__item').find("#last" ).val(ui.values[1] + " Вт");
      }
    });
    $( ".range-pl" ).slider({
      range: true,
      min: 0,
      step: 1,
      max: 100,
      values: [ 2, 80 ],
      slide: function( event, ui ) {
        $(this).parent('.filtr-bl__item').find("#first" ).val(ui.values[0] + " м/кв");
        $(this).parent('.filtr-bl__item').find("#last" ).val(ui.values[1] + " м/кв");
      }
    });
    $( ".range-s" ).slider({
      range: true,
      min: 2400000,
      step: 1,
      max: 20400000,
      values: [ 0, 20400000 ],
      slide: function( event, ui ) {
        $(this).parent('.filtr-bl__item').find("#first" ).val(ui.values[0] + " сум");
        $(this).parent('.filtr-bl__item').find("#last" ).val(ui.values[1] + " сум");
      }
    });
    // $( "#amount" ).val( "" + $( ".range" ).slider( "values", 0 ) +
      // " -" + $( ".range" ).slider( "values", 1 ) );
        $(".inp-zn0" ).val($( ".range-vt" ).slider( "values", 0 ) + " Вт");
        $(".inp-zn1" ).val($( ".range-vt" ).slider( "values", 1 ) + " Вт");

        $(".inp-pl" ).val($( ".range-pl" ).slider( "values", 0 ) + " м/кв");
        $(".inp-pl" ).val($( ".range-pl" ).slider( "values", 1 ) + " м/кв");

        $(".inp-s" ).val($( ".range-s" ).slider( "values", 0 ) + " сум");
        $(".inp-s" ).val($( ".range-s" ).slider( "values", 1 ) + " сум");
  });