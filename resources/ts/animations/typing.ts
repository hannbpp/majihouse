/**
 * Encrypted Text Animation Effect
 * Reveals text with a scramble/decrypt effect like Matrix
 */

export class EncryptedText {
    private element: HTMLElement | null = null;
    private texts: string[] = [];
    private currentTextIndex = 0;
    private chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    private revealDelay = 20;
    private scrambleIterations = 2;
    private pauseTime = 2000;

    init(selector: string, texts: string[]): void {
        this.element = document.querySelector(selector);
        this.texts = texts;

        if (this.element && this.texts.length > 0) {
            this.revealText();
        }
    }

    private getRandomChar(): string {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }

    private async revealText(): Promise<void> {
        if (!this.element) return;

        const text = this.texts[this.currentTextIndex];
        const textLength = text.length;

        // Track which characters are revealed
        let revealedCount = 0;
        let scrambleInterval: number | null = null;

        // Start continuous scramble animation for unrevealed chars
        scrambleInterval = window.setInterval(() => {
            if (!this.element || revealedCount >= textLength) {
                if (scrambleInterval) clearInterval(scrambleInterval);
                return;
            }

            // Generate new random chars for unrevealed portion
            let scrambled = '';
            for (let i = revealedCount; i < textLength; i++) {
                scrambled += this.getRandomChar();
            }

            const revealed = text.substring(0, revealedCount);
            this.element.innerHTML = `<span class="revealed-chars">${revealed}</span><span class="encrypted-chars">${scrambled}</span>`;
        }, 50);

        // Reveal each character one by one
        for (let i = 0; i < textLength; i++) {
            await this.delay(this.revealDelay * this.scrambleIterations);
            revealedCount = i + 1;
        }

        // Stop scrambling
        if (scrambleInterval) clearInterval(scrambleInterval);

        // Final display - all revealed
        this.element.innerHTML = `<span class="revealed-chars">${text}</span>`;

        // Wait then move to next text
        await this.delay(this.pauseTime);

        // Start encrypting/scrambling back
        await this.encryptText(text);

        // Move to next text
        this.currentTextIndex = (this.currentTextIndex + 1) % this.texts.length;
        this.revealText();
    }

    private async encryptText(text: string): Promise<void> {
        if (!this.element) return;

        let displayText = text;
        const textLength = text.length;

        // Encrypt from end to start
        for (let i = textLength - 1; i >= 0; i--) {
            for (let j = 0; j < this.scrambleIterations; j++) {
                await this.delay(this.revealDelay / 2);
                const chars = displayText.split('');
                chars[i] = this.getRandomChar();
                displayText = chars.join('');

                const revealed = displayText.substring(0, i);
                const scrambled = displayText.substring(i);
                this.element!.innerHTML = `<span class="revealed-chars">${revealed}</span><span class="encrypted-chars">${scrambled}</span>`;
            }
        }

        // All scrambled
        this.element.innerHTML = `<span class="encrypted-chars">${displayText}</span>`;
        await this.delay(500);
    }

    private delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
