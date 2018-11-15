/* =========================================
                Preloader
============================================ */
$(window).on('load', function () { // makes sure that whole site is loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});


/* =========================================
                Team
============================================ */
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});

/* =========================================
                Progress Bars
============================================ */
$(function () {

    $("#progress-elements").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });

});

/* =========================================
               Responsive Tabs
============================================ */
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });

});


/* =========================================
               Portfolio
============================================ */
$(window).on('load', function () {

    // Initialize Isotope
    $("#isotope-container").isotope({});

    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {

        // get filter value
        var filterValue = $(this).attr('data-filter');

        // filter portfolio
        $("#isotope-container").isotope({
            filter: filterValue
        });

        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* =========================================
               Magnifier
============================================ */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/* =========================================
               Testimonials
============================================ */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});


/* =========================================
              Stats
============================================ */
$(function () {

    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

});


/* =========================================
              Clients
============================================ */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 2
            },
            // breakpoint from 480 up
            480: {
                items: 3
            },
            // breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});


/* =========================================
              Google Maps
============================================ */
$(window).on('load', function () {
    
    // Map variables
    var addressString = '230 Broadway, NY, New York 10007, USA';
    var myLatlng = {lat: 40.712685, lng: -74.005920};
    
    // 1. Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11, 
        center: myLatlng
    });
    
    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng, 
        map: map,
        title: "Click To See Address"
    });
    
    // 3. Add Info window
    var infowindow = new google.maps.InfoWindow({
    content: addressString
    });
    
    // 4. Click event. Show window info when clicked marker
    marker.addListener('click', function() {
    infowindow.open(map, marker);
    });
    
    // 5. Resize function
    google.maps.event.addDomListener(window, 'resize', function() { 
        
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
        
    });
    
});


/* =========================================
              Navigation
============================================ */
/* Show & Hide White Navigation */
$(function () {

    /* Show & Hide nav on page load */
    showHideNav();


    $(window).scroll(function () {

        // Show & Hide nav on windows scroll //
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white nav    
            $("nav").addClass("white-nav-top");

            // Show Dark Logo
            $(".navbar-brand img").attr("src", "img/logo/logo-dark.png");
            
            // Show back to top button 
            $("#back-to-top").fadeIn();

        } else {

            // Hide white nav      
            $("nav").removeClass("white-nav-top");

            // Hide Dark Logo
            $(".navbar-brand img").attr("src", "img/logo/logo.png");
            
            // Hide back to top button 
            $("#back-to-top").fadeOut();
        }
    }

});

// Smooth scrolling
$(function () {
    
    $("a.smooth-scroll").click(function(event) {
       
        event.preventDefault();
        
        // get section id like #about, #services #work, #team etc.
        var section_id = $(this).attr("href");
        
        $("html, body").animate({
            scrollTop: $(section_id).offset().top - 64            
        }, 1250, "easeInOutExpo");
        
                               
    });
    
});



/* =========================================
              Mobile Menu
============================================ */
$(function () {
    
    //Show mobile nav.
    $('#mobile-nav-open-btn').click(function () {  
        $("#mobile-nav").css("height", "100%");
    });
    
    //Hide mobile nav.
    $('#mobile-nav-close-btn, mobile-nav a').click(function () {  
        $("#mobile-nav").css("height", "0%");
    });
    
    
    
});


/* =========================================
              Animate
============================================ */
// animate on scroll
$(function () {
    new WOW().init();
});

// animaties uitvoeren nadat alle content is geladen. En dan pas de animatie laten zien.

// home animation on page load
$(window).on('load', function () {
  
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#btn-home").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
    
});



/* =========================================
              Contactform
============================================ */
$(function()
{
    function after_form_submitted(data)
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' );
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });

        }//else
    }

	$('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' );
            $btn.prop('orig_label',$btn.text());
            $btn.text('Verzenden...');
        });


                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json'
            });

      });
});









