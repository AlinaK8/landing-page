$(function() {
    $(".tabs").tabs();

    $("portfolio-tab").tabs();

    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots: true,
        items:1,
        autopay: true,
        slideSpeed: 5000
    });

    let $toggleButton = $('.menu-btn');
    let $menu = $('.header-wrap')
    $toggleButton.click(function() {
        if ($menu.hasClass('show')){
            $menu.removeClass('show')
        } else
        $menu.toggleClass('show');
    });
  

    // (function () {
    //     // .header-nav навигация
    //     let nav = $('.header-nav');

    //     // .menu-btn - кнопка меню
    //     $('.menu-btn').click(function() {
    //         if(nav.hasClass('active')) {
    //             nav.removeClass('active');
    //         }
    //         else {
    //             nav.addClass('active');
    //         }
    //     });
    // }());

});