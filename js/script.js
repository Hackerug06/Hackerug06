u soon.');
            this.reset();
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            themeToggle.querySelector('.fa-moon').style.display = 'none';
            themeToggle.querySelector('.fa-sun').style.display = 'block';
        }
    } else if (prefersDarkScheme.matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.querySelector('.fa-moon').style.display = 'none';
        themeToggle.querySelector('.fa-sun').style.display = 'block';
    }
    
    themeToggle.addEventListener('click', function() {
        let theme;
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggle.querySelector('.fa-moon').style.display = 'block';
            themeToggle.querySelector('.fa-sun').style.display = 'none';
            theme = 'light';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.querySelector('.fa-moon').style.display = 'none';
            themeToggle.querySelector('.fa-sun').style.display = 'block';
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Sample portfolio items (replace with your actual projects)
    const portfolioItems = [
        {
            title: "E-commerce Website",
            description: "A full-featured online store with shopping cart and payment integration.",
            tags: ["JavaScript", "Vue.js", "Node.js"],
            image: "https://via.placeholder.com/600x400?text=E-commerce+Website"
        },
        {
            title: "Mobile Fitness App",
            description: "Cross-platform mobile application for tracking workouts and nutrition.",
            tags: ["React Native", "Firebase"],
            image: "https://via.placeholder.com/600x400?text=Fitness+App"
        },
        {
            title: "Educational Platform",
            description: "Online learning management system with video courses and quizzes.",
            tags: ["Angular", "MongoDB"],
            image: "https://via.placeholder.com/600x400?text=Education+Platform"
        },
        {
            title: "Business Dashboard",
            description: "Analytics dashboard for visualizing business metrics and KPIs.",
            tags: ["React", "D3.js"],
            image: "https://via.placeholder.com/600x400?text=Business+Dashboard"
        },
        {
            title: "Social Media App",
            description: "A social networking platform with real-time updates and messaging.",
            tags: ["Vue.js", "WebSockets"],
            image: "https://via.placeholder.com/600x400?text=Social+Media+App"
        },
        {
            title: "Portfolio Template",
            description: "Responsive portfolio template for creative professionals.",
            tags: ["HTML", "CSS", "JavaScript"],
            image: "https://via.placeholder.com/600x400?text=Portfolio+Template"
        }
    ];
    
    // Render portfolio items
    const portfolioGrid = document.querySelector('.portfolio-grid');
    if (portfolioGrid) {
        portfolioItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.className = 'portfolio-item';
            
            portfolioItem.innerHTML = `
                <div class="portfolio-img">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="portfolio-info">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                    <div class="portfolio-links">
                        <a href="#">View Project</a>
                        <a href="#">Code</a>
                    </div>
                </div>
            `;
            
            portfolioGrid.appendChild(portfolioItem);
        });
    }
    
    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
});
