/**
 * Tech Stack Interactive Marquee
 * Click and drag to scroll - drag left = scroll left, drag right = scroll right
 */

export class TechStackMarquee {
    private container: HTMLElement | null = null;
    private marquee: HTMLElement | null = null;
    private isDragging: boolean = false;
    private startX: number = 0;
    private scrollSpeed: number = 1;
    private lastDirection: number = 1; // 1 = right, -1 = left
    private animationId: number | null = null;
    private currentTranslate: number = 0;
    private maxTranslate: number = 0;

    init(): void {
        this.container = document.querySelector('.tech-stack');
        this.marquee = document.querySelector('.tech-marquee');

        if (!this.container || !this.marquee) return;

        // Clone all items for seamless loop
        const items = this.marquee.querySelectorAll('.tech-item');
        items.forEach(item => {
            const clone = item.cloneNode(true);
            this.marquee?.appendChild(clone);
        });

        // Calculate max translate (half the width since content is now duplicated)
        this.maxTranslate = this.marquee.scrollWidth / 2;

        // Stop CSS animation and use JS instead
        this.marquee.style.animation = 'none';
        this.container.style.cursor = 'grab';

        // Start animation
        this.startAnimation();

        // Mouse events
        this.container.addEventListener('mousedown', (e) => this.onMouseDown(e));
        document.addEventListener('mousemove', (e) => this.onMouseMove(e));
        document.addEventListener('mouseup', () => this.onMouseUp());

        // Touch events for mobile
        this.container.addEventListener('touchstart', (e) => this.onTouchStart(e));
        document.addEventListener('touchmove', (e) => this.onTouchMove(e));
        document.addEventListener('touchend', () => this.onTouchEnd());
    }

    private onMouseDown(e: MouseEvent): void {
        this.isDragging = true;
        this.startX = e.clientX;
        if (this.container) {
            this.container.style.cursor = 'grabbing';
        }
        // Stop auto-scroll when dragging
        this.scrollSpeed = 0;
    }

    private onMouseMove(e: MouseEvent): void {
        if (!this.isDragging) return;

        const deltaX = e.clientX - this.startX;
        this.startX = e.clientX;

        // Move based on drag direction
        this.currentTranslate += deltaX;

        // Update direction based on drag
        if (deltaX > 0) {
            this.lastDirection = -1; // Dragging right = continue scroll left after release
        } else if (deltaX < 0) {
            this.lastDirection = 1; // Dragging left = continue scroll right after release
        }
    }

    private onMouseUp(): void {
        if (!this.isDragging) return;

        this.isDragging = false;
        if (this.container) {
            this.container.style.cursor = 'grab';
        }
        // Resume auto-scroll in the last drag direction
        this.scrollSpeed = this.lastDirection;
    }

    private onTouchStart(e: TouchEvent): void {
        this.isDragging = true;
        this.startX = e.touches[0].clientX;
        this.scrollSpeed = 0;
    }

    private onTouchMove(e: TouchEvent): void {
        if (!this.isDragging) return;

        const deltaX = e.touches[0].clientX - this.startX;
        this.startX = e.touches[0].clientX;

        this.currentTranslate += deltaX;

        if (deltaX > 0) {
            this.lastDirection = -1;
        } else if (deltaX < 0) {
            this.lastDirection = 1;
        }
    }

    private onTouchEnd(): void {
        if (!this.isDragging) return;
        this.isDragging = false;
        this.scrollSpeed = this.lastDirection;
    }

    private startAnimation(): void {
        const animate = () => {
            if (!this.isDragging) {
                this.currentTranslate -= this.scrollSpeed;
            }

            // Loop the animation
            if (this.currentTranslate <= -this.maxTranslate) {
                this.currentTranslate = 0;
            } else if (this.currentTranslate > 0) {
                this.currentTranslate = -this.maxTranslate;
            }

            if (this.marquee) {
                this.marquee.style.transform = `translateX(${this.currentTranslate}px)`;
            }

            this.animationId = requestAnimationFrame(animate);
        };

        animate();
    }

    destroy(): void {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}
