// on document ready
$( document ).ready(function() {

	// when a new colour has been selected
	$(".cp").on("click", function(){

		// get the name of the colour. e.g. cp-green
		var id = $(this).attr('id');
		console.log(id);

		// var color is the fixed value which will be applied further down in the page
		var color;

		// depending on the id, set the specific hex colour value to var color
		if (id == "cp-red") {
			color = "#dd4e4a";
		} else if (id == "cp-blue") {
			color = "#00a2ff";
		} else if (id == "cp-green") {
			color = "#1cbd9e";
		} else if (id == "cp-purple") {
			color = "#5e6a9a";
		}

		// set the border colour of the fixed position colour picker in the demo
		$("#color-picker").css("border", "3px solid " + color);

		// set the background to the selected colour and make fonts white
		// example: this is used on important buttons
		$(".color-bg").css({"background": color, "color": "white"});

		// set the border colour to the selected colour
		// example: this is used on standard buttons
		$(".color-border").css("border-color", color);

		// set the font colour to the selected colour
		// example: this is used on titles and icons to change colours
		$(".color-text").css("color", color);

		// remove all previous classes and apply new class to set colour in lists
		// .color-text does not work for this because :before is needed
		// example: this is used on lists to apply bullet point colours
		$(".color-before").removeClass("cp-red-before cp-blue-before cp-green-before cp-purple-before").addClass(id + "-before");

		// much like .color-text but applies the colour on hover
		// example: this is used on some buttons
		$(".color-bg-hover").removeClass("cp-red-hover cp-blue-hover cp-green-hover cp-purple-hover").addClass(id + "-hover");

		$(".color-dark").css("color", "#222");
	});
});