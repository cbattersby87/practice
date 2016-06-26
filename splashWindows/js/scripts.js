var $a = $('.splashScreen1');
var $b = $('.splashScreen2Wrap');
var $c = $('.splashScreen3')
var $body = $('body')


/* BODY ONLOAD FUNCTION 
 function startSplash()
  {

  	$a.addClass('open');
		$b.addClass('open');
		setTimeout(function(){
			$a.addClass('fadein');
			},150)

			$(".overlay").toggle();
    
  }
  window.onload=startSplash;

*/
/* SPLASH SCREEN 1 if start button is clicked */
$( "#start" ).click(function() {
	$a.addClass('open');
	//$b.addClass('open');
		setTimeout(function(){
			$a.addClass('fadein');
			},150)

			$(".overlay").toggle();
});


$( "#cancel" ).click(function() {
	$a.removeClass('fadein');
			setTimeout(function(){
				$a.removeClass('open');
			},150)

			$(".overlay").toggle();
			
});

/* SPLASH SCREEN 2 */
$( ".menu-toggle" ).click(function() {


	$body.toggleClass('splashScreen2-open');

	$b.addClass('active');

	$b.removeClass('close');

	$a.removeClass('fadein');
			setTimeout(function(){
				$a.removeClass('open');
			},150)


	$( "#cancel2" ).click(function() {
	$b.addClass('close');
	$(".overlay").toggle();		
	location.reload();	
	});

});

$( ".menu-toggle-back" ).click(function() {


	$b.addClass('splashScreen2-open');

	$b.removeClass('active');

	$a.addClass('open');
		setTimeout(function(){
			$a.addClass('fadein');
			},150)


$a.addClass('open');
		setTimeout(function(){
			$a.addClass('fadein');
			},150)
	setTimeout(function(){
				$b.addClass('close');
			},150)

});

/* SPLASH SCREEN 3 */
$( ".menu-toggle2" ).click(function() {
	$b.addClass('splashScreen2-right');
/*
		setTimeout(function(){	
				$b.addClass('splashScreen2-right');
			},150)
*/
	//$b.addClass('right');

	//$b.addClass('right');

	//$b.toggleClass('active');

	setTimeout(function(){

				$body.toggleClass('splashScreen3-open');
			},150)

	setTimeout(function(){
				$b.addClass('close');
			},150)


	$( "#cancel3" ).click(function() {
	$c.removeClass('fadein');
	setTimeout(function(){
				$c.addClass('close');
			},150)
	
	$(".overlay").toggle();		
	location.reload();	
	});



			
});

$( ".menu-toggle-back3" ).click(function() {

	//alert("hello");
/*
	$b.addClass('splashScreen2-open');

	$b.removeClass('active');

	$a.addClass('open');
		setTimeout(function(){
			$a.addClass('fadein');
			},150)


$a.addClass('open');
		setTimeout(function(){
			$a.addClass('fadein');
			},150)
	setTimeout(function(){
				$b.addClass('close');
			},150)
*/
});





function output(){
              var x, name, location, address, city, zip;
              x = document.getElementById("register");

              name = x.elements["name"].value;
              nameData = document.getElementById("nameValue");
              nameData.value = name;

              location = x.elements["location"].value;
              locationData = document.getElementById("locationValue");
              locationData.value = location;

              address = x.elements["address"].value;
              addressData = document.getElementById("addressValue");
              addressData.value = address;

              city = x.elements["city"].value;
              cityData = document.getElementById("cityValue");
              cityData.value = city;

              zip = x.elements["zip"].value;
              zipData = document.getElementById("zipValue");
              zipData.value = zip;
            }
