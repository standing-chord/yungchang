gsap.registerPlugin(ScrollTrigger);

const historyLetterWrap = document.querySelector('.section10 .meet-letter-wrap');
const historyLetter = document.querySelector('.section10 .meet-letter-wrap .meet-letter');

console.log(historyLetterWrap)
if (historyLetterWrap && historyLetter) {
    // 처음 로딩 애니메이션 회사 연혁 글자 나타남
    gsap.fromTo(historyLetterWrap,
        {
            opacity: 0,
            y: 10
        },
        {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: 'power1.inOut',
        });
        
    // 스크롤을 하는 경우는 글자가 사라지도록
    gsap.to(historyLetter, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.section11',
            start: 'top 95%',
            end: 'top 60%',
            scrub: true,
            // markers: true
        }
    });
}



//아래 부분 애니메이션 만들기

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
            scrub: 2,
            // markers: true,
        }
    });
});

// 설명에 대한 애니메이션
const yearsWords = document.querySelectorAll('.oneyear p');

yearsWords.forEach((yearsWord) => {
    gsap.from(yearsWord, {
        y: 30,
        scale: 0.98,
        opacity: 0,
        duration: 0.8,

        scrollTrigger: {
            trigger: yearsWord,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: 2,
            // markers: true,
        }
    });
});

// 세로 선에 대한 애니메이션
const hider = document.querySelector('.section11 .hider');

gsap.from(hider, {
    height: 0,
    ease: 'power1.out',

    scrollTrigger: {
        trigger: '.section11',
        start: 'top 50%',
        end: 'bottom bottom',
        scrub: 2,
        // markers: true
    }
});


