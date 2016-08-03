/**
 * Created by tazo on 7/21/2016.
 */

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

var urls2 = [
    'images/servicesPage/1121.png',
    'images/servicesPage/112.png',
    'images/servicesPage/1131.png',
    'images/servicesPage/113.png',
    'images/servicesPage/1141.png',
    'images/servicesPage/114.png'
];

$(function () {
    var startSlider = function () {

        var sliderOptions = {
            $AutoPlay: true,
            $AutoPlaySteps: 1,
            $SlideDuration: 160,
            $SlideWidth: 320,
            $SlideSpacing: 0,
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

                var urlArr = window.isMain ? urls : urls2;

                $(el).on('mouseenter', function () {
                    changeBackground($(el), urlArr[(n + 1) * 2 - 1]);
                });

                $(el).on('mouseleave', function () {
                    changeBackground($(el), urlArr[(n + 1) * 2 - 2]);
                });

                changeBackground($(el), urlArr[(n + 1) * 2 - 2]);

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




