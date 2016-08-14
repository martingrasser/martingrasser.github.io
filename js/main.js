// To handle isotopeJS
$(window).load(function() {

    var $container = $('#posts').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
    $container.isotope({ filter: '*' });
    $(".home").on('click', function() {
        $('.active').each(function() {
            $(this).removeClass('active');
        });
        $(".home").addClass('active');
    });
    $('#filters').on('click', 'button', function() {
        // var filterValue = $(this).attr('data-filter');
        var filterValue = "";
        $('.active').each(function() {
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

    $('#filters .btn').click(function(e) {
        e.preventDefault();
        // $('.btn').removeClass('active');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $("img.lazy").lazyload({
        event: 'lazylazy',
        effect: "fadeIn",
        effectspeed: 500,
        appear: function() {
            console.log('loaded image')
        }
    });
});

$(function() {
    $('#nav-wrapper').height($("#nav").height());
    $('#nav').affix({
        offset: { top: $('#nav').offset().top }
    });
});

// // scroll reveal
// window.sr = ScrollReveal();
// window.sr = new scrollReveal({
// viewport: document.getElementByClassName('popup-gallery')
// });
// sr.reveal('.item', { duration: 2000 }, 50);
// var fooContainer = document.getElementById('posts');

// var fooReveal = {
//     viewFactor: 0.15,
//     duration: 800,
//     distance: "0px",
//     scale: 0.1,
//     origin: 'bottom'
// };


// sr.reveal('.div-img', { container: fooContainer }, fooReveal);
