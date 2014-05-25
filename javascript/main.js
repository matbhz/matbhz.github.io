$(document).ready(function () {

    var sectionsQty = 3;//($("section").length) - 1;
    var currentIndex = 0;

    $("header nav#sections a").click(function () {
        var headerLinkIndex = $(this).attr("data-index");
        if (headerLinkIndex != currentIndex) {
            var leftAttributeIncrement = ((headerLinkIndex - currentIndex) * 100);

            $(this).removeClass();
            $("section").animate({'left': '-=' + leftAttributeIncrement + '%'}, 0);
            $(this).addClass("animated fadeIn");

            currentIndex = headerLinkIndex;
            // Reanimate layout
            reanimateSection(currentIndex);
        }
    });

    var rightButtonSelector = $("#right");
    rightButtonSelector.click(function () {

        // In Safari only it will only increment the animation if it is 'display: block;'
        $("div.language").addClass("visible");

        if (currentIndex < sectionsQty) {
            currentIndex++;
            rightButtonSelector.removeClass();
            $("section").animate({'left': '-=100%'}, 0);
            rightButtonSelector.addClass("animated pulse");
        } else {
            currentIndex = 0;
            rightButtonSelector.removeClass();
            $("section").animate({'left': '+=300%'}, 0);
            rightButtonSelector.addClass("animated pulse");
        }
        // Reanimate layout
        reanimateSection(currentIndex);
    });

    var leftButtonSelector = $("left");
    $("#left").click(function () {

        // In Safari only it will only increment the animation if it is 'display: block;'
        $("div.language").addClass("visible");

        if (currentIndex > 0) {
            currentIndex--;
            leftButtonSelector.removeClass();
            $("section").animate({'left': '+=100%'}, 0);
            leftButtonSelector.addClass("animated pulse");
        } else {
            currentIndex = 3;
            leftButtonSelector.removeClass();
            $("section").animate({'left': '-=300%'}, 0);
            leftButtonSelector.addClass("animated pulse");
        }
        // Reanimate layout
        reanimateSection(currentIndex);
    });

    // Animation for skill set - TODO: Make the animation generic for each language Content
    $.each($("#englishContent").find("#skills li"), function (index, value) {
        $(value).css("animation-delay", (index / 10) + "s").addClass("animated fadeInUp");
        $(value).css("-moz-animation-delay", (index / 10) + "s").addClass("animated fadeInUp");
        $(value).css("-webkit-animation-delay", (index / 10) + "s").addClass("animated fadeInUp");
    });

    $.each($("#portugueseContent").find("#skills li"), function (index, value) {
        $(value).css("animation-delay", (index / 10) + "s").addClass("animated fadeInUp");
    });


});

function reanimateSection(currentIndex) {

    $("div.language").removeClass("visible");
    setTimeout(function () {
        $("div.language").addClass("visible");
    }, 1);

}









