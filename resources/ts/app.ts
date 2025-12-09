/**
 * MAJIHOUSE - Main Application Entry
 * Initializes all components and animations
 */

// Animations
import { ParticleSystem } from './animations/particles';
import { TypingEffect } from './animations/typing';
import { CounterAnimation } from './animations/counter';
import { ScrollAnimations } from './animations/scroll';

// Components
import { Navigation } from './components/navbar';
import { Portfolio } from './components/portfolio';
import { TestimonialsSlider } from './components/testimonials';
import { ContactForm } from './components/contact';
import { TechStackMarquee } from './components/techstack';

// Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

class App {
    private particles: ParticleSystem;
    private typing: TypingEffect;
    private counter: CounterAnimation;
    private scroll: ScrollAnimations;
    private navigation: Navigation;
    private portfolio: Portfolio;
    private testimonials: TestimonialsSlider;
    private contactForm: ContactForm;
    private techStack: TechStackMarquee;

    constructor() {
        this.particles = new ParticleSystem();
        this.typing = new TypingEffect();
        this.counter = new CounterAnimation();
        this.scroll = new ScrollAnimations();
        this.navigation = new Navigation();
        this.portfolio = new Portfolio();
        this.testimonials = new TestimonialsSlider();
        this.contactForm = new ContactForm();
        this.techStack = new TechStackMarquee();
    }

    init(): void {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initComponents());
        } else {
            this.initComponents();
        }

        // Handle page load animation
        window.addEventListener('load', () => this.hideLoader());
    }

    private initComponents(): void {
        // Initialize animations (cursor removed)
        this.particles.init();
        this.scroll.init();
        this.counter.init();

        // Initialize typing effect with phrases
        this.typing.init('.hero-typing', [
            'We design beautiful interfaces.',
            'We code scalable systems.',
            'We deliver excellence.',
        ]);

        // Initialize components
        this.navigation.init();
        this.portfolio.init();
        this.testimonials.init();
        this.contactForm.init();
        this.techStack.init();

        // Initialize button ripple effects
        this.initRippleEffect();
    }

    private hideLoader(): void {
        const loader = document.querySelector('.page-loader');

        setTimeout(() => {
            loader?.classList.add('hidden');

            // Remove from DOM after animation
            setTimeout(() => {
                loader?.remove();
            }, 500);
        }, 1500);
    }

    private initRippleEffect(): void {
        const buttons = document.querySelectorAll('.btn');

        buttons.forEach(button => {
            button.addEventListener('click', (e: Event) => {
                const mouseEvent = e as MouseEvent;
                const btn = button as HTMLElement;

                const ripple = document.createElement('span');
                ripple.className = 'ripple';

                const rect = btn.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);

                ripple.style.width = ripple.style.height = `${size}px`;
                ripple.style.left = `${mouseEvent.clientX - rect.left - size / 2}px`;
                ripple.style.top = `${mouseEvent.clientY - rect.top - size / 2}px`;

                btn.appendChild(ripple);

                ripple.addEventListener('animationend', () => {
                    ripple.remove();
                });
            });
        });
    }
}

// Initialize the application
const app = new App();
app.init();
