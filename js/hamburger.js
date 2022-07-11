const hamburgerButton = document.getElementById('js-btnHamburger');
const navigation = document.getElementById('js-navigationWrapper');

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('hamburger--open');
    navigation.classList.toggle('navigation--open');
});