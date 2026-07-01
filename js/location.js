gsap.registerPlugin(ScrollTrigger);

const LocationLetter = document.querySelector('.section20 div');

if (LocationLetter) {
    // 처음 로딩 애니메이션 화사 위치 글자 나타남
    gsap.fromTo(LocationLetter,
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
                gsap.to(LocationLetter, {
                    opacity: 0,
                    ease: 'power1.out',
                    scrollTrigger: {
                        trigger: '.section21',
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