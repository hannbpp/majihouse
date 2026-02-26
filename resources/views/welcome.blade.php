@extends('layouts.app')

@section('content')
    <!-- Navigation -->
    <nav class="navbar">
        <a href="#" class="nav-logo">majihouse</a>
        <ul class="nav-links">
            <li><a href="#about" class="nav-link" data-i18n="nav.about">Tentang</a></li>
            <li><a href="#services" class="nav-link" data-i18n="nav.services">Layanan</a></li>
            <li><a href="#portfolio" class="nav-link" data-i18n="nav.portfolio">Portfolio</a></li>
            <li><a href="#pricing" class="nav-link" data-i18n="nav.pricing">Harga</a></li>
            <li><a href="#contact" class="nav-link" data-i18n="nav.contact">Kontak</a></li>
        </ul>
        <div style="display:flex;align-items:center;gap:0.75rem;">
            <button class="lang-toggle" id="langToggle" aria-label="Toggle language">ID</button>
            <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme">
                <i data-lucide="sun" class="icon-sun"></i>
                <i data-lucide="moon" class="icon-moon"></i>
            </button>
            <a href="https://wa.me/628987749739" target="_blank" class="nav-cta">Kick Off <i
                    data-lucide="arrow-right"></i></a>
        </div>
        <button class="nav-toggle" aria-label="Toggle menu"><span></span><span></span><span></span></button>
    </nav>

    <div class="scroll-progress"></div>

    <!-- HERO -->
    <section class="hero" id="hero">
        <div class="hero-content">
            <div class="hero-announcement"><i data-lucide="zap"></i> <span data-i18n="hero.announcement">Dunia udah ribet,
                    brand kamu jangan.</span></div>
            <h1 class="hero-title" data-i18n="hero.title">Ubah Mumet Jadi Aset,<br>Dengan Sat-Set.</h1>
            <p class="hero-subtitle" data-i18n="hero.subtitle">Ngapain pusing sendirian? Biar kita yang urus website &
                socmed dari nol sampai
                <strong><em>jadi cuan!</em></strong>
            </p>
            <div class="hero-cta">
                <a href="#contact" class="btn btn-primary"><span data-i18n="hero.ctaPrimary">Mulai Konsultasi Gratis</span>
                    <i data-lucide="arrow-right"></i></a>
                <a href="#portfolio" class="btn btn-outline" data-i18n="hero.ctaSecondary">Lihat Portfolio</a>
            </div>
            <div class="hero-social-proof">
                <div class="avatar-stack">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop" alt="Client">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop" alt="Client">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop" alt="Client">
                    <span class="avatar-count">15+</span>
                </div>
                <div class="hero-stars">★★★★★</div>
                <span class="hero-proof-text" data-i18n="hero.proof">15+ Klien Puas • 4.9 Rating</span>
            </div>
        </div>
        <div class="floating-testimonials">
            <div class="floating-card" style="top:30%;left:13%;">
                <div class="floating-card-header">
                    <i data-lucide="quote" class="floating-card-quote"></i>
                    <i data-lucide="circle-check-big" class="floating-card-check"></i>
                </div>
                <div class="floating-card-text" data-i18n="testi.1.text">Website selesai tepat waktu dengan kualitas luar
                    biasa!</div>
                <div class="floating-card-author">— Dimas P.</div>
            </div>
            <div class="floating-card" style="top:33%;right:13%;">
                <div class="floating-card-header">
                    <i data-lucide="quote" class="floating-card-quote"></i>
                    <i data-lucide="circle-check-big" class="floating-card-check"></i>
                </div>
                <div class="floating-card-text" data-i18n="testi.2.text">Penjualan naik 150% setelah platform baru.</div>
                <div class="floating-card-author">— Lia A.</div>
            </div>
            <div class="floating-card" style="top:60%;left:16%;">
                <div class="floating-card-header">
                    <i data-lucide="quote" class="floating-card-quote"></i>
                    <i data-lucide="circle-check-big" class="floating-card-check"></i>
                </div>
                <div class="floating-card-text" data-i18n="testi.3.text">Profesionalisme tim sangat luar biasa.</div>
                <div class="floating-card-author">— Sugondo L.</div>
            </div>
        </div>
    </section>

    <!-- ABOUT -->
    <section class="section about" id="about">
        <div class="container">
            <div class="section-header fade-in">
                <div class="section-label"><i data-lucide="shield"></i> <span data-i18n="about.badge">TENTANG KAMI</span>
                </div>
                <h2 class="section-title" data-i18n="about.title">Where Creativity<br><span
                        class="section-title-muted">Meets Code</span></h2>
            </div>
            <div class="about-grid">
                <div class="about-story fade-in-left">
                    <h3 data-i18n="about.story.title">Studio Digital Modern</h3>
                    <p data-i18n="about.desc1">MAJIHOUSE adalah studio digital yang menjembatani kesenjangan antara desain
                        yang memukau dan
                        teknologi yang handal. Kami mengkhususkan diri dalam membangun aplikasi web, sistem, dan antarmuka
                        yang berkinerja sempurna.</p>
                    <p data-i18n="about.desc2">Pendekatan kami menggabungkan keahlian teknis dengan pemikiran kreatif. Dari
                        startup hingga
                        enterprise, kami bermitra dengan brand ambisius untuk mengubah tantangan kompleks menjadi solusi
                        digital yang elegan.</p>
                </div>
                <div class="about-right fade-in-right">
                    <div class="stats-grid">
                        <div class="stat-item"><span class="stat-number" data-target="15" data-suffix="+">0</span><span
                                class="stat-label" data-i18n="about.stat1">Proyek Selesai</span></div>
                        <div class="stat-item"><span class="stat-number" data-target="10" data-suffix="+">0</span><span
                                class="stat-label" data-i18n="about.stat2">Klien Puas</span></div>
                        <div class="stat-item"><span class="stat-number" data-target="3" data-suffix="+">0</span><span
                                class="stat-label" data-i18n="about.stat3">Tahun Pengalaman</span></div>
                        <div class="stat-item"><span class="stat-number" data-target="99" data-suffix="%">0</span><span
                                class="stat-label" data-i18n="about.stat4">Kepuasan Klien</span></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tech-stack">
            <div class="tech-marquee">
                <div class="tech-item"><i data-lucide="code-xml"></i> React / Next.js</div>
                <div class="tech-item"><i data-lucide="layers"></i> TypeScript</div>
                <div class="tech-item"><i data-lucide="code"></i> Vue.js</div>
                <div class="tech-item"><i data-lucide="server"></i> Node.js</div>
                <div class="tech-item"><i data-lucide="cpu"></i> Laravel</div>
                <div class="tech-item"><i data-lucide="database"></i> PostgreSQL</div>
                <div class="tech-item"><i data-lucide="figma"></i> Figma</div>
                <div class="tech-item"><i data-lucide="image"></i> Photoshop</div>
                <div class="tech-item"><i data-lucide="pen-tool"></i> Illustrator</div>
                <div class="tech-item"><i data-lucide="paintbrush"></i> Canva</div>
                {{-- Duplicated for seamless marquee loop --}}
                <div class="tech-item"><i data-lucide="code-xml"></i> React / Next.js</div>
                <div class="tech-item"><i data-lucide="layers"></i> TypeScript</div>
                <div class="tech-item"><i data-lucide="code"></i> Vue.js</div>
                <div class="tech-item"><i data-lucide="server"></i> Node.js</div>
                <div class="tech-item"><i data-lucide="cpu"></i> Laravel</div>
                <div class="tech-item"><i data-lucide="database"></i> PostgreSQL</div>
                <div class="tech-item"><i data-lucide="figma"></i> Figma</div>
                <div class="tech-item"><i data-lucide="image"></i> Photoshop</div>
                <div class="tech-item"><i data-lucide="pen-tool"></i> Illustrator</div>
                <div class="tech-item"><i data-lucide="paintbrush"></i> Canva</div>
            </div>
        </div>
    </section>

    <!-- SERVICES (Bento Grid) -->
    <section class="section services" id="services">
        <div class="container">
            <div class="section-header fade-in">
                <div class="section-label"><i data-lucide="layers"></i> <span data-i18n="services.badge">LAYANAN
                        KAMI</span></div>
                <h2 class="section-title" data-i18n="services.title">Solusi Digital<br><span
                        class="section-title-muted">Untuk Bisnis Anda</span></h2>
            </div>
            <div class="service-category-toggle fade-in">
                <button class="category-btn active" data-category="webdev"><i data-lucide="code"></i> Web Dev</button>
                <button class="category-btn" data-category="socmed"><i data-lucide="share-2"></i> Social Media</button>
            </div>
            <div class="service-container" data-services="webdev">
                <div class="bento-grid">
                    <div class="bento-card fade-in-left">
                        <h3 class="bento-card-title" data-i18n="services.web1.title">Web Development</h3>
                        <p class="bento-card-desc" data-i18n="services.web1.desc">Membangun aplikasi web modern, responsif,
                            dan berkinerja tinggi.</p>
                        <div class="bento-tags"><span class="bento-tag">Frontend</span><span
                                class="bento-tag">Backend</span><span class="bento-tag">Full-stack</span><span
                                class="bento-tag">E-commerce</span><span class="bento-tag">CMS</span><span
                                class="bento-tag">PWA</span></div>
                    </div>
                    <div class="bento-card fade-in-right">
                        <h3 class="bento-card-title" data-i18n="services.web2.title">System Development</h3>
                        <p class="bento-card-desc" data-i18n="services.web2.desc">Solusi software kustom dan sistem
                            enterprise untuk bisnis Anda.</p>
                        <div class="bento-tags"><span class="bento-tag">Custom Apps</span><span
                                class="bento-tag">SaaS</span><span class="bento-tag">API</span><span
                                class="bento-tag">Database</span><span class="bento-tag">Cloud</span></div>
                    </div>
                    <div class="bento-card fade-in-left">
                        <h3 class="bento-card-title" data-i18n="services.web3.title">Data Analytics</h3>
                        <p class="bento-card-desc" data-i18n="services.web3.desc">Mengubah data menjadi insight actionable
                            dengan solusi analitik canggih.
                        </p>
                        <div class="bento-tags"><span class="bento-tag">BI Dashboard</span><span
                                class="bento-tag">Visualization</span><span class="bento-tag">ETL</span><span
                                class="bento-tag">ML</span><span class="bento-tag">Real-time</span></div>
                    </div>
                    <div class="bento-card fade-in-right">
                        <h3 class="bento-card-title" data-i18n="services.web4.title">UI/UX Design</h3>
                        <p class="bento-card-desc" data-i18n="services.web4.desc">Antarmuka intuitif dan visual memukau yang
                            disukai pengguna.</p>
                        <div class="bento-tags"><span class="bento-tag">Interface</span><span
                                class="bento-tag">Prototyping</span><span class="bento-tag">Design System</span><span
                                class="bento-tag">Mobile-First</span></div>
                    </div>
                </div>
            </div>
            <div class="service-container" data-services="socmed" style="display:none;">
                <div class="bento-grid">
                    <div class="bento-card fade-in-left">
                        <h3 class="bento-card-title" data-i18n="services.soc1.title">Content Creation</h3>
                        <p class="bento-card-desc" data-i18n="services.soc1.desc">Konten visual menarik untuk feed, story,
                            dan reels.</p>
                        <div class="bento-tags"><span class="bento-tag">Photo</span><span
                                class="bento-tag">Video</span><span class="bento-tag">Reels</span><span
                                class="bento-tag">Story</span><span class="bento-tag">Carousel</span></div>
                    </div>
                    <div class="bento-card fade-in-right">
                        <h3 class="bento-card-title" data-i18n="services.soc2.title">Social Media Strategy</h3>
                        <p class="bento-card-desc" data-i18n="services.soc2.desc">Strategi growth dan engagement terukur
                            untuk brand awareness.</p>
                        <div class="bento-tags"><span class="bento-tag">Growth</span><span
                                class="bento-tag">Planning</span><span class="bento-tag">Analytics</span><span
                                class="bento-tag">KPI</span></div>
                    </div>
                    <div class="bento-card fade-in-left">
                        <h3 class="bento-card-title" data-i18n="services.soc3.title">Community Management</h3>
                        <p class="bento-card-desc" data-i18n="services.soc3.desc">Kelola komunitas dan interaksi untuk
                            hubungan yang kuat.</p>
                        <div class="bento-tags"><span class="bento-tag">Engagement</span><span
                                class="bento-tag">Response</span><span class="bento-tag">Moderation</span></div>
                    </div>
                    <div class="bento-card fade-in-right">
                        <h3 class="bento-card-title" data-i18n="services.soc4.title">Paid Advertising</h3>
                        <p class="bento-card-desc" data-i18n="services.soc4.desc">Iklan berbayar efektif di Instagram,
                            Facebook, TikTok.</p>
                        <div class="bento-tags"><span class="bento-tag">Meta Ads</span><span class="bento-tag">TikTok
                                Ads</span><span class="bento-tag">Targeting</span><span class="bento-tag">ROAS</span></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- PORTFOLIO -->
    <section class="section portfolio" id="portfolio">
        <div class="container">
            <div class="section-header fade-in">
                <div class="section-label"><i data-lucide="briefcase"></i> <span data-i18n="portfolio.badge">PROJECT
                        KAMI</span></div>
                <h2 class="section-title" data-i18n="portfolio.title">Karya<br><span class="section-title-muted">Terbaik
                        Kami</span></h2>
            </div>
            <div class="filter-tabs fade-in">
                <button class="filter-tab active" data-filter="all" data-i18n="portfolio.all">Semua</button>
                <button class="filter-tab" data-filter="web-app">Web App</button>
                <button class="filter-tab" data-filter="landing">Landing Page</button>
                <button class="filter-tab" data-filter="admin-dashboard">Admin Dashboard</button>
                <button class="filter-tab" data-filter="payment">Payment Gateway</button>
                <button class="filter-tab" data-filter="booking">Booking System</button>
                <button class="filter-tab" data-filter="design">Graphic Design</button>
            </div>
            <div class="portfolio-grid" id="portfolioGrid">
                <div class="portfolio-card" data-category="landing"><img src="/images/portfolio/itfest-2025.png"
                        alt="IT FEST 2025" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay"><span class="portfolio-category">Landing Page</span>
                        <h4 class="portfolio-title">IT FEST 2025</h4>
                        <div class="portfolio-tech"><span>React</span><span>•</span><span>Vite</span></div>
                    </div>
                </div>
                <div class="portfolio-card" data-category="web-app"><img src="/images/portfolio/ifl-malang.png"
                        alt="IFL Chapter Malang" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay"><span class="portfolio-category">Web App</span>
                        <h4 class="portfolio-title">IFL Chapter Malang</h4>
                        <div class="portfolio-tech"><span>Laravel</span><span>•</span><span>MySQL</span></div>
                    </div>
                </div>
                <div class="portfolio-card" data-category="payment"><img src="/images/portfolio/akademi-competition.png"
                        alt="Akademi Competition" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay"><span class="portfolio-category">Payment Gateway</span>
                        <h4 class="portfolio-title">Akademi Competition</h4>
                        <div class="portfolio-tech"><span>Laravel</span><span>•</span><span>Midtrans</span></div>
                    </div>
                </div>
                <div class="portfolio-card" data-category="landing"><img src="/images/portfolio/kbmdsi-2025.png"
                        alt="KBMDSI 2025" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay"><span class="portfolio-category">Landing Page</span>
                        <h4 class="portfolio-title">KBMDSI 2025</h4>
                        <div class="portfolio-tech"><span>Laravel</span><span>•</span><span>Blade</span></div>
                    </div>
                </div>
                <div class="portfolio-card" data-category="booking"><img src="/images/portfolio/karvin-badminton.png"
                        alt="Karvin Badminton" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay"><span class="portfolio-category">Booking System</span>
                        <h4 class="portfolio-title">Karvin Badminton</h4>
                        <div class="portfolio-tech"><span>Laravel</span><span>•</span><span>Booking</span></div>
                    </div>
                </div>
                <div class="portfolio-card" data-category="admin-dashboard"><img
                        src="/images/portfolio/inventory-system.png" alt="Inventory System" class="portfolio-image"
                        loading="lazy">
                    <div class="portfolio-overlay"><span class="portfolio-category">Admin Dashboard</span>
                        <h4 class="portfolio-title">Inventory System</h4>
                        <div class="portfolio-tech"><span>Laravel</span><span>•</span><span>Livewire</span></div>
                    </div>
                </div>
                <div class="portfolio-card" data-category="admin-dashboard"><img src="/images/portfolio/admin-panel.png"
                        alt="Admin Panel" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay"><span class="portfolio-category">Admin Dashboard</span>
                        <h4 class="portfolio-title">Karvin Admin Panel</h4>
                        <div class="portfolio-tech"><span>Laravel</span><span>•</span><span>Filament</span></div>
                    </div>
                </div>
                <div class="portfolio-card" data-category="payment"><img src="/images/portfolio/karvin-payment.png"
                        alt="Karvin Payment" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay"><span class="portfolio-category">Payment Gateway</span>
                        <h4 class="portfolio-title">Karvin Payment</h4>
                        <div class="portfolio-tech"><span>Midtrans</span><span>•</span><span>Laravel</span></div>
                    </div>
                </div>
                <div class="portfolio-card" data-category="landing"><img src="/images/portfolio/marirasa.png"
                        alt="Marirasa Bakpao" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay"><span class="portfolio-category">Landing Page</span>
                        <h4 class="portfolio-title">Marirasa Bakpao</h4>
                        <div class="portfolio-tech"><span>HTML/CSS</span><span>•</span><span>WhatsApp API</span></div>
                    </div>
                </div>
                <div class="portfolio-card" data-category="design"><img src="/images/portfolio/nst-project.jpg"
                        alt="NST Project Season 1" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay"><span class="portfolio-category">Graphic Design</span>
                        <h4 class="portfolio-title">NST Project Season 1</h4>
                        <div class="portfolio-tech"><span>Social Media</span><span>•</span><span>E-Sports</span></div>
                    </div>
                </div>
                <div class="portfolio-card" data-category="design"><img src="/images/portfolio/farewell-kenboy.jpg"
                        alt="Farewell Kenboy" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay"><span class="portfolio-category">Graphic Design</span>
                        <h4 class="portfolio-title">Farewell Kenboy</h4>
                        <div class="portfolio-tech"><span>Social Media</span><span>•</span><span>E-Sports</span></div>
                    </div>
                </div>
                <div class="portfolio-card" data-category="web-app"><img src="/images/portfolio/sipenyu-presensi.jpg"
                        alt="SIPENYU Presensi" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay"><span class="portfolio-category">Web App</span>
                        <h4 class="portfolio-title">SIPENYU Presensi</h4>
                        <div class="portfolio-tech"><span>Web App</span><span>•</span><span>System</span></div>
                    </div>
                </div>
                <div class="portfolio-card" data-category="design"><img src="/images/portfolio/pioner-gids.jpg"
                        alt="Pioner Gids" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay"><span class="portfolio-category">Graphic Design</span>
                        <h4 class="portfolio-title">Pioner Gids Qualified</h4>
                        <div class="portfolio-tech"><span>Social Media</span><span>•</span><span>E-Sports</span></div>
                    </div>
                </div>
            </div>
            <div class="portfolio-pagination fade-in">
                <button class="pagination-btn" id="prevPage" disabled><i data-lucide="chevron-left"></i></button>
                <span class="pagination-info"><span id="currentPage">1</span> / <span id="totalPages">2</span></span>
                <button class="pagination-btn" id="nextPage"><i data-lucide="chevron-right"></i></button>
            </div>
        </div>
    </section>

    <!-- PRICING (Tabbed: Web Dev 3 tier + Social Media 4 tier) -->
    <section class="section pricing" id="pricing">
        <div class="container">
            <div class="section-header fade-in">
                <div class="section-label"><i data-lucide="zap"></i> <span data-i18n="pricing.badge">HARGA</span></div>
                <h2 class="section-title" data-i18n="pricing.title">Paket Harga<br><span
                        class="section-title-muted">Fleksibel</span></h2>
            </div>
            <div class="service-category-toggle fade-in" id="pricingToggle">
                <button class="category-btn active" data-pricing="webdev">Web Development</button>
                <button class="category-btn" data-pricing="socmed">Social Media</button>
            </div>
            <!-- Web Dev Pricing (3 tiers) -->
            <div class="pricing-container" data-pricing-content="webdev">
                <div class="pricing-grid">
                    <div class="pricing-card fade-in">
                        <h3 class="pricing-tier">Starter</h3>
                        <p class="pricing-description" data-i18n="pricing.starter.desc">Cocok untuk landing page dan website
                            sederhana</p>
                        <div class="pricing-box"><span class="pricing-label" data-i18n="pricing.from">Mulai dari</span><span
                                class="pricing-original">Rp. 1.500.000</span><span class="pricing-price">Rp. 500.000</span>
                        </div>
                        <ul class="pricing-features">
                            <li data-i18n="pricing.f1.1">Landing Page / Website Sederhana</li>
                            <li data-i18n="pricing.f1.2">Desain Responsif</li>
                            <li data-i18n="pricing.f1.3">Hingga 5 Halaman</li>
                            <li data-i18n="pricing.f1.4">Basic SEO Setup</li>
                            <li data-i18n="pricing.f1.5">Integrasi Form Kontak</li>
                            <li data-i18n="pricing.f1.6">1 Bulan Support</li>
                        </ul><a href="#contact" class="btn btn-outline" style="width:100%"
                            data-i18n="pricing.btn.start">Mulai
                            Sekarang</a>
                    </div>
                    <div class="pricing-card popular fade-in"><span class="popular-badge"
                            data-i18n="pricing.popular">Populer</span>
                        <h3 class="pricing-tier">Custom</h3>
                        <p class="pricing-description" data-i18n="pricing.custom.desc">Solusi fleksibel sesuai kebutuhan
                            bisnis
                            Anda</p>
                        <div class="pricing-box"><span class="pricing-label" data-i18n="pricing.from">Mulai dari</span><span
                                class="pricing-original">Rp. 3.500.000</span><span class="pricing-price">Rp.
                                2.000.000</span></div>
                        <ul class="pricing-features">
                            <li data-i18n="pricing.f2.1">Aplikasi Web Lengkap</li>
                            <li data-i18n="pricing.f2.2">Custom UI/UX Design</li>
                            <li data-i18n="pricing.f2.3">User Authentication</li>
                            <li data-i18n="pricing.f2.4">Integrasi Database</li>
                            <li data-i18n="pricing.f2.5">Admin Dashboard</li>
                            <li data-i18n="pricing.f2.6">API Development</li>
                            <li data-i18n="pricing.f2.7">3 Bulan Support</li>
                        </ul><a href="#contact" class="btn btn-primary" style="width:100%"
                            data-i18n="pricing.btn.contact">Hubungi Kami</a>
                    </div>
                    <div class="pricing-card fade-in">
                        <h3 class="pricing-tier">Professional</h3>
                        <p class="pricing-description" data-i18n="pricing.pro.desc">Cocok untuk aplikasi web skala besar</p>
                        <div class="pricing-box"><span class="pricing-label" data-i18n="pricing.from">Mulai dari</span><span
                                class="pricing-original">Rp. 7.500.000</span><span class="pricing-price">Rp.
                                3.500.000</span></div>
                        <ul class="pricing-features">
                            <li data-i18n="pricing.f3.1">Aplikasi Skala Besar</li>
                            <li data-i18n="pricing.f3.2">Integrasi Sistem Kompleks</li>
                            <li data-i18n="pricing.f3.3">Dedicated Project Manager</li>
                            <li data-i18n="pricing.f3.4">Priority Support</li>
                            <li data-i18n="pricing.f3.5">Custom SLA</li>
                            <li data-i18n="pricing.f3.6">Training & Dokumentasi</li>
                            <li data-i18n="pricing.f3.7">Ongoing Maintenance</li>
                        </ul><a href="#contact" class="btn btn-outline" style="width:100%"
                            data-i18n="pricing.btn.start">Mulai
                            Sekarang</a>
                    </div>
                </div>
            </div>
            <!-- Social Media Pricing (4 tiers) -->
            <div class="pricing-container" data-pricing-content="socmed" style="display:none;">
                <div class="pricing-grid four-cols">
                    <div class="pricing-card fade-in">
                        <h3 class="pricing-tier">Basic</h3>
                        <p class="pricing-description" data-i18n="pricing.soc.basic.desc">Untuk UMKM yang baru mulai</p>
                        <div class="pricing-box"><span class="pricing-label" data-i18n="pricing.month">Per bulan</span><span
                                class="pricing-price">Rp.
                                500.000</span></div>
                        <ul class="pricing-features">
                            <li data-i18n="pricing.soc.f1.1">8 Post Feed / bulan</li>
                            <li data-i18n="pricing.soc.f1.2">4 Story / bulan</li>
                            <li data-i18n="pricing.soc.f1.3">Basic Design Template</li>
                            <li data-i18n="pricing.soc.f1.4">Caption Writing</li>
                            <li data-i18n="pricing.soc.f1.5">1 Platform</li>
                        </ul><a href="#contact" class="btn btn-outline" style="width:100%"
                            data-i18n="pricing.btn.choose">Pilih Paket</a>
                    </div>
                    <div class="pricing-card popular fade-in"><span class="popular-badge"
                            data-i18n="pricing.popular">Populer</span>
                        <h3 class="pricing-tier">Growth</h3>
                        <p class="pricing-description" data-i18n="pricing.soc.growth.desc">Untuk brand yang ingin berkembang
                        </p>
                        <div class="pricing-box"><span class="pricing-label" data-i18n="pricing.month">Per bulan</span><span
                                class="pricing-price">Rp.
                                1.000.000</span></div>
                        <ul class="pricing-features">
                            <li data-i18n="pricing.soc.f2.1">12 Post Feed / bulan</li>
                            <li data-i18n="pricing.soc.f2.2">8 Story / bulan</li>
                            <li data-i18n="pricing.soc.f2.3">4 Reels / bulan</li>
                            <li data-i18n="pricing.soc.f2.4">Custom Design</li>
                            <li data-i18n="pricing.soc.f2.5">Hashtag Strategy</li>
                            <li data-i18n="pricing.soc.f2.6">2 Platform</li>
                            <li data-i18n="pricing.soc.f2.7">Monthly Report</li>
                        </ul><a href="#contact" class="btn btn-primary" style="width:100%"
                            data-i18n="pricing.btn.choose">Pilih Paket</a>
                    </div>
                    <div class="pricing-card fade-in">
                        <h3 class="pricing-tier">Premium</h3>
                        <p class="pricing-description" data-i18n="pricing.soc.premium.desc">Untuk brand dengan ambisi besar
                        </p>
                        <div class="pricing-box"><span class="pricing-label" data-i18n="pricing.month">Per bulan</span><span
                                class="pricing-price">Rp.
                                2.000.000</span></div>
                        <ul class="pricing-features">
                            <li data-i18n="pricing.soc.f3.1">20 Post Feed / bulan</li>
                            <li data-i18n="pricing.soc.f3.2">15 Story / bulan</li>
                            <li data-i18n="pricing.soc.f3.3">8 Reels / bulan</li>
                            <li data-i18n="pricing.soc.f3.4">Premium Design</li>
                            <li data-i18n="pricing.soc.f3.5">Content Calendar</li>
                            <li data-i18n="pricing.soc.f3.6">3 Platform</li>
                            <li data-i18n="pricing.soc.f3.7">Engagement Management</li>
                            <li data-i18n="pricing.soc.f3.8">Weekly Report</li>
                        </ul><a href="#contact" class="btn btn-outline" style="width:100%"
                            data-i18n="pricing.btn.choose">Pilih Paket</a>
                    </div>
                    <div class="pricing-card fade-in">
                        <h3 class="pricing-tier">Enterprise</h3>
                        <p class="pricing-description" data-i18n="pricing.soc.enterprise.desc">Solusi lengkap end-to-end</p>
                        <div class="pricing-box"><span class="pricing-label" data-i18n="pricing.month">Per bulan</span><span
                                class="pricing-price">Custom</span></div>
                        <ul class="pricing-features">
                            <li data-i18n="pricing.soc.f4.1">Unlimited Post</li>
                            <li data-i18n="pricing.soc.f4.2">Video Production</li>
                            <li data-i18n="pricing.soc.f4.3">Paid Ads Management</li>
                            <li data-i18n="pricing.soc.f4.4">Influencer Collab</li>
                            <li data-i18n="pricing.soc.f4.5">All Platform</li>
                            <li data-i18n="pricing.soc.f4.6">Dedicated Manager</li>
                            <li data-i18n="pricing.soc.f4.7">Daily Report</li>
                            <li data-i18n="pricing.soc.f4.8">Priority Support</li>
                        </ul><a href="#contact" class="btn btn-outline" style="width:100%"
                            data-i18n="pricing.btn.contact">Hubungi Kami</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- WORKFLOW -->
    <section class="section workflow" id="workflow">
        <div class="container">
            <div class="section-header fade-in">
                <div class="section-label"><i data-lucide="rocket"></i> <span data-i18n="workflow.badge">ALUR
                        KERJA</span></div>
                <h2 class="section-title" data-i18n="workflow.title">Bagaimana<br><span class="section-title-muted">Kami
                        Bekerja</span></h2>
            </div>
            <div class="workflow-grid fade-in">
                <div class="workflow-step">
                    <div class="workflow-number">1</div>
                    <div class="workflow-line"></div>
                    <h4 class="workflow-step-title" data-i18n="workflow.step1.title">Konsultasi</h4>
                    <p class="workflow-step-desc" data-i18n="workflow.step1.desc">Diskusi kebutuhan dan tujuan project Anda
                    </p>
                </div>
                <div class="workflow-step">
                    <div class="workflow-number">2</div>
                    <div class="workflow-line"></div>
                    <h4 class="workflow-step-title" data-i18n="workflow.step2.title">Perencanaan</h4>
                    <p class="workflow-step-desc" data-i18n="workflow.step2.desc">Wireframe, timeline, dan strategi
                        development</p>
                </div>
                <div class="workflow-step">
                    <div class="workflow-number">3</div>
                    <div class="workflow-line"></div>
                    <h4 class="workflow-step-title" data-i18n="workflow.step3.title">Development</h4>
                    <p class="workflow-step-desc" data-i18n="workflow.step3.desc">Coding dan implementasi dengan update
                        berkala</p>
                </div>
                <div class="workflow-step">
                    <div class="workflow-number">4</div>
                    <div class="workflow-line"></div>
                    <h4 class="workflow-step-title" data-i18n="workflow.step4.title">Quality Check</h4>
                    <p class="workflow-step-desc" data-i18n="workflow.step4.desc">Testing menyeluruh dan revisi untuk
                        kesempurnaan</p>
                </div>
                <div class="workflow-step">
                    <div class="workflow-number">5</div>
                    <h4 class="workflow-step-title" data-i18n="workflow.step5.title">Serah Terima</h4>
                    <p class="workflow-step-desc" data-i18n="workflow.step5.desc">Deployment, training, dan support
                        berkelanjutan</p>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ -->
    <section class="section faq" id="faq">
        <div class="container">
            <div class="section-header fade-in">
                <div class="section-label"><i data-lucide="help-circle"></i> <span data-i18n="faq.badge">FAQ</span></div>
                <h2 class="section-title" data-i18n="faq.title">Pertanyaan<br><span class="section-title-muted">Yang Sering
                        Diajukan</span></h2>
            </div>
            <div class="faq-list fade-in">
                <div class="faq-item"><button class="faq-question" data-i18n="faq.q1">Berapa lama waktu pengerjaan
                        project?<i data-lucide="plus" class="faq-icon"></i></button>
                    <div class="faq-answer">
                        <p class="faq-answer-text" data-i18n="faq.a1">Waktu pengerjaan bervariasi tergantung kompleksitas
                            project. Landing page
                            biasanya 1-2 minggu, web app custom 4-8 minggu, dan sistem enterprise 2-4 bulan.</p>
                    </div>
                </div>
                <div class="faq-item"><button class="faq-question" data-i18n="faq.q2">Apakah bisa request revisi?<i
                            data-lucide="plus" class="faq-icon"></i></button>
                    <div class="faq-answer">
                        <p class="faq-answer-text" data-i18n="faq.a2">Ya! Kami menyediakan revisi pada setiap tahap
                            pengerjaan. Kami percaya
                            bahwa feedback berkelanjutan menghasilkan produk terbaik.</p>
                    </div>
                </div>
                <div class="faq-item"><button class="faq-question" data-i18n="faq.q3">Apakah ada garansi setelah project
                        selesai?<i data-lucide="plus" class="faq-icon"></i></button>
                    <div class="faq-answer">
                        <p class="faq-answer-text" data-i18n="faq.a3">Ya, setiap paket sudah termasuk masa support gratis
                            (1-3 bulan tergantung
                            paket). Kami juga menawarkan paket maintenance bulanan.</p>
                    </div>
                </div>
                <div class="faq-item"><button class="faq-question" data-i18n="faq.q4">Teknologi apa yang digunakan?<i
                            data-lucide="plus" class="faq-icon"></i></button>
                    <div class="faq-answer">
                        <p class="faq-answer-text" data-i18n="faq.a4">Kami menggunakan teknologi modern seperti React,
                            Next.js, Vue.js,
                            Laravel, Node.js, dan PostgreSQL. Pemilihan stack disesuaikan dengan kebutuhan project.</p>
                    </div>
                </div>
                <div class="faq-item"><button class="faq-question" data-i18n="faq.q5">Bagaimana sistem pembayarannya?<i
                            data-lucide="plus" class="faq-icon"></i></button>
                    <div class="faq-answer">
                        <p class="faq-answer-text" data-i18n="faq.a5">Pembayaran dilakukan bertahap: 50% di awal (DP) dan
                            50% setelah project
                            selesai. Untuk project besar, bisa dicicil dalam 3 termin.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTACT -->
    <section class="section contact" id="contact">
        <div class="container">
            <div class="section-header fade-in">
                <div class="section-label"><i data-lucide="mail"></i> <span data-i18n="contact.badge">KONTAK</span></div>
                <h2 class="section-title" data-i18n="contact.title">Mari Bangun Sesuatu<br><span
                        class="section-title-muted">Yang Hebat Bersama</span>
                </h2>
            </div>
            <div class="contact-grid">
                <div class="contact-info fade-in-left">
                    <h3 data-i18n="contact.info.title">Hubungi Kami</h3>
                    <div class="contact-item">
                        <div class="contact-icon"><i data-lucide="mail"></i></div>
                        <div>
                            <div class="contact-label" data-i18n="contact.label.email">Email</div>
                            <div class="contact-value">majihouse.studio@gmail.com</div>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon"><i data-lucide="phone"></i></div>
                        <div>
                            <div class="contact-label" data-i18n="contact.label.whatsapp">WhatsApp</div>
                            <div class="contact-value">+62 898-7749-739</div>
                        </div>
                    </div>
                    <div class="contact-item">
                        <div class="contact-icon"><i data-lucide="map-pin"></i></div>
                        <div>
                            <div class="contact-label" data-i18n="contact.label.location">Lokasi</div>
                            <div class="contact-value" data-i18n="contact.location.value">Pontianak, Kalimantan Barat</div>
                        </div>
                    </div>
                    <div class="social-links">
                        <a href="#" class="social-link" aria-label="LinkedIn"><svg width="20" height="20"
                                viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg></a>
                        <a href="https://www.instagram.com/majihouse.studio/" class="social-link"
                            aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg></a>
                        <a href="#" class="social-link" aria-label="GitHub"><svg width="20" height="20" viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg></a>
                    </div>
                </div>
                <div class="contact-form fade-in-right">
                    <div class="form-content">
                        <form>
                            <div class="form-row">
                                <div class="form-group"><label class="form-label" for="name" data-i18n="form.name">Nama
                                        *</label><input type="text" id="name" name="name" class="form-input" required></div>
                                <div class="form-group"><label class="form-label" for="email" data-i18n="form.email">Email
                                        *</label><input type="email" id="email" name="email" class="form-input" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group"><label class="form-label" for="phone"
                                        data-i18n="form.phone">Telepon</label><input type="tel" id="phone" name="phone"
                                        class="form-input"></div>
                                <div class="form-group"><label class="form-label" for="service"
                                        data-i18n="form.service">Layanan</label><select id="service" name="service"
                                        class="form-select">
                                        <option value="" data-i18n="form.service.placeholder">Pilih layanan</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="system-development" data-i18n="services.web2.title">System
                                            Development</option>
                                        <option value="social-media">Social Media</option>
                                        <option value="data-analytics" data-i18n="services.web3.title">Data Analytics
                                        </option>
                                        <option value="ui-ux-design" data-i18n="services.web4.title">UI/UX Design</option>
                                    </select></div>
                            </div>
                            <div class="form-group"><label class="form-label" for="message" data-i18n="form.message">Pesan
                                    *</label><textarea id="message" name="message" class="form-textarea" required
                                    placeholder="Ceritakan tentang proyek Anda..."
                                    data-i18n-placeholder="form.message.placeholder"></textarea></div>
                            <button type="submit" class="btn btn-primary btn-submit"><span class="btn-text"
                                    data-i18n="form.submit">Kirim
                                    Pesan</span><span class="btn-spinner"></span></button>
                        </form>
                    </div>
                    <div class="form-success">
                        <div class="success-icon">✓</div>
                        <h3 data-i18n="contact.success.title">Terima Kasih!</h3>
                        <p style="color:var(--text-secondary)" data-i18n="contact.success.message">Pesan Anda telah berhasil
                            dikirim. Kami akan menghubungi Anda
                            dalam 24 jam.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="#" class="footer-logo">majihouse</a>
                    <p data-i18n="footer.desc">Creative & Tech in One House. Kami mengubah visi Anda menjadi realitas
                        digital.</p>
                    <p style="font-size:0.75rem;opacity:0.5;" data-i18n="footer.rights">© 2024 MAJIHOUSE. All rights
                        reserved.</p>
                </div>
                <div class="footer-column">
                    <h4 class="footer-title" data-i18n="footer.links">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="#about" data-i18n="nav.about">Tentang</a></li>
                        <li><a href="#services" data-i18n="nav.services">Layanan</a></li>
                        <li><a href="#portfolio" data-i18n="nav.portfolio">Portfolio</a></li>
                        <li><a href="#pricing" data-i18n="nav.pricing">Harga</a></li>
                        <li><a href="#contact" data-i18n="nav.contact">Kontak</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 class="footer-title" data-i18n="footer.services">Layanan</h4>
                    <ul class="footer-links">
                        <li><a href="#services" data-i18n="services.web1.title">Web Development</a></li>
                        <li><a href="#services" data-i18n="services.web2.title">System Development</a></li>
                        <li><a href="#services" data-i18n="services.web3.title">Data Analytics</a></li>
                        <li><a href="#services" data-i18n="services.tab2">Social Media</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 class="footer-title" data-i18n="footer.connect">Connect</h4>
                    <ul class="footer-links">
                        <li><a href="mailto:majihouse.studio@gmail.com">majihouse.studio@gmail.com</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/majihouse.studio/">Instagram</a></li>
                        <li><a href="#">GitHub</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>Privacy Policy | Terms of Service</p>
            </div>
        </div>
    </footer>
@endsection