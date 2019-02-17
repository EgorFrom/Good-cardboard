$(document).ready(function() {
	//меню 
	var header = $('.header');  
	var itemMenu = $('.item-menu');  
	var headerLogo = $('.header-logo');  
	var menu = $('.menu');

	function windowResize() {
    if ($(window).width() >= '992'){
    	$('.menu').show();
    	header.removeClass('no_top');
    	headerLogo.removeClass('margin-left-40');
			itemMenu.addClass('hidden_important');
		}
    else   {
      $('.menu').hide();
      header.addClass('no_top');
    	headerLogo.addClass('margin-left-40');
			itemMenu.removeClass('hidden_important');
    }
  }	

 	$(window).on('load resize',windowResize);
 	//клики по гамбургеру
 	var flagHum = true; //false переделываем в три полоски иначе в крест
 	window.onload= windowResize();
 	function toggleMobileMenu(){
 		if (flagHum) {
 			itemMenu.addClass('item-menu_inactive');
 			menu.addClass('mobile-menu');
 			flagHum = false;
 		} 
 		else {
 			itemMenu.removeClass('item-menu_inactive');
 			menu.removeClass('mobile-menu');
 			flagHum = true;
 		}
 	}

 	$('.item-menu').on("click",toggleMobileMenu);
 	
 	//клики по мобильному меню
	 $('.menu-anchor').on("click", function() {
    if ($(window).width() <= '992'){
		 	toggleMobileMenu();
		 }
	 });


 	//модальное окно
	$('.header-contacts__btn').on("click", function(){
		$('.overlay').show();
	});

	$('.popup-close').on("click", function() {
		$('.overlay').hide();
	});


});