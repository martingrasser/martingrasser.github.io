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