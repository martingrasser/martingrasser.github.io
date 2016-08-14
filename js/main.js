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
});

$(function() {
    $('#nav-wrapper').height($("#nav").height());
    $('#nav').affix({
        offset: { top: $('#nav').offset().top }
    });
});
