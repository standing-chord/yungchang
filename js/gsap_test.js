gsap.registerPlugin(ScrollTrigger);



// 인트로 부분 모션
const intro = gsap.timeline();

intro
.from('.section0 div', {
    opacity: 0,
    y: 20,
    duration: 1
})
.to({}, {
    duration: 0.2
})
.to('.section0 div', {
    opacity: 0,
    y: -10,
    duration: 1.8
})
.to({}, {
    duration: 0.2
})

ScrollTrigger.create({
    animation: intro,
    trigger: ".section0",
    start: 'top top',
    end: '+=1500',
    scrub: 3,
    pin: true,
    anticipatePin: 1,
    markers: true
});




// 사업 분야 애니메이션
gsap.set(".section1 .title", {
    xPercent: -50,
    yPercent: -50,
    opacity: 0,
    scale: 2
});
gsap.set(".section1 .card", {
    xPercent: -50,
    yPercent: -50,
    // opacity: 0
});


const mm = gsap.matchMedia();
const method = gsap.timeline();

const cards = document.querySelectorAll(".section1 .card");

let num_cards = cards.length;

console.log(cards.length);

method
.to({}, { duration: 0.2 })
// 사업 분야 글자가 나타남
.to(".section1 .title", {
    opacity: 1,
    duration: 1
})

.to({}, { duration: 0.2 })
// 사업 분야 글자가 이동
.to(".section1 .title", {
    // left: "25%",
    top: "87%",
    yPercent: -100,
    scale: 1,
    duration: 1.2
})

.to({}, { duration: 0.2 })

// 전체 박스 생김
.from(".section1 .card1",
    {
        opacity: 0,
        duration: 0
    })

.to({}, { duration: 0.2 })
// 첫 번째 사진이 먼저 등장
.from(".section1 .card1 .reveal2", {
    xPercent: 100,
    opacity: 0,
    scale: 0.95,
    duration: 1.2
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
        duration: 2,
        stagger: 0.5
    })

    .to({}, { duration: 0.3 })
    
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
    // 다음 사진이 먼저 등장
    .from(next_card.querySelectorAll(".reveal2"), {
        xPercent: 100,
        opacity: 0,
        scale: 0.95,
        duration: 1.2
    }, `changecard${index}`);

});


// 동시에 글자도 사라짐
method
.to(".section1 .title", {
    scale: 0.9,
    duration: 0.5,
    opacity: 0
}, `changecard${num_cards-1}`);


ScrollTrigger.create({
    animation: method,
    trigger: ".section1",
    start: 'top top',
    end: `+=${1000 + 2500 * num_cards}`,
    scrub: 2,
    pin: true,
    anticipatePin: 1,
    markers: true
});



// mm.add("(min-width: 769px)", () => {
//     //PC에서만 실행

//     ScrollTrigger.create({
//         animation: method,
//         trigger: ".section1",
//         start: 'top top',
//         end: '+=8500',
//         scrub: 2,
//         pin: true,
//         anticipatePin: 1,
//         markers: true
//     });
// });



// mm.add("(max-width: 768px)", () => {
//     // 모바일에서만 실행
    
//     });


// });










