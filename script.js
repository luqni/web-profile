/**
 * Sovereign Engineering Console - Profile Logic
 * Author: Muhammad Luqni Baehaqi
 */

const translations = {
    en: {
        "title": "Muhammad Luqni Baehaqi | Software Engineer & AI Architect",
        "description": "Portfolio of Muhammad Luqni Baehaqi, a Software Engineer & AI Systems Architect. Creator of Loker Merah Putih, FastingMate, Qanaah, and Quran Mind Map.",
        "nav_role": "Software Engineer & AI Architect",
        "availability": "Available for High-Impact Projects",
        "lets_connect": "Let's Connect",
        "hero_greeting": "Hi, I'm",
        "hero_title_prefix": "Engineering Resilient Systems &",
        "hero_title_highlight": "Autonomous AI Solutions.",
        "hero_subtitle": "A software engineer and problem solver specializing in distributed backend architectures, modern web applications, and autonomous AI agent workflows. I turn complex challenges into scalable, high-performance systems.",
        "view_work": "Explore Featured Work",
        "hire_me": "Get in Touch",
        "stats_experience": "Core Discipline",
        "stats_experience_val": "Software & AI Systems",
        "stats_projects": "Production Platforms",
        "stats_projects_val": "4 Active Deployed",
        "stats_status": "Current Status",
        "stats_status_val": "Open for Collaboration",
        "tech_stack_tag": "Competency Matrix",
        "tech_stack_title": "Core Technical Stack & Expertise",
        "tech_stack_subtitle": "Specialized technologies and architectural patterns implemented across real-world systems.",
        "cat_backend": "Backend & Distributed Systems",
        "cat_ai": "Autonomous AI & Automation",
        "cat_frontend": "Web & Progressive Web Apps",
        "cat_devops": "DevOps & Cloud Infrastructure",
        "featured_projects_tag": "Selected Portfolio",
        "featured_projects_title": "Featured Engineering Projects",
        "featured_projects_subtitle": "Production systems, progressive web applications, and autonomous multi-agent pipelines.",
        "loker_badge": "AI AGENT CRAWLER",
        "loker_merah_putih_desc": "An intelligent job aggregator powered by autonomous Hermes AI agent crawlers that scrape, normalize, and continuously synchronize career listings across diverse channels.",
        "fastingmate_badge": "PWA & PRODUCTIVITY",
        "fastingmate_desc": "A modern Progressive Web Application engineered for Muslim women to manage Ramadan fasting debts (Qadha) with peace of mind, custom scheduling, and automatic Fidyah calculations.",
        "qanaah_badge": "OPEN SOURCE FINANCE",
        "qanaah_desc": "A lightweight, privacy-focused open-source financial management application designed for intuitive family expense tracking and transparent budgeting.",
        "demipena_badge": "COGNITIVE MAPPING",
        "demipena_desc": "An innovative digital platform that visualizes the thematic hierarchy of the Holy Quran into structured mental roadmaps for academics and students.",
        "visit_project": "Launch Application",
        "cta_title": "Ready to build something extraordinary?",
        "cta_desc": "From high-concurrency backend services to autonomous AI workflows—let's discuss how we can turn your vision into reliable, production-ready software.",
        "contact_linkedin": "Connect on LinkedIn",
        "contact_email": "Send Direct Email",
        "footer_rights": "&copy; 2026 Muhammad Luqni Baehaqi. Crafted with precision & performance.",
        "status_live": "Production Live"
    },
    id: {
        "title": "Muhammad Luqni Baehaqi | Software Engineer & AI Architect",
        "description": "Portofolio Muhammad Luqni Baehaqi, Software Engineer & AI Systems Architect. Pembuat Loker Merah Putih, FastingMate, Qanaah, dan Quran Mind Map.",
        "nav_role": "Software Engineer & AI Architect",
        "availability": "Terbuka untuk Kolaborasi & Proyek Baru",
        "lets_connect": "Mari Terhubung",
        "hero_greeting": "Hai, Saya",
        "hero_title_prefix": "Membangun Sistem Tangguh &",
        "hero_title_highlight": "Solusi AI Otonom.",
        "hero_subtitle": "Software engineer dan pemecah masalah yang berspesialisasi dalam arsitektur backend terdistribusi, aplikasi web modern, dan alur kerja agen AI otonom. Mengubah tantangan kompleks menjadi sistem yang skalabel dan berkinerja tinggi.",
        "view_work": "Lihat Karya Unggulan",
        "hire_me": "Hubungi Saya",
        "stats_experience": "Fokus Utama",
        "stats_experience_val": "Software & Sistem AI",
        "stats_projects": "Platform Produksi",
        "stats_projects_val": "4 Aktif Digunakan",
        "stats_status": "Status Ketersediaan",
        "stats_status_val": "Terbuka Kolaborasi",
        "tech_stack_tag": "Matriks Kompetensi",
        "tech_stack_title": "Keahlian & Ekosistem Teknologi",
        "tech_stack_subtitle": "Fondasi arsitektur dan teknologi yang hamba terapkan dalam membangun solusi berstandar industri.",
        "cat_backend": "Backend & Arsitektur Terdistribusi",
        "cat_ai": "AI Otonom & Otomasi Cerdas",
        "cat_frontend": "Web Modern & PWA",
        "cat_devops": "DevOps & Infrastruktur Cloud",
        "featured_projects_tag": "Portofolio Pilihan",
        "featured_projects_title": "Proyek Unggulan Terpilih",
        "featured_projects_subtitle": "Platform produksi nyata, progressive web application, dan pipeline agen AI mandiri.",
        "loker_badge": "AI AGENT CRAWLER",
        "loker_merah_putih_desc": "Platform agregator lowongan kerja cerdas ditenagai crawler agen AI Hermes yang mengumpulkan, menormalisasi, dan memperbarui informasi lowongan secara otonom dari berbagai sumber.",
        "fastingmate_badge": "PWA & PRODUKTIVITAS",
        "fastingmate_desc": "Progressive Web App modern yang dirancang untuk membantu muslimah mencatat, menjadwalkan, dan melacak hutang puasa Ramadhan (Qadha) serta kalkulasi otomatis kewajiban Fidyah.",
        "qanaah_badge": "OPEN SOURCE FINANCE",
        "qanaah_desc": "Aplikasi open-source yang ringan dan memprioritaskan privasi data untuk pencatatan serta pengelolaan arus kas dan anggaran keluarga secara praktis.",
        "demipena_badge": "COGNITIVE MAPPING",
        "demipena_desc": "Platform visualisasi kognitif tematik Al-Qur'an dalam struktur hierarki bertingkat, membantu akademisi dan penghafal memahami keterkaitan tema, sub-topik, dan ayat secara menyeluruh.",
        "cta_title": "Siap membangun sistem yang luar biasa?",
        "cta_desc": "Mulai dari backend berskala tinggi hingga integrasi alur kerja AI otonom—mari diskusikan bagaimana mewujudkan kebutuhan teknologi Anda menjadi solusi yang teruji.",
        "contact_linkedin": "Terhubung di LinkedIn",
        "contact_email": "Kirim Email Langsung",
        "footer_rights": "&copy; 2026 Muhammad Luqni Baehaqi. Dirancang dengan presisi & performa tinggi.",
        "status_live": "Produksi Aktif"
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'META' && element.getAttribute('name') === 'description') {
                element.setAttribute('content', translations[lang][key]);
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update button label
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = lang === 'en' ? 'ID' : 'EN';
    }
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang === 'en' ? 'id' : 'en';
    localStorage.setItem('language', newLang);
    updateContent(newLang);
}

