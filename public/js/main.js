
$(function() {
	
	$("div.row div.large-8 h3 a, div.row div.large-12 div.large-3 a, div.large-7 p a").click(function(e) {
		var content = $(this).attr("href");
		var sidebar = content + "-sidebar";
		
		$("div").removeClass("current-content");
		$(content).addClass("current-content");
		$(sidebar).addClass("current-content");
	});

});