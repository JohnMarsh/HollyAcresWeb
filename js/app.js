// Holly Acres Band Website - SPA Router and Interactivity

class Router {
    constructor() {
        this.routes = [];
        this.currentSection = 'home';
        this.init();
    }

    init() {
        // Handle initial route
        this.handleRoute();
        
        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRoute());
        
        // Listen for navigation clicks
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = link.getAttribute('href');
                this.navigateTo(target);
            });
        });
    }

    navigateTo(path) {
        window.location.hash = path;
        this.handleRoute();
    }

    handleRoute() {
        const hash = window.location.hash || '#home';
        const sectionId = hash.substring(1);
        
        // Update active navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });

        // Scroll to section
        const section = document.getElementById(sectionId);
        if (section) {
            const navHeight = document.getElementById('navbar').offsetHeight;
            const targetPosition = section.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }

        this.currentSection = sectionId;
    }
}

// Navigation functionality
class Navigation {
    constructor() {
        this.navbar = document.getElementById('navbar');
        this.mobileMenu = document.getElementById('mobile-menu');
        this.navMenu = document.querySelector('.nav-menu');
        this.init();
    }

    init() {
        // Mobile menu toggle
        this.mobileMenu.addEventListener('click', () => {
            this.navMenu.classList.toggle('active');
            this.mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                this.navMenu.classList.remove('active');
                this.mobileMenu.classList.remove('active');
            });
        });

        // Scroll effect on navbar
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                this.navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                this.navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
            }
            
            lastScroll = currentScroll;
        });

        // Update active link on scroll
        this.updateActiveLink();
        window.addEventListener('scroll', () => this.updateActiveLink());
    }

    updateActiveLink() {
        const sections = document.querySelectorAll('.section');
        const navHeight = this.navbar.offsetHeight;
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
                current = section.getAttribute('id');
            }
        });

        if (current) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }
    }
}

// Contact form handler
class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        // Get form values
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // In a real application, you would send this to a server
        console.log('Form submitted:', data);
        
        // Show success message
        this.showMessage('Thank you for your message! We\'ll get back to you soon.', 'success');
        
        // Reset form
        this.form.reset();
    }

    showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            padding: 1rem;
            margin-top: 1rem;
            border-radius: 8px;
            background-color: ${type === 'success' ? '#00b894' : '#d63031'};
            color: white;
            text-align: center;
            animation: fadeInUp 0.5s ease;
        `;
        
        this.form.appendChild(messageDiv);
        
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
}

// Smooth scrolling for all internal links
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                const href = anchor.getAttribute('href');
                
                if (href !== '#' && href.length > 1) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    
                    if (target) {
                        const navHeight = document.getElementById('navbar').offsetHeight;
                        const targetPosition = target.offsetTop - navHeight;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });
    }
}

// Intersection Observer for animations
class AnimationObserver {
    constructor() {
        this.init();
    }

    init() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.album-card, .tour-item, .gallery-item').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize router
    const router = new Router();
    
    // Initialize navigation
    const navigation = new Navigation();
    
    // Initialize contact form
    const contactForm = new ContactForm();
    
    // Initialize smooth scrolling
    const smoothScroll = new SmoothScroll();
    
    // Initialize animations
    const animationObserver = new AnimationObserver();
    
    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
    
    console.log('Holly Acres website loaded successfully! 🎸');
});