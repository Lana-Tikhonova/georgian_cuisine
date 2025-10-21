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

    $('.block_full_section').each(function () {
        const $section = $(this);

        $section.find('.block_full_btn').on('click', function () {
            $section.find('.block_small').hide();
            $section.find('.block_full').addClass('active');

            if ($(this).hasClass('mobile_menu_block_full_btn')) {
                const $target = $section.find('.menu_list_left');
                if ($target.length) {
                    $('html, body').stop().animate({
                        scrollTop: $target.offset().top - 10
                    }, 800, 'swing');
                }
            }
        });

        $section.find('.btn_back').on('click', function () {
            $section.find('.block_full').removeClass('active');
            $section.find('.block_small').show();
        });
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

    // слайдер с фото
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
                    if (!slide.classList.contains("swiper-slide-active")) {
                        player.pause();
                    }
                });
            }
        }
    });


    // слайдер главный, слайдер акции, слайдер меню
    function findScrollContainer() {
        const candidates = [
            document.querySelector('.menu_slider'),
            document.querySelector('.menu_slider .swiper-wrapper'),
            document.querySelector('.menu_list_wrapper'),
            document.querySelector('.menu_list_wrap')
        ];
        return candidates.find(el => el && el.scrollHeight > el.clientHeight) || document.querySelector('.menu_slider');
    }

    let removeNativeTracking = null;

    // переменные для хранения ссылок и обработчиков
    let menuLinks = [];
    let menuLinkHandlers = [];

    let scrollAnimation = null;
    let lastTarget = 0;

    function smoothScrollTo(element, target, duration = 300) {
        if (scrollAnimation) cancelAnimationFrame(scrollAnimation);
        const start = element.scrollLeft;
        const change = target - start;
        const startTime = performance.now();

        function animate(time) {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 0.5 - Math.cos(progress * Math.PI) / 2; // easeInOut
            element.scrollLeft = start + change * eased;
            if (progress < 1) scrollAnimation = requestAnimationFrame(animate);
        }

        scrollAnimation = requestAnimationFrame(animate);
    }


    function initNativeMenuTracking() {
        const leftMenu = document.querySelector('.menu_list_left');
        const menuLinks = leftMenu ? Array.from(leftMenu.querySelectorAll('[data-menu-anchor]')) : [];
        const sections = Array.from(document.querySelectorAll('.menu_slider .menu_list'));
        const container = findScrollContainer();

        if (!container || !leftMenu) return () => { };


        function updateByScroll(e) {
            const containerRect = container.getBoundingClientRect();
            let best = null;
            let bestVisible = 0;

            sections.forEach(sec => {
                const rect = sec.getBoundingClientRect();
                const visible = Math.max(0, Math.min(rect.bottom, containerRect.bottom) - Math.max(rect.top, containerRect.top));
                if (visible > bestVisible) {
                    bestVisible = visible;
                    best = sec;
                }
            });

            if (!best) {
                menuLinks.forEach(l => l.classList.remove('active'));
                return;
            }

            const id = best.id;
            let activeLink = null;
            menuLinks.forEach(l => {
                const active = l.dataset.menuAnchor === id;
                l.classList.toggle('active', active);
                if (active) activeLink = l;
            });

            if (activeLink && e && e.type === 'scroll') {
                const linkRect = activeLink.getBoundingClientRect();
                const menuRect = leftMenu.getBoundingClientRect();
                const delta = linkRect.left - menuRect.left;
                const calcTarget = leftMenu.scrollLeft + delta - (leftMenu.clientWidth / 2) + (activeLink.clientWidth / 2);
                const max = Math.max(0, leftMenu.scrollWidth - leftMenu.clientWidth);
                const target = Math.max(0, Math.min(Math.round(calcTarget), max));

                // if (Math.abs(leftMenu.scrollLeft - target) > 2) {
                //     // leftMenu.scrollTo({ left: target, behavior: 'smooth' });
                //     $(leftMenu).animate({ scrollLeft: target }, 300);

                // }

                if (Math.abs(leftMenu.scrollLeft - target) > 2 && target !== lastTarget) {
                    lastTarget = target;
                    smoothScrollTo(leftMenu, target, 400);
                }

            }

        }

        const onScroll = (e) => updateByScroll(e);
        container.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', () => updateByScroll(), { passive: true });

        // первый вызов — только подсветка без прокрутки
        updateByScroll();

        return () => {
            container.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateByScroll);
        };
    }


    let siteSlider;
    let scrollSliderEvent;
    let scrollSlider;

    const disableMousewheelTemporarily = (delay = 700) => {
        siteSlider.mousewheel.disable();
        setTimeout(() => siteSlider.mousewheel.enable(), delay);
    };

    function initSwiper() {
        const h = window.innerHeight;
        const w = window.innerWidth;

        if (h >= 740 && h <= 1000 && w >= 1001) {
            if (removeNativeTracking) { removeNativeTracking(); removeNativeTracking = null; }

            if (!siteSlider) {
                siteSlider = new Swiper(".site_slider", {
                    direction: "vertical",
                    slidesPerView: 1,
                    spaceBetween: 0,
                    mousewheel: { releaseOnEdges: true },
                    speed: 700,
                    wrapperClass: "site_slider-wrapper",
                    slideClass: "site_slider-slide",
                    nested: true,
                    on: {
                        slideChange: function () {
                            const activeSlide = this.slides[this.activeIndex];
                            const thisId = activeSlide.getAttribute("id");
                            $(".site_slider-slide").removeClass("active");
                            $(".header_menu a").removeClass("active");
                            $(activeSlide).addClass("active");
                            $(".header_menu a[href='#" + thisId + "']").addClass("active");
                        },
                        slideChangeTransitionEnd: function () {
                            document.querySelectorAll(".swiper-slide [data-aos]").forEach(el => el.classList.remove("aos-animate"));
                            this.slides[this.activeIndex].querySelectorAll("[data-aos]").forEach(el => el.classList.add("aos-animate"));
                            players.forEach(player => player.pause());
                        },
                    },
                });
            }

            if (!scrollSliderEvent) {
                scrollSliderEvent = new Swiper(".events_slider", {
                    direction: "vertical",
                    slidesPerView: "auto",
                    freeMode: true,
                    mousewheel: true,
                    nested: true,
                    on: {
                        reachEnd() { disableMousewheelTemporarily(500); },
                        reachBeginning() { disableMousewheelTemporarily(500); },
                    },
                });
            }

            if (!scrollSlider) {
                scrollSlider = new Swiper(".menu_slider", {
                    direction: "vertical",
                    slidesPerView: "auto",
                    freeMode: true,
                    mousewheel: { releaseOnEdges: false },
                    nested: true,
                    on: {
                        reachEnd() { disableMousewheelTemporarily(1000); },
                        reachBeginning() { disableMousewheelTemporarily(500); },
                    },
                });

                const sections = Array.from(document.querySelectorAll('.menu_list'));
                const swiperContainer = document.querySelector('.menu_slider');

                function updateActiveByVisibility() {
                    if (!swiperContainer) return;
                    const containerRect = swiperContainer.getBoundingClientRect();
                    let best = null;
                    let bestVisible = 0;

                    sections.forEach(sec => {
                        const rect = sec.getBoundingClientRect();
                        const top = Math.max(rect.top, containerRect.top);
                        const bottom = Math.min(rect.bottom, containerRect.bottom);
                        const visible = Math.max(0, bottom - top);
                        if (visible > bestVisible) {
                            bestVisible = visible;
                            best = sec;
                        }
                    });

                    const isAtBottom = Math.abs(swiperContainer.scrollHeight - swiperContainer.scrollTop - swiperContainer.clientHeight) < 2;
                    if (isAtBottom) best = sections[sections.length - 1];

                    if (best) {
                        const id = best.id;
                        menuLinks.forEach(l => l.classList.toggle('active', l.dataset.menuAnchor === id));
                    }
                }

                scrollSlider.on('setTranslate', () => updateActiveByVisibility());
                updateActiveByVisibility();

                // навешиваем обработчики кликов (и запоминаем)
                menuLinks = Array.from(document.querySelectorAll('.menu_list_left [data-menu-anchor]'));
                menuLinkHandlers = [];

                menuLinks.forEach(link => {
                    const handler = (e) => {
                        e.preventDefault();
                        const targetId = link.dataset.menuAnchor;
                        const targetSlide = document.querySelector(`.menu_list#${targetId}`);
                        if (!targetSlide) return;

                        if (scrollSlider && typeof scrollSlider.slideTo === 'function') {
                            const slideIndex = Array.from(document.querySelectorAll('.menu_slider .swiper-slide'))
                                .findIndex(slide => slide.contains(targetSlide));
                            if (slideIndex !== -1) scrollSlider.slideTo(slideIndex);
                        }

                        menuLinks.forEach(l => l.classList.remove('active'));
                        link.classList.add('active');
                    };

                    menuLinkHandlers.push(handler);
                    link.addEventListener('click', handler);
                });
            }
        } else {
            // при выключении слайдеров
            if (!removeNativeTracking) removeNativeTracking = initNativeMenuTracking();

            // удаляем обработчики кликов
            if (menuLinks.length && menuLinkHandlers.length) {
                menuLinks.forEach((link, i) => {
                    const handler = menuLinkHandlers[i];
                    if (handler) link.removeEventListener('click', handler);
                });
                menuLinks = [];
                menuLinkHandlers = [];
            }

            // Добавляем новые клики для нативного режима
            const container = document.querySelector('.menu_slider');
            const nativeLinks = document.querySelectorAll('.menu_list_left [data-menu-anchor]');
            nativeLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const id = link.dataset.menuAnchor;
                    const target = document.getElementById(id);
                    if (!target) return;

                    // Находим позицию элемента относительно контейнера
                    const containerRect = container.getBoundingClientRect();
                    const targetRect = target.getBoundingClientRect();
                    const offset = targetRect.top - containerRect.top + container.scrollTop;

                    // Плавный скролл внутри контейнера
                    container.scrollTo({
                        top: offset,
                        behavior: 'smooth'
                    });
                });
            });

            if (siteSlider) {
                siteSlider.destroy(true, true);
                siteSlider = null;
            }
            if (scrollSliderEvent) {
                scrollSliderEvent.destroy(true, true);
                scrollSliderEvent = null;
            }
            if (scrollSlider) {
                scrollSlider.destroy(true, true);
                scrollSlider = null;
            }
        }
    }

    initSwiper();
    window.addEventListener("resize", initSwiper);





    // кнопки фиксированные
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

    // прокрутка к верху страницы
    $(".logo").bind('click', function (e) {
        e.preventDefault();
        $('body,html').animate({ scrollTop: 0 }, 400);
    });


    function initTabsWithModalSwiper() {
        const externalTabs = document.querySelectorAll('.tab_main_item');
        const modal = document.querySelector('[data-modal="menuList"]');
        if (!modal) return;

        const modalTabs = modal.querySelectorAll('.tab_modal_item');
        const tabPanels = modal.querySelectorAll('.tab_panel');
        let currentSwiper = null;

        // Функция инициализации слайдера
        function initSwiper(container) {
            if (!container) return;
            return new Swiper(container, {
                slidesPerView: 1,
                spaceBetween: 16,
                effect: "fade",
                fadeEffect: {
                    crossFade: true
                },
                speed: 1000,
                navigation: {
                    nextEl: container.querySelector('.swiper-button-next'),
                    prevEl: container.querySelector('.swiper-button-prev'),
                },
                pagination: {
                    el: container.querySelector('.swiper-pagination'),
                    clickable: true,
                },
            });
        }

        // Функция активации таба
        function activateTab(tabIndex) {
            modalTabs.forEach(btn => btn.classList.toggle('active', btn.dataset.tab == tabIndex));
            tabPanels.forEach(panel => {
                const isActive = panel.dataset.tabContent == tabIndex;
                panel.classList.toggle('active', isActive);

                if (isActive) {
                    if (currentSwiper) currentSwiper.destroy(true, true);
                    currentSwiper = initSwiper(panel.querySelector('.tab_swiper'));
                }
            });
        }

        // Когда кликают по внешним табам
        externalTabs.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                const tabIndex = btn.dataset.tab;

                setTimeout(() => {
                    activateTab(tabIndex);
                }, 100);
            });
        });

        // Переключение табов внутри модалки
        modalTabs.forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                const tabIndex = btn.dataset.tab;
                activateTab(tabIndex);
            });
        });
        activateTab('1');

    }
    initTabsWithModalSwiper()





});

