/**
 * Created by tazo on 7/21/2016.
 */

// if (window.isMain == true) {
//
//     $(function () {
//
//         var $erp = $("#erp");
//
//         var $erpBG = $erp.bgswitcher({
//             images: ["images/mainServices/1new.jpg", "images/mainServices/bg1.jpg"],
//             interval: 1000000,
//             duration: 300
//         });
//
//         $erp.on("mouseenter", function () {
//             $erpBG.bgswitcher("next");
//         });
//
//         $erp.on("mouseleave", function () {
//             $erpBG.bgswitcher("next");
//         });
//
//
//         var $cloudMail = $("#cloudMail");
//
//         var $cloudMailBG = $cloudMail.bgswitcher({
//             images: ["images/mainServices/2new.jpg", "images/mainServices/bg2.jpg"],
//             interval: 1000000,
//             duration: 300
//         });
//
//         $cloudMail.on("mouseenter", function () {
//             $cloudMailBG.bgswitcher("next");
//         });
//
//         $cloudMail.on("mouseleave", function () {
//             $cloudMailBG.bgswitcher("next");
//         });
//
//
//         var $it = $("#it");
//
//         var $itBG = $it.bgswitcher({
//             images: ["images/mainServices/3new.jpg", "images/mainServices/bg3.jpg"],
//             interval: 1000000,
//             duration: 300
//         });
//
//         $it.on("mouseenter", function () {
//             $itBG.bgswitcher("next");
//         });
//
//         $it.on("mouseleave", function () {
//             $itBG.bgswitcher("next");
//         });
//
//         var $it2 = $("#it2");
//
//         var $it2BG = $it2.bgswitcher({
//             images: ["images/mainServices/3new.jpg", "images/mainServices/bg3.jpg"],
//             interval: 1000000,
//             duration: 300
//         });
//
//         $it2.on("mouseenter", function () {
//             $it2BG.bgswitcher("next");
//         });
//
//         $it2.on("mouseleave", function () {
//             $it2BG.bgswitcher("next");
//         });
//
//         setTimeout(function () {
//             $(window).trigger('resize');
//         }, 300);
//
//     });
// }
// else{
//     $(function () {
//
//         var $erp = $("#erp");
//
//         var $erpBG = $erp.bgswitcher({
//             images: ["images/servicesPage/1121.png", "images/servicesPage/112.png"],
//             interval: 1000000,
//             duration: 300
//         });
//
//         $erp.on("mouseenter", function() {
//             $erpBG.bgswitcher("next");
//         });
//
//         $erp.on("mouseleave", function() {
//             $erpBG.bgswitcher("next");
//         });
//
//
//         var $cloudMail = $("#cloudMail");
//
//         var $cloudMailBG = $cloudMail.bgswitcher({
//             images: ["images/servicesPage/1131.png", "images/servicesPage/113.png"],
//             interval: 1000000,
//             duration: 300
//         });
//
//         $cloudMail.on("mouseenter", function() {
//             $cloudMailBG.bgswitcher("next");
//         });
//
//         $cloudMail.on("mouseleave", function() {
//             $cloudMailBG.bgswitcher("next");
//         });
//
//
//         var $it = $("#it");
//
//         var $itBG = $it.bgswitcher({
//             images: ["images/servicesPage/1141.png", "images/servicesPage/114.png"],
//             interval: 1000000,
//             duration: 300
//         });
//
//         $it.on("mouseenter", function() {
//             $itBG.bgswitcher("next");
//         });
//
//         $it.on("mouseleave", function() {
//             $itBG.bgswitcher("next");
//         });
//     });
// }

// show main services logos in slider
$(function () {
    $('.mainService').each(function (i, el) {
        var $logo = $(el).find('.mainServiceLogo').first();
        var logoImgSrc = $logo.attr('data-logoUrl');
        $logo.css('background', 'url(' + logoImgSrc + ') no-repeat');
    });
});

// partners images hover
$(function () {
    var $partner = $('.partner');

    $partner.on('mouseenter', function () {
        var $img = $($(this).find('img').get(0));
        var imagePath = $img.attr('data-imageHover');
        $img.attr('src', imagePath);
    });

    $partner.on('mouseleave', function () {
        var $img = $($(this).find('img').get(0));
        var imagePath = $img.attr('data-imageOriginal');
        $img.attr('src', imagePath);
    })
});

// support plans images
$(function () {
    var $supportPlans = $('.supportPlan');
    $supportPlans.each(function (i, el) {
        var $el = $(el)
        $el.on('mouseenter', function () {
            var $img = $el.find('img').eq(0);
            var src = $img.attr('data-imageHover');
            $img.attr('src', src);
        });

        $el.on('mouseleave', function () {
            var $img = $el.find('img').eq(0);
            var src = $img.attr('data-imageOriginal');
            $img.attr('src', src);
        })
    })
});


function changeBackground($el, url, isInstant) {
    if (isInstant) {
        $el.css('background-image', 'url("' + url + '")');
    } else {
        $el.fadeTo('fast', 0.3, function () {
            $el.css('background-image', 'url("' + url + '")');
        }).fadeTo('fast', 1);
    }
}

var urls = [
    'images/mainServices/1new.jpg',
    'images/mainServices/bg1.jpg',
    'images/mainServices/2new.jpg',
    'images/mainServices/bg2.jpg',
    'images/mainServices/3new.jpg',
    'images/mainServices/bg3.jpg'
];


$(function () {
    var startSlider = function () {

        var sliderOptions = {
            $AutoPlay: true,
            $AutoPlaySteps: 1,
            $SlideDuration: 160,
            $SlideWidth: 320,
            $SlideSpacing: 3,
            $Cols: 3,
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $Steps: 1
            }
        };

        window.sliderObj = new $JssorSlider$("jssor_1", sliderOptions);

        var sliderSwitchedHandler = function (index, fromIndex) {

            $(".mainService").off();

            var slidesCount = sliderObj.$SlidesCount();

            var count = 0;

            var arr = [];

            for (var i = index; count < 3; i++) {
                count++;

                if (i == slidesCount) {
                    i = 0;
                }

                arr.push(i);
            }

            console.log(arr);

            arr.forEach(function (i, n) {
                var el = $('.mainService').eq(i)[0];

                $(el).on('mouseenter', function () {
                    changeBackground($(el), urls[(n + 1) * 2 - 1]);
                });

                $(el).on('mouseleave', function () {
                    changeBackground($(el), urls[(n + 1) * 2 - 2]);
                });

                changeBackground($(el), urls[(n + 1) * 2 - 2]);

                ['first', 'second', 'third'].forEach(function (cl) {
                    $(el).removeClass(cl);
                });

                el.classList.add(['first', 'second', 'third'][n]);
            });
        };

        sliderObj.$On($JssorSlider$.$EVT_PARK, sliderSwitchedHandler);

        $('.arrowLeft').on('click', function () {
            sliderObj.$Prev();
        });

        $('.arrowRight').on('click', function () {
            sliderObj.$Next();
        });
    };
    startSlider();
});