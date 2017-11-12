

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
