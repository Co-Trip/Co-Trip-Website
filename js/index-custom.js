var canvas=document.getElementById('background-mask');
var ctx=canvas.getContext('2d');
ctx.fillStyle='#FF0000';
ctx.fillRect(0,0,100,100);

$(document).ready(function($) {
	var num = Math.floor(Math.random() * 12 + 1);
	var path = 'url(../Background/' + num + '.jpg)';
	$('#background-image1').css({
		opacity: 0,
		backgroundImage: path
	});
	$('#background-image2').css({
		opacity: 0,
		backgroundImage: 'url(../Background/6.jpg)'
	});
	$('#background-image1').fadeTo('slow', 1);
});