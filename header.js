// const screen = document.querySelector('.screen');
// const content = document.querySelector('.content');
// const cover = document.querySelector('.cover');
// const contentHeader = document.querySelector('.content-header');

// const coverHeight = cover.clientHeight;
// const contentHeaderHeight = contentHeader.clientHeight;

// console.log(coverHeight);
// console.log(contentHeaderHeight);

window.addEventListener('scroll', () => {
    let targetY = document.querySelector('.grap').getBoundingClientRect().top;
    const h = document.querySelector('header');
    let y = window.scrollY;//창 위치
    if (y > targetY + 100) {
        // h.classList.remove('dpnone')
        h.style.opacity = '1';
    } else {
        // h.classList.add('dpnone')
        h.style.opacity = '0';
    }
});
// =====================================
// console.log(screen.getBoundingClientRect().top);// 현재 y 거리
// console.log(screen);
// console.log(screen.getBoundingClientRect().top);