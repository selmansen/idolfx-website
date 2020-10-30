
/* >>>>> SELECT <<<<<
-------------------*/
$(".chosen-select").chosen({
	disable_search_threshold: 10,
	no_results_text: "Bulunamadı!",
	width: "100%"
});
/* >>>>> SELECT <<<<<
---------END-------*/



/* >>>>> VALIDATION <<<<<
------------------------*/
(function() {
	window.addEventListener('load', function() {
	var forms = document.getElementsByClassName('account-form');
	var formsBody = document.querySelector(".account-page_form");
	var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}else{
			let content = document.createElement("div");
			content.innerHTML = `<div class="animated fadeIn thankyou"><img src="assets/images/subpage/ic-tick.svg" alt=""><h3>İşleminiz başarılı şekilde tamamlandı.</h3><p>${thankyou_message}</p></div>`;
			formsBody.appendChild(content);

			event.preventDefault();
		}
		form.classList.add('was-validated');
		}, false);
	});
	}, false);
})();
/* >>>>> VALIDATION <<<<<
---------END------------*/