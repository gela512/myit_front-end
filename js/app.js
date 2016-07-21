/**
 * Created by tazo on 7/21/2016.
 */


function loadImages() {
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

loadImages();

$(function () {

    var $erp = $("#erp");

    var $erpBG = $erp.bgswitcher({
        images: ["images/mainServices/1new.jpg", "images/mainServices/bg1.jpg"],
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
        images: ["images/mainServices/2new.jpg", "images/mainServices/bg2.jpg"],
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
        images: ["images/mainServices/3new.jpg", "images/mainServices/bg3.jpg"],
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