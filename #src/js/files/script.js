$(document).ready(function(){
	$('.student-slider').slick({
		arrows: true,
		slidesToShow: 3,
		infinite: false,
		draggable: false,
		swipe: false,
		variableWidth: true,
		responsive:[
			{
				breakpoint: 1165,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					dots: true,
					draggable: true,
					swipe: true,
					variableWidth: false,
					slidesToShow: 1,
				}
			},
		]
	});
});