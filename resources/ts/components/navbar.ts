/**
 * Navigation Component
 * Handles mobile menu toggle and active link states
 */

export class Navigation {
    private navToggle: HTMLElement | null = null;
    private navLinks: HTMLElement | null = null;
    private navItems: NodeListOf<Element> | null = null;

    init(): void {
        this.navToggle = document.querySelector('.nav-toggle');
        this.navLinks = document.querySelector('.nav-links');
        this.navItems = document.querySelectorAll('.nav-link');

        this.initMobileMenu();
        this.initActiveLinks();
    }

    private initMobileMenu(): void {
        if (!this.navToggle || !this.navLinks) return;

        this.navToggle.addEventListener('click', () => {
            this.navToggle?.classList.toggle('active');
            this.navLinks?.classList.toggle('open');
            document.body.style.overflow =
                this.navLinks?.classList.contains('open') ? 'hidden' : '';
        });

        // Close menu on overlay click
        document.addEventListener('click', (e) => {
            const target = e.target as HTMLElement;
            if (
                this.navLinks?.classList.contains('open') &&
                !target.closest('.navbar')
            ) {
                this.navToggle?.classList.remove('active');
                this.navLinks?.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }

    private initActiveLinks(): void {
        if (!this.navItems) return;

        const sections = document.querySelectorAll('section[id]');

        window.addEventListener('scroll', () => {
            let current = '';

            sections.forEach(section => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = (section as HTMLElement).offsetHeight;

                if (window.scrollY >= sectionTop - 100) {
                    current = section.getAttribute('id') || '';
                }
            });

            this.navItems?.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}
