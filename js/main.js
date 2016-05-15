// To handle isotopeJS
$(document).ready(function() {
    /* activate jquery isotope */
    var $container = $('#posts').isotope({
        itemSelector: '.item',
        isFitWidth: true
    });

    $(window).smartresize(function() {
        $container.isotope({
            columnWidth: '.col-md-4'
        });
    });

    $container.isotope({ filter: '*' });

    // filter items on button click
    $('#filters').on('click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });
});

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