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

// // ===== 스크롤 기반 애니메이션: 목표/수단 섹션 =====
// function initManagementScrollAnimation() {
//     const managementContainer = document.querySelector('.management-container');
//     if (!managementContainer) return;

//     const goalBox = document.querySelector('.goal-box-scroll');
//     const cardItems = document.querySelectorAll('.card-item');

//     if (!goalBox || cardItems.length === 0) return;

//     const containerTop = managementContainer.offsetTop;
//     const containerHeight = managementContainer.offsetHeight;

//     function updateAnimations() {
//         const scrollY = window.scrollY;
//         const relativeScroll = scrollY - containerTop;
//         const progress = relativeScroll / (containerHeight - window.innerHeight);

//         // 목표 박스 페이드 아웃 (0.15 ~ 0.40)
//         let goalOpacity = 1;
//         if (progress >= 0.15 && progress <= 0.40) {
//             goalOpacity = 1 - ((progress - 0.15) / 0.25);
//         } else if (progress > 0.40) {
//             goalOpacity = 0;
//         }
//         goalBox.style.opacity = Math.max(0, Math.min(1, goalOpacity));

//         // 카드 순차 애니메이션
//         cardItems.forEach((card, index) => {
//             // 각 카드별 표시 구간
//             const cardStart = 0.30 + (index * 0.20);
//             const cardEnd = cardStart + 0.18;
//             const cardFadeOut = cardEnd + 0.08;

//             if (progress >= cardStart && progress < cardEnd) {
//                 // 나타나는 구간
//                 card.classList.add('active');
//                 card.classList.remove('fade-out');
//             } else if (progress >= cardEnd && progress < cardFadeOut) {
//                 // 사라지는 구간
//                 card.classList.remove('active');
//                 card.classList.add('fade-out');
//             } else {
//                 // 초기 상태
//                 card.classList.remove('active', 'fade-out');
//             }
//         });
//     }

//     // 스크롤 이벤트 리스너
//     window.addEventListener('scroll', updateAnimations, { passive: true });
//     updateAnimations(); // 초기 실행
// }

// if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', initManagementScrollAnimation);
// } else {
//     initManagementScrollAnimation();
// }
