// Enhanced Portfolio Interactions and Animations
document.addEventListener('DOMContentLoaded', function() {
    // Page Loader
    const pageLoader = document.querySelector('.page-loader');
    window.addEventListener('load', () => {
        if (pageLoader) {
            setTimeout(() => {
                pageLoader.classList.add('hidden');
                setTimeout(() => {
                    pageLoader.remove();
                }, 500);
            }, 1000);
        }
    });

    // Active Navigation Tracking
    const navLinks = document.querySelectorAll('.nav-link[data-section]');
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call

    // Function to animate progress bars
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        
        progressBars.forEach((bar, index) => {
            const width = bar.getAttribute('data-width');
            bar.style.width = '0%';
            
            // Staggered animation
            setTimeout(() => {
                bar.style.transition = 'width 1.8s cubic-bezier(0.4, 0, 0.2, 1)';
                bar.style.width = width + '%';
            }, 200 + (index * 150));
        });
    }

    // Intersection Observer to trigger animation when skills section is visible
    const skillsSection = document.querySelector('.skills-section');
    
    if (skillsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateProgressBars();
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.3
        });

        observer.observe(skillsSection);
    }

    // Enhanced Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Scroll to top button functionality
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Enhanced section reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
            }
        });
    }, observerOptions);

    // Apply to all sections
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        section.classList.add('section-hidden');
        revealObserver.observe(section);
    });

    // Timeline items animation with enhanced staggering
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('timeline-visible');
                }, index * 200);
            }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => {
        item.classList.add('timeline-hidden');
        timelineObserver.observe(item);
    });

    // Certificate cards animation
    const certificateCards = document.querySelectorAll('.certificate-card');
    const certificateObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('certificate-visible');
                }, index * 150);
            }
        });
    }, { threshold: 0.2 });

    certificateCards.forEach(card => {
        card.classList.add('certificate-hidden');
        certificateObserver.observe(card);
    });

    // Contact cards animation
    const contactCards = document.querySelectorAll('.contact-card');
    const contactObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('contact-visible');
                }, index * 100);
            }
        });
    }, { threshold: 0.2 });

    contactCards.forEach(card => {
        card.classList.add('contact-hidden');
        contactObserver.observe(card);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Account for fixed navbar
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });    // Typing animation enhancement
    const typingElement = document.querySelector('.input');
    if (typingElement) {
        // Remove any custom cursor styling to prevent duplication
        typingElement.style.borderRight = 'none';
        typingElement.style.animation = 'none';
    }

    // Performance optimization: Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});
