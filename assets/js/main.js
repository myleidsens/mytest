(function($){
  $(document).ready(function(){
      // $('.siteBanner__slider').slick({
      //   infinite: true,
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   prevArrow: '<i class="fas fa-long-arrow-alt-left"></i>',
      //   nextArrow: '<i class="fas fa-long-arrow-alt-right"></i>',
      //   dots: true,
      //   arrows: false,
      //   responsive: [
      //     {
      //       breakpoint: 480,         
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //         arrows: true,
      //         dots: false,
      //       }
      //     }
      // ]
      // });
   



      $('.events_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: ' <i class="fas fa-arrow-left"></i> ', 
        nextArrow: '<i class="fas fa-arrow-right"></i>',
        dots: false,
        arrows: true,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 480,         
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            }
        ]
      });

      $('.latestNews_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<i class="far fa-angle-left"></i>',
        nextArrow: '<i class="far fa-angle-right"></i>',
        dots: false,
        arrows: true,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            },
            {
              breakpoint: 480,         
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
              }
            }
        ]
      });

  
      // let logoRef = $('.logoBox');
      // const settings = {
      //     responsive: [
      //       {
      //         breakpoint: 2000,
      //       // settings: "unslick"
      //       },
      //       {
      //         breakpoint: 767,
      //         settings: {
      //           slidesToShow: 2,
      //           slidesToScroll: 2,
      //           dots: true,
      //           arrows: false,
      //           //autoplay: true,
      //           autoplaySpeed: 2500,
      //           initialSlide: Math.floor(Math.random() * 11),
      //         }
      //       },{
      //         breakpoint: 375,
      //         settings: {
      //           slidesToShow: 1,
      //           slidesToScroll: 1,
      //           dots: true,
      //           arrows: false,
      //           //autoplay: true,
      //           autoplaySpeed: 2500,
      //           initialSlide: Math.floor(Math.random() * 11),
      //         }
      //       }
      //     ]
      // }

      //const sl =  logoRef.slick(settings);

      // $(window).on("resize", function (e) {
      //     checkScreenSize();
      // });
      // checkScreenSize();
      // function checkScreenSize(){
      //     var newWindowWidth = $(window).width();
      //     if (newWindowWidth < 767 ) {
      //           setTimeout(function(){
      //             logoRef.slick(settings).on('init', function(event, slick, direction){
      //               //console.log(event, slick, direction);
      //             });
      //       }, 1000);
      //     }
      //     else{
      //       setTimeout(function(){
      //         logoRef.slick('unslick');
      //       }, 1000);
          
      //     }
      // }

    /**************Tab Start ****************/
        
        /******Tab List *****/
        // $('#tabNavs > li').on('click', function(e){
        //   e.preventDefault();
        //   $(this).find(".card").addClass('active').parent('li').siblings().children('div').removeClass('active');
        //   const value = $(this).attr('data-filter');
        //   let $stufBox =  $('.staff__boxes');
        //       if(value == 'all'){
        //           $stufBox.show('600');
        //       }else{
        //           $stufBox.not('.'+value).hide('600');
        //           $stufBox.filter('.'+value).show('600');
        //       }
        //  });
        /******Tab Select *****/
  
        //  $('#tabSelect').on('change', function(e){
        //   e.preventDefault();
        //   var value = $(this).children("option:selected").attr('data-filter');
        //   //console.log(value);
        //   let $stufBox =  $('.staff__boxes');
        //       if(value == 'all'){
        //           $stufBox.show('600');
        //       }else{
        //           $stufBox.not('.'+value).hide('600');
        //           $stufBox.filter('.'+value).show('600');
        //       }
        //  });

    /**************Tab List End ****************/

    //******************************Related Post Slider
    
      
  });
})(jQuery)