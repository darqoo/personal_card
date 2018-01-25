window.addEventListener('load', function() {
    $("#loader_bg").fadeOut();
});

(function() {
    $(document).ready(function() {
        $(".top_menu").hide();
        $(function() {
            $(window).scroll(function() {
                if ($(this).scrollTop() > 200) {
                    $('.top_menu').fadeIn();
                } else {
                    $('.top_menu').fadeOut();
                }
            });
        });

    });
}());

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 61
            }, 800, function() {
                window.location.hash = hash;
                window.scrollTo(0, $(hash).offset().top - 61);


            });
        }
    });
    $('.carousel').carousel({
        keyboard: true,
        pause: false,
        ride: true
    })
});

$('.nav-link').click(function() {
    $('.collapse').collapse('hide');
})

$('.skill').click(function(e) {
    e.preventDefault();
})
