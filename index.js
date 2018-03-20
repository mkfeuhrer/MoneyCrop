$(document).ready(function(){

	$('.login-signup').on("click",function(){
		$('.overlay-veil').show(500);
		$('.overlay').show(500);
	});

	$('.login').on("click",function(){
		$('.signup-form').hide(500);
		$('.login-form').show(500);
		if($(this).hasClass("color-active") == false){
			$('.signup').removeClass("color-active");
			$(this).addClass("color-active");
		}
	});
	$('.signup').on("click",function(){
		$('.login-form').hide(500);
		$('.signup-form').show(500);
		if($(this).hasClass("color-active") == false){
			$('.login').removeClass("color-active");
			$(this).addClass("color-active");
		}
	});

	$('.close-overlay').on("click",function(){
		$('.overlay').hide(500);
		$('.overlay-veil').hide(500);
	});
	



});