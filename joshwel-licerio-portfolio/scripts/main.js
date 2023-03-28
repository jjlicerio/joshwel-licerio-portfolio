$('.gn-trigger').on('click', function(e) {
    e.preventDefault();
    if($(this).hasClass('is-active')) {
        $(this).removeClass('is-active');
        $('.gn').slideUp();
    } else {
        $(this).addClass('is-active');
        $('.gn').slideDown();
    }
});