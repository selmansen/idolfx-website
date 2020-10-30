/* >>>>> HORIZONTAL SCROLL <<<<<
------------------------------*/
$(function(){
	$(".scroll-wrapper").mCustomScrollbar({
		axis:"x",
		theme:"inset",
		advanced:{
			autoExpandHorizontalScroll:true
		},
		scrollButtons:{
			enable:true
		}
	});
});
/* >>>>> HORIZONTAL SCROLL <<<<<
---------END------------------*/



/* >>>>> HOMEBANNER <<<<<
-----------------------*/
$('.homeslider').slick({
	dots: true,
	arrows: true,
	speed: 500,
	appendDots:$('.homeslider-dots').children(".container"),
	responsive: [
	  {
		breakpoint: 1024,
		settings: {
			dots: false
			}
		}
	]
});
/* >>>>> HOMEBANNER <<<<<
---------END-----------*/



/* >>>>> RSS <<<<<
----------------*/
$('.rss-slider').slick({
	dots: false,
	arrows: false,
	speed: 500,
	vertical:true,
	verticalSwiping:true,
	autoplay: true,
	autoplaySpeed: 5000,
	responsive: [
		{
		breakpoint: 1024,
		settings: {
			autoplay: false
			}
		}
	]
});
/* >>>>> RSS <<<<<
---------END----*/



/* >>>>> MOBILE FORM <<<<<
------------------------*/
$(".bt-form").find("input").on("focus", function(){
	$(".bt-form").find(".inputline").addClass("focus");
	$(".bt-form").find(".close").addClass("active");
	$(".bt-form").find(".checkboxline").addClass("d-block");
});

$(".bt-form").find(".close").on("click", function(){
	$(".bt-form").find(".inputline").removeClass("focus");
	$(".bt-form").find(".close").removeClass("active");
	$(".bt-form").find(".checkboxline").removeClass("d-block");
});
/* >>>>> MOBILE FORM <<<<<
---------END------------*/



/* >>>>> VALIDATION <<<<<
------------------------*/
(function() {
	window.addEventListener('load', function() {
	  var forms = document.getElementsByClassName('bt-form');
	  var formBody = document.querySelector('.bt-form');
	  var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		  }else{
			let content = document.createElement("div");
			content.innerHTML = '<div class="animated fadeIn thankyou"><img src="assets/images/subpage/ic-tick.svg" alt=""><h3>Üyeliğiniz başarılı şekilde oluşturuldu.</h3><p>Üyeliğinizi aktifleştirmek için lütfen e-posta adresinizi kontrol ediniz.</p></div>';
			formBody.appendChild(content);
			
			event.preventDefault();
		}
		  form.classList.add('was-validated');
		}, false);
	  });
	}, false);
})();
/* >>>>> VALIDATION <<<<<
---------END------------*/