const toggleMenu = document.querySelector('.toggle__menu');
const dropdownMenu = document.querySelector('.dropdownMenu');

toggleMenu.addEventListener('click', () => {

    dropdownMenu.classList.toggle('h-[22rem]');

});
