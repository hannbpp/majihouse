/**
 * FlipWords Animation Effect
 * Words flip with blur and scale animation
 */

export class FlipWords {
    private element: HTMLElement | null = null;
    private words: string[] = [];
    private currentIndex = 0;
    private duration = 3000;
    private isAnimating = false;

    init(selector: string, words: string[]): void {
        this.element = document.querySelector(selector);
        this.words = words;

        if (!this.element || this.words.length === 0) return;

        // Show first word
        this.showWord(this.words[0]);

        // Start animation loop
        this.startLoop();
    }

    private showWord(word: string): void {
        if (!this.element) return;

        // Create word container
        this.element.innerHTML = '';

        const wordContainer = document.createElement('span');
        wordContainer.className = 'flip-word';

        // Split into letters for staggered animation
        word.split('').forEach((letter, index) => {
            const letterSpan = document.createElement('span');
            letterSpan.className = 'flip-letter';
            letterSpan.textContent = letter === ' ' ? '\u00A0' : letter;
            letterSpan.style.animationDelay = `${index * 0.05}s`;
            wordContainer.appendChild(letterSpan);
        });

        this.element.appendChild(wordContainer);
    }

    private startLoop(): void {
        setInterval(() => {
            if (this.isAnimating) return;

            this.isAnimating = true;

            // Animate out current word
            const currentWord = this.element?.querySelector('.flip-word');
            if (currentWord) {
                currentWord.classList.add('flip-out');
            }

            // After exit animation, show next word
            setTimeout(() => {
                this.currentIndex = (this.currentIndex + 1) % this.words.length;
                this.showWord(this.words[this.currentIndex]);
                this.isAnimating = false;
            }, 500);

        }, this.duration);
    }
}
