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

    var flagsButtons = $(".flag");

    flagsButtons.click(function () {

        // Change content language
        $(".language").removeClass("visible");
        var targetLanguage = $(this).attr("data-target");
        $("[data-language='" + targetLanguage + "']").addClass("visible");

        // Change current selected language
        $(".flag").removeClass("selectedFlag");
        $(this).addClass("selectedFlag");

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

    var selectedLanguageIndex = $(".selectedFlag").attr("data-language-index");

    $("div.language").removeClass("visible");
    setTimeout(function () {
        $("div.language").eq(+selectedLanguageIndex).addClass("visible");
    }, 1);

}









