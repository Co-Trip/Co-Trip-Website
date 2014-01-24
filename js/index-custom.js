$(document).ready(function($) {
	var num = Math.floor(Math.random() * 12 + 1);
	var path = 'url(../Background/' + num + '.jpg)';
	$('#background-image1').css('background-image', path);
	$('#background-image1').fadeIn(2000);
	setInterval(function() {
		changeBackgroundImage();
	}, 8000);
});

changeBackgroundImage = function () {
	var num = Math.floor(Math.random() * 12 + 1);
	var path = 'url(../Background/' + num + '.jpg)';

	if ($('#background-image1').is(":hidden")) {
		$('#background-image1').css('background-image', path);
		$('#background-image2').fadeOut(2000);
		$('#background-image1').fadeIn(3000);
	} else {
		$('#background-image2').css('background-image', path);
		$('#background-image1').fadeOut(2000);
		$('#background-image2').fadeIn(3000);
	};
};