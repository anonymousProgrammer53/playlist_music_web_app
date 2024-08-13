const hambMenu = document.querySelector('img[src="./public/assets/images/icon-hamburger.svg"]');
const navList = document.querySelector('ul[class="fs-20 text-white bg-very-dark-desaturated-blue-672 w-100 p-block-2rem-672 absolute-672 inset-block-start-25-672 inset-inline-0-672 z-index-10-672 d-none-672 d-flex flex-dir-col-672 align-items-center justify-content-center row-g-2rem-672 col-g-4rem cursor-pointer cursor-default-672"]');

hambMenu.addEventListener('click', () => {
    if (navList.classList.contains('d-none-672')) {
        navList.classList.remove('d-none-672');
    } else if (!navList.classList.contains('d-none-672')) {
        navList.classList.add('d-none-672');
    }
});