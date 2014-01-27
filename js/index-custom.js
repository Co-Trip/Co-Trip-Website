$(document).ready(function($) {
	var num = Math.floor(Math.random() * 12 + 1);
	$('#background-image1').css('background-image', 'url(../Background/' + num + '.jpg)');
	$('#background-image1').fadeIn(2000);
	$('#background-mask').attr('src', '../Background/' + num + '.jpg');
	setInterval(function() {
		num = Math.floor(Math.random() * 12 + 1);
		jQuery.changeBackgroundImage(num);
	}, 8000);
	jQuery.showLoginPanel();
});

jQuery.changeBackgroundImage = function(num) {
	if ($('#background-image1').is(":hidden")) {
		$('#background-image1').css('background-image', 'url(../Background/' + num + '.jpg)');
		$('#background-mask').attr('src', '../Background/' + num + '.jpg');
		$('#background-image2').fadeOut(2000);
		$('#background-image1').fadeIn(3000);
	} else {
		$('#background-image2').css('background-image', 'url(../Background/' + num + '.jpg)');
		$('#background-mask').attr('src', '../Background/' + num + '.jpg');
		$('#background-image1').fadeOut(2000);
		$('#background-image2').fadeIn(3000);
	};
};

jQuery.showLoginPanel = function() {
	$('#login').delay(50).show('slow').animate({
		left: 0,
		opacity: 1
	}, '8000');
};

jQuery.showSignupPanel = function() {
	$('#signup').delay(50).show('slow').animate({
		left: 0,
		opacity: 1
	}, '8000');
};