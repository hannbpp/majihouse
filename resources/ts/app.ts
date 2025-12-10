/**
 * MAJIHOUSE - Main Application Entry
 * Initializes all components and animations
 */

// Animations
import { ParticleSystem } from './animations/particles';
import { FlipWords } from './components/flip-words';
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
    private flipWords: FlipWords;
    private counter: CounterAnimation;
    private scroll: ScrollAnimations;
    private navigation: Navigation;
    private portfolio: Portfolio;
    private testimonials: TestimonialsSlider;
    private contactForm: ContactForm;
    private techStack: TechStackMarquee;

    constructor() {
        this.particles = new ParticleSystem();
        this.flipWords = new FlipWords();
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

        // Initialize FlipWords effect
        this.flipWords.init('.flip-words-container', [
            'keren.',
            'cantik.',
            'modern.',
            'menarik.',
            'skena.',
            'gen-z abis.',
        ]);

        // Initialize components
        this.navigation.init();
        this.portfolio.init();
        this.testimonials.init();
        this.contactForm.init();
        this.techStack.init();

        // Initialize service category toggle
        this.initServiceCategoryToggle();

        // Initialize button ripple effects
        this.initRippleEffect();
    }

    private initServiceCategoryToggle(): void {
        const categoryBtns = document.querySelectorAll('.category-btn');
        const serviceContainers = document.querySelectorAll('.service-container');

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');

                // Update active button
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Add pop animation
                btn.classList.add('pop');
                setTimeout(() => btn.classList.remove('pop'), 300);

                // Show/hide service containers
                serviceContainers.forEach(container => {
                    const containerCategory = container.getAttribute('data-services');
                    if (containerCategory === category) {
                        (container as HTMLElement).style.display = 'block';

                        // Re-trigger animations for the visible container
                        this.triggerContainerAnimations(container as HTMLElement);
                    } else {
                        (container as HTMLElement).style.display = 'none';
                    }
                });
            });
        });
    }

    private triggerContainerAnimations(container: HTMLElement): void {
        // Re-trigger fade animations
        const animatedElements = container.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in');
        animatedElements.forEach((el, index) => {
            el.classList.remove('visible');
            setTimeout(() => {
                el.classList.add('visible');
            }, index * 100);
        });

        // Re-trigger timeline dots
        const timelineDots = container.querySelectorAll('.timeline-dot');
        timelineDots.forEach((dot, index) => {
            dot.classList.remove('glow-active');
            setTimeout(() => {
                dot.classList.add('glow-active');
            }, index * 150);
        });

        // Trigger scroll event to recalculate timeline progress for this container
        window.dispatchEvent(new Event('scroll'));
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
