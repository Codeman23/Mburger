function initMap(){
    var mapEl = document.getElementById('contacts__map');
    var image = 'https://codeman23.github.io/mburger/svg/map-marker.svg';
    var style = [
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "saturation": "-19"
                },
                {
                    "visibility": "on"
                },
                {
                    "lightness": "32"
                },
                {
                    "color": "#f28b00"
                },
                {
                    "weight": "0.90"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#2600ff"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#e87b5d"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#0847ac"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#004074"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "saturation": "58"
                }
            ]
        },
        {
            "featureType": "landscape.natural.landcover",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": "45"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "saturation": "100"
                },
                {
                    "lightness": "-43"
                },
                {
                    "gamma": "2.02"
                },
                {
                    "color": "#ffe700"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffb200"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#53c5ee"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#fafafa"
                },
                {
                    "visibility": "on"
                },
                {
                    "weight": "2.06"
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


    var locations = [
        {lat:59.939095, lng: 30.315868},
        {lat:59.955427, lng: 30.295793},
        {lat:59.943803, lng: 30.367891},
        {lat:59.924506, lng: 30.294506},
        {lat:59.927091, lng: 30.375015}
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            icon: image
        });
    });

    var markerCluster = new MarkerClusterer(
        map,
        markers,
        {
            imagePath: 'img/m'
        });


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



//============================================================================================================ подключение карты google maps//


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
});
