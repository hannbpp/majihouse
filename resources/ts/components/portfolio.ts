/**
 * Portfolio Component
 * Handles filter tabs and modal functionality
 */

export class Portfolio {
    private filterTabs: NodeListOf<Element> | null = null;
    private portfolioCards: NodeListOf<Element> | null = null;
    private modalOverlay: HTMLElement | null = null;

    init(): void {
        this.filterTabs = document.querySelectorAll('.filter-tab');
        this.portfolioCards = document.querySelectorAll('.portfolio-card');
        this.modalOverlay = document.querySelector('.modal-overlay');

        this.initFilters();
        this.initModal();
        this.initTiltEffect();
    }

    private initFilters(): void {
        if (!this.filterTabs || !this.portfolioCards) return;

        this.filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                this.filterTabs?.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                const filter = tab.getAttribute('data-filter') || 'all';

                // Filter cards with animation
                this.portfolioCards?.forEach((card, index) => {
                    const cardElement = card as HTMLElement;
                    const category = cardElement.getAttribute('data-category') || '';

                    if (filter === 'all' || category === filter) {
                        cardElement.style.display = 'block';
                        cardElement.style.animation = `fadeIn 0.5s ease ${index * 0.1}s forwards`;
                    } else {
                        cardElement.style.display = 'none';
                    }
                });
            });
        });
    }

    private initModal(): void {
        if (!this.modalOverlay) return;

        // Open modal on card click
        this.portfolioCards?.forEach(card => {
            card.addEventListener('click', () => {
                const title = card.querySelector('.portfolio-title')?.textContent;
                const category = card.querySelector('.portfolio-category')?.textContent;
                const image = card.querySelector('.portfolio-image') as HTMLImageElement;

                // Populate modal content (simplified)
                const modalContent = this.modalOverlay?.querySelector('.modal-content');
                if (modalContent && image) {
                    const modalImage = modalContent.querySelector('.modal-image') as HTMLImageElement;
                    const modalTitle = modalContent.querySelector('.modal-title');
                    const modalCategory = modalContent.querySelector('.modal-category');

                    if (modalImage) modalImage.src = image.src;
                    if (modalTitle) modalTitle.textContent = title || '';
                    if (modalCategory) modalCategory.textContent = category || '';
                }

                this.openModal();
            });
        });

        // Close modal
        const closeBtn = this.modalOverlay.querySelector('.modal-close');
        closeBtn?.addEventListener('click', () => this.closeModal());

        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                this.closeModal();
            }
        });

        // Close on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    private openModal(): void {
        this.modalOverlay?.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    private closeModal(): void {
        this.modalOverlay?.classList.remove('active');
        document.body.style.overflow = '';
    }

    private initTiltEffect(): void {
        this.portfolioCards?.forEach(card => {
            const cardElement = card as HTMLElement;

            cardElement.addEventListener('mousemove', (e) => {
                const rect = cardElement.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;

                cardElement.style.transform =
                    `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });

            cardElement.addEventListener('mouseleave', () => {
                cardElement.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }
}
