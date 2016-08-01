/**
 * Created by tazo on 7/21/2016.
 */


function loadImagesMainPage() {
    var images = [
        'images/mainServices/bg1.jpg',
        'images/mainServices/bg2.jpg',
        'images/mainServices/bg3.jpg'
    ];

    var partners = ['baracuda', 'caucasus', 'magti', 'mikrotik', 'orientlogic', 'qnap', 'spam'];

    partners.forEach(function (partner) {
        images.push('images/partners/'+partner+'.png');
        images.push('images/partners/'+partner+'_red.png');
    });

    var img = document.createElement('img');

    images.forEach(function (image) {
        img.src = image;
    })
}

function loadImagesForPages() {
    var images = [
        'images/mainServices/bg1.jpg',
        'images/mainServices/bg2.jpg',
        'images/mainServices/bg3.jpg'
    ];

    var partners = ['baracuda', 'caucasus', 'magti', 'mikrotik', 'orientlogic', 'qnap', 'spam'];

    partners.forEach(function (partner) {
        images.push('images/partners/'+partner+'.png');
        images.push('images/partners/'+partner+'_red.png');
    });

    var img = document.createElement('img');

    images.forEach(function (image) {
        img.src = image;
    })
}



if(window.isMain == true) {
    loadImagesMainPage();

    $(function () {

        var $erp = $("#erp");

        var $erpBG = $erp.bgswitcher({
            images: ["images/mainServices/1new.jpg", "images/mainServices/bg1.jpg"],
            interval: 1000000,
            duration: 300
        });

        $erp.on("mouseenter", function () {
            $erpBG.bgswitcher("next");
        });

        $erp.on("mouseleave", function () {
            $erpBG.bgswitcher("next");
        });


        var $cloudMail = $("#cloudMail");

        var $cloudMailBG = $cloudMail.bgswitcher({
            images: ["images/mainServices/2new.jpg", "images/mainServices/bg2.jpg"],
            interval: 1000000,
            duration: 300
        });

        $cloudMail.on("mouseenter", function () {
            $cloudMailBG.bgswitcher("next");
        });

        $cloudMail.on("mouseleave", function () {
            $cloudMailBG.bgswitcher("next");
        });


        var $it = $("#it");

        var $itBG = $it.bgswitcher({
            images: ["images/mainServices/3new.jpg", "images/mainServices/bg3.jpg"],
            interval: 1000000,
            duration: 300
        });

        $it.on("mouseenter", function () {
            $itBG.bgswitcher("next");
        });

        $it.on("mouseleave", function () {
            $itBG.bgswitcher("next");
        });
    });
}
else{
    loadImagesForPages();

    $(function () {

        var $erp = $("#erp");

        var $erpBG = $erp.bgswitcher({
            images: ["images/servicesPage/1121.png", "images/servicesPage/112.png"],
            interval: 1000000,
            duration: 300
        });

        $erp.on("mouseenter", function() {
            $erpBG.bgswitcher("next");
        });

        $erp.on("mouseleave", function() {
            $erpBG.bgswitcher("next");
        });


        var $cloudMail = $("#cloudMail");

        var $cloudMailBG = $cloudMail.bgswitcher({
            images: ["images/servicesPage/1131.png", "images/servicesPage/113.png"],
            interval: 1000000,
            duration: 300
        });

        $cloudMail.on("mouseenter", function() {
            $cloudMailBG.bgswitcher("next");
        });

        $cloudMail.on("mouseleave", function() {
            $cloudMailBG.bgswitcher("next");
        });


        var $it = $("#it");

        var $itBG = $it.bgswitcher({
            images: ["images/servicesPage/1141.png", "images/servicesPage/114.png"],
            interval: 1000000,
            duration: 300
        });

        $it.on("mouseenter", function() {
            $itBG.bgswitcher("next");
        });

        $it.on("mouseleave", function() {
            $itBG.bgswitcher("next");
        });
    });
}



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