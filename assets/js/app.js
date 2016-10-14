$( document ).ready(function() {
	$(".cp").click(function(){
		var id = $(this).attr('id');
		console.log(id);

		var color;

		if (id == "cp-red") {
			color = "#dd4e4a";
		} else if (id == "cp-blue") {
			color = "#00a2ff";
		} else if (id == "cp-green") {
			color = "#1cbd9e";
		} else if (id == "cp-purple") {
			color = "#5e6a9a";
		}

		$("#color-picker").css("border", "3px solid " + color);
		$(".color-bg").css({"background": color, "color": "white"});
		$(".color-border").css("border-color", color);
		$(".color-text").css("color", color);
		$(".color-before").removeClass("cp-red-before cp-blue-before cp-green-before cp-purple-before").addClass(id + "-before");
	});
});