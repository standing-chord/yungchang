gsap.registerPlugin(ScrollTrigger);

const locationLetterWrap = document.querySelector('.section20 .meet-letter-wrap');
const locationLetter = document.querySelector('.section20 .meet-letter-wrap .meet-letter');

if (locationLetterWrap && locationLetter) {
    // 처음 로딩 애니메이션 오시는 길 글자 나타남
    gsap.fromTo(locationLetterWrap,
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
    gsap.to(locationLetter, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.section21',
            start: 'top 95%',
            end: 'top 60%',
            scrub: true,
            // markers: true
        }
    });
}


//아래 부분 애니메이션 만들기

// 지도에 대한 애니메이션
const mapContainers = document.querySelectorAll('.map-container');

mapContainers.forEach((mapContainer) => {
    gsap.from(mapContainer, {
        // y: 30,
        scale: 0.95,
        opacity: 0,
        duration: 0.8,
        // xPercent: 100,

        scrollTrigger: {
            trigger: mapContainer,
            start: 'top bottom',
            end: 'bottom 80%',
            scrub: 2,
            // markers: true,
        }
    });
});

// 지도를 설명하는 글자에 대한 애니메이션
const mapsWords = document.querySelectorAll('.map-explanation');

mapsWords.forEach((mapsWord) => {
    gsap.from(mapsWord, {
        y: 10,
        scale: 0.98,
        opacity: 0,
        duration: 0.8,

        scrollTrigger: {
            trigger: mapsWord,
            start: 'top bottom',
            end: 'bottom 80%',
            scrub: 2,
            // markers: true,
        }
    });
});

// 지도 파트 아래 연락처에 대한 애니메이션
// 특정 파트에 도달하면 애니메이션이 재생되도록 함

const call = document.querySelectorAll('.section22 div h3, .section22 div p');

gsap.from(call, {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,

    scrollTrigger: {
        trigger: '.section22',
        start: '80% bottom',
        // end: 'bottom 60%',
        // scrub: true,
        toggleActions: "play none none reverse",
        // markers: true
    }
});

