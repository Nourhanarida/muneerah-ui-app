$(window).on('load', function () {
    $('.loader').fadeOut(1500, function () {
        $(this).remove();
    });
});

$(document).ready(function () {
    "use strict";
    $(".close-open-nav").on("click", function (e) {
        e.stopPropagation();
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(".nav_bar").addClass("active");
            $(".nav_bar").append($(".outer_sosial").html());
        } else {
            $(".nav_bar").removeClass("active");
            $(".nav_bar .social_media").remove();
        }
    });

    $("body").on("click", function () {
        $(".close-open-nav.active").click();
    });

    $(".nav_bar a").each(
        function () {
            if (window.location.href.includes($(this).attr('href'))) {
                $(this).parent('li').addClass("active");
                $(this).parent().parent('.sub-menu').slideDown("");
            }
        }
    );
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function () {
    "use strict";
    $('.owl-index').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        rtl: true,
        lazyLoad: true,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: ["", ""],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.owl-sections').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        rtl: true,
        lazyLoad: true,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 3000,
        navText: ["", ""],
        autoWidth: true,
        responsive: {
            1000: {
                items: 4
            }
        }
    });

    $(".btn_search").on("click", function (e) {
        e.preventDefault();
        $(".modal_search").addClass("open");
        $(".layear").fadeIn(400);
    });

    $(".modal_search .close_ , .layear").on("click", function (e) {
        e.preventDefault();
        $(".modal_search").removeClass("open");
        $(".layear").fadeOut(400);
    });

    $(".filter_product button").on("click", function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    $(".btn_toggle").on("click", function () {
        $(this).toggleClass("active");
        $('[data-toggle="tooltip"]').tooltip('hide')

    });

    $('.niceSelect').niceSelect();

    $(".show_pass").on("click", function () {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).prev("input").attr({
                "type": "text"
            });
        } else {
            $(this).prev("input").attr({
                "type": "password"
            });
        }
    });

    $(".selectTwo").select2();

});

$(document).ready(function () {
    "use strict";
    // // ADD IMAGE
    $(".images-upload-block .image-uploader").change(function (event) {
        $(this).parents('.images-upload-block').append('<div class="uploaded-block"><img src="' + URL.createObjectURL(event.target.files[0]) + '"><span class="close"><i class="fas fa-times"></i></span></div>');
    });
    // REMOVE IMAGE
    $('.images-upload-block').on('click', '.close', function () {
        $(this).parents('.uploaded-block').remove();
        $(".images-upload-block .image-uploader").val("");
    });

});


$(document).ready(function () {
    "use strict";
    $(".qty-up").on("click", function (e) {
        e.preventDefault();
        var theNumber = parseInt($(this).next(".qty-val").val());
        if (theNumber >= 0) {
            $(this).next(".qty-val").val(theNumber + 1);
        }
    });

    $(".qty-down").on("click", function (e) {
        e.preventDefault();
        var theNumber = parseInt($(this).prev(".qty-val").val());
        if (theNumber > 0) {
            $(this).prev(".qty-val").val(theNumber - 1);
        }
    });

});

$(function () {
    $(".rateYo-R").rateYo({
        ratedFill: "var(--main)",
        normalFill: "#C7CBCB",
        starWidth: "24px",
        readOnly: true,
        spacing: "5px",
        rtl: true,
    });
});

