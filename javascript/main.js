$(document).ready( function() {

	var sectionsQty = 3;//($("section").length) - 1;
	var currentIndex = 0;

	$("header nav#sections a").click(function(){
		headerLinkIndex = $(this).attr("data-index");
		if (headerLinkIndex != currentIndex){
			leftAttributeIncrement = ((headerLinkIndex - currentIndex) * 100);

			$(this).removeClass();
			$("section").animate({'left':'-='+leftAttributeIncrement+'%'}, 0);
			$(this).addClass("animated fadeIn");

			currentIndex = headerLinkIndex;
		// Reanimate layout
		reanimateSection(currentIndex);
	}
});

	$("#right").click(function(){
		if ( currentIndex < sectionsQty ){
			currentIndex++;
			$("#right").removeClass();
			$("section").animate({'left':'-=100%'}, 0);
			$("#right").addClass("animated pulse");
		} else {
			currentIndex = 0;
			$("#right").removeClass();
			$("section").animate({'left':'+=300%'}, 0);
			$("#right").addClass("animated pulse");	
		}
		// Reanimate layout
		reanimateSection(currentIndex);
	});

	$("#left").click(function(){
		if ( currentIndex > 0 ){
			currentIndex--;
			$("#left").removeClass();
			$("section").animate({'left':'+=100%'}, 0);
			$("#left").addClass("animated pulse");		
		} else {
			currentIndex = 3;
			$("#left").removeClass();
			$("section").animate({'left':'-=300%'}, 0);
			$("#left").addClass("animated pulse");	
		}
		// Reanimate layout
		reanimateSection(currentIndex);
	})

	var flagsButtons = $(".flag");

	flagsButtons.click(function() {

		// Change content language
		$(".language").removeClass("visible");
		var targetLanguage = $(this).attr("data-target");
		$("[data-language='"+targetLanguage+"']").addClass("visible");

		// Change current selected language
		$(".flag").removeClass("selectedFlag");
		$(this).addClass("selectedFlag");

	});


	// Animation for skill set - TODO: Make the animation generic for each language Content
	$.each($("#englishContent #skills li"), function(index, value) {
		$(value).css("animation-delay", (index/10)+"s").addClass("animated fadeInUp");
		$(value).css("-moz-animation-delay", (index/10)+"s").addClass("animated fadeInUp");
		$(value).css("-webkit-animation-delay", (index/10)+"s").addClass("animated fadeInUp");
	});

	$.each($("#portugueseContent #skills li"), function(index, value) {
		$(value).css("animation-delay", (index/10)+"s").addClass("animated fadeInUp");
	});


});

function reanimateSection(currentIndex) {

	selectedLanguageIndex = $(".selectedFlag").attr("data-language-index");

	$("div.language").removeClass("visible");
	setTimeout(function() {
		$("div.language").eq(+selectedLanguageIndex).addClass("visible");
	}, 1);
}









