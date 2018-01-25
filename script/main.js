window.addEventListener('load', function() {
    $("#loader_bg").fadeOut();
    setTimeout(
        function() {
            homePage();
        }, 600);
    var firstLi = document.getElementsByClassName('pagination')[0].firstChild.firstChild;
    firstLi.addEventListener("click", function() {
        setTimeout(homePage, 1000);
    });
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
});

$('.nav-link').click(function() {
    $('.collapse').collapse('hide');
})

$('.skill').click(function(e) {
    e.preventDefault();
})
