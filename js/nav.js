$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top-100
            }, 300, function(){
                window.location.hash = hash-100;
            });
        }
    });
});

function toggleMobileNav() {
    if ($(".item").hasClass("active")) {
        $(".item").removeClass("active");
    } else {
        $(".item").addClass("active");
    }
}

$(document).ready(function() {
    $(".toggle").on("click", function() {
        toggleMobileNav();
    });
});

$(document).ready(function() {
    $(".item").on("click", function() {
        if (window.innerWidth < 420) {
            toggleMobileNav();
        }
    });
});