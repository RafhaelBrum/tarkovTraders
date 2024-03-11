function toggleMenu(trader) {
    var allMenus = document.querySelectorAll('.menu');
    var allTraders = document.querySelectorAll('.trader-item');

    allMenus.forEach(function (menu) {
        menu.style.display = 'none';
    });

    allTraders.forEach(function (traderItem) {
        traderItem.classList.remove('menu-open');
    });

    var menu = document.getElementById(trader + 'Menu');
    var traderItem = document.querySelector('.' + trader);

    menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
    traderItem.classList.toggle('menu-open');

    var traderBackground = "url('/media/tradersBackground/" + trader + "BC.webp')";
    menu.style.backgroundImage = traderBackground;
}
