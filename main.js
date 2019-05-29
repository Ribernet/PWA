// Service Worker
if('serviceWorker' in navigator) {
	console.log('puedes usar los service worker');
	//alert('puedes usar los service worker');
	navigator.serviceWorker.register('./sw.js')
		.then(res=>console.log('service worker cargado correctamente',res))
		.catch(err=>console.log('service worker no se ha podido registrar',err))
} else {
	alert('NO puedes usar los service worker');
}

//scroll suavizado
$(document).ready(function(){
	$("#menu a").click(function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $($(this).attr('href')).offset().top
		});
		return false;
	});
});
