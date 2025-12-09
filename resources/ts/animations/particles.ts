/**
 * Floating Particles Effect
 * Creates floating particles with parallax mouse movement
 */

interface Particle {
    element: HTMLElement;
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
}

export class ParticleSystem {
    private container: HTMLElement | null = null;
    private particles: Particle[] = [];
    private mouseX = 0;
    private mouseY = 0;
    private particleCount = 50;

    init(): void {
        this.createContainer();
        this.createParticles();
        this.bindEvents();
        this.animate();
    }

    private createContainer(): void {
        this.container = document.getElementById('particles-container');
        if (!this.container) {
            this.container = document.createElement('div');
            this.container.id = 'particles-container';
            document.body.prepend(this.container);
        }
    }

    private createParticles(): void {
        if (!this.container) return;

        for (let i = 0; i < this.particleCount; i++) {
            const element = document.createElement('div');
            element.className = 'particle';

            const size = Math.random() * 4 + 2;
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const opacity = Math.random() * 0.5 + 0.1;

            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            element.style.opacity = `${opacity}`;
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;

            this.container.appendChild(element);

            this.particles.push({
                element,
                x,
                y,
                baseX: x,
                baseY: y,
                size,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity
            });
        }
    }

    private bindEvents(): void {
        document.addEventListener('mousemove', (e) => {
            this.mouseX = e.clientX;
            this.mouseY = e.clientY;
        });

        window.addEventListener('resize', () => {
            this.particles.forEach(p => {
                p.baseX = Math.random() * window.innerWidth;
                p.baseY = Math.random() * window.innerHeight;
            });
        });
    }

    private animate(): void {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        this.particles.forEach((p, _index) => {
            // Floating motion
            p.x += p.speedX;
            p.y += p.speedY;

            // Parallax effect based on mouse position
            const parallaxX = (this.mouseX - centerX) * 0.02 * (p.size / 4);
            const parallaxY = (this.mouseY - centerY) * 0.02 * (p.size / 4);

            // Wrap around screen edges
            if (p.x < -20) p.x = window.innerWidth + 20;
            if (p.x > window.innerWidth + 20) p.x = -20;
            if (p.y < -20) p.y = window.innerHeight + 20;
            if (p.y > window.innerHeight + 20) p.y = -20;

            // Apply position with parallax
            p.element.style.transform = `translate(${parallaxX}px, ${parallaxY}px)`;
            p.element.style.left = `${p.x}px`;
            p.element.style.top = `${p.y}px`;
        });

        requestAnimationFrame(() => this.animate());
    }
}
