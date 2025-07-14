// Main JavaScript file for MADT Website
// This is a completely rewritten version to fix errors

// Wait for DOM to be fully loaded before running any code
window.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded - initializing scripts');
    
    // Initialize all components
    initNavbar();
    initMobileMenu();
    initBenefitItems();
    initSubjectTabs();
    initSubjectCards();
    initScrollEffects();
    initContactForm();
    initNavigationHighlight();
    initAnimations();
    initHorizontalSkills();
    
    // Add loading complete class to body
    document.body.classList.add('loaded');
});

// Navigation Functions
function goToAiEra() {
    window.location.href = 'ai-era.html';
}

function goToMainCourse() {
    window.location.href = 'index.html';
}

// Initialize horizontal skills expandable functionality
function initHorizontalSkills() {
    try {
        const skillItems = document.querySelectorAll('.ai-skill-item-horizontal');
        
        skillItems.forEach(item => {
            item.addEventListener('click', function() {
                // Close all other expanded items
                skillItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('expanded');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('expanded');
            });
        });
        
        console.log('Horizontal skills initialized');
    } catch (error) {
        console.error('Error initializing horizontal skills:', error);
    }
}

// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    try {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    } catch (error) {
        console.error('Error in scrollToSection:', error);
    }
}

// Navbar scroll effect
function initNavbar() {
    try {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    } catch (error) {
        console.error('Error in initNavbar:', error);
    }
}

// Mobile menu toggle
function initMobileMenu() {
    try {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (!hamburger || !navMenu) return;
        
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    } catch (error) {
        console.error('Error in initMobileMenu:', error);
    }
}

// Benefit item toggle functionality
function initBenefitItems() {
    try {
        const benefitItems = document.querySelectorAll('.benefit-item.expandable');
        
        benefitItems.forEach(item => {
            const header = item.querySelector('.benefit-header');
            
            if (!header) return;
            
            header.addEventListener('click', function() {
                const isExpanded = item.classList.contains('expanded');
                
                // Close all other benefit items
                benefitItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('expanded');
                    }
                });
                
                // Toggle current item
                if (isExpanded) {
                    item.classList.remove('expanded');
                } else {
                    item.classList.add('expanded');
                }
            });
        });
    } catch (error) {
        console.error('Error in initBenefitItems:', error);
    }
}

// Subject card toggle functionality
function initSubjectCards() {
    try {
        const subjectCards = document.querySelectorAll('.subject-card');
        
        subjectCards.forEach(card => {
            // Remove inline onclick handler
            card.removeAttribute('onclick');
            
            // Add event listener
            card.addEventListener('click', function() {
                toggleSubjectDetails(this);
            });
        });
    } catch (error) {
        console.error('Error in initSubjectCards:', error);
    }
}

function toggleSubjectDetails(card) {
    try {
        if (!card || !card.classList) {
            console.error('Invalid card element in toggleSubjectDetails');
            return;
        }
        
        const isExpanded = card.classList.contains('expanded');
        
        // Close all other cards
        document.querySelectorAll('.subject-card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('expanded');
            }
        });
        
        // Toggle current card
        if (isExpanded) {
            card.classList.remove('expanded');
        } else {
            card.classList.add('expanded');
        }
    } catch (error) {
        console.error('Error in toggleSubjectDetails:', error);
    }
}

// Subjects tab system
function initSubjectTabs() {
    try {
        console.log('Initializing subject tabs');
        
        // Get all needed elements
        const tabButtons = document.querySelectorAll('.tab-button');
        const subjectGrids = document.querySelectorAll('.subjects-grid');
        
        if (!tabButtons.length || !subjectGrids.length) {
            console.warn('Tab buttons or subject grids not found');
            return;
        }
        
        // First, remove onclick attributes from buttons to prevent errors
        tabButtons.forEach(button => {
            button.removeAttribute('onclick');
        });
        
        // Hide all grids except the first one
        subjectGrids.forEach((grid, index) => {
            if (index === 0) {
                grid.classList.remove('hidden');
            } else {
                grid.classList.add('hidden');
            }
        });
        
        // Add active class to first button
        tabButtons[0].classList.add('active');
        
        // Add click event listeners to each button
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Get term ID from button's data attribute
                const termId = this.getAttribute('data-term');
                if (!termId) {
                    console.error('No data-term attribute found on button');
                    return;
                }
                
                // Remove active class from all buttons
                tabButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Hide all grids
                subjectGrids.forEach(grid => {
                    grid.classList.add('hidden');
                });
                
                // Show the selected grid
                const targetGrid = document.getElementById(termId + '-subjects');
                if (targetGrid) {
                    targetGrid.classList.remove('hidden');
                } else {
                    console.error('Target grid not found:', termId + '-subjects');
                }
            });
        });
        
        console.log('Subject tabs initialized successfully');
    } catch (error) {
        console.error('Error in initSubjectTabs:', error);
    }
}

