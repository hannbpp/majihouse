/**
 * Testimonials Slider Component
 * Auto-playing testimonial carousel with swipe support
 */

import Swiper from 'swiper';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';

export class TestimonialsSlider {
    private swiper: Swiper | null = null;

    init(): void {
        const container = document.querySelector('.testimonials-swiper');

        if (!container) return;

        this.swiper = new Swiper('.testimonials-swiper', {
            modules: [Autoplay, Pagination, EffectFade],
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            loop: true,
            speed: 800,
        });
    }

    destroy(): void {
        this.swiper?.destroy();
    }
}
