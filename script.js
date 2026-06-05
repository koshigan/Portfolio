// ═══════════════════════════════════════════════════════════════════
// 🌌 FUTURISTIC AI DEVELOPER COMMAND CENTER - INTERACTIVE SCRIPT
// ═══════════════════════════════════════════════════════════════════

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📦 DOM ELEMENTS & INITIALIZATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const sections = document.querySelectorAll('.reveal');
const scrollTopBtn = document.getElementById('scroll-top');
const navbar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.nav-links a');
const navSections = document.querySelectorAll('section[id]');

// Configuration
const GITHUB_USERNAME = 'koshigan';
const GITHUB_API = 'https://api.github.com';

console.log('🚀 AI Developer Portfolio Loaded');

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎨 THEME TOGGLE - Dark/Light Mode
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const initTheme = () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
};

const updateThemeIcon = (theme) => {
    themeToggle.innerHTML = theme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
};

themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

initTheme();

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📱 MOBILE NAVIGATION - Hamburger Menu
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const toggleMobileMenu = () => {
    navLinks?.classList.toggle('active');
    const icon = hamburger?.querySelector('i');
    if (navLinks?.classList.contains('active')) {
        icon?.classList.replace('fa-bars', 'fa-times');
    } else {
        icon?.classList.replace('fa-times', 'fa-bars');
    }
};

hamburger?.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking a link
navItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks?.classList.remove('active');
        hamburger?.querySelector('i')?.classList.replace('fa-times', 'fa-bars');
    });
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ✨ SCROLL REVEAL ANIMATIONS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optionally stop observing after animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📊 NAVBAR SCROLL EFFECTS & ACTIVE NAV LINK
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

window.addEventListener('scroll', () => {
    // Navbar shadow on scroll
    if (window.scrollY > 50) {
        navbar?.style.setProperty('box-shadow', '0 4px 30px rgba(0, 217, 255, 0.1)');
    } else {
        navbar?.style.setProperty('box-shadow', 'none');
    }

    // Update active nav link
    let current = '';
    navSections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--primary)';
            link.classList.add('active');
        } else {
            link.style.color = '';
        }
    });
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ⬆️ SCROLL TO TOP BUTTON
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn?.classList.add('visible');
    } else {
        scrollTopBtn?.classList.remove('visible');
    }
});

scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🐙 GITHUB API INTEGRATION - Fetch User Projects
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const fetchGitHubProjects = async () => {
    try {
        const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`);
        const repos = await response.json();
        
        console.log('📦 GitHub Projects Fetched:', repos.length);
        
        // Filter out forked repos and sort by stars
        const ownRepos = repos
            .filter(repo => !repo.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count)
            .slice(0, 6);

        // Store in window for later use
        window.gitHubProjects = ownRepos;
        
        console.log('⭐ Top Projects:', ownRepos.map(r => r.name));
        
    } catch (error) {
        console.error('❌ Error fetching GitHub projects:', error);
    }
};

// Fetch on page load
fetchGitHubProjects();

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎯 SMOOTH SCROLL FOR ANCHOR LINKS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ⌨️ KEYBOARD SHORTCUTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Shift + T: Toggle Theme
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
        e.preventDefault();
        themeToggle?.click();
    }
    
    // Escape: Close mobile menu
    if (e.key === 'Escape') {
        navLinks?.classList.remove('active');
        hamburger?.querySelector('i')?.classList.replace('fa-times', 'fa-bars');
    }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎬 ANIMATED COUNTER FOR STATISTICS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const startTime = Date.now();
    
    const update = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(start + (target - start) * progress);
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    };
    
    update();
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎯 INITIALIZE AOS (ANIMATE ON SCROLL) IF AVAILABLE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        offset: 100
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🖱️ INTERACTIVE MOUSE EFFECTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Glow follow effect on interactive elements
document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.glass-card, .btn');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 📊 LAZY LOAD IMAGES
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
};

lazyLoadImages();

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🔔 PERFORMANCE MONITORING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const logPerformance = () => {
    if (window.performance && window.performance.timing) {
        const timing = window.performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        console.log(`⚡ Page Load Time: ${loadTime}ms`);
    }
};

window.addEventListener('load', logPerformance);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 🎉 EASTER EGG - Konami Code
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    const key = e.key;
    const expectedKey = konamiCode[konamiIndex];
    
    if (key === expectedKey) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateEasterEgg();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

const activateEasterEgg = () => {
    console.log('🎮 EASTER EGG ACTIVATED!');
    document.body.style.animation = 'rainbow 0.5s';
    setTimeout(() => {
        document.body.style.animation = '';
        alert('🎉 You found the Easter Egg! You\'re a true developer.\n\nBuilt with ❤️ by Koshigan');
    }, 500);
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// 💫 CONSOLE EASTER EGG MESSAGE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const consoleMessage = `
%c🌌 AI DEVELOPER COMMAND CENTER 🌌
%cWelcome to Koshigan's Premium Portfolio!

%cTech Stack: 
HTML5 | CSS3 | JavaScript | GitHub API | Responsive Design

%cLooking for a talented developer?
Check out the projects and get in touch! 🚀

%cKeyboard Shortcuts:
Ctrl/Cmd + Shift + T = Toggle Theme
Esc = Close Mobile Menu

%cMade with ❤️ by Koshigan
`;

console.log(
    consoleMessage,
    'font-size: 20px; color: #00d9ff; font-weight: bold;',
    'font-size: 14px; color: #a0aec0;',
    'font-size: 12px; color: #b300ff;',
    'font-size: 12px; color: #00ff88;',
    'font-size: 11px; color: #ffa500;',
    'font-size: 11px; color: #a0aec0;'
);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ✅ INITIALIZATION COMPLETE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.log('%c✨ Portfolio initialization complete!', 'color: #00d9ff; font-size: 14px; font-weight: bold;');


