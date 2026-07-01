gsap.registerPlugin(ScrollTrigger);

const historyLetter = document.querySelector('.section10 div');

if (historyLetter) {
    // 처음 로딩 애니메이션 회사 연혁 글자 나타남
    gsap.fromTo(historyLetter,
        {
            opacity: 0,
            y: 10
        },
        {
            opacity: 1,
            y: 0,
            duration: 2,
            ease: 'power1.inOut',

            onComplete: () => {
                // 로딩 애니메이션 끝난 뒤 스크롤 애니메이션 등록
                gsap.to(historyLetter, {
                    opacity: 0,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: '.section11',
                        start: 'top 95%',
                        end: 'top 50%',
                        scrub: 2,
                        // markers: true
                    }
                });
            }
        }
    );
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


