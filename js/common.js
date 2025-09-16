$(document).ready(function () {

    // анимация
    let offset;
    if ($(window).width() > 576) {
        offset = 100;
    } else {
        offset = 0;
    }
    AOS.init({
        easing: 'ease-in-out',
        delay: 100,
        once: true,
        duration: 700,
        offset: offset,
    });

    $('.header_menu a,[data-anchor]').on('click', function (e) {
        e.preventDefault();
        let href = $(this).attr("href");
        $('.mobile_menu').removeClass('active')
        $('body').removeClass('locked')
        $('.menu_btn').removeClass('active')

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
    });

    $('.events_btn').on('click', function (e) {
        $('.events_block').hide()
        $('.events_block_full').addClass('active')
    });
    $('.events_back').on('click', function (e) {
        $('.events_block').show()
        $('.events_block_full').removeClass('active')

    });


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

    let siteSlider;
    let scrollSlider;

    function initSwiper() {
        const h = window.innerHeight;

        if (h >= 740 && h <= 1000) {
            if (!siteSlider) {
                siteSlider = new Swiper(".site_slider", {
                    direction: "vertical",
                    slidesPerView: 1,
                    spaceBetween: 0,
                    // mousewheel: true,
                    mousewheel: {
                        releaseOnEdges: true,
                    },
                    speed: 700,
                    wrapperClass: "site_slider-wrapper",
                    slideClass: "site_slider-slide",
                    nested: true,
                    on: {
                        slideChangeTransitionEnd: function () {
                            // убираем анимации со всех
                            document.querySelectorAll(".swiper-slide [data-aos]").forEach(el => {
                                el.classList.remove("aos-animate");
                            });

                            // добавляем только в активном слайде
                            this.slides[this.activeIndex]
                                .querySelectorAll("[data-aos]")
                                .forEach(el => {
                                    el.classList.add("aos-animate");
                                });
                        },
                    },
                });
            }
            if (!scrollSlider) {
                scrollSlider = new Swiper(".events_slider", {
                    direction: "vertical",
                    slidesPerView: "auto",
                    freeMode: true,
                    mousewheel: true,
                    nested: true,
                });

            }
        } else {
            if (siteSlider) {
                siteSlider.destroy(true, true);
                siteSlider = null;
            }
            if (scrollSlider) {
                scrollSlider.destroy(true, true);
                scrollSlider = null;
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
