const hamMenu = document.querySelector('.ham');
const offscreenMenu = document.querySelector('.offscreen');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offscreenMenu.classList.toggle('active');
});
