/**
 * Counter Animation
 * Animates numbers counting up when visible in viewport
 */

export class CounterAnimation {
    private counters: NodeListOf<Element> | null = null;
    private observer: IntersectionObserver | null = null;
    private animatedElements = new Set<Element>();

    init(selector: string = '.stat-number'): void {
        this.counters = document.querySelectorAll(selector);

        if (!this.counters.length) return;

        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !this.animatedElements.has(entry.target)) {
                        this.animatedElements.add(entry.target);
                        this.animateCounter(entry.target as HTMLElement);
                    }
                });
            },
            { threshold: 0.5 }
        );

        this.counters.forEach(counter => {
            this.observer?.observe(counter);
        });
    }

    private animateCounter(element: HTMLElement): void {
        const target = parseInt(element.getAttribute('data-target') || '0', 10);
        const duration = 2000;
        const startTime = performance.now();
        const suffix = element.getAttribute('data-suffix') || '';

        const updateCounter = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(target * easeOut);

            element.textContent = current + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + suffix;
            }
        };

        requestAnimationFrame(updateCounter);
    }
}
