const burger = document.getElementsByClassName('burger')[0];
const sidebar = document.querySelector('.sidebar');

burger.addEventListener('click', (function() {
    burger.classList.toggle('open');
    sidebar.classList.toggle('is-hidden');
}));    