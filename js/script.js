window.onload = function () {
    setTimeout(function () {
        preloader.style.display = "none";
        let burger = document.getElementById("burger");
        burger.addEventListener("click", showMenu);
        let toggle = 0;
        if(location.pathname.split('/').slice(-1)[0]==="author.html") {$(function () {
            $("#accordion").accordion();
        });}
        function showMenu() {
            let menu = document.getElementById("mobile-nav-ul");
            if (toggle == 0) {
                toggle = 1;
                menu.className = "mobile-nav-ul-active";
                return;
            }
            if (toggle == 1) {
                toggle = 0;
                menu.className = "mobile-nav-ul";
                return;
            }
        }
    }, 600)
    let preloader = document.getElementById("preloader");
}
