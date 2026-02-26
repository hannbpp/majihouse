/**
 * MAJIHOUSE - Main Application Entry (FtrTech Style Redesign)
 * Theme toggle, FAQ accordion, pricing toggle, animations, Lucide icons
 */

// Lucide Icons
import {
    createIcons, Sun, Moon, ArrowRight, Clock, Code, Share2, Check,
    Mail, Phone, MapPin, ChevronLeft, ChevronRight, Plus, Briefcase,
    Globe, Palette, Layers, Settings, Zap, Users, Star, Shield,
    MessageSquare, TrendingUp, BarChart3, Search, Heart, Coffee,
    Rocket, Target, Award, Lightbulb, Cpu, Smartphone,
    CircleQuestionMark as HelpCircle,
    Database, Figma, Image, Paintbrush, PenTool, Server, CodeXml, Sparkles,
    Quote, CircleCheckBig
} from 'lucide';

// Animations
import { CounterAnimation } from './animations/counter';
import { ScrollAnimations } from './animations/scroll';

// Components
import { Navigation } from './components/navbar';
import { Portfolio } from './components/portfolio';
import { ContactForm } from './components/contact';
import { TechStackMarquee } from './components/techstack';
import { initLanguageToggle } from './components/lang';

class App {
    private counter: CounterAnimation;
    private scroll: ScrollAnimations;
    private navigation: Navigation;
    private portfolio: Portfolio;
    private contactForm: ContactForm;
    private techStack: TechStackMarquee;

    constructor() {
        this.counter = new CounterAnimation();
        this.scroll = new ScrollAnimations();
        this.navigation = new Navigation();
        this.portfolio = new Portfolio();
        this.contactForm = new ContactForm();
        this.techStack = new TechStackMarquee();
    }

    init(): void {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.initComponents());
        } else {
            this.initComponents();
        }
        window.addEventListener('load', () => this.hideLoader());
    }

    private initComponents(): void {
        // Initialize Lucide icons first so they're visible immediately
        createIcons({
            icons: {
                Sun, Moon, ArrowRight, Clock, Code, Share2, Check,
                Mail, Phone, MapPin, ChevronLeft, ChevronRight, Plus, Briefcase,
                Globe, Palette, Layers, Settings, Zap, Users, Star, Shield,
                MessageSquare, TrendingUp, BarChart3, Search, Heart, Coffee,
                Rocket, Target, Award, Lightbulb, Cpu, Smartphone,
                HelpCircle, Database, Figma, Image, Paintbrush, PenTool, Server, CodeXml, Sparkles,
                Quote, CircleCheckBig
            }
        });

        this.scroll.init();
        this.counter.init();
        this.navigation.init();
        this.portfolio.init();
        this.contactForm.init();
        this.techStack.init();

        // New features
        this.initThemeToggle();
        this.initServiceCategoryToggle();
        this.initPricingToggle();
        this.initFaqAccordion();
        initLanguageToggle();
    }

    // ---- Theme Toggle (Dark/Light) ----
    private initThemeToggle(): void {
        const toggle = document.getElementById('themeToggle');
        if (!toggle) return;

        // Load saved theme
        const saved = localStorage.getItem('majihouse-theme') || 'dark';
        document.documentElement.setAttribute('data-theme', saved);

        toggle.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const next = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', next);
            localStorage.setItem('majihouse-theme', next);
        });
    }

    // ---- Service Category Toggle ----
    private initServiceCategoryToggle(): void {
        const categoryBtns = document.querySelectorAll('.service-category-toggle .category-btn[data-category]');
        const serviceContainers = document.querySelectorAll('.service-container[data-services]');

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                serviceContainers.forEach(container => {
                    const el = container as HTMLElement;
                    el.style.display = container.getAttribute('data-services') === category ? 'block' : 'none';
                });
            });
        });
    }

    // ---- Pricing Toggle (Web Dev / Social Media) ----
    private initPricingToggle(): void {
        const pricingBtns = document.querySelectorAll('#pricingToggle .category-btn[data-pricing]');
        const pricingContainers = document.querySelectorAll('.pricing-container[data-pricing-content]');

        pricingBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const pricing = btn.getAttribute('data-pricing');
                pricingBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                pricingContainers.forEach(container => {
                    const el = container as HTMLElement;
                    el.style.display = container.getAttribute('data-pricing-content') === pricing ? 'block' : 'none';
                });
            });
        });
    }

    // ---- FAQ Accordion ----
    private initFaqAccordion(): void {
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (!question) return;

            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                // Close all
                faqItems.forEach(i => i.classList.remove('active'));
                // Toggle current
                if (!isActive) item.classList.add('active');
            });
        });
    }

    private hideLoader(): void {
        const loader = document.querySelector('.page-loader');
        setTimeout(() => {
            loader?.classList.add('hidden');
            setTimeout(() => loader?.remove(), 500);
        }, 1000);
    }
}

const app = new App();
app.init();
