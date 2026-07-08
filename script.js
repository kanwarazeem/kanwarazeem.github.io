// ============================================
// Smooth Scrolling for Navigation Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Active Navigation Highlight
// ============================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Animation on Scroll
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.experience-item, .education-item, .skill-category, .project-card, .cert-item, .current-role-highlight').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// Add active state to nav links
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Highlight current role on page load
    highlightCurrentRole();
});

// ============================================
// Highlight Current HydroSun Role
// ============================================
function highlightCurrentRole() {
    const currentRoleElements = document.querySelectorAll('.current-role, .current-role-highlight');
    currentRoleElements.forEach(element => {
        element.style.animation = 'glow 2s ease-in-out infinite';
    });
}

// Add glow animation to stylesheet dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes glow {
        0%, 100% {
            box-shadow: 0 0 5px rgba(39, 174, 96, 0.3), 0 4px 15px rgba(39, 174, 96, 0.2);
        }
        50% {
            box-shadow: 0 0 20px rgba(39, 174, 96, 0.5), 0 4px 20px rgba(39, 174, 96, 0.3);
        }
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .role-badge {
        animation: slideInUp 0.6s ease-out;
    }
`;
document.head.appendChild(style);

// ============================================
// Mobile Menu Toggle
// ============================================
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    if (window.innerWidth <= 768) {
        // Mobile menu logic can be added here
    }
}

window.addEventListener('resize', initMobileMenu);
initMobileMenu();

// ============================================
// Scroll to top button
// ============================================
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #4A90E2, #2E5C8A);
    color: white;
    border: none;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 99;
    transition: all 0.3s ease;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-weight: bold;
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseover', () => {
    scrollToTopBtn.style.background = 'linear-gradient(135deg, #27AE60, #F39C12)';
    scrollToTopBtn.style.transform = 'scale(1.15)';
    scrollToTopBtn.style.boxShadow = '0 4px 20px rgba(39, 174, 96, 0.4)';
});

scrollToTopBtn.addEventListener('mouseout', () => {
    scrollToTopBtn.style.background = 'linear-gradient(135deg, #4A90E2, #2E5C8A)';
    scrollToTopBtn.style.transform = 'scale(1)';
    scrollToTopBtn.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
});

// ============================================
// Log current role status to console
// ============================================
console.log('%c🌟 Welcome to Kanwar Azeem Portfolio', 'color: #4A90E2; font-size: 16px; font-weight: bold;');
console.log('%cCurrent Position: Field Engineer at HydroSun', 'color: #27AE60; font-size: 14px; font-weight: bold;');
console.log('%cLooking forward to connecting with you!', 'color: #F39C12; font-size: 12px;');

// ============================================
// Smooth fade-in for role badge
// ============================================
window.addEventListener('load', () => {
    const roleBadges = document.querySelectorAll('.role-badge, .role-indicator');
    roleBadges.forEach((badge, index) => {
        badge.style.animation = `slideInUp 0.6s ease-out ${index * 0.1}s both`;
    });
});
