/**
 * Scroll Animations
 * Handles all scroll-triggered animations using Intersection Observer
 */

export class ScrollAnimations {
    private observer: IntersectionObserver | null = null;
    private scrollProgress: HTMLElement | null = null;

    init(): void {
        this.initScrollObserver();
        this.initScrollProgress();
        this.initNavbarScroll();
        this.initBackToTop();
        this.initSmoothScroll();
        this.initTimelineGlow();
    }

    private initScrollObserver(): void {
        const animatedElements = document.querySelectorAll(
            '.fade-in, .fade-in-left, .fade-in-right, .scale-in, .stagger'
        );

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        animatedElements.forEach(el => {
            this.observer?.observe(el);
        });
    }

    private initScrollProgress(): void {
        this.scrollProgress = document.querySelector('.scroll-progress');

        if (!this.scrollProgress) {
            this.scrollProgress = document.createElement('div');
            this.scrollProgress.className = 'scroll-progress';
            document.body.prepend(this.scrollProgress);
        }

        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;

            if (this.scrollProgress) {
                this.scrollProgress.style.width = `${scrollPercent}%`;
            }
        });
    }

    private initNavbarScroll(): void {
        const navbar = document.querySelector('.navbar');

        if (!navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    private initBackToTop(): void {
        const backToTop = document.querySelector('.back-to-top');

        if (!backToTop) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    private initSmoothScroll(): void {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = (anchor as HTMLAnchorElement).getAttribute('href');
                if (!href || href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);

                if (target) {
                    const navbarHeight = 80;
                    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });

                    // Close mobile menu if open
                    const navLinks = document.querySelector('.nav-links');
                    const navToggle = document.querySelector('.nav-toggle');
                    navLinks?.classList.remove('open');
                    navToggle?.classList.remove('active');
                }
            });
        });
    }

    private initTimelineGlow(): void {
        const timeline = document.querySelector('.timeline') as HTMLElement;
        const timelineDots = document.querySelectorAll('.timeline-dot');
        const timelineItems = document.querySelectorAll('.timeline-item');

        if (!timeline || timelineDots.length === 0) return;

        // Observer for dots
        const timelineObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('glow-active');
                    }
                });
            },
            {
                threshold: 0.5,
                rootMargin: '-100px 0px -100px 0px'
            }
        );

        timelineDots.forEach(dot => {
            timelineObserver.observe(dot);
        });

        // Scroll progress for timeline line - handle all visible timelines
        window.addEventListener('scroll', () => {
            // Get all timelines and process the visible one
            const allTimelines = document.querySelectorAll('.timeline');

            allTimelines.forEach(tl => {
                const timelineEl = tl as HTMLElement;
                const container = timelineEl.closest('.service-container') as HTMLElement;

                // Skip if the container is hidden
                if (container && container.style.display === 'none') return;

                const rect = timelineEl.getBoundingClientRect();
                const timelineTop = rect.top + window.scrollY;
                const timelineHeight = timelineEl.offsetHeight;
                const scrollTop = window.scrollY;
                const windowHeight = window.innerHeight;

                // Calculate progress based on how much of the timeline is scrolled past
                const startOffset = timelineTop - windowHeight + 200;
                const endOffset = timelineTop + timelineHeight - 200;

                let progress = 0;

                if (scrollTop > startOffset) {
                    progress = ((scrollTop - startOffset) / (endOffset - startOffset)) * 100;
                    progress = Math.min(100, Math.max(0, progress));
                }

                timelineEl.style.setProperty('--timeline-progress', `${progress}%`);

                // Auto-hover effect for cards in this timeline
                const items = timelineEl.querySelectorAll('.timeline-item');
                const viewportCenter = windowHeight * 0.5;

                items.forEach((item) => {
                    const itemRect = item.getBoundingClientRect();
                    const card = item.querySelector('.service-card') as HTMLElement;

                    if (!card) return;

                    const itemCenter = itemRect.top + (itemRect.height / 2);
                    const isActive = itemCenter > viewportCenter - 150 && itemCenter < viewportCenter + 150;

                    if (isActive) {
                        card.classList.add('timeline-hover');
                    } else {
                        card.classList.remove('timeline-hover');
                    }
                });
            });
        });
    }
}
