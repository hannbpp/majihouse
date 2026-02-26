/**
 * Contact Form Component
 * Handles form validation and submission
 */

export class ContactForm {
    private form: HTMLFormElement | null = null;

    init(): void {
        this.form = document.querySelector('.contact-form form');

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
        this.form?.addEventListener('submit', (e) => {
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

            // Get form data
            const name = (this.form?.querySelector('#name') as HTMLInputElement)?.value || '';
            const email = (this.form?.querySelector('#email') as HTMLInputElement)?.value || '';
            const phone = (this.form?.querySelector('#phone') as HTMLInputElement)?.value || '';
            const serviceEl = this.form?.querySelector('#service') as HTMLSelectElement;
            const service = serviceEl?.options[serviceEl.selectedIndex]?.text || '';
            const budgetEl = this.form?.querySelector('#budget') as HTMLSelectElement;
            const budget = budgetEl?.options[budgetEl.selectedIndex]?.text || '';
            const message = (this.form?.querySelector('#message') as HTMLTextAreaElement)?.value || '';
            const currentLang = this.getCurrentLang();

            const copy = currentLang === 'en'
                ? {
                    greeting: 'Hello MAJIHOUSE!',
                    interest: 'I am interested in a consultation:',
                    myData: 'My Details:',
                    name: 'Name',
                    email: 'Email',
                    phone: 'Phone',
                    service: 'Service',
                    budget: 'Budget',
                    message: 'Message:',
                    sentFrom: 'Sent from MAJIHOUSE website',
                }
                : {
                    greeting: 'Halo MAJIHOUSE!',
                    interest: 'Saya tertarik untuk konsultasi:',
                    myData: 'Data Saya:',
                    name: 'Nama',
                    email: 'Email',
                    phone: 'Telepon',
                    service: 'Layanan',
                    budget: 'Budget',
                    message: 'Pesan:',
                    sentFrom: 'Dikirim dari website MAJIHOUSE',
                };

            // Build WhatsApp message
            const waMessage = `*${copy.greeting}* 👋

${copy.interest}

📋 *${copy.myData}*
• ${copy.name}: ${name}
• ${copy.email}: ${email}
• ${copy.phone}: ${phone || '-'}
• ${copy.service}: ${service || '-'}
• ${copy.budget}: ${budget || '-'}

💬 *${copy.message}*
${message}

_${copy.sentFrom}_`;

            // WhatsApp number
            const waNumber = '628987749739';
            const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

            // Open WhatsApp
            window.open(waUrl, '_blank');

            // Show success message
            this.showSuccess(currentLang);
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

    private showSuccess(lang: 'id' | 'en'): void {
        const formContent = this.form?.parentElement?.querySelector('.form-content');
        const successContent = this.form?.parentElement?.querySelector('.form-success');

        if (formContent && successContent) {
            (formContent as HTMLElement).style.display = 'none';
            successContent.classList.add('show');
        }

        this.showToast(lang === 'en' ? 'Message sent successfully!' : 'Pesan berhasil dikirim!', 'success');
        this.form?.reset();
    }

    private getCurrentLang(): 'id' | 'en' {
        const lang = localStorage.getItem('majihouse_lang');
        return lang === 'en' ? 'en' : 'id';
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
