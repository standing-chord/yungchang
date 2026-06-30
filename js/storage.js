const slides = document.querySelectorAll('.slide');
const slideTexts = document.querySelectorAll('.slide-text');
let current_index = 0;

function nextSide() {
    slides[current_index].classList.remove('active');
    slideTexts[current_index].classList.remove('active');

    current_index = (current_index + 1) % slides.length;

    slides[current_index].classList.add('active');
    slideTexts[current_index].classList.add('active');
}

function animateInitialText() {
    // slideTexts[current_index].classList.remove('active');
    requestAnimationFrame(() => {
        setTimeout(() => slideTexts[current_index].classList.add('active'), 500);
    });
}

if (slides.length > 1 && slides.length == slideTexts.length) {
    if (document.readyState === 'loading') {
        window.addEventListener('DOMContentLoaded', animateInitialText);
    } else {
        animateInitialText();
    }

    setInterval(nextSide, 5000);
}

// 헤더가 나왔다 들어갔다 만들기
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    lastScrollY = currentScrollY;
});

// 목표와 수단 부분 자연스러운 등장
const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.18
});

revealItems.forEach((item) => revealObserver.observe(item));
