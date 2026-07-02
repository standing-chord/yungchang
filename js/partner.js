gsap.registerPlugin(ScrollTrigger);

const partnerLetterWrap = document.querySelector('.section30 .meet-letter-wrap');
const partnerLetter = document.querySelector('.section30 .meet-letter-wrap .meet-letter');


if (partnerLetterWrap && partnerLetter) {
    // 처음 로딩 애니메이션 협력사 글자 나타남
    gsap.fromTo(partnerLetterWrap,
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
    gsap.to(partnerLetter, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.section31',
            start: 'top 95%',
            end: 'top 60%',
            scrub: true,
            // markers: true
        }
    });
}



//아래 부분 애니메이션 만들기