$(document).ready(function () {
    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4;
    var syncedSecondary = true;
    sync1.owlCarousel({
        items: 1,
        rtl: true,
        nav: false,
        autoplay: true,
        dots: false,
        loop: true,
        margin: 0,
        smartSpeed: 1000,
        responsiveRefreshRate: 200,
        navText: ['', ''],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            rtl: true,
            margin: 10,
            dots: false,
            nav: false,
            smartSpeed: 500,
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }
    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});

$(document).ready(function () {
    "use strict";
    $(".fillter_product .btn-main").on("click", function () {
        $(".advanced-search").addClass("d-block");
    });
    $(".btn-gridlist-product .btn_").on("click", function () {
        $(".btn-gridlist-product .btn_").removeClass("active");
        $(this).addClass("active");
        sessionStorage.setItem("test1", $(this).attr("data-link"));
        $(".all_producto_").removeClass("all_Products_grid all_Products_list");
        $(".all_producto_").addClass("all_Products_" + $(this).attr("data-link"));
        $(".all_Products_grid > div").removeClass().addClass("col-lg-3 col-sm-6");
        $(".all_Products_list > div").removeClass().addClass("col-12");
    });
    $("[data-link=" + sessionStorage.getItem("test1") + "]").click();


});

$(function () {
    $(".myPages").pxpaginate({
        totalPageCount: 2,
        maxBtnCount: 1,
        prevPageName: '<i class="fas fa-chevron-left"></i>',
        nextPageName: '<i class="fas fa-chevron-right"></i>',
        lastPageName: '<i class="fas fa-angle-double-left"></i>',
        firstPageName: '<i class="fas fa-angle-double-right"></i>'
    });
});

$(document).ready(function () {
    "use strict";
    $(".boxinfo-addracc .info .btn-main").on("click", function () {
        sessionStorage.setItem("pass", "changpasswordModal");
    });
    
    $("#" + sessionStorage.getItem("pass")).modal('show');
    
    $("#changpasswordModal .close ,#changpasswordModal .btn-main").on("click", function () {
        sessionStorage.removeItem('pass');
    });
});



$(document).ready(function () {
    "use strict";
    $('[name="chose-address"]:checked').parents(".boxinfo-addracc").addClass("active");
    
    $('[name="chose-address"]').change(function () {
        $(".boxinfo-addracc").removeClass("active");
        if ($(this).is(':checked')) {
            $(this).parents(".boxinfo-addracc").addClass("active");
        }
    });
});

$(document).ready(function () {
    "use strict";
    // // ADD IMAGE
    $(".uplood_img input[type='file']").change(function (event) {
        $(this).parent('.uplood_img').find(".form-control").val($(this).val().replace(/C:\\fakepath\\/, ''));
        $(".uplooder_img").append('<div class="uploaded-block"><img src="' + URL.createObjectURL(event.target.files[0]) + '"><span class="close"><i class="fas fa-times"></i></span></div>');
        $(this).css({
            "visibility" : "hidden"
        });
    });
    // REMOVE IMAGE
    $('.uplooder_img').on('click', '.close', function () {
        $(this).parents('.uploaded-block').remove();
        $(".uplood_img .form-control , .uplood_img input[type='file']").val("");
        $(".uplood_img input[type='file']").css({
            "visibility" : "visible"
        });
    });
});

$(function () {
    $(".rateYo-RP").rateYo({
        ratedFill: "var(--main)",
        normalFill: "#C7CBCB",
        starWidth: "24px",
        spacing: "5px",
        rtl: true,
        fullStar: true,
    });
});

/*

$(document).ready(function () {
    "use strict";
    $(".flatpickr-time").flatpickr({
        noCalendar: true,
        enableTime: true,
        enableSeconds: true,
        dateFormat: 'h:i:S',
    });
    $(".flatpickr-date").flatpickr({
        enableTime: false,
        dateFormat: "Y-m-d",
    });
});


$(document).ready(function () {
    "use strict";
    $("body").find(".body_chat").parents("html , body").animate({
        scrollTop: $(".body_chat").parents(".sec-marg").offset().top
    }, 500);

    $(".chat-content").animate({
        scrollTop: $('.chat-content').prop("scrollHeight")
    }, 1000);

    $('.writ_massage .form').on('submit', function (event) {
        event.preventDefault();
        var message = $('.content_sent').first().clone();
        message.find('p').text($('.input-custom-size').val());
        message.appendTo('.chat-content');
        $('.input-custom-size').val('');

        $(".chat-content").animate({
            scrollTop: $('.chat-content').prop("scrollHeight")
        }, 1000);

    });

});

*/