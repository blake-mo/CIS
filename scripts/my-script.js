
//I put everything in this function.

console.log('script file loaded...'); 

$(document).ready(function() {

	console.log('in my doc ready f/n');

	$('#my-div').addClass('my-border'); //as soon as we load, give it a border

	$('.div-class').on('dblclick', function() {
	$(this).fadeOut(1500);
	});

	$('.div-class').on('mouseover', function() {
		$(this).append('<span>moused over</span>');
	});

	//$('.div-class').on('click', function() {
	//$(this).remove();
	//});

}); 