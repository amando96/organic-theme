// Gumby is ready to go
Gumby.ready(function() {
	Gumby.log('Gumby is ready to go...', Gumby.dump());

	// placeholder polyfil
	if(Gumby.isOldie || Gumby.$dom.find('html').hasClass('ie9')) {
		$('input, textarea').placeholder();
	}

	// skip link and toggle on one element
	// when the skip link completes, trigger the switch
	$('#skip-switch').on('gumby.onComplete', function() {
		$(this).trigger('gumby.trigger');
	});
        
        $('.bxslider').bxSlider();

        var a = [
            {"image":"img/products/shave-gel.jpg","caption":"Any donation is appreciated. PikaChoose is free to use!","link":"http://pikachoose.com","title":"Image 1"},
            {"image":"img/products/soap.jpg","caption":"Be sure to check out <a href=\"http://www.pikachoose.com\">PikaChoose.com</a> for updates.","link":"http://pikachoose.com","title":"Image 2"},
            {"image":"img/products/face-cream.jpg","caption":"You can use any type of html you want with PikaChoose","link":"http://pikachoose.com","title":"Image 3"}
            ];
        $(".pikachoose").PikaChoose({data:a});
// Oldie document loaded
}).oldie(function() {
	Gumby.warn("This is an oldie browser...");

// Touch devices loaded
}).touch(function() {
	Gumby.log("This is a touch enabled device...");
});
