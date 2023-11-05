const userLink = document.querySelector('.userLink');
const dropdownMenu = document.getElementById('dropdownMenu');
let menuOpen = false;

userLink.addEventListener('click', function (event) {
    event.stopPropagation();
    if (!menuOpen) {
        dropdownMenu.style.display = 'block';
        menuOpen = true;
    } else {
        dropdownMenu.style.display = 'none';
        menuOpen = false;
    }
});

document.addEventListener('click', function (event) {
    if (menuOpen && event.target == userLink) {
        dropdownMenu.style.display = 'none';
        menuOpen = false;
    }
});