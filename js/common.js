$(document).ready(function () {
    // анимация
    // let offset;
    // if ($(window).width() > 576) {
    //     offset = 100;
    // } else {
    //     offset = 0;
    // }
    // AOS.init({
    //     easing: 'ease-in-out',
    //     delay: 100,
    //     once: true,
    //     duration: 700,
    //     offset: offset,
    // });

    // Популярные материалы
    const swiperPopular = new Swiper('.slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        watchSlidesProgress: true,
        mousewheelControl: true,
        watchOverflow: true,
        watchSlidesVisibility: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    // видео
    const players = Array.from(document.querySelectorAll('.player_video')).map(
        (p) =>
            new Plyr(p, {
                autoplay: false,
            })
    );
});
