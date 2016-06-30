// To handle isotopeJS
$(window).load(function() {
    /* activate jquery isotope */
    var $container = $('#posts').isotope({
        itemSelector: '.item',
        // isFitWidth: true,
        layoutMode: 'fitRows'
    });

    // debugger;
    // var delay = 5000; //2 second
    // setTimeout(function() {
    //your code to be executed after 1 second
    // }, delay);
    $container.isotope({ filter: '*' });
    // debugger;
    // $(window).smartresize(function() {
    //     $container.isotope({
    //         columnWidth: '.clearfix'
    //     });
    // });










// NEW CODE from **** to ***

// ************
    // filter items on button click
    $(".home").on('click', function() {
        $('.active').each( function () {
            $(this).removeClass('active');
        });
        $(".home").addClass('active');
    });
    $('#filters').on('click', 'button', function() {
        // var filterValue = $(this).attr('data-filter');
        var filterValue = "";
        $('.active').each( function () {
            filterValue += $(this).attr('data-filter');
        });
        $container.isotope({ filter: filterValue });
        if (filterValue !== "*") {
            $('.home').removeClass('active');
        }
        if (filterValue === "") {
            filterValue = "*";
            $('.home').addClass('active');
        }
    });
});
// ************

// NEW CODE FOR NAV BAR
// ************


$(function() {
    $('#nav-wrapper').height($("#nav").height());
    $('#nav').affix({
        offset: { top: $('#nav').offset().top }
    });
});

// ************







//OLD CODE










// // scroll reveal
// window.sr = ScrollReveal();
// var fooContainer = document.getElementById('posts');

// var fooReveal = {
//     viewFactor: 0.15,
//     duration: 800,
//     distance: "0px",
//     scale: 0.1,
//     origin: 'bottom'
// };


// sr.reveal('.div-img', { container: fooContainer }, fooReveal);
