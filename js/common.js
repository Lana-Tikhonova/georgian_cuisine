$(document).ready(function () {

    $('.header_menu a,[data-anchor]').on('click', function (e) {
        e.preventDefault();
        let href = $(this).attr("href");
        $('.mobile_menu').removeClass('active')
        $('body').removeClass('locked')
        $('.menu_btn').removeClass('active')
        $('main').removeClass('menu_open');

        $("html, body").animate({
            scrollTop: $(href).offset().top
        }, 1000);
    });

    const section = $(".section");
    const nav = $(".header_menu");

    $(window).on("scroll", () => {
        const position = $(this).scrollTop();

        section.each(function () {
            const top = $(this).offset().top - 55,
                bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                let thisId = $(this).attr('id');
                nav.find("a").removeClass("active");
                section.removeClass("active");
                $(this).addClass("active");
                nav.find("a[href='#" + thisId + "']").addClass("active");
            }
        });
    });

    $('.menu_btn').on('click', function () {
        $(this).toggleClass('active');
        $('.mobile_menu').toggleClass('active');
        $('body').toggleClass('locked');
        $('main').toggleClass('menu_open');
    });

    $('.events_btn').on('click', function (e) {
        $('.events_block').hide()
        $('.events_block_full').show()
    });
    $('.events_back').on('click', function (e) {
        $('.events_block').show()
        $('.events_block_full').hide()

    });

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


    // добавляем метод прямо к инстансу
    Swiper.prototype.updatePaginationBullets = function () {
        const bullets = this.pagination.bullets;
        const activeIndex = this.realIndex;
        const total = bullets.length;

        bullets.forEach((bullet, i) => {
            const distance = Math.abs(i - activeIndex);

            if (distance === 0) {
                bullet.style.opacity = '1';
                bullet.style.transform = 'scale(1.2)';
            } else {
                const opacity = Math.max(0.2, 1 - distance * 0.2);
                bullet.style.opacity = opacity.toString();
                bullet.style.transform = 'scale(1)';
            }
        });
    };

    const swiperPopular = new Swiper('.slider', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        speed: 500,
        watchSlidesProgress: true,
        pagination: {
            el: '.slider_block .swiper-pagination',
            clickable: true,
            // dynamicBullets: true,
            renderBullet: function (index, className) {
                return `<span class="${className}" data-index="${index}"></span>`;
            },
        },
        navigation: {
            nextEl: '.slider_block .swiper-button-next',
            prevEl: '.slider_block .swiper-button-prev',
        },
        effect: 'creative',
        creativeEffect: {
            shadowPerProgress: 0,
            limitProgress: 1.5,
            prev: {
                translate: ['-85%', '0%', 0],
                origin: 'center center',
                scale: 0.5,
            },
            next: {
                translate: ['85%', '0%', 0],
                origin: 'center center',
                scale: 0.5,
            },
        },
        on: {
            init() {
                this.updatePaginationBullets();
            },
            slideChange() {
                this.updatePaginationBullets();
            },
        }
    });

    let swiper;

    function initSwiper() {
        const h = window.innerHeight;

        if (h >= 660 && h <= 1000) {
            if (!swiper) {
                swiper = new Swiper(".site_slider", {
                    direction: "vertical",
                    slidesPerView: 1,
                    spaceBetween: 0,
                    mousewheel: true,
                    speed: 700,
                });
            }
        } else {
            if (swiper) {
                swiper.destroy(true, true);
                swiper = null;
            }
        }
    }

    initSwiper();
    window.addEventListener("resize", initSwiper);


    // видео
    const players = Array.from(document.querySelectorAll('.player_video')).map(
        (p) =>
            new Plyr(p, {
                autoplay: false,
            })
    );
});
