/************* Custom Js File *******************************

    Template Name: Portfolio Template
    Author: Faisal Ahmed Nahian
    Version: 1.0
    Copyright 2018
    
*************************************************************/


/*-------------------------------------------------------------------------------
    
    
JS INDEX
=============

01 - smooth scroll
02 - scroll js nav bar, comes after scrolling
03 - Skills Progress Bars
04 - Light box js
05 - port-folio part sliding  js
06 - back to top button js
07 - wow activation  js


--------------------------------------------------------------------------------*/


$(function () {

    "use strict";
    /*------------------------------------------------
        smooth scroll
    ---------------------------------------------------*/

    var scrollLink = $('.nav-link');

    // Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    /*------------------------------------------------
        02 - scroll js nav bar, comes after scrolling
    ---------------------------------------------------*/

    var navOffset = $('.hidden_menu').offset().top

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navOffset) {
            $('.hidden_menu').addClass('show_menu');
        } else {
            $('.hidden_menu').removeClass('show_menu');
        }
    });

    /*-------------------------------------
    counter js
-------------------------------------*/

    jQuery(window).on('scroll', function () {
        $('.count-this').each(function () {

            // Start the counting from a specified number - in this case, 0!
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                // Speed of counter in ms, default animation style
                duration: 1000,
                easing: 'swing',
                step: function (now) {
                    // Round up the number
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });
    //    filterizr
    var filterizd = $('.filtr-container').filterizr({
        //options object
    });
    /*-------------------------------------
         Light box js
    -------------------------------------*/
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    /*-------------------------------------
         slick slider js
    -------------------------------------*/
    $('.client').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    });

    /*-------------------------------------
    07 - wow activation  js
-------------------------------------*/
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    });
    wow.init();



});


/*
*
*
*
*


*
*
*/
