// 헤더가 나왔다 들어갔다 만들기
// 동시에 모바일 메뉴가 나왔다 들어갔다 만들기
let lastScrollY = window.scrollY;
const header = document.querySelector('header');
const mobileNav = document.querySelector('.mobile-nav');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('hide');
        mobileNav.classList.add('hide');
    } else {
        header.classList.remove('hide');
        mobileNav.classList.remove('hide');
    }

    lastScrollY = currentScrollY;
});


