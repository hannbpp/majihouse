/**
 * Custom Cursor Effect
 * Follows mouse with smooth delay, grows on hover over interactive elements
 */

export class CustomCursor {
    private cursor: HTMLElement | null = null;
    private cursorDot: HTMLElement | null = null;
    private mouseX = 0;
    private mouseY = 0;
    private cursorX = 0;
    private cursorY = 0;
    private dotX = 0;
    private dotY = 0;
    private isHovering = false;

    init(): void {
        // Skip on mobile/tablet
        if (window.innerWidth < 1024) return;

        this.createCursor();
        this.bindEvents();
        this.animate();
    }

    private createCursor(): void {
        // Create main cursor circle
        this.cursor = document.createElement('div');
        this.cursor.className = 'cursor';
        document.body.appendChild(this.cursor);

        // Create cursor dot
        this.cursorDot = document.createElement('div');
        this.cursorDot.className = 'cursor-dot';
        document.body.appendChild(this.cursorDot);

        // Hide default cursor
        document.body.style.cursor = 'none';
    }

    private bindEvents(): void {
        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        // Handle hover states for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .btn, input, textarea, select, .portfolio-card');

        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.isHovering = true;
                this.cursor?.classList.add('hover');
            });

            el.addEventListener('mouseleave', () => {
                this.isHovering = false;
                this.cursor?.classList.remove('hover');
            });
        });

        // Handle cursor visibility
        document.addEventListener('mouseenter', () => {
            if (this.cursor) this.cursor.style.opacity = '1';
            if (this.cursorDot) this.cursorDot.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            if (this.cursor) this.cursor.style.opacity = '0';
            if (this.cursorDot) this.cursorDot.style.opacity = '0';
        });
    }

    private animate(): void {
        // Smooth follow with easing
        const ease = 0.15;
        const dotEase = 0.25;

        this.cursorX += (this.mouseX - this.cursorX) * ease;
        this.cursorY += (this.mouseY - this.cursorY) * ease;

        this.dotX += (this.mouseX - this.dotX) * dotEase;
        this.dotY += (this.mouseY - this.dotY) * dotEase;

        if (this.cursor) {
            this.cursor.style.left = `${this.cursorX}px`;
            this.cursor.style.top = `${this.cursorY}px`;
        }

        if (this.cursorDot) {
            this.cursorDot.style.left = `${this.dotX}px`;
            this.cursorDot.style.top = `${this.dotY}px`;
        }

        requestAnimationFrame(() => this.animate());
    }
}
