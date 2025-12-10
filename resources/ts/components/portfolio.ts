/**
 * Portfolio Component
 * Handles filter tabs, modal functionality, and pagination
 */

export class Portfolio {
    private filterTabs: NodeListOf<Element> | null = null;
    private portfolioCards: NodeListOf<Element> | null = null;
    private modalOverlay: HTMLElement | null = null;
    private currentPage: number = 1;
    private itemsPerPage: number = 6;
    private currentFilter: string = 'all';

    init(): void {
        this.filterTabs = document.querySelectorAll('.filter-tab');
        this.portfolioCards = document.querySelectorAll('.portfolio-card');
        this.modalOverlay = document.querySelector('.modal-overlay');

        this.initFilters();
        this.initModal();
        this.initTiltEffect();
        this.initPagination();
        this.updatePagination();
    }

    private getFilteredCards(): Element[] {
        if (!this.portfolioCards) return [];
        return Array.from(this.portfolioCards).filter(card => {
            const category = card.getAttribute('data-category') || '';
            return this.currentFilter === 'all' || category === this.currentFilter;
        });
    }

    private updatePagination(): void {
        const filteredCards = this.getFilteredCards();
        const totalPages = Math.ceil(filteredCards.length / this.itemsPerPage);

        // Update page display
        const currentPageEl = document.getElementById('currentPage');
        const totalPagesEl = document.getElementById('totalPages');
        const prevBtn = document.getElementById('prevPage') as HTMLButtonElement;
        const nextBtn = document.getElementById('nextPage') as HTMLButtonElement;

        if (currentPageEl) currentPageEl.textContent = String(this.currentPage);
        if (totalPagesEl) totalPagesEl.textContent = String(totalPages || 1);
        if (prevBtn) prevBtn.disabled = this.currentPage <= 1;
        if (nextBtn) nextBtn.disabled = this.currentPage >= totalPages;

        // Show/hide cards based on current page
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;

        this.portfolioCards?.forEach((card, _index) => {
            const cardElement = card as HTMLElement;
            const category = cardElement.getAttribute('data-category') || '';
            const matchesFilter = this.currentFilter === 'all' || category === this.currentFilter;

            if (!matchesFilter) {
                cardElement.classList.add('page-hidden');
                return;
            }

            const filteredIndex = filteredCards.indexOf(card);
            if (filteredIndex >= startIndex && filteredIndex < endIndex) {
                cardElement.classList.remove('page-hidden');
                cardElement.style.animation = `fadeIn 0.4s ease ${(filteredIndex - startIndex) * 0.1}s forwards`;
            } else {
                cardElement.classList.add('page-hidden');
            }
        });
    }

    private initPagination(): void {
        const prevBtn = document.getElementById('prevPage');
        const nextBtn = document.getElementById('nextPage');

        prevBtn?.addEventListener('click', () => {
            if (this.currentPage > 1) {
                this.currentPage--;
                this.updatePagination();
            }
        });

        nextBtn?.addEventListener('click', () => {
            const filteredCards = this.getFilteredCards();
            const totalPages = Math.ceil(filteredCards.length / this.itemsPerPage);
            if (this.currentPage < totalPages) {
                this.currentPage++;
                this.updatePagination();
            }
        });
    }

    private initFilters(): void {
        if (!this.filterTabs || !this.portfolioCards) return;

        this.filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                this.filterTabs?.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                this.currentFilter = tab.getAttribute('data-filter') || 'all';
                this.currentPage = 1; // Reset to first page on filter change
                this.updatePagination();
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
