requirejs.config({
	paths: {
		jquery: 'jquery-1.9.1.min'
	}
});

requirejs(['jquery','backtop'],function ($,backtop){

	// new backtop.BackTop($('#backTop'),{
	// 	mode: 'go'
	// });

	$('#backTop').backtop({
		mode: 'move'
	})


	// var scroll = new scrollto.ScrollTo({});
	// $("#backTop").on('click',$.proxy(scroll.move, scroll));

	// $(window).on('scroll',function(){
	// 	checkPosition($(window).height());
	// });

	// checkPosition($(window).height());

	// function move(){
	// 	$('html body').animate({
	// 		scrollTop: 0
	// 	},800);
	// }

	// function go(){
	// 	$('html body').scrollTop(0);
	// }

	// function checkPosition(pos){
	// 	if($(window).scrollTop() > pos){
	// 		$('#backTop').fadeIn();
	// 	}else{
	// 		$('#backTop').fadeOut();
	// 	}
	// }
});