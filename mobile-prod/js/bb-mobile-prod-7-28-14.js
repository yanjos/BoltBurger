<script src="/js/bootstrap.min.js" type="text/javascript"></script><script>
$(document).ready(function () {
    $('#wrap').addClass('container-fluid');
    $('.ui-res-locations-search-criteria-container, .ui-res-locations-search-result-container, .ui-res-order-date-time-input, .ui-res-order-status-container, .ui-res-menu-dropdown-container').wrapAll('<div class="center-wrapper" />');

    $('.pre-order-dine-in, .order-take-out, .home-btns').wrapAll('<div class="home-buttons-wrap" />');
    if ($('.home-buttons-wrap .home-buttons-wrap').length) {
        $('.home-buttons-wrap:first').replaceWith($('.home-buttons-wrap:first').html());
    }

});

$(window).load(function () {
   /* $('.add-to-order-btn').on('click',function(){
          $('.step-by-step-customization-page-b').hide();
    });*/

    var $navMenu = $('.ui-res-header-main-navigation-container.nav > ul:first');
    $('.jqm-header-container').append($navMenu);
    $('.jqm-header-container > ul > li').addClass('btn btn-default btn-block');
    $('.my-panel-trigger').live('click', function () {
        $('.jqm-header-container').children('ul').toggle();
    });
    var $custNav = $(".cust-nav");
    var $custHeader = $('.jqm-header');

    var itemsCount = myresTopNav.utils.getBagItemCount();
    $custHeader.find(".count").html(itemsCount);

    var isUserLoggedIn = myresTopNav.utils.getLoginStatus();
    if (isUserLoggedIn) {
		$('.home-login').text('MY ACCOUNT');
        $custNav.find(".create-account, .login").hide();
        $custNav.find(".welcome, .logout").show();
        $custNav.find(".name").html(myresTopNav.utils.getLoginFirstName());
		$('.jqm-header-container > ul > li > a:contains("Create Account")').closest('li').hide();
    } else {
        $custNav.find(".create-account, .login").show();
        $custNav.find(".welcome, .logout").hide();
    }

    var checkoutLink = $('.jqm-bolt-cart-count:first').attr('href');
    $('.jqm-bolt-header').find('.fa-shopping-cart').wrap('<a href="' + checkoutLink + '" />');

    var $logOutLink = $('.ui-res-header-account-and-cart-navigation-container-nav .ui-res-header-account-and-cart-navigation-sign-in[data-tag=rw-header-logout-click]');
    if ($logOutLink.length) {
        $('.jqm-header-container > ul > li > a:contains("Login")').replaceWith($logOutLink);
    }

    if ($('.review-and-checkout').length) {
        $('.ui-res-order-status-container,.ui-res-order-date-time-container').not(':first').hide();
		/*disables the select quantity element in the simple basket*/
		$('td.qty .ui-res-input-select').attr('disabled','disabled');
		
        $('.ui-res-checkout-btn-container button').live('click', function () {
            if ($.trim($('div[name=res-general-error-container]').text()) != '') {
                $('html,body').animate({
                    scrollTop: $('.ui-res-error-msg-item-container').offset().top
                });
            }
        });
    }

    var $dollarAmount = $('.menu-list-item-price:contains("$0.00")');
    if ($dollarAmount) {
        $dollarAmount.hide();
    }
});
</script>