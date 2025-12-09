@extends('layouts.app')

@section('content')
    <!-- Navigation -->
    <nav class="navbar">
        <a href="#" class="nav-logo">
            <img src="/images/majihouse-logo.png" alt="MAJIHOUSE" class="nav-logo-img">
        </a>

        <ul class="nav-links">
            <li><a href="#about" class="nav-link">Tentang</a></li>
            <li><a href="#services" class="nav-link">Layanan</a></li>
            <li><a href="#portfolio" class="nav-link">Portfolio</a></li>
            <li><a href="#pricing" class="nav-link">Harga</a></li>
            <li><a href="#contact" class="nav-link">Kontak</a></li>
        </ul>

        <a href="https://wa.me/6281254767505" target="_blank" class="nav-cta">Kick Off</a>

        <button class="nav-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="hero">
        <div class="hero-content">
            <h1 class="hero-title fade-in">
                <span class="line1">Creative & Tech</span>
                <span class="line2">in One House.</span>
            </h1>

            <p class="hero-typing"></p>

            <p class="hero-description fade-in">
                MAJIHOUSE mengubah visi Anda menjadi realitas digital—di mana desain kreatif bertemu dengan presisi teknis.
            </p>

            <div class="hero-cta fade-in">
                <a href="#contact" class="btn btn-primary">Mulai Konsultasi</a>
                <a href="#portfolio" class="btn btn-outline">Lihat Portfolio</a>
            </div>
        </div>

        <div class="scroll-indicator">
            <span>Scroll</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
        </div>
    </section>

    <!-- About Section -->
    <section class="section about" id="about">
        <div class="container">
            <h2 class="section-title fade-in">Tentang MAJIHOUSE</h2>

            <div class="about-grid">
                <div class="about-story fade-in-left">
                    <h3>Where Creativity Meets Code</h3>
                    <p>
                        MAJIHOUSE adalah studio digital yang menjembatani kesenjangan antara desain yang memukau dan
                        teknologi yang handal.
                        Didirikan dengan passion untuk menciptakan pengalaman digital yang luar biasa, kami mengkhususkan
                        diri dalam
                        membangun aplikasi web, sistem, dan antarmuka yang tidak hanya terlihat indah tetapi juga berkinerja
                        sempurna.
                    </p>
                    <p>
                        Pendekatan kami menggabungkan keahlian teknis yang mendalam dengan pemikiran kreatif. Kami tidak
                        hanya membangun
                        produk—kami membangun solusi yang mendorong hasil bisnis nyata. Dari startup hingga enterprise,
                        kami bermitra dengan brand ambisius untuk mengubah tantangan kompleks menjadi solusi digital yang
                        elegan.
                    </p>
                </div>

                <div class="about-right fade-in-right">
                    <div class="stats-grid stagger">
                        <div class="stat-item">
                            <span class="stat-number" data-target="50" data-suffix="+">0</span>
                            <span class="stat-label">Proyek Selesai</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number" data-target="30" data-suffix="+">0</span>
                            <span class="stat-label">Klien Puas</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number" data-target="4" data-suffix="+">0</span>
                            <span class="stat-label">Tahun Pengalaman</span>
                        </div>
                        <div class="stat-item">
                            <span class="stat-number" data-target="99" data-suffix="%">0</span>
                            <span class="stat-label">Kepuasan Klien</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tech Stack Marquee -->
        <div class="tech-stack">
            <div class="tech-marquee">
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4v2c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
                    </svg>
                    React
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 19.5h20L12 2zm0 4l6.5 11.5h-13L12 6z" />
                    </svg>
                    Next.js
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    Vue.js
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    Node.js
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    Python
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    Laravel
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    PostgreSQL
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    MongoDB
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    AWS
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    Docker
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    Figma
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    TailwindCSS
                </div>
                <!-- Duplicate for seamless loop -->
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4s4 1.794 4 4-1.794 4-4 4v2c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
                    </svg>
                    React
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2L2 19.5h20L12 2zm0 4l6.5 11.5h-13L12 6z" />
                    </svg>
                    Next.js
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    Vue.js
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    Node.js
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    Python
                </div>
                <div class="tech-item">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                    </svg>
                    Laravel
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="section services" id="services">
        <div class="container">
            <h2 class="section-title fade-in">Layanan Kami</h2>

            <div class="timeline">
                <!-- Service 1 -->
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="service-card fade-in-left">
                        <div class="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
                        </div>
                        <h3 class="service-title">Web Development</h3>
                        <p class="service-description">
                            Membangun aplikasi web modern, responsif, dan berkinerja tinggi yang memberikan pengalaman
                            pengguna yang luar biasa.
                        </p>
                        <div class="service-tags">
                            <span class="service-tag">Frontend</span>
                            <span class="service-tag">Backend</span>
                            <span class="service-tag">Full-stack</span>
                            <span class="service-tag">E-commerce</span>
                            <span class="service-tag">CMS</span>
                            <span class="service-tag">PWA</span>
                        </div>
                    </div>
                </div>

                <!-- Service 2 -->
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="service-card fade-in-right">
                        <div class="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="3" />
                                <path
                                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                            </svg>
                        </div>
                        <h3 class="service-title">System Development</h3>
                        <p class="service-description">
                            Solusi software kustom dan sistem enterprise yang dirancang untuk menyederhanakan operasi bisnis
                            Anda.
                        </p>
                        <div class="service-tags">
                            <span class="service-tag">Custom Apps</span>
                            <span class="service-tag">SaaS</span>
                            <span class="service-tag">API</span>
                            <span class="service-tag">Database</span>
                            <span class="service-tag">Cloud</span>
                            <span class="service-tag">Architecture</span>
                        </div>
                    </div>
                </div>

                <!-- Service 3 -->
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="service-card fade-in-left">
                        <div class="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="18" y1="20" x2="18" y2="10" />
                                <line x1="12" y1="20" x2="12" y2="4" />
                                <line x1="6" y1="20" x2="6" y2="14" />
                            </svg>
                        </div>
                        <h3 class="service-title">Data Analytics</h3>
                        <p class="service-description">
                            Mengubah data Anda menjadi insight yang actionable dengan solusi analitik dan visualisasi
                            canggih.
                        </p>
                        <div class="service-tags">
                            <span class="service-tag">BI Dashboard</span>
                            <span class="service-tag">Visualization</span>
                            <span class="service-tag">ETL</span>
                            <span class="service-tag">ML</span>
                            <span class="service-tag">Real-time</span>
                            <span class="service-tag">Data Warehouse</span>
                        </div>
                    </div>
                </div>

                <!-- Service 4 -->
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="service-card fade-in-right">
                        <div class="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                                <path d="M2 2l7.586 7.586" />
                                <circle cx="11" cy="11" r="2" />
                            </svg>
                        </div>
                        <h3 class="service-title">UI/UX Design</h3>
                        <p class="service-description">
                            Menciptakan antarmuka yang intuitif dan visual yang memukau yang disukai pengguna.
                        </p>
                        <div class="service-tags">
                            <span class="service-tag">Interface</span>
                            <span class="service-tag">Research</span>
                            <span class="service-tag">Prototyping</span>
                            <span class="service-tag">Design System</span>
                            <span class="service-tag">Mobile-First</span>
                            <span class="service-tag">Accessibility</span>
                        </div>
                    </div>
                </div>

                <!-- Service 5 -->
                <div class="timeline-item">
                    <div class="timeline-dot"></div>
                    <div class="service-card fade-in-left">
                        <div class="service-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path
                                    d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                                <path
                                    d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                            </svg>
                        </div>
                        <h3 class="service-title">Digital Solutions</h3>
                        <p class="service-description">
                            Layanan digital komprehensif untuk maintenance, optimasi, dan scale up kehadiran online Anda.
                        </p>
                        <div class="service-tags">
                            <span class="service-tag">Maintenance</span>
                            <span class="service-tag">Optimization</span>
                            <span class="service-tag">SEO</span>
                            <span class="service-tag">Security</span>
                            <span class="service-tag">DevOps</span>
                            <span class="service-tag">CI/CD</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Section -->
    <section class="section portfolio" id="portfolio">
        <div class="container">
            <h2 class="section-title fade-in">Karya Kami</h2>

            <div class="filter-tabs fade-in">
                <button class="filter-tab active" data-filter="all">Semua</button>
                <button class="filter-tab" data-filter="web-app">Web App</button>
                <button class="filter-tab" data-filter="e-commerce">E-commerce</button>
                <button class="filter-tab" data-filter="saas">SaaS</button>
                <button class="filter-tab" data-filter="dashboard">Dashboard</button>
                <button class="filter-tab" data-filter="landing">Landing Page</button>
            </div>

            <div class="portfolio-grid stagger">
                <!-- Project 1 -->
                <div class="portfolio-card" data-category="web-app">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop"
                        alt="Project 1" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay">
                        <span class="portfolio-category">Web App</span>
                        <h4 class="portfolio-title">E-Learning Platform</h4>
                        <div class="portfolio-tech">
                            <span>React</span>
                            <span>Node.js</span>
                            <span>MongoDB</span>
                        </div>
                    </div>
                </div>

                <!-- Project 2 -->
                <div class="portfolio-card" data-category="e-commerce">
                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop"
                        alt="Project 2" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay">
                        <span class="portfolio-category">E-commerce</span>
                        <h4 class="portfolio-title">Fashion Marketplace</h4>
                        <div class="portfolio-tech">
                            <span>Next.js</span>
                            <span>Stripe</span>
                            <span>PostgreSQL</span>
                        </div>
                    </div>
                </div>

                <!-- Project 3 -->
                <div class="portfolio-card" data-category="saas">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop"
                        alt="Project 3" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay">
                        <span class="portfolio-category">SaaS</span>
                        <h4 class="portfolio-title">Analytics Dashboard</h4>
                        <div class="portfolio-tech">
                            <span>Vue.js</span>
                            <span>Python</span>
                            <span>AWS</span>
                        </div>
                    </div>
                </div>

                <!-- Project 4 -->
                <div class="portfolio-card" data-category="dashboard">
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop"
                        alt="Project 4" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay">
                        <span class="portfolio-category">Dashboard</span>
                        <h4 class="portfolio-title">HR Management System</h4>
                        <div class="portfolio-tech">
                            <span>Laravel</span>
                            <span>Alpine.js</span>
                            <span>MySQL</span>
                        </div>
                    </div>
                </div>

                <!-- Project 5 -->
                <div class="portfolio-card" data-category="landing">
                    <img src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop"
                        alt="Project 5" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay">
                        <span class="portfolio-category">Landing Page</span>
                        <h4 class="portfolio-title">Fintech Startup</h4>
                        <div class="portfolio-tech">
                            <span>React</span>
                            <span>GSAP</span>
                            <span>Tailwind</span>
                        </div>
                    </div>
                </div>

                <!-- Project 6 -->
                <div class="portfolio-card" data-category="web-app">
                    <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop"
                        alt="Project 6" class="portfolio-image" loading="lazy">
                    <div class="portfolio-overlay">
                        <span class="portfolio-category">Web App</span>
                        <h4 class="portfolio-title">Project Management Tool</h4>
                        <div class="portfolio-tech">
                            <span>Next.js</span>
                            <span>Prisma</span>
                            <span>Vercel</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Portfolio Modal -->
    <div class="modal-overlay">
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <img src="" alt="" class="modal-image" style="width: 100%; border-radius: 12px;">
            <div style="padding: 2rem;">
                <span class="modal-category"
                    style="color: var(--color-secondary); text-transform: uppercase; font-size: 0.75rem;">Category</span>
                <h3 class="modal-title" style="font-size: 1.5rem; margin: 0.5rem 0 1rem;">Project Title</h3>
                <p class="modal-description" style="color: var(--color-text-secondary);">Deskripsi proyek akan muncul di
                    sini.</p>
            </div>
        </div>
    </div>

    <!-- Value / Testimonials Section -->
    <section class="section value" id="value">
        <div class="container">
            <h2 class="section-title fade-in">Mengapa Memilih MAJIHOUSE?</h2>

            <div class="value-grid stagger">
                <div class="value-card">
                    <div class="value-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                        </svg>
                    </div>
                    <h4 class="value-title">Technical Excellence</h4>
                    <p class="value-description">
                        Kami selalu mengikuti perkembangan teknologi terkini, menggunakan framework modern dan best
                        practices untuk memberikan solusi berkualitas tinggi.
                    </p>
                </div>

                <div class="value-card">
                    <div class="value-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="23 4 23 10 17 10" />
                            <polyline points="1 20 1 14 7 14" />
                            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                        </svg>
                    </div>
                    <h4 class="value-title">Agile Approach</h4>
                    <p class="value-description">
                        Proses pengembangan yang fleksibel dan iteratif yang menyesuaikan dengan kebutuhan Anda, memastikan
                        delivery tepat waktu dan perbaikan berkelanjutan.
                    </p>
                </div>

                <div class="value-card">
                    <div class="value-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="9" y1="9" x2="15" y2="15" />
                            <line x1="15" y1="9" x2="9" y2="15" />
                        </svg>
                    </div>
                    <h4 class="value-title">Transparent Pricing</h4>
                    <p class="value-description">
                        Harga yang jelas dan transparan tanpa biaya tersembunyi. Kami memberikan penawaran detail agar Anda
                        tahu persis investasi Anda.
                    </p>
                </div>

                <div class="value-card">
                    <div class="value-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <h4 class="value-title">Post-Launch Support</h4>
                    <p class="value-description">
                        Hubungan kami tidak berakhir saat launch. Kami menyediakan support dan maintenance berkelanjutan
                        untuk memastikan produk Anda berkembang.
                    </p>
                </div>
            </div>

            <!-- Testimonials -->
            <div class="testimonials-wrapper fade-in">
                <div class="swiper testimonials-swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="testimonial-slide">
                                <p class="testimonial-quote">
                                    MAJIHOUSE memberikan hasil melebihi ekspektasi kami. Perhatian mereka pada detail dan
                                    keahlian teknis mengubah visi kami menjadi platform yang indah dan fungsional.
                                </p>
                                <div class="testimonial-author">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                                        alt="Client" class="testimonial-avatar">
                                    <div class="testimonial-info">
                                        <div class="testimonial-name">Ahmad Rizki</div>
                                        <div class="testimonial-role">CEO, TechStartup ID</div>
                                    </div>
                                </div>
                                <div class="testimonial-stars">★★★★★</div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="testimonial-slide">
                                <p class="testimonial-quote">
                                    Bekerja dengan MAJIHOUSE adalah game-changer untuk bisnis e-commerce kami. Penjualan
                                    meningkat 150% setelah platform baru diluncurkan.
                                </p>
                                <div class="testimonial-author">
                                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                                        alt="Client" class="testimonial-avatar">
                                    <div class="testimonial-info">
                                        <div class="testimonial-name">Sarah Liu</div>
                                        <div class="testimonial-role">Founder, Fashion Brand</div>
                                    </div>
                                </div>
                                <div class="testimonial-stars">★★★★★</div>
                            </div>
                        </div>

                        <div class="swiper-slide">
                            <div class="testimonial-slide">
                                <p class="testimonial-quote">
                                    Profesionalisme dan komunikasi tim sangat luar biasa. Mereka selalu menginformasikan
                                    kami di setiap tahap dan deliver tepat waktu.
                                </p>
                                <div class="testimonial-author">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                                        alt="Client" class="testimonial-avatar">
                                    <div class="testimonial-info">
                                        <div class="testimonial-name">David Chen</div>
                                        <div class="testimonial-role">CTO, FinanceApp</div>
                                    </div>
                                </div>
                                <div class="testimonial-stars">★★★★★</div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section class="section pricing" id="pricing">
        <div class="container">
            <h2 class="section-title fade-in">Paket Harga Fleksibel</h2>

            <div class="pricing-grid stagger">
                <!-- Starter -->
                <div class="pricing-card">
                    <h3 class="pricing-tier">Starter</h3>
                    <p class="pricing-description">Cocok untuk landing page dan website sederhana</p>
                    <div class="pricing-box">
                        <span class="pricing-label">Mulai dari</span>
                        <span class="pricing-original">Rp. 3.500.000</span>
                        <span class="pricing-price">Rp. 2.500.000</span>
                    </div>
                    <ul class="pricing-features">
                        <li>Landing Page / Website Sederhana</li>
                        <li>Desain Responsif</li>
                        <li>Hingga 5 Halaman</li>
                        <li>Basic SEO Setup</li>
                        <li>Integrasi Form Kontak</li>
                        <li>1 Bulan Support</li>
                    </ul>
                    <a href="#contact" class="btn btn-outline" style="width: 100%;">Mulai Sekarang</a>
                </div>

                <!-- Custom (Populer) -->
                <div class="pricing-card popular">
                    <span class="popular-badge">Populer</span>
                    <h3 class="pricing-tier">Custom</h3>
                    <p class="pricing-description">Cocok untuk proyek skala besar</p>
                    <div class="pricing-box">
                        <span class="pricing-label">Mulai dari</span>
                        <span class="pricing-original">Rp. 2.000.000</span>
                        <span class="pricing-price">Rp. 900.000</span>
                    </div>
                    <ul class="pricing-features">
                        <li>Aplikasi Skala Besar</li>
                        <li>Integrasi Sistem Kompleks</li>
                        <li>Dedicated Project Manager</li>
                        <li>Priority Support</li>
                        <li>Custom SLA</li>
                        <li>Training & Dokumentasi</li>
                        <li>Ongoing Maintenance</li>
                    </ul>
                    <a href="#contact" class="btn btn-primary" style="width: 100%;">Hubungi Kami</a>
                </div>

                <!-- Professional -->
                <div class="pricing-card">
                    <h3 class="pricing-tier">Professional</h3>
                    <p class="pricing-description">Cocok untuk aplikasi web lengkap</p>
                    <div class="pricing-box">
                        <span class="pricing-label">Mulai dari</span>
                        <span class="pricing-original">Rp. 10.000.000</span>
                        <span class="pricing-price">Rp. 7.500.000</span>
                    </div>
                    <ul class="pricing-features">
                        <li>Aplikasi Web Lengkap</li>
                        <li>Custom UI/UX Design</li>
                        <li>User Authentication</li>
                        <li>Integrasi Database</li>
                        <li>Admin Dashboard</li>
                        <li>API Development</li>
                        <li>3 Bulan Support</li>
                    </ul>
                    <a href="#contact" class="btn btn-outline" style="width: 100%;">Mulai Sekarang</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact" id="contact">
        <div class="container">
            <h2 class="section-title fade-in">Mari Bangun Sesuatu yang Hebat Bersama</h2>

            <div class="contact-grid">
                <div class="contact-info fade-in-left">
                    <h3>Hubungi Kami</h3>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </div>
                        <div>
                            <div class="contact-label">Email</div>
                            <div class="contact-value">majihouse.studio@gmail.com</div>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path
                                    d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                            </svg>
                        </div>
                        <div>
                            <div class="contact-label">WhatsApp</div>
                            <div class="contact-value">+62 812-5476-7505</div>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="contact-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                        </div>
                        <div>
                            <div class="contact-label">Lokasi</div>
                            <div class="contact-value">Pontianak, Kalimantan Barat, Indonesia</div>
                        </div>
                    </div>

                    <div class="social-links">
                        <a href="#" class="social-link" aria-label="LinkedIn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/majihouse.studio/" class="social-link" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="GitHub">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href="#" class="social-link" aria-label="Twitter">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="contact-form fade-in-right">
                    <div class="form-content">
                        <form>
                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label" for="name">Nama *</label>
                                    <input type="text" id="name" name="name" class="form-input" required>
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="email">Email *</label>
                                    <input type="email" id="email" name="email" class="form-input" required>
                                </div>
                            </div>

                            <div class="form-row">
                                <div class="form-group">
                                    <label class="form-label" for="phone">Telepon</label>
                                    <input type="tel" id="phone" name="phone" class="form-input">
                                </div>
                                <div class="form-group">
                                    <label class="form-label" for="service">Layanan yang Diminati</label>
                                    <select id="service" name="service" class="form-select">
                                        <option value="">Pilih layanan</option>
                                        <option value="web-development">Web Development</option>
                                        <option value="system-development">System Development</option>
                                        <option value="data-analytics">Data Analytics</option>
                                        <option value="ui-ux-design">UI/UX Design</option>
                                        <option value="digital-solutions">Digital Solutions</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="budget">Kisaran Budget</label>
                                <select id="budget" name="budget" class="form-select">
                                    <option value="">Pilih kisaran budget</option>
                                    <option value="2500-5000">$2,500 - $5,000</option>
                                    <option value="5000-10000">$5,000 - $10,000</option>
                                    <option value="10000-25000">$10,000 - $25,000</option>
                                    <option value="25000+">$25,000+</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="form-label" for="message">Pesan *</label>
                                <textarea id="message" name="message" class="form-textarea" required
                                    placeholder="Ceritakan tentang proyek Anda..."></textarea>
                            </div>

                            <button type="submit" class="btn btn-primary btn-submit">
                                <span class="btn-text">Kirim Pesan</span>
                                <span class="btn-spinner"></span>
                            </button>
                        </form>
                    </div>

                    <div class="form-success">
                        <div class="success-icon">✓</div>
                        <h3>Terima Kasih!</h3>
                        <p style="color: var(--color-text-secondary);">Pesan Anda telah berhasil dikirim. Kami akan
                            menghubungi Anda dalam 24 jam.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="#" class="footer-logo-link">
                        <img src="/images/majihouse-logo.png" alt="MAJIHOUSE Logo" class="footer-logo-img">
                    </a>
                    <p>Creative & Tech in One House. Kami mengubah visi Anda menjadi realitas digital.</p>
                    <p style="font-size: 0.75rem; opacity: 0.7;">© 2024 MAJIHOUSE. All rights reserved.</p>
                </div>

                <div class="footer-column">
                    <h4 class="footer-title">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="#about">Tentang</a></li>
                        <li><a href="#services">Layanan</a></li>
                        <li><a href="#portfolio">Portfolio</a></li>
                        <li><a href="#contact">Kontak</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4 class="footer-title">Layanan</h4>
                    <ul class="footer-links">
                        <li><a href="#services">Web Development</a></li>
                        <li><a href="#services">System Development</a></li>
                        <li><a href="#services">Data Analytics</a></li>
                        <li><a href="#services">UI/UX Design</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4 class="footer-title">Connect</h4>
                    <ul class="footer-links">
                        <li><a href="mailto:majihouse.studio@gmail.com">majihouse.studio@gmail.com</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/majihouse.studio/">Instagram</a></li>
                        <li><a href="#">GitHub</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <p>salamalekom</p>
                <p>Privacy Policy | Terms of Service</p>
            </div>
        </div>
    </footer>
@endsection