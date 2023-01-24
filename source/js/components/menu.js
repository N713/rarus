const menu = document.body.querySelector('.menu');
const closeMenu = menu.querySelector('button');
const burger = document.body.querySelector('.burger');

const setMenu = () => {
    closeMenu.addEventListener('click', (evt) => {
        evt.preventDefault();

        menu.classList.add('none');
    });

    burger.addEventListener('click', (evt) => {
        evt.preventDefault();

        menu.classList.remove('none');
    });
}

export { setMenu }