function toggleTheme() {
    const isCurrentlyLight = document.body.classList.contains('light-mode');
    const themeBtn = document.getElementById('theme-toggle');

    if (isCurrentlyLight) {
        // Switch to Dark mode
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        if (themeBtn) themeBtn.textContent = '☀️';
    } else {
        // Switch to Light mode
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        if (themeBtn) themeBtn.textContent = '🌙';
    }
}

// Parallax Subtle Effect for Hero
function parallaxEffect() {
    const scrolled = window.scrollY;
    const heroContent = document.querySelector('.hero-content');
    if (heroContent && scrolled < 600) {
        heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
        heroContent.style.opacity = Math.max(0, 1 - (scrolled / 700));
    }
}

// Scroll Reveal with IntersectionObserver
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.1 });

    document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

// Initialize System
function init() {
    // Parallax & Reveal
    window.addEventListener('scroll', parallaxEffect, { passive: true });
    initScrollReveal();

    // Theme Management
    const savedTheme = localStorage.getItem('theme');
    const themeBtn = document.getElementById('theme-toggle');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        if (themeBtn) themeBtn.textContent = '🌙';
    } else {
        // Default is Dark Mode
        document.body.classList.remove('light-mode');
        if (themeBtn) themeBtn.textContent = '☀️';
    }

    // Language Management
    const savedLang = localStorage.getItem('language') || 'en';
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = savedLang === 'en' ? 'ID' : 'EN';
    updateContent(savedLang);

    // Event Listeners
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if (langBtn) langBtn.addEventListener('click', toggleLanguage);
}

// Safe bootstrap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