// открытие модаки 
// нужно только поменять значени в data-modal и data-open-modal

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    const html = document.querySelector('html');
    let getScrollWidth = () => window.innerWidth - document.documentElement.offsetWidth;
    let browserScrollWidth = getScrollWidth();

    function openModal(modal) {
        if (!modal) return;
        modal.classList.add('show');
        html.classList.add('locked');
        if (getScrollWidth() === 0) {
            body.style.paddingRight = `${browserScrollWidth}px`;
        }
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.classList.remove('show');
        if (!document.querySelector('.modal.show')) {
            html.classList.remove('locked');
            body.style.paddingRight = ``;
            history.pushState(null, '', window.location.pathname);
        }
    }

    document.addEventListener('click', (e) => {
        const target = e.target;

        // Открытие
        const trigger = target.closest('[data-open-modal]');
        if (trigger) {
            e.preventDefault();
            const modalId = trigger.dataset.openModal;
            const modal = document.querySelector(`[data-modal="${modalId}"]`);
            openModal(modal);

            // меняем адрес
            const hash = trigger.getAttribute('href')?.split('#')[1];
            if (hash) history.pushState(null, '', `#${hash}`);
        }

        // Закрытие
        if (target.closest('[data-modal-close]')) {
            e.preventDefault();
            closeModal(target.closest('.modal'));
        }

        // Клик вне контента
        if (target.closest('.modal') && !target.closest('.modal-content')) {
            e.preventDefault();
            closeModal(target.closest('.modal'));
        }
    });

    // Открытие при переходе с хэшем
    const hash = window.location.hash.slice(1);
    if (hash) {
        const modal = document.querySelector(`[data-modal="${hash}"]`);
        if (modal) openModal(modal);
    }
});

