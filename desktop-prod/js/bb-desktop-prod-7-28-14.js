<script> 
  $(window).load(function() { 
    /*Removes a clear div on the simple basket component being used on the checkout and review page*/
        $('.review-and-checkout .item .clear-both').remove();
    /*Removes cash option for checkout*/
    $('.paymentMethod-input option[value=Cash]').remove();
    /*Reorders the order status component to match comps*/
    if($('.menu').length){
        $('.ui-res-order-location-container').prepend($('.ui-res-order-basket-items-container'));
        $('.ui-res-order-basket-items-container').append($('.total-container'));
    }

    /*Checks the status of the user and hide/shows login/logout link*/
    var $custNav = $(".cust-nav"); 
    var itemsCount = myresTopNav.utils.getBagItemCount(); 
    $custNav.find(".count").html(itemsCount); 
     
    var isUserLoggedIn = myresTopNav.utils.getLoginStatus(); 
    if (isUserLoggedIn) { 
      $custNav.find(".create-account, .login").hide(); 
      $custNav.find(".welcome, .logout").show(); 
      $custNav.find(".name").html(myresTopNav.utils.getLoginFirstName()); 
    } else { 
      $custNav.find(".create-account, .login").show(); 
      $custNav.find(".welcome, .logout").hide(); 
    } 
    
    /*Hide any dollar amount that is $0.00*/
    var $dollarAmount = $('.menu-list-item-price:contains("$ 0.00")');
     if($dollarAmount){
         $dollarAmount.hide();   
     }
/*Runs function necessary for restricted categories to be flagged and not added to cart*/
	$(function(){
		$(".locations").click(function() {
			$.showPageLoadingMsg();
			if(false){
				goToPage('/myres/locations/searchLocationsResults.jsp?P_ORDER_TYPE=P_TAKE_OUT');
			} else {
				if(false){
				goToPage('/myres/locations/order_date_time_on_another_page.cmd?P_ORDER_TYPE=P_TAKE_OUT&SELECT_STORE_ID=225');
				} else {
				goToPage('/myres/locations/searchLocationsResults.jsp?P_ORDER_TYPE=P_TAKE_OUT&SELECT_STORE_ID=225');
				}
			}

		});
	})
    }); 
</script><script> 
$(function() {
            Galleria.run('#galleria', {
                showInfo: false,
                autoplay: 7000,
                thumbnails: false,
                showCounter: false,
                initialTransition: 'fade'
             });
});
</script>