// Smooth reveal animations on scroll
function initScrollEffects() {
    try {
        const reveals = document.querySelectorAll('.benefit-item, .about-card, .timeline-item');
        
        function revealOnScroll() {
            reveals.forEach(reveal => {
                const windowHeight = window.innerHeight;
                const elementTop = reveal.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('fade-in');
                }
            });
        }
        
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll(); // Initial check on load
    } catch (error) {
        console.error('Error in initScrollEffects:', error);
    }
}

// Contact form handling
function initContactForm() {
    try {
        const contactForm = document.getElementById('contactForm');
        
        if (!contactForm) return;
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !phone || !message) {
                alert('กรุณากรอกข้อมูลให้ครบถ้วน');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('กรุณากรอกอีเมลให้ถูกต้อง');
                return;
            }
            
            // Phone validation (basic)
            const phoneRegex = /^[0-9-+\s()]+$/;
            if (!phoneRegex.test(phone)) {
                alert('กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง');
                return;
            }
            
            // Success simulation
            alert('ส่งข้อความเรียบร้อยแล้ว! เราจะติดต่อกลับโดยเร็วที่สุด');
            contactForm.reset();
        });
    } catch (error) {
        console.error('Error in initContactForm:', error);
    }
}

// Enhanced navigation with active state
function initNavigationHighlight() {
    try {
        const navLinks = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section[id]');
        
        if (!navLinks.length || !sections.length) return;
        
        function updateActiveNav() {
            let current = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionHeight = section.clientHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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
    } catch (error) {
        console.error('Error in initNavigationHighlight:', error);
    }
}

// Hero animations and various UI enhancements
function initAnimations() {
    try {
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        if (hero) {
            window.addEventListener('scroll', function() {
                const scrolled = window.pageYOffset;
                const rate = scrolled * -0.5;
                hero.style.transform = `translateY(${rate}px)`;
            });
        }
        
        // Chart animation for hero section
        const bars = document.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (bar.style) {
                bar.style.setProperty('--i', index);
                bar.style.setProperty('--height', bar.style.height);
            }
        });
        
        // Trigger animation after a delay
        setTimeout(() => {
            bars.forEach(bar => {
                if (bar.style) {
                    bar.style.animationPlayState = 'running';
                }
            });
        }, 500);
        
        // Intersection Observer for better performance
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                }
            });
        }, observerOptions);
        
        // Observe elements
        document.querySelectorAll('.benefit-item, .about-card, .timeline-item, .subject-card').forEach(el => {
            observer.observe(el);
        });
        
        // Add mobile-specific interactions
        if ('ontouchstart' in window) {
            document.body.classList.add('touch-device');
        }
        
        // Enhanced scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', function() {
                scrollToSection('about');
            });
            
            // Hide scroll indicator after scrolling
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    scrollIndicator.style.opacity = '0';
                } else {
                    scrollIndicator.style.opacity = '1';
                }
            });
        }
        
        // Add typing effect for hero title
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const text = heroTitle.innerHTML;
            heroTitle.innerHTML = '';
            heroTitle.style.borderRight = '2px solid var(--primary-orange)';
            
            let i = 0;
            function typeWriter() {
                if (i < text.length) {
                    heroTitle.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                } else {
                    heroTitle.style.borderRight = 'none';
                }
            }
            
            setTimeout(typeWriter, 1000);
        }
        
        // Add progress bar for page reading
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, var(--primary-blue), var(--primary-orange));
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
        
        // Add back to top button
        const backToTop = document.createElement('button');
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTop.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--primary-orange);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            box-shadow: var(--shadow-lg);
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease;
            z-index: 1000;
        `;
        
        document.body.appendChild(backToTop);
        
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.transform = 'translateY(0)';
            } else {
                backToTop.style.opacity = '0';
                backToTop.style.transform = 'translateY(20px)';
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Add CSS for active nav links
        const style = document.createElement('style');
        style.textContent = `
            .nav-link.active {
                color: var(--primary-blue) !important;
            }
            
            .nav-link.active::after {
                width: 100% !important;
            }
            
            .loaded {
                opacity: 1;
            }
            
            body {
                opacity: 0;
                transition: opacity 0.5s ease;
            }
            
            .touch-device .about-card:hover {
                transform: none;
            }
            
            @media (max-width: 768px) {
                .nav-menu {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background: white;
                    box-shadow: var(--shadow);
                    flex-direction: column;
                    padding: 1rem 0;
                    transform: translateY(-10px);
                    opacity: 0;
                    visibility: hidden;
                    transition: all 0.3s ease;
                }
                
                .nav-menu.active {
                    transform: translateY(0);
                    opacity: 1;
                    visibility: visible;
                }
                
                .hamburger.active span:nth-child(1) {
                    transform: rotate(-45deg) translate(-5px, 6px);
                }
                
                .hamburger.active span:nth-child(2) {
                    opacity: 0;
                }
                
                .hamburger.active span:nth-child(3) {
                    transform: rotate(45deg) translate(-5px, -6px);
                }
            }
        `;
        document.head.appendChild(style);
    } catch (error) {
        console.error('Error in initAnimations:', error);
    }
}