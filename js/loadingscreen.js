/* ===================================================
					Preloader
====================================================*/
$(window).on('load',function(){ /* makes sure whole website is loaded*/
	
	$('#status').fadeOut();
	$('#preloader').delay(550).fadeOut();
});