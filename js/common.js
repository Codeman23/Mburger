//=========================================================================================== menu_open//

window.onload = function () { //пусть страница загрузится
    var mnu = document.querySelector(".toggle_mnu"); //выберем определенный узел по классу через queryselector
    var hmenu = document.querySelector(".header__hidden-menu"); //cоздаем переменную для cпрятанного подменю чтоб отобразить его
    var sandwich = document.querySelector(".sandwich"); //cоздаем переменную для cпрятанного подменю крестик!

    //пишем для него событие

    mnu.addEventListener('click', function () {
        hmenu.classList.toggle("hidden_appear");
        sandwich.classList.toggle("active");
    });

};


jQuery(document).ready(function () {

    //================================================================================= mate_accord //

    var mateButton = $('.mate__title');
    var mateWrapper = $('.team__item');

    mateButton.click(function () {

        mateWrapper.removeClass('team__item_active');
        $(this).closest('.team__item').addClass('team__item_active');
    });

    //================================================================================== menu_accord //



    var menuButton = $('.menu__button');


    menuButton.click(function () {

        var buttonWidth = menuButton.outerWidth(true);
        var windowWide = $(window).width();

        function refresh() {
            var accordWidth = buttonWidth * 3;
            return $(window).width()-accordWidth;
        }

        refresh();

        /*        $(window).resize(function () {
         refresh();
         });*/


        if(windowWide > 800) {

            $(this).closest('.menu__item').toggleClass('menu__item_active');
            $(this).closest('.menu__item').siblings().removeClass('menu__item_active');

        } else if (windowWide <= 800 && windowWide >= 480) {

            $(this).next('.menu__desc').toggleClass('menu__desc_active');
            if($('.menu__desc').hasClass('menu__desc_active')) {

                $(this).next('.menu__desc').css('width', refresh());
                $(this).closest('.menu__item').siblings().children('.menu__desc').removeClass('menu__desc_active');

            } else {
                $(this).next('.menu__desc').removeAttr('style');
            }

            $(this).closest('.menu__item').siblings().children('.menu__desc').removeAttr('style');

        } else if (windowWide < 480) {

            $(this).closest('.menu__item').toggleClass('menu__item_mobile');
            $(this).closest('.menu__item').siblings().removeClass('menu__item_mobile');
        }

    });

    //===================================================================== menu_accord_close //

    $('.menu__close').click(function (event) {
        event.preventDefault();
        $('.menu__desc').removeAttr('style');
        $(this).closest('.menu__item').removeClass('menu__item_mobile');

    });

    //========================================================================= reviews_modal //

    var modalWindow = $('.reviews__modal-wrap');
    var modalTitle = $('.modal__title');
    var modalText = $('.modal__text');

    $('.reviews__button').click(function () {

        modalTitle.text($(this).prev().prev('.review__title').text());
        modalText.text($(this).prev().text());

        modalWindow.show('slow', function () {

            $(this).find('.modal__svg-wrap');
            modalWindow.click(function () {
                modalWindow.hide('slow');
            });
        });
    });

    //============================================================================ burgers_slider //

    var slider =  $('.bx-slider').bxSlider({
        speed: 1000
    });

    $('.control_right').on('click', function () {
        slider.goToNextSlide();
    });

    $('.control_left').on('click', function () {
        slider.goToPrevSlide();
    });


    //======================================================ПОДКЛЮЧЕНИЕ ПЛАГИНА One page scroll=======================================================================//

    var mainTo = $(".main");

    mainTo.onepage_scroll({
        sectionContainer: ".section", // контейнер, к которому будет применяться скролл
        easing: "ease", // Тип анимации "ease", "linear", "ease-in", "ease-out", "ease-in-out"
        animationTime: 1000, // время анимации
        pagination: true, // скрыть или отобразить пагинатор
        updateURL: false, // обновлять URL или нет

        responsiveFallback: 480
        //direction: "horizontal"

    });


    $('.nav__list').on('click', '.nav__item', function () {
        //далее сохраним ее в переменную
        var $this = $(this);
        var index = $this.index();

        if (index==0) {
            mainTo.moveTo(2);
        } else if (index==1) {
            mainTo.moveTo(3);
        } else if (index==2) {
            mainTo.moveTo(5);
        } else if (index==3) {
            mainTo.moveTo(6);
        } else if (index==4) {
            mainTo.moveTo(4);
        } else if(index==5) {
            mainTo.moveTo(8);
        }
    });

    $('.header__button').on('click', function () {
        mainTo.moveTo(7);
    });

    $('.first__scroll-icon').on('click', function () {
        mainTo.moveTo(2);
    });

    function closedoopmenu() {
        $('.header__hidden-menu').removeClass('hidden_appear');
        $('.sandwich').removeClass('active');
    }

    $('.hidden-nav__list').on('click', '.hidden-nav__item', function () {
        var $this = $(this);
        var index = $this.index();

        if (index==0) {
            mainTo.moveTo(2);
        } else if (index==1) {
            mainTo.moveTo(6);
        } else if (index==2) {
            mainTo.moveTo(4);
        } else if (index==3) {
            mainTo.moveTo(5);
        } else if (index==4) {
            mainTo.moveTo(7);
        } else if(index==5) {
            mainTo.moveTo(8);
        }
        closedoopmenu();
    });


    function mobileMu() {
        if ( $(window).width() < 480) {

            $('.best').attr('id', 'best');
            $('.contacts').attr('id', 'contacts');
            $('.menu').attr('id', 'menu');
            $('.reviews').attr('id', 'reviews');
            $('.team').attr('id', 'team');
            $('.delivery').attr('id', 'delivery');

        } else {
            $('.section').removeAttr('id');
        }
    }

    mobileMu();

    $(window).resize(function() {
        mobileMu();
    });

    //============================================================================================================================== подключение карты google maps//

    function initMap(){
        var element = document.getElementById('contacts__map');
        var image = 'https://codeman23.github.io/mburger/svg/map-marker.svg';
        var options = {
            zoom: 15,
            center: {lat: 59.939095, lng: 30.315868}
        };
        var myMap= new google.maps.Map(element, options);

        addMarker({lat: 59.939095, lng: 30.315868});
        addMarker({lat: 59.931907, lng: 30.322082});
        addMarker({lat: 59.939647, lng: 30.334245});


        function addMarker(coordinates) {
            var marker = new google.maps.Marker({
                position: coordinates,
                map: myMap,
                icon: image
            });
        }

    }

    initMap();


});




function initMap(){
    var element = document.getElementById('contacts__map');
    var image = 'https://codeman23.github.io/mburger/svg/map-marker.svg';
    var options = {
        zoom: 15,
        center: {lat: 59.939095, lng: 30.315868}
    };
    var myMap= new google.maps.Map(element, options);

    addMarker({lat: 59.939095, lng: 30.315868});
    addMarker({lat: 59.931907, lng: 30.322082});
    addMarker({lat: 59.939647, lng: 30.334245});


    function addMarker(coordinates) {
        var marker = new google.maps.Marker({
            position: coordinates,
            map: myMap,
            icon: image
        });
    }
    
        google.maps.event.addListener(map, 'mousedown', function(event){
        this.setOptions({scrollwheel:true});
    });
    google.maps.event.addListener(map, 'mouseover', function(event){
        self = this;
        timer = setTimeout(function() {
            self.setOptions({scrollwheel:true});
        }, 1000);
    });
    google.maps.event.addListener(map, 'mouseout', function(event){
        this.setOptions({scrollwheel:false});
        clearTimeout(timer);
    });

}

initMap();


//============================================================================================================ подключение карты google maps//
