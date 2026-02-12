const translations = {
    en: {
        "title": "Muhammad Luqni Baehaqi | Software Engineer",
        "description": "Portfolio of Muhammad Luqni Baehaqi, a Software Engineer creator of FastingMate, Qanaah, and Demi Pena.",
        "lets_connect": "Let's Connect",
        "availability": "✨ Open for Freelance & Collaboration",
        "hero_greeting": "Hi, I'm",
        "hero_subtitle": "A passionate Software Engineer and Problem Solver specializing in building robust web applications and AI-driven automation. I turn complex problems into elegant, scalable digital solutions.",
        "view_work": "View My Work",
        "hire_me": "Hire Me",
        "tech_stack": "Tech Stack & Expertise",
        "featured_projects": "Featured Projects",
        "fastingmate_desc": "FastingMate is a modern web application that helps Muslim women manage their Ramadan fasting debts with peace of mind and a plan. The app is designed to record, schedule, and track Qadha fasts, as well as automatically calculate Fidyah obligations.",
        "qanaah_desc": "Qanaah is a simple open-source application for recording, monitoring, and managing family expenses.",
        "demipena_desc": "Demi Pena is a modern note-taking app designed specifically with Islamic features to make it easier to record knowledge, Quranic contemplation, and hadith.",
        "cta_title": "Ready to build something amazing?",
        "cta_desc": "I offer professional services in website creation, custom app development, and AI automation solutions. Let's solve your business challenges together.",
        "contact_linkedin": "Contact Me on LinkedIn",
        "footer_rights": "&copy; 2026 Muhammad Luqni Baehaqi. All rights reserved.",
        "visit_project": "Visit Project",
        "launching_soon": "🚀 Launching Soon"
    },
    id: {
        "title": "Muhammad Luqni Baehaqi | Software Engineer",
        "description": "Portofolio Muhammad Luqni Baehaqi, seorang Software Engineer pembuat FastingMate, Qanaah, dan Demi Pena.",
        "lets_connect": "Mari Terhubung",
        "availability": "✨ Terbuka untuk Freelance & Kolaborasi",
        "hero_greeting": "Hai, Saya",
        "hero_subtitle": "Software Engineer dan Problem Solver yang bersemangat, berspesialisasi dalam membangun aplikasi web yang tangguh dan otomatisasi berbasis AI. Saya mengubah masalah kompleks menjadi solusi digital yang elegan dan skalabel.",
        "view_work": "Lihat Karya Saya",
        "hire_me": "Rekrut Saya",
        "tech_stack": "Keahlian & Teknologi",
        "featured_projects": "Proyek Unggulan",
        "fastingmate_desc": "FastingMate adalah aplikasi web modern yang membantu wanita Muslim mengelola hutang puasa Ramadhan mereka dengan tenang dan terencana. Aplikasi ini dirancang untuk mencatat, menjadwalkan, dan melacak puasa Qadha, serta secara otomatis menghitung kewajiban Fidyah.",
        "qanaah_desc": "Qanaah adalah aplikasi open-source sederhana untuk mencatat, memantau, dan mengelola pengeluaran keluarga.",
        "demipena_desc": "Demi Pena adalah aplikasi pencatat modern yang dirancang khusus dengan fitur Islami untuk mempermudah mencatat ilmu, tadabbur Al-Quran, dan hadits.",
        "cta_title": "Siap membangun sesuatu yang luar biasa?",
        "cta_desc": "Saya menawarkan layanan profesional dalam pembuatan website, pengembangan aplikasi kustom, dan solusi otomatisasi AI. Mari selesaikan tantangan bisnis Anda bersama-sama.",
        "contact_linkedin": "Hubungi Saya di LinkedIn",
        "footer_rights": "&copy; 2026 Muhammad Luqni Baehaqi. Hak cipta dilindungi undang-undang.",
        "visit_project": "Kunjungi Proyek",
        "launching_soon": "🚀 Segera Meluncur"
    }
};

function updateContent(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'META' && element.getAttribute('name') === 'description') {
                element.setAttribute('content', translations[lang][key]);
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update button text or active state if needed (optional visualization)
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = lang === 'en' ? 'ID' : 'EN'; // Show the OTHER language option
    }
}

function toggleLanguage() {
    const currentLang = localStorage.getItem('language') || 'en';
    const newLang = currentLang === 'en' ? 'id' : 'en';
    localStorage.setItem('language', newLang);
    updateContent(newLang);
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.textContent = isDark ? '☀️' : '🌙';
    }
}

// Parallax Effect
function parallaxEffect() {
    const scrolled = window.scrollY;

    // Move background blobs deeply
    const glow1 = document.querySelector('.glow-1');
    const glow2 = document.querySelector('.glow-2');

    if (glow1) glow1.style.transform = `translate(0px, ${scrolled * 0.3}px)`;
    if (glow2) glow2.style.transform = `translate(0px, ${scrolled * -0.2}px)`;

    // Hero Text Parallax (Fade out and move slightly)
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.4}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Parallax
    window.addEventListener('scroll', parallaxEffect);

    // Theme
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const themeBtn = document.getElementById('theme-toggle');

    // Default to light, but respect saved preference or system preference if not saved
    if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
        document.body.classList.add('dark-mode');
        if (themeBtn) themeBtn.textContent = '☀️';
    } else {
        document.body.classList.remove('dark-mode');
        if (themeBtn) themeBtn.textContent = '🌙';
    }

    // Language
    const savedLang = localStorage.getItem('language') || 'en';
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) langBtn.textContent = savedLang === 'en' ? 'ID' : 'EN';
    updateContent(savedLang);

    // Event Listeners
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
    if (langBtn) langBtn.addEventListener('click', toggleLanguage);
});
