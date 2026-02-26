type TranslationMap = Record<string, string>;

export const translations: Record<'id' | 'en', TranslationMap> = {
    id: {
        // Navbar
        'nav.about': 'Tentang',
        'nav.services': 'Layanan',
        'nav.portfolio': 'Portfolio',
        'nav.pricing': 'Harga',
        'nav.contact': 'Kontak',

        // Hero
        'hero.announcement': 'Dunia udah ribet, brand kamu jangan.',
        'hero.title': 'Ubah Mumet Jadi Aset,<br>Dengan Sat-Set.',
        'hero.subtitle': 'Ngapain pusing sendirian? Biar kita yang urus website & socmed dari nol sampai <strong><em>jadi cuan!</em></strong>',
        'hero.ctaPrimary': 'Mulai Konsultasi Gratis',
        'hero.ctaSecondary': 'Lihat Portfolio',
        'hero.proof': '15+ Klien Puas • 4.9 Rating',

        // Testimonials
        'testi.1.text': 'Website selesai tepat waktu dengan kualitas luar biasa!',
        'testi.2.text': 'Penjualan naik 150% setelah platform baru.',
        'testi.3.text': 'Profesionalisme tim sangat luar biasa.',

        // About
        'about.badge': 'TENTANG KAMI',
        'about.title': 'Where Creativity<br><span class="section-title-muted">Meets Code</span>',
        'about.story.title': 'Studio Digital Modern',
        'about.desc1': 'MAJIHOUSE adalah studio digital yang menjembatani kesenjangan antara desain yang memukau dan teknologi yang handal. Kami mengkhususkan diri dalam membangun aplikasi web, sistem, dan antarmuka yang berkinerja sempurna.',
        'about.desc2': 'Pendekatan kami menggabungkan keahlian teknis dengan pemikiran kreatif. Dari startup hingga enterprise, kami bermitra dengan brand ambisius untuk mengubah tantangan kompleks menjadi solusi digital yang elegan.',
        'about.stat1': 'Proyek Selesai',
        'about.stat2': 'Klien Puas',
        'about.stat3': 'Tahun Pengalaman',
        'about.stat4': 'Kepuasan Klien',

        // Services
        'services.badge': 'LAYANAN KAMI',
        'services.title': 'Solusi Digital<br><span class="section-title-muted">Untuk Bisnis Anda</span>',
        'services.tab1': 'Web Development',
        'services.tab2': 'Social Media',
        'services.web1.title': 'Web Development',
        'services.web1.desc': 'Membangun aplikasi web modern, responsif, dan berkinerja tinggi.',
        'services.web2.title': 'System Development',
        'services.web2.desc': 'Solusi software kustom dan sistem enterprise untuk bisnis Anda.',
        'services.web3.title': 'Data Analytics',
        'services.web3.desc': 'Mengubah data menjadi insight actionable dengan solusi analitik canggih.',
        'services.web4.title': 'UI/UX Design',
        'services.web4.desc': 'Antarmuka intuitif dan visual memukau yang disukai pengguna.',
        'services.soc1.title': 'Content Creation',
        'services.soc1.desc': 'Konten visual menarik untuk feed, story, dan reels.',
        'services.soc2.title': 'Social Media Strategy',
        'services.soc2.desc': 'Strategi growth dan engagement terukur untuk brand awareness.',
        'services.soc3.title': 'Community Management',
        'services.soc3.desc': 'Kelola komunitas dan interaksi untuk hubungan yang kuat.',
        'services.soc4.title': 'Paid Advertising',
        'services.soc4.desc': 'Iklan berbayar efektif di Instagram, Facebook, TikTok.',

        // Portfolio
        'portfolio.badge': 'PROJECT KAMI',
        'portfolio.title': 'Karya<br><span class="section-title-muted">Terbaik Kami</span>',
        'portfolio.all': 'Semua',

        // Pricing (Web)
        'pricing.badge': 'HARGA',
        'pricing.title': 'Paket Harga<br><span class="section-title-muted">Fleksibel</span>',
        'pricing.starter.desc': 'Cocok untuk landing page dan website sederhana',
        'pricing.custom.desc': 'Solusi fleksibel sesuai kebutuhan bisnis Anda',
        'pricing.pro.desc': 'Cocok untuk aplikasi web skala besar',
        'pricing.from': 'Mulai dari',
        'pricing.month': 'Per bulan',
        'pricing.btn.start': 'Mulai Sekarang',
        'pricing.btn.contact': 'Hubungi Kami',
        'pricing.btn.choose': 'Pilih Paket',
        'pricing.popular': 'Populer',
        'pricing.f1.1': 'Landing Page / Website Sederhana',
        'pricing.f1.2': 'Desain Responsif',
        'pricing.f1.3': 'Hingga 5 Halaman',
        'pricing.f1.4': 'Basic SEO Setup',
        'pricing.f1.5': 'Integrasi Form Kontak',
        'pricing.f1.6': '1 Bulan Support',
        'pricing.f2.1': 'Aplikasi Web Lengkap',
        'pricing.f2.2': 'Custom UI/UX Design',
        'pricing.f2.3': 'User Authentication',
        'pricing.f2.4': 'Integrasi Database',
        'pricing.f2.5': 'Admin Dashboard',
        'pricing.f2.6': 'API Development',
        'pricing.f2.7': '3 Bulan Support',
        'pricing.f3.1': 'Aplikasi Skala Besar',
        'pricing.f3.2': 'Integrasi Sistem Kompleks',
        'pricing.f3.3': 'Dedicated Project Manager',
        'pricing.f3.4': 'Priority Support',
        'pricing.f3.5': 'Custom SLA',
        'pricing.f3.6': 'Training & Dokumentasi',
        'pricing.f3.7': 'Ongoing Maintenance',

        // Pricing (Social Media)
        'pricing.soc.basic.desc': 'Untuk UMKM yang baru mulai',
        'pricing.soc.growth.desc': 'Untuk brand yang ingin berkembang',
        'pricing.soc.premium.desc': 'Untuk brand dengan ambisi besar',
        'pricing.soc.enterprise.desc': 'Solusi lengkap end-to-end',
        'pricing.soc.f1.1': '8 Post Feed / bulan',
        'pricing.soc.f1.2': '4 Story / bulan',
        'pricing.soc.f1.3': 'Basic Design Template',
        'pricing.soc.f1.4': 'Caption Writing',
        'pricing.soc.f1.5': '1 Platform',
        'pricing.soc.f2.1': '12 Post Feed / bulan',
        'pricing.soc.f2.2': '8 Story / bulan',
        'pricing.soc.f2.3': '4 Reels / bulan',
        'pricing.soc.f2.4': 'Custom Design',
        'pricing.soc.f2.5': 'Hashtag Strategy',
        'pricing.soc.f2.6': '2 Platform',
        'pricing.soc.f2.7': 'Monthly Report',
        'pricing.soc.f3.1': '20 Post Feed / bulan',
        'pricing.soc.f3.2': '15 Story / bulan',
        'pricing.soc.f3.3': '8 Reels / bulan',
        'pricing.soc.f3.4': 'Premium Design',
        'pricing.soc.f3.5': 'Content Calendar',
        'pricing.soc.f3.6': '3 Platform',
        'pricing.soc.f3.7': 'Engagement Management',
        'pricing.soc.f3.8': 'Weekly Report',
        'pricing.soc.f4.1': 'Unlimited Post',
        'pricing.soc.f4.2': 'Video Production',
        'pricing.soc.f4.3': 'Paid Ads Management',
        'pricing.soc.f4.4': 'Influencer Collab',
        'pricing.soc.f4.5': 'All Platform',
        'pricing.soc.f4.6': 'Dedicated Manager',
        'pricing.soc.f4.7': 'Daily Report',
        'pricing.soc.f4.8': 'Priority Support',

        // Workflow
        'workflow.badge': 'ALUR KERJA',
        'workflow.title': 'Bagaimana<br><span class="section-title-muted">Kami Bekerja</span>',
        'workflow.step1.title': 'Konsultasi',
        'workflow.step1.desc': 'Diskusi kebutuhan dan tujuan project Anda',
        'workflow.step2.title': 'Perencanaan',
        'workflow.step2.desc': 'Wireframe, timeline, dan strategi development',
        'workflow.step3.title': 'Development',
        'workflow.step3.desc': 'Coding dan implementasi dengan update berkala',
        'workflow.step4.title': 'Quality Check',
        'workflow.step4.desc': 'Testing menyeluruh dan revisi untuk kesempurnaan',
        'workflow.step5.title': 'Serah Terima',
        'workflow.step5.desc': 'Deployment, training, dan support berkelanjutan',

        // FAQ
        'faq.badge': 'FAQ',
        'faq.title': 'Pertanyaan<br><span class="section-title-muted">Yang Sering Diajukan</span>',
        'faq.q1': 'Berapa lama waktu pengerjaan project?',
        'faq.a1': 'Waktu pengerjaan bervariasi tergantung kompleksitas project. Landing page biasanya 1-2 minggu, web app custom 4-8 minggu, dan sistem enterprise 2-4 bulan.',
        'faq.q2': 'Apakah bisa request revisi?',
        'faq.a2': 'Ya! Kami menyediakan revisi pada setiap tahap pengerjaan. Kami percaya bahwa feedback berkelanjutan menghasilkan produk terbaik.',
        'faq.q3': 'Apakah ada garansi setelah project selesai?',
        'faq.a3': 'Ya, setiap paket sudah termasuk masa support gratis (1-3 bulan tergantung paket). Kami juga menawarkan paket maintenance bulanan.',
        'faq.q4': 'Teknologi apa yang digunakan?',
        'faq.a4': 'Kami menggunakan teknologi modern seperti React, Next.js, Vue.js, Laravel, Node.js, dan PostgreSQL. Pemilihan stack disesuaikan dengan kebutuhan project.',
        'faq.q5': 'Bagaimana sistem pembayarannya?',
        'faq.a5': 'Pembayaran dilakukan bertahap: 50% di awal (DP) dan 50% setelah project selesai. Untuk project besar, bisa dicicil dalam 3 termin.',

        // Contact
        'contact.badge': 'KONTAK',
        'contact.title': 'Mari Bangun Sesuatu<br><span class="section-title-muted">Yang Hebat Bersama</span>',
        'contact.info.title': 'Hubungi Kami',
        'contact.label.email': 'Email',
        'contact.label.whatsapp': 'WhatsApp',
        'contact.label.location': 'Lokasi',
        'contact.location.value': 'Pontianak, Kalimantan Barat',
        'contact.success.title': 'Terima Kasih!',
        'contact.success.message': 'Pesan Anda telah berhasil dikirim. Kami akan menghubungi Anda dalam 24 jam.',

        // Form Labels
        'form.name': 'Nama *',
        'form.email': 'Email *',
        'form.phone': 'Telepon',
        'form.service': 'Layanan',
        'form.service.placeholder': 'Pilih layanan',
        'form.message': 'Pesan *',
        'form.message.placeholder': 'Ceritakan tentang proyek Anda...',
        'form.submit': 'Kirim Pesan',

        // Footer
        'footer.desc': 'Mitra digital terpercaya untuk pertumbuhan bisnis Anda di era modern.',
        'footer.links': 'QUICK LINKS',
        'footer.services': 'LAYANAN',
        'footer.connect': 'CONNECT',
        'footer.rights': '© 2024 MAJIHOUSE. Hak Cipta Dilindungi.'
    },
    en: {
        // Navbar
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.pricing': 'Pricing',
        'nav.contact': 'Contact',

        // Hero
        'hero.announcement': 'The world is complex enough, your brand shouldn\'t be.',
        'hero.title': 'Turn Headache into Asset,<br>Fast & Easy.',
        'hero.subtitle': 'Why stress alone? Let us handle your website & social media from zero to <strong><em>profit!</em></strong>',
        'hero.ctaPrimary': 'Start Free Consultation',
        'hero.ctaSecondary': 'View Portfolio',
        'hero.proof': '15+ Happy Clients • 4.9 Rating',

        // Testimonials
        'testi.1.text': 'Website completed on time with outstanding quality!',
        'testi.2.text': 'Sales increased by 150% after the new platform.',
        'testi.3.text': 'Extremely outstanding team professionalism.',

        // About
        'about.badge': 'ABOUT US',
        'about.title': 'Where Creativity<br><span class="section-title-muted">Meets Code</span>',
        'about.story.title': 'Modern Digital Studio',
        'about.desc1': 'MAJIHOUSE is a digital studio bridging the gap between stunning design and reliable technology. We specialize in building perfectly performing web applications, systems, and interfaces.',
        'about.desc2': 'Our approach combines technical expertise with creative thinking. From startups to enterprises, we partner with ambitious brands to turn complex challenges into elegant digital solutions.',
        'about.stat1': 'Projects Completed',
        'about.stat2': 'Happy Clients',
        'about.stat3': 'Years of Experience',
        'about.stat4': 'Client Satisfaction',

        // Services
        'services.badge': 'OUR SERVICES',
        'services.title': 'Digital Solutions<br><span class="section-title-muted">For Your Business</span>',
        'services.tab1': 'Web Development',
        'services.tab2': 'Social Media',
        'services.web1.title': 'Web Development',
        'services.web1.desc': 'Building modern, responsive, and high-performance web applications.',
        'services.web2.title': 'System Development',
        'services.web2.desc': 'Custom software solutions and enterprise systems for your business.',
        'services.web3.title': 'Data Analytics',
        'services.web3.desc': 'Transform data into actionable insights with advanced analytics solutions.',
        'services.web4.title': 'UI/UX Design',
        'services.web4.desc': 'Intuitive interfaces and visually stunning designs that users love.',
        'services.soc1.title': 'Content Creation',
        'services.soc1.desc': 'Engaging visual content for feeds, stories, and reels.',
        'services.soc2.title': 'Social Media Strategy',
        'services.soc2.desc': 'Measurable growth and engagement strategies for brand awareness.',
        'services.soc3.title': 'Community Management',
        'services.soc3.desc': 'Manage community and interactions for strong relationships.',
        'services.soc4.title': 'Paid Advertising',
        'services.soc4.desc': 'Effective paid ads on Instagram, Facebook, TikTok.',

        // Portfolio
        'portfolio.badge': 'OUR PROJECTS',
        'portfolio.title': 'Our Best<br><span class="section-title-muted">Works</span>',
        'portfolio.all': 'All',

        // Pricing (Web)
        'pricing.badge': 'INVESTMENT',
        'pricing.title': 'Flexible<br><span class="section-title-muted">Pricing</span>',
        'pricing.starter.desc': 'Perfect for landing pages and simple websites',
        'pricing.custom.desc': 'Flexible solutions tailored to your business needs',
        'pricing.pro.desc': 'Ideal for large-scale web applications',
        'pricing.from': 'Starting from',
        'pricing.month': 'Per month',
        'pricing.btn.start': 'Start Now',
        'pricing.btn.contact': 'Contact Us',
        'pricing.btn.choose': 'Choose Plan',
        'pricing.popular': 'Popular',
        'pricing.f1.1': 'Landing Page / Simple Website',
        'pricing.f1.2': 'Responsive Design',
        'pricing.f1.3': 'Up to 5 Pages',
        'pricing.f1.4': 'Basic SEO Setup',
        'pricing.f1.5': 'Contact Form Integration',
        'pricing.f1.6': '1 Month Support',
        'pricing.f2.1': 'Complete Web App',
        'pricing.f2.2': 'Custom UI/UX Design',
        'pricing.f2.3': 'User Authentication',
        'pricing.f2.4': 'Database Integration',
        'pricing.f2.5': 'Admin Dashboard',
        'pricing.f2.6': 'API Development',
        'pricing.f2.7': '3 Months Support',
        'pricing.f3.1': 'Large-Scale Application',
        'pricing.f3.2': 'Complex System Integration',
        'pricing.f3.3': 'Dedicated Project Manager',
        'pricing.f3.4': 'Priority Support',
        'pricing.f3.5': 'Custom SLA',
        'pricing.f3.6': 'Training & Documentation',
        'pricing.f3.7': 'Ongoing Maintenance',

        // Pricing (Social Media)
        'pricing.soc.basic.desc': 'For SMEs that are just getting started',
        'pricing.soc.growth.desc': 'For brands ready to grow',
        'pricing.soc.premium.desc': 'For brands with big ambitions',
        'pricing.soc.enterprise.desc': 'Complete end-to-end solution',
        'pricing.soc.f1.1': '8 Feed Posts / month',
        'pricing.soc.f1.2': '4 Story Posts / month',
        'pricing.soc.f1.3': 'Basic Design Template',
        'pricing.soc.f1.4': 'Caption Writing',
        'pricing.soc.f1.5': '1 Platform',
        'pricing.soc.f2.1': '12 Feed Posts / month',
        'pricing.soc.f2.2': '8 Story Posts / month',
        'pricing.soc.f2.3': '4 Reels / month',
        'pricing.soc.f2.4': 'Custom Design',
        'pricing.soc.f2.5': 'Hashtag Strategy',
        'pricing.soc.f2.6': '2 Platforms',
        'pricing.soc.f2.7': 'Monthly Report',
        'pricing.soc.f3.1': '20 Feed Posts / month',
        'pricing.soc.f3.2': '15 Story Posts / month',
        'pricing.soc.f3.3': '8 Reels / month',
        'pricing.soc.f3.4': 'Premium Design',
        'pricing.soc.f3.5': 'Content Calendar',
        'pricing.soc.f3.6': '3 Platforms',
        'pricing.soc.f3.7': 'Engagement Management',
        'pricing.soc.f3.8': 'Weekly Report',
        'pricing.soc.f4.1': 'Unlimited Posts',
        'pricing.soc.f4.2': 'Video Production',
        'pricing.soc.f4.3': 'Paid Ads Management',
        'pricing.soc.f4.4': 'Influencer Collaboration',
        'pricing.soc.f4.5': 'All Platforms',
        'pricing.soc.f4.6': 'Dedicated Manager',
        'pricing.soc.f4.7': 'Daily Report',
        'pricing.soc.f4.8': 'Priority Support',

        // Workflow
        'workflow.badge': 'WORKFLOW',
        'workflow.title': 'How We<br><span class="section-title-muted">Work</span>',
        'workflow.step1.title': 'Consultation',
        'workflow.step1.desc': 'Discuss your project needs and goals',
        'workflow.step2.title': 'Planning',
        'workflow.step2.desc': 'Wireframes, timeline, and development strategy',
        'workflow.step3.title': 'Development',
        'workflow.step3.desc': 'Coding and implementation with regular updates',
        'workflow.step4.title': 'Quality Check',
        'workflow.step4.desc': 'Thorough testing and revisions for perfection',
        'workflow.step5.title': 'Handover',
        'workflow.step5.desc': 'Deployment, training, and ongoing support',

        // FAQ
        'faq.badge': 'FAQ',
        'faq.title': 'Frequently Asked<br><span class="section-title-muted">Questions</span>',
        'faq.q1': 'How long does a project take?',
        'faq.a1': 'Project timelines vary based on complexity. Landing pages typically take 1-2 weeks, custom web apps 4-8 weeks, and enterprise systems 2-4 months.',
        'faq.q2': 'Can I request revisions?',
        'faq.a2': 'Yes! We provide revisions at every stage. We believe continuous feedback creates the best product.',
        'faq.q3': 'Is there a warranty after completion?',
        'faq.a3': 'Yes, every package includes a free support period (1-3 months depending on the package). We also offer monthly maintenance plans.',
        'faq.q4': 'What technologies do you use?',
        'faq.a4': 'We use modern technologies like React, Next.js, Vue.js, Laravel, Node.js, and PostgreSQL. Stack selection is tailored to project needs.',
        'faq.q5': 'How does the payment system work?',
        'faq.a5': 'Payments are made in stages: 50% upfront (Deposit) and 50% upon project completion. For large projects, it can be split into 3 installments.',

        // Contact
        'contact.badge': 'CONTACT',
        'contact.title': 'Let\'s Build Something<br><span class="section-title-muted">Great Together</span>',
        'contact.info.title': 'Get In Touch',
        'contact.label.email': 'Email',
        'contact.label.whatsapp': 'WhatsApp',
        'contact.label.location': 'Location',
        'contact.location.value': 'Pontianak, West Kalimantan',
        'contact.success.title': 'Thank You!',
        'contact.success.message': 'Your message has been sent successfully. We will contact you within 24 hours.',

        // Form Labels
        'form.name': 'Name *',
        'form.email': 'Email *',
        'form.phone': 'Phone',
        'form.service': 'Service',
        'form.service.placeholder': 'Select service',
        'form.message': 'Message *',
        'form.message.placeholder': 'Tell us about your project...',
        'form.submit': 'Send Message',

        // Footer
        'footer.desc': 'Your trusted digital partner for business growth in the modern era.',
        'footer.links': 'QUICK LINKS',
        'footer.services': 'SERVICES',
        'footer.connect': 'CONNECT',
        'footer.rights': '© 2024 MAJIHOUSE. All Rights Reserved.'
    }
};

export function initLanguageToggle() {
    const toggleBtn = document.getElementById('langToggle');
    if (!toggleBtn) return;

    let currentLang = localStorage.getItem('majihouse_lang') || 'id';

    const applyLanguage = (lang: 'id' | 'en') => {
        document.documentElement.lang = lang;
        toggleBtn.textContent = lang === 'id' ? 'EN' : 'ID';

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key && translations[lang][key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    (el as HTMLInputElement | HTMLTextAreaElement).placeholder = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (key && translations[lang][key]) {
                (el as HTMLInputElement | HTMLTextAreaElement).placeholder = translations[lang][key];
            }
        });
    };

    applyLanguage(currentLang as 'id' | 'en');

    toggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        localStorage.setItem('majihouse_lang', currentLang);
        applyLanguage(currentLang as 'id' | 'en');
    });
}
