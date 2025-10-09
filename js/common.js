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
        $('.btns_wrapper').removeClass('hidden')

        // если активен swiper
        if (siteSlider) {
            const targetId = href.replace("#", "");
            const targetIndex = $(".site_slider-slide").index($("#" + targetId));
            if (targetIndex !== -1) {
                siteSlider.slideTo(targetIndex);
            }
        } else {
            $("html, body").animate({
                scrollTop: $(href).offset().top
            }, 1000);
        }
    });

    const section = $(".site_slider-slide");
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
        $('.btns_wrapper').toggleClass('hidden')
    });

    $('.events_btn').on('click', function (e) {
        $('.events_block').hide()
        $('.events_block_full').addClass('active')
    });
    $('.events_back').on('click', function (e) {
        $('.events_block').show()
        $('.events_block_full').removeClass('active')

    });

    // видео
    const players = Array.from(document.querySelectorAll('.player_video')).map(
        (p) =>
            new Plyr(p, {
                controls: [
                    'play-large',
                    'play',
                    'progress',
                    'current-time',
                    'mute',
                    'volume',
                    'settings',
                    // 'share',     
                    // 'fullscreen', 
                ],
                autoplay: false,
            })
    );

    // останавливать видео, если включили другое
    players.forEach(player => {
        player.on('play', function () {

            players.forEach(otherPlayer => {
                if (otherPlayer !== player && !otherPlayer.paused) {
                    otherPlayer.pause();
                }
            });
        });
    });

    $('.player_video_bg_btn').on('click', function (e) {
        for (let index = 0; index < players.length; index++) {
            players[index].play();
        }
        $(this).parent().hide();
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
            slideChangeTransitionEnd: function () {
                // Останавливаем все видео, кроме активного
                players.forEach(player => {
                    const slide = player.elements.container.closest(".swiper-slide");
                    console.log(11);
                    if (!slide.classList.contains("swiper-slide-active")) {
                        player.pause();
                    }
                });
            }
        }
    });


    let siteSlider;
    let scrollSlider;

    function initSwiper() {
        const h = window.innerHeight;
        const w = window.innerWidth;
        console.log(window.innerHeight);

        if (h >= 740 && h <= 1000 && w >= 768) {
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
                        slideChange: function () {
                            const activeSlide = this.slides[this.activeIndex];
                            const thisId = activeSlide.getAttribute("id");

                            // убираем active у всех
                            $(".site_slider-slide").removeClass("active");
                            $(".header_menu a").removeClass("active");

                            // добавляем active к текущему слайду и пункту меню
                            $(activeSlide).addClass("active");
                            $(".header_menu a[href='#" + thisId + "']").addClass("active");
                        },
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

                            // Останавливаем все видео
                            players.forEach(player => {
                                player.pause();

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

    const buttons = document.querySelector('.btns_wrapper');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        if (scrollPosition >= documentHeight - 100) {
            buttons.classList.add('hidden_bottom');
        } else {
            buttons.classList.remove('hidden_bottom');
        }
    });

    $(".logo").bind('click', function (e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 400);
    });

});
