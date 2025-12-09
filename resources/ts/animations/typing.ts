/**
 * Typing Animation Effect
 * Types text with a blinking cursor
 */

export class TypingEffect {
    private element: HTMLElement | null = null;
    private texts: string[] = [];
    private currentTextIndex = 0;
    private currentCharIndex = 0;
    private isDeleting = false;
    private typingSpeed = 50;
    private deletingSpeed = 30;
    private pauseTime = 2000;

    init(selector: string, texts: string[]): void {
        this.element = document.querySelector(selector);
        this.texts = texts;

        if (this.element && this.texts.length > 0) {
            this.type();
        }
    }

    private type(): void {
        if (!this.element) return;

        const currentText = this.texts[this.currentTextIndex];

        if (this.isDeleting) {
            // Delete characters
            this.currentCharIndex--;
            this.element.innerHTML = currentText.substring(0, this.currentCharIndex) +
                '<span class="cursor-blink"></span>';

            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
                setTimeout(() => this.type(), 500);
                return;
            }

            setTimeout(() => this.type(), this.deletingSpeed);
        } else {
            // Type characters
            this.currentCharIndex++;
            this.element.innerHTML = currentText.substring(0, this.currentCharIndex) +
                '<span class="cursor-blink"></span>';

            if (this.currentCharIndex === currentText.length) {
                // Pause at end of text
                setTimeout(() => {
                    this.isDeleting = true;
                    this.type();
                }, this.pauseTime);
                return;
            }

            setTimeout(() => this.type(), this.typingSpeed);
        }
    }
}
