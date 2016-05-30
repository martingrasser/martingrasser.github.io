$(document).ready(function() {
    $('.popup-gallery').magnificPopup({
        // mighty fix to show only filtered items
        delegate: ':not(.isotope-hidden).item a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
            tCounter: '<span class="mfp-counter"></span>' // markup of counter
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                // return item.el.attr("title");
                return item.el.attr("title") + '<small></small>';
            }
        }
    });
});
