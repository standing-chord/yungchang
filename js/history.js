// 페이지 로드 시 회사 연혁 글자 나타남
const historyLetter = document.querySelector('.section10 div');
if (historyLetter) {
    historyLetter.classList.add('show');
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

//아래 연혁 부분 애니메이션 만들기
gsap.registerPlugin(ScrollTrigger);

// 년도 숫자에 대한 애니메이션
const years = document.querySelectorAll('.oneyear h2');

years.forEach((oneyear) => {
    gsap.from(oneyear, {
        y: 30,
        scale: 0.98,
        opacity: 0,
        duration: 0.8,

        scrollTrigger: {
            trigger: oneyear,
            start: 'top bottom',
            end: 'bottom 70%',
            toggleActions: 'play none reverse none',
            scrub: 1,
            // markers: true,
        }
    });
});

// 설명에 대한 애니메이션
const years_words = document.querySelectorAll('.oneyear p');

years_words.forEach((oneyear) => {
    gsap.from(oneyear, {
        y: 30,
        scale: 0.98,
        opacity: 0,
        duration: 0.8,

        scrollTrigger: {
            trigger: oneyear,
            start: 'top 90%',
            end: 'bottom 60%',
            toggleActions: 'play none reverse none',
            scrub: 1,
            // markers: true,
        }
    });
});

// 세로 선에 대한 애니메이션
const hider = document.querySelectorAll('.section11 .hider');

gsap.from(hider, {
    height: 0,
    ease: 'power1.out',

    scrollTrigger: {
        trigger: '.section11',
        start: 'top 50%',
        end: 'bottom bottom',
        toggleActions: 'play none reverse none',
        scrub: 1,
        // markers: true
    }
});


