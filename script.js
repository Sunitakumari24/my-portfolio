// ========================================
// Portfolio Interactive JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const viewMoreBtn = document.getElementById('viewMoreBtn');
    const homepage = document.getElementById('homepage');
    const mainContent = document.getElementById('main-content');
    const themeToggle = document.getElementById('theme-toggle');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const homeBtn = document.querySelector('.home-btn');
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    const animatedSections = document.querySelectorAll('.animated-section');
    const aboutContainer = document.querySelector('.about-container');
    const techIcons = document.querySelectorAll('.tech-icon');
    const softSkillCards = document.querySelectorAll('.soft-skill-card');
    const projectCards = document.querySelectorAll('.project-card');

    // ========================================
    // 1. Typing Animation Effect
    // ========================================
    const typingText = document.querySelector('.homepage-content h1');
    if (typingText) {
        const originalText = typingText.textContent;
        typingText.textContent = '';
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < originalText.length) {
                typingText.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    }

    // ========================================
    // 2. Homepage to Main Content Toggle
    // ========================================
    viewMoreBtn.addEventListener('click', () => {
        homepage.style.display = 'none';
        mainContent.classList.remove('hidden');
        document.body.style.backgroundColor = 'var(--background-color)';
        
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 10);
    });

    // ========================================
    // 3. Smooth Scroll Navigation
    // ========================================
    allNavLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            
            if (targetId === '#homepage') {
                homepage.style.display = 'flex';
                mainContent.classList.add('hidden');
                document.body.style.backgroundColor = '#1a1a1a';
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            
            // Hide mobile menu after clicking
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            // Add active class to current nav item
            allNavLinks.forEach(navLink => {
                navLink.parentElement.classList.remove('active-nav');
            });
            link.parentElement.classList.add('active-nav');
        });
    });

    // ========================================
    // 4. Theme Toggle with Smooth Transition
    // ========================================
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        
        // Add rotation animation to theme toggle button
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }

    // ========================================
    // 5. Mobile Menu Toggle
    // ========================================
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // ========================================
    // 6. Scroll-triggered Section Animations
    // ========================================
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                
                if (entry.target.id === 'about') {
                    aboutContainer.classList.add('animate');
                }
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedSections.forEach(section => {
        observer.observe(section);
    });

    // ========================================
    // 7. Tech Icons & Skill Cards Animation
    // ========================================
    techIcons.forEach((icon, index) => {
        icon.style.animationDelay = `${index * 0.1}s`;
        
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-15px) scale(1.05)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) scale(1)';
        });
    });

    softSkillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // ========================================
    // 8. Project Cards Interactive Effects
    // ========================================
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1.15)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            const img = this.querySelector('img');
            if (img) {
                img.style.transform = 'scale(1)';
            }
        });
    });

    // ========================================
    // 9. Active Navigation Highlight on Scroll
    // ========================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(link => {
                    link.parentElement.classList.remove('active-nav');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.parentElement.classList.add('active-nav');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);

    // ========================================
    // 10. Navbar Background on Scroll
    // ========================================
    const header = document.querySelector('header');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.2)';
            header.style.padding = '0.8rem 5%';
        } else {
            header.style.boxShadow = 'var(--box-shadow)';
            header.style.padding = '1.2rem 5%';
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);

    // ========================================
    // 11. Profile Image Animation
    // ========================================
    const animatedImage = document.getElementById('profile-image-animated');
    if (animatedImage) {
        const images = [
            'image/image.png',
            'image/image.jpg',
        ];
        let currentImageIndex = 0;

        setInterval(() => {
            animatedImage.style.opacity = '0';
            setTimeout(() => {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                animatedImage.src = images[currentImageIndex];
                animatedImage.style.opacity = '1';
            }, 500);
        }, 3000);
    }

    // ========================================
    // 12. Scroll to Top Button
    // ========================================
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.classList.add('scroll-to-top');
    scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ========================================
    // 13. Form Validation (Contact Form)
    // ========================================
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = contactForm.querySelector('input[name="name"]');
            const email = contactForm.querySelector('input[name="email"]');
            const message = contactForm.querySelector('textarea[name="message"]');
            
            let isValid = true;
            
            // Validate name
            if (name.value.trim().length < 2) {
                showError(name, 'Name must be at least 2 characters');
                isValid = false;
            } else {
                removeError(name);
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value)) {
                showError(email, 'Please enter a valid email');
                isValid = false;
            } else {
                removeError(email);
            }
            
            // Validate message
            if (message.value.trim().length < 10) {
                showError(message, 'Message must be at least 10 characters');
                isValid = false;
            } else {
                removeError(message);
            }
            
            if (isValid) {
                // Show success message
                showSuccessMessage();
                contactForm.reset();
            }
        });
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        let errorDiv = formGroup.querySelector('.error-message');
        
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.classList.add('error-message');
            formGroup.appendChild(errorDiv);
        }
        
        errorDiv.textContent = message;
        input.style.borderColor = '#f5576c';
    }

    function removeError(input) {
        const formGroup = input.parentElement;
        const errorDiv = formGroup.querySelector('.error-message');
        
        if (errorDiv) {
            errorDiv.remove();
        }
        
        input.style.borderColor = '';
    }

    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.classList.add('success-message');
        successDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <p>Thank you! Your message has been sent successfully.</p>
        `;
        
        document.body.appendChild(successDiv);
        
        setTimeout(() => {
            successDiv.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            successDiv.classList.remove('show');
            setTimeout(() => {
                successDiv.remove();
            }, 300);
        }, 3000);
    }

    // ========================================
    // 14. Cursor Trail Effect (Optional)
    // ========================================
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.classList.add('cursor-follower');
    document.body.appendChild(cursorFollower);

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    function animateFollower() {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .tech-icon, .soft-skill-card, .project-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });

    // ========================================
    // 15. Particle Background Animation
    // ========================================
    function createParticles() {
        const particlesContainer = document.querySelector('.animated-bg');
        if (!particlesContainer) return;

        // Clear existing particles
        particlesContainer.innerHTML = '';

        const particleCount = 15;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('span');
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (Math.random() * 20 + 10) + 's';
            
            const size = Math.random() * 100 + 20;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            particlesContainer.appendChild(particle);
        }
    }

    createParticles();

    // ========================================
    // 16. Timeline Items Animation
    // ========================================
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }, index * 200);
                timelineObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = item.classList.contains('timeline-item:nth-child(odd)') 
            ? 'translateX(-50px)' 
            : 'translateX(50px)';
        item.style.transition = 'all 0.6s ease-out';
        timelineObserver.observe(item);
    });

    // ========================================
    // 17. Loading Screen (Optional)
    // ========================================
    window.addEventListener('load', () => {
        const loader = document.createElement('div');
        loader.classList.add('page-loader');
        loader.innerHTML = `
            <div class="loader-spinner"></div>
            <p>Loading Portfolio...</p>
        `;
        
        document.body.appendChild(loader);
        
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 1000);
    });

    // ========================================
    // 18. Tech Stack & Skills Progress Animation
    // ========================================
    const skillsSection = document.getElementById('skills');
    let skillsAnimated = false;

    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                techIcons.forEach((icon, index) => {
                    setTimeout(() => {
                        icon.style.opacity = '1';
                        icon.style.transform = 'translateY(0) scale(1)';
                    }, index * 50);
                });
                
                softSkillCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0) scale(1)';
                    }, (techIcons.length * 50) + (index * 100));
                });
                
                skillsAnimated = true;
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (skillsSection) {
        techIcons.forEach(icon => {
            icon.style.opacity = '0';
            icon.style.transform = 'translateY(30px) scale(0.9)';
            icon.style.transition = 'all 0.5s ease-out';
        });
        
        softSkillCards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.9)';
            card.style.transition = 'all 0.5s ease-out';
        });
        
        skillsObserver.observe(skillsSection);
    }

    // ========================================
    // Console Message
    // ========================================
    console.log('%c👋 Welcome to Sunita\'s Portfolio!', 'color: #667eea; font-size: 20px; font-weight: bold;');
    console.log('%c🚀 Built with HTML, CSS & JavaScript', 'color: #764ba2; font-size: 14px;');
    console.log('%c💼 Looking for opportunities? Let\'s connect!', 'color: #f093fb; font-size: 14px;');
});
