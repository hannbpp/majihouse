/**
 * Contact Form Component
 * Handles form validation and submission
 */

export class ContactForm {
    private form: HTMLFormElement | null = null;
    private submitBtn: HTMLButtonElement | null = null;

    init(): void {
        this.form = document.querySelector('.contact-form form');
        this.submitBtn = this.form?.querySelector('.btn-submit') || null;

        if (this.form) {
            this.initValidation();
            this.initSubmission();
            this.initFloatingLabels();
        }
    }

    private initValidation(): void {
        const inputs = this.form?.querySelectorAll('.form-input, .form-textarea');

        inputs?.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input as HTMLInputElement);
            });

            input.addEventListener('input', () => {
                const inputEl = input as HTMLInputElement;
                if (inputEl.classList.contains('error')) {
                    this.validateField(inputEl);
                }
            });
        });
    }

    private validateField(input: HTMLInputElement): boolean {
        const value = input.value.trim();
        const isRequired = input.hasAttribute('required');
        const type = input.type;
        let isValid = true;

        // Remove previous error
        input.classList.remove('error');
        const errorEl = input.parentElement?.querySelector('.error-message');
        errorEl?.remove();

        // Check required
        if (isRequired && !value) {
            this.showError(input, 'This field is required');
            isValid = false;
        }
        // Check email format
        else if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.showError(input, 'Please enter a valid email');
                isValid = false;
            }
        }

        return isValid;
    }

    private showError(input: HTMLInputElement, message: string): void {
        input.classList.add('error');

        const errorEl = document.createElement('span');
        errorEl.className = 'error-message';
        errorEl.textContent = message;
        errorEl.style.cssText = 'color: #ff4444; font-size: 0.75rem; margin-top: 0.25rem; display: block;';

        input.parentElement?.appendChild(errorEl);
    }

    private initSubmission(): void {
        this.form?.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Validate all fields
            const inputs = this.form?.querySelectorAll('.form-input[required], .form-textarea[required]');
            let isValid = true;

            inputs?.forEach(input => {
                if (!this.validateField(input as HTMLInputElement)) {
                    isValid = false;
                }
            });

            if (!isValid) return;

            // Show loading state
            this.submitBtn?.classList.add('loading');

            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 2000));

                // Show success
                this.showSuccess();
            } catch {
                this.showToast('Something went wrong. Please try again.', 'error');
            } finally {
                this.submitBtn?.classList.remove('loading');
            }
        });
    }

    private initFloatingLabels(): void {
        const inputs = this.form?.querySelectorAll('.form-input, .form-textarea');

        inputs?.forEach(input => {
            const inputEl = input as HTMLInputElement;

            // Check if already has value (autofill)
            if (inputEl.value) {
                inputEl.parentElement?.classList.add('has-value');
            }

            inputEl.addEventListener('focus', () => {
                inputEl.parentElement?.classList.add('focused');
            });

            inputEl.addEventListener('blur', () => {
                inputEl.parentElement?.classList.remove('focused');
                if (inputEl.value) {
                    inputEl.parentElement?.classList.add('has-value');
                } else {
                    inputEl.parentElement?.classList.remove('has-value');
                }
            });
        });
    }

    private showSuccess(): void {
        const formContent = this.form?.parentElement?.querySelector('.form-content');
        const successContent = this.form?.parentElement?.querySelector('.form-success');

        if (formContent && successContent) {
            (formContent as HTMLElement).style.display = 'none';
            successContent.classList.add('show');
        }

        this.showToast('Message sent successfully!', 'success');
        this.form?.reset();
    }

    private showToast(message: string, type: 'success' | 'error'): void {
        let container = document.querySelector('.toast-container');

        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
      <span class="toast-icon">${type === 'success' ? '✓' : '✕'}</span>
      <span class="toast-message">${message}</span>
    `;

        container.appendChild(toast);

        // Animate in
        setTimeout(() => toast.classList.add('show'), 10);

        // Remove after 5 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    }
}
