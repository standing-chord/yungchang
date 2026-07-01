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


//gsap으로 구현하는 부분
gsap.registerPlugin(ScrollTrigger);



// 인트로 부분 모션
const intro = gsap.timeline();

intro
.from('.section00 div', {
    opacity: 0,
    y: 20,
    duration: 1
})
.to({}, { duration: 0.2 })

.to('.section00 div', {
    opacity: 0,
    y: -10,
    duration: 1.8,
})
// 다음꺼 전에 잠깐 기다리기 waiting
.to({}, { duration: 0.65 })

ScrollTrigger.create({
    animation: intro,
    trigger: ".section00",
    start: 'top top',
    end: '+=1800',
    scrub: 2,
    pin: true,
    anticipatePin: 1,
    // markers: true
});




// 2. 사업 분야 애니메이션
const mm = gsap.matchMedia();
const method = gsap.timeline();

const cards = document.querySelectorAll(".section01 .card");

let num_cards = cards.length;

gsap.set(".section01 .title", {
    opacity: 0,
    scale: 2
});
// gsap.set(".section01 .card", {
//     xPercent: -50,
//     yPercent: -50,
// });


method
.to({}, { duration: 0.2 })
// 사업 분야 글자가 나타남
.to(".section01 .title", {
    opacity: 1,
    duration: 1
})

.to({}, { duration: 0.2 })
// 사업 분야 글자가 이동
.to(".section01 .title", {
    // left: "25%",
    top: "87%",
    scale: 1,
    duration: 2,
    opacity: 0.5,
    ease: "back.out(0.5)"
})

.to({}, { duration: 0.2 })

// 전체 박스 생김
.from(".section01 .card1",
    {
        opacity: 0,
        duration: 0
    })

.to({}, { duration: 0.2 })
// 첫 번째 사진이 먼저 등장
.from(".section01 .card1 .reveal2", {
    xPercent: 100,
    opacity: 0,
    scale: 0.95,
    duration: 1.2,
    ease: "power1.out"
});

//반복문으로 구성
cards.forEach((card, index) => {
    console.log(card);
    let next_card = cards[index + 1];

    method
    //설명하는 글자들 올라옴
    .from(card.querySelectorAll(".reveal1"), {
        y: 30,
        opacity: 0,
        scale: 0.98,
        duration: 1.5,
        stagger: 0.5
    })

    // 한 챕터에 머무르는 시간
    .to({}, { duration: 1.1 })
    
    //카드 사라지는 모션
    .to(card, {
        opacity: 0,
        scale: 0.9,
        duration: 1
    }, `changecard${index}`)

    if (!next_card) return;
    // 다음 전체 박스 생김
    method
    .from(next_card, {
        opacity: 0,
        duration: 0
    }, `changecard${index}`)
    // 다음 사진이 등장
    .from(next_card.querySelectorAll(".reveal2"), {
        xPercent: 100,
        opacity: 0,
        scale: 0.95,
        duration: 1.2,
        ease: "power1.out"
    }, `changecard${index}`);

});


// 동시에 글자도 사라짐
method
.to(".section01 .title", {
    scale: 0.9,
    duration: 0.5,
    opacity: 0
}, `changecard${num_cards-1}`)

// 다음꺼 전에 잠깐 기다리기 waiting
.to({}, { duration: 0.65 });


ScrollTrigger.create({
    animation: method,
    trigger: ".section01",
    start: 'top top',
    end: `+=${1000 + 2050 * num_cards}`,
    scrub: 2,
    pin: true,
    anticipatePin: 1,
    // markers: true
});



// mm.add("(min-width: 769px)", () => {
//     //PC에서만 실행

//     });
// });



// mm.add("(max-width: 768px)", () => {
//     // 모바일에서만 실행
    
//     });


// });

// 회사 정보 부분 모션
const info = gsap.timeline();

info
.from(".section02 div h2, .section02 div h3, .section02 div p", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.2
})
.to({}, { duration: 3 })
// .to(".section02 div h2, .section02 div h3, .section02 div p", {
//     opacity: 0,
//     y: -10,
//     duration: 1.8
// })
// .to({}, {
//     duration: 0.5
// })

ScrollTrigger.create({
    animation: info,
    trigger: ".section02",
    start: 'top top',
    end: '+=1000',
    scrub: 2,
    pin: true,
    anticipatePin: 1,
    // markers: true
});