window.addEventListener('load', () => {
    // Пример URL: https://995.olbuss-book.ru/?item=sideDishes&section=gallery
    const params = new URLSearchParams(window.location.search);
    const search = params.get('item');     // sideDishes
    const section = params.get('section'); // gallery


    // Если нет ничего — выходим
    if (!search && !section) return;

    //  если указана секция, кликаем по пункту меню
    if (section) {
        const link = document.querySelector(`.header_menu a[href="#${section}"]`);
        if (link) {
            setTimeout(() => {
                link.click();
            }, 300); // ждём инициализацию Swiper
        }
    }

    // если указана галерея и есть категория
    if (section === 'gallery' && search) {
        const gallery = document.getElementById('gallery');
        if (!gallery) return;

        const menuBlock = gallery.querySelector('.menu_block_full');
        const btnFull = gallery.querySelector('.menu_full_btn');

        // Открываем меню, если не активно
        if (menuBlock && !menuBlock.classList.contains('active') && btnFull) {
            setTimeout(() => {
                btnFull.click();
            }, 0);
        }

        // После открытия кликаем по нужной категории
        setTimeout(() => {
            const link = gallery.querySelector(`.menu_list_left [data-menu-anchor="${search}"]`);
            if (link) {
                console.log('[special] auto-click on', link);
                link.click();
            } else {
                console.log('[special] link not found for', search);
            }
        }, 700);
    }
});
