

jQuery(window).bind('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.test').css('display', 'block');
        $('.test').removeClass("animated slideInUp");
        $('.test').addClass("animated slideOutUp");
        //$('.navbar-default').addClass("scrolldown");
        
    } else {
        $('.test').addClass('display', 'none');
        $('.test').removeClass("animated slideOutUp");
        $('.test').addClass("animated slideInUp");
        //$('.navbar-default').removeClass("scrolldown");
    }
});



jQuery(function ($) {

    // Navigation Scroll
    $(window).scroll(function (event) {
        Scroll();
    });

    var slideHeight = $(window).height();
       
    if (slideHeight > 100) {
        //debugger;
        $(".navbar-brand").addClass("logoCompressed");
        $('#mainmenu').addClass("scrolldown").fadeIn("slow");
    }
    else {
        $(".navbar-brand").removeClass("logoCompressed");
        $('#mainmenu').removeClass("scrolldown").fadeIn("slow");
    }

    $('.navbar-collapse ul li a').on('click', function () {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 1000);
        return false;
    });

    // User define function
    function Scroll() {
        var contentTop = [];
        var contentBottom = [];
        var winTop = $(window).scrollTop();
        var rangeTop = 200;
        var rangeBottom = 500;
        $('.navbar-collapse').find('.scroll a').each(function () {
            contentTop.push($($(this).attr('href')).offset().top);
            contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
        })
        $.each(contentTop, function (i) {
            if (winTop > contentTop[i] - rangeTop) {
                $('.navbar-collapse li.scroll')
                .removeClass('active')
                .eq(i).addClass('active');
            }
        })

        //if (screen.width > 786) {
        if (winTop > 100) {
            //debugger;
                $(".navbar-brand").addClass("logoCompressed");
                $('#mainmenu').addClass("scrolldown").fadeIn("slow");
            }
            else { 
                $(".navbar-brand").removeClass("logoCompressed");
                $('#mainmenu').removeClass("scrolldown").fadeIn("slow");
            }
        //}

    };

    $('#tohash').on('click', function () {
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 5 }, 1000);
        return false;
    });


    //-----timeline js------------------------------------
    var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function () {
        (!window.requestAnimationFrame)
			? setTimeout(function () { showBlocks(timelineBlocks, offset); }, 100)
			: window.requestAnimationFrame(function () { showBlocks(timelineBlocks, offset); });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function () {
            ($(this).offset().top > $(window).scrollTop() + $(window).height() * offset) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function () {
            ($(this).offset().top <= $(window).scrollTop() + $(window).height() * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden')) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }



    //Initiat WOW JS
    new WOW().init();
    //smoothScroll
    smoothScroll.init();

    // portfolio filter
    $(window).load(function () {
        'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $portfolio_selectors.on('click', function () {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({ filter: selector });
            return false;
        });
    });


    // Contact form
    var form = $('#main-contact-form');
    form.submit(function (event) {
        debugger;
        event.preventDefault();
        var form_status = $('<div class="form_status"></div>');
        $.ajax({
            url: $(this).attr('action'),
            beforeSend: function () {
                form.prepend(form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn());
            }
        }).done(function (data) {

            form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
        });
    });

    ////Google Map
    //var latitude = $('#google-map').data('latitude');
    //var longitude = $('#google-map').data('longitude');
    //function initialize_map() {
    //    var myLatlng = new google.maps.LatLng(latitude, longitude);
    //    var mapOptions = {
    //        zoom: 14,
    //        scrollwheel: false,
    //        center: myLatlng
    //    };
    //    var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    //    var marker = new google.maps.Marker({
    //        position: myLatlng,
    //        map: map
    //    });
    //}
    //google.maps.event.addDomListener(window, 'load', initialize_map);


});