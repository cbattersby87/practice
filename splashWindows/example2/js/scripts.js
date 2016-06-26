var $a = $('.step1');
var $b = $('.step2');
var $c = $('.step3')
var $body = $('body')


/* SPLASH SCREEN 1 if start button is clicked */
$( "#start" ).click(function() {

	setTimeout(function(){
				$body.toggleClass('step1-open');
			},150)

			$(".page-wrap").toggle();
});


$( ".cancel-step1" ).click(function() {

	setTimeout(function(){		
	$a.addClass('close');
	},150)
	$(".page-wrap").toggle();		
	location.reload();	
			
});

/* SPLASH SCREEN 2 */
$( ".next-step1" ).click(function() {

	setTimeout(function(){
	$body.toggleClass('step2-open');
	$b.removeClass('close');
	$body.toggleClass('step1-open');
	},150)

	$( ".cancel-step2" ).click(function() {
	$b.addClass('close');
	$(".page-wrap").toggle();		
	location.reload();	
	});

	$( ".back-step2" ).click(function() {

	$body.removeClass('step2-open');
	//$b.removeClass('active');

	setTimeout(function(){
			$body.addClass('step1-open');
			},150)

		setTimeout(function(){
				$b.addClass('close');
			},150)

});

});



/* SPLASH SCREEN 3 */
$( ".next-step2" ).click(function() {

	$body.toggleClass('step2-open');

	setTimeout(function(){
				$body.toggleClass('step3-open');
				$b.addClass('close');
			},150)

	$( ".cancel-step3" ).click(function() {
	$c.addClass('close');
	$(".page-wrap").toggle();		
	location.reload();	
	});

	$( ".back-step3" ).click(function() {


	$body.removeClass('step3-open');
	//$c.removeClass('active');

	setTimeout(function(){
		$body.toggleClass('step2-open');
		//$b.removeClass('active');
	},100);

	$b.removeClass('close');
});

});









function output(){
              var x, name, location, address, city, zip;
              x = document.getElementById("register");

              name = x.elements["name"].value;
              nameData = document.getElementById("nameValue");
              nameData.value = name;

              address = x.elements["address"].value;
              addressData = document.getElementById("addressValue");
              addressData.value = address;

              city = x.elements["city"].value;
              cityData = document.getElementById("cityValue");
              cityData.value = city;

              zip = x.elements["zip"].value;
              zipData = document.getElementById("zipValue");
              zipData.value = zip;

              $c.addClass('close');
			$(".page-wrap").toggle();		
		//	location.reload();	
            }
