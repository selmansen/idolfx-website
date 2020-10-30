/* >>>>> WOW EFFECT <<<<<
-----------------------*/
$(function(){
	wow = new WOW(
		{
			boxClass:     'eff',
			animateClass: 'animated',
			offset:       150,
		}
		// data-wow-duration: Change the animation duration
		// data-wow-delay: Delay before the animation starts
		// data-wow-offset: Distance to start the animation (related to the browser bottom)
		// data-wow-iteration: Number of times the animation is repeated
	)
	wow.init();
});
/* >>>>> WOW EFFECT <<<<<
---------END-----------*/



/* >>>>> TAB <<<<<
----------------*/
$(function(){
	$(".tabTitle").children("div").on("click", function(){
		let i = $(this).index();
		let tabTitleAll = $(".tabTitle").children("div");
		let tabItemWrap = $(this).parent(".tabTitle").data("content");
		let tabItem = $("."+tabItemWrap).children(".item");
	
		tabTitleAll.removeClass("active");
		$(this).addClass("active");
		tabItem.removeClass('active').eq(i).addClass('active');
	});
})
/* >>>>> TAB <<<<<
---------END----*/


/* >>>>> MENU <<<<<
-----------------*/
function menu(){
	$(".menuBar").on("click", function(){
		if ( !$(this).hasClass('active') ){
			$(this).addClass("active");	
			$(".main-menu").addClass('opened');
			return false;
		}else{
			$(this).removeClass("active");	
			$(".main-menu").removeClass('opened');
		}
	});

	$("body").on("click", function(){
		if ( $(".menuBar").hasClass("active") ){
			if ( !$('.main-menu:hover').length != 0){
				$(".menuBar").removeClass("active");	
				$(".main-menu").removeClass('opened');
			}
		}
	});
}
/* >>>>> MENU <<<<<
---------END-----*/


/* >>>>> FIXED ELEMENT <<<<<
--------------------------*/
function fixed(){
	$(window).on("load scroll resize", function(){
		const header = document.querySelector("header");    
		const form = document.querySelector(".bottom-form");    
		if(window.scrollY > 0){
			header.classList.add("fixed");
			if ( form != null && form != undefined ) form.classList.add("fixed");
		}
		else{
			header.classList.remove("fixed");
			if ( form != null && form != undefined ) form.classList.remove("fixed");
		}
	});
}
/* >>>>> FIXED ELEMENT <<<<<
---------END--------------*/
