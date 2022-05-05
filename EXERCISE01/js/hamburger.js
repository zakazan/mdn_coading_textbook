const hamburgerButton = document.getElementById('js-btnHamburger');

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('hamburger--open');
});