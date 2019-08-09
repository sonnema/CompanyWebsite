var id;

$(document).ready(function(){
	$('#homeCarousel').load('../html/homeCarousel.html');
	$('#homeContent').load('../html/homeContent.html');
	$('.nav-item').click(function(){
		$('.tab-pane').removeClass('active').addClass('fade');
		$('.nav-link').removeClass('active');
		console.log($(this).attr("id"));
		switch($(this).attr("id"))
		{
			case 'homeNav' :
				$('#homeNav a').addClass('active');
				$('#homeTab').removeClass('fade').addClass('active');
				$('#homeCarousel').load('../html/homeCarousel.html');
				$('#homeContent').load('../html/homeContent.html');
				break;
			case 'aboutNav' :
				$('#aboutNav a').addClass('active');
				$('#aboutTab').removeClass('fade').addClass('active').load('../html/aboutUs.html');
				
				break;
			case 'productsNav' :
				$('#productsNav a').addClass('active');
				$('#productsTab').removeClass('fade').addClass('active').load('../html/products.html');
				break;
			case 'infrastructNav' :
				$('#infrastructNav a').addClass('active');
				$('#infrastructTab').removeClass('fade').addClass('active').load('../html/infrastruct.html');
				break;
			case 'awardsNav' :
				$('#awardsNav a').addClass('active');
				$('#awardsTab').removeClass('fade').addClass('active').load('../html/awards.html');
				break;
			case 'contactNav' :
				$('#contactNav a').addClass('active');
				$('#contactTab').removeClass('fade').addClass('active').load('../html/contact.html');
				$("#contactForm").load('../html/contactUsForm.html');
				break;
			default:alert("Something went wrong!!");	
		}
		

		
	});
	//On Scroll Event
	/*$(window).scroll(function() {    
		scroll = $(document).scrollTop();
		if (scroll > 50) 
		{
			$('.navbar-custom').css('background-color','#ffffff');
			$('.navbar-custom').css('background-color','#33475b');
		} 
		else 
		{
			$('.navbar-custom').css('background-color','transparent');
		}
	});*/
	
});
