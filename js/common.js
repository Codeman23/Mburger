//=========================================================================================== menu_open//

window.onload = function () { //пусть страница грузанется
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

        /*        var InfoWindow = new google.maps.InfoWindow({
         content: '<h2>Burgers there!</h2>'
         });

         marker.addListener('click', function () {
         InfoWindow.open(myMap, marker);
         });*/

        function addMarker(coordinates) {
            var marker = new google.maps.Marker({
                position: coordinates,
                map: myMap,
                icon: image
            });
        }

    }

    initMap();


    /*    function initMap(){
     var mapEl = document.getElementById('contacts__map');
     var image = '/svg/map-marker.svg';
     var style = [
     {
     "featureType": "all",
     "elementType": "labels",
     "stylers": [
     {
     "visibility": "off"
     }
     ]
     },
     {
     "featureType": "poi.park",
     "elementType": "geometry.fill",
     "stylers": [
     {
     "color": "#00ff00"
     }
     ]
     },
     {
     "featureType": "road.highway",
     "elementType": "labels",
     "stylers": [
     {
     "visibility": "on"
     }
     ]
     },
     {
     "featureType": "road.arterial",
     "elementType": "labels.text",
     "stylers": [
     {
     "visibility": "on"
     }
     ]
     },
     {
     "featureType": "road.local",
     "elementType": "labels.text",
     "stylers": [
     {
     "visibility": "on"
     }
     ]
     },
     {
     "featureType": "water",
     "elementType": "geometry.fill",
     "stylers": [
     {
     "color": "#0099dd"
     }
     ]
     }
     ];
     var uluru = {
     lat: 59.939095,
     lng: 30.315868
     };

     var map = new google.maps.Map(mapEl, {
     zoom: 12,
     center: uluru,
     styles: style
     });

     var marker = new google.maps.Marker({
     position: uluru,
     map: map,
     icon: image
     });

     var locations = [

     {lat: -37.759859, lng: 145.128708},
     {lat: -37.765015, lng: 145.133858},
     {lat: -37.770104, lng: 145.143299},
     {lat: -37.773700, lng: 145.145187},
     {lat: -37.774785, lng: 145.137978},
     {lat: -37.819616, lng: 144.968119},
     {lat: -38.330766, lng: 144.695692},
     {lat: -39.927193, lng: 175.053218},
     {lat: -41.330162, lng: 174.865694},
     {lat: -42.734358, lng: 147.439506},
     {lat: -42.734358, lng: 147.501315},
     {lat: -42.735258, lng: 147.438000},
     {lat: -43.999792, lng: 170.463352}
     ];


     }

     initMap();*/

});