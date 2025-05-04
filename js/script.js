document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
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
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active link highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Generate project cards
    const projectsGrid = document.querySelector('.projects-grid');
    const projects = [
        {
            title: "E-commerce Platform",
            description: "A full-featured online store with payment integration and admin dashboard.",
            technologies: ["Angular", "Node.js", "MongoDB"],
            image: "https://via.placeholder.com/600x400?text=E-commerce+Platform",
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "Task Management App",
            description: "A productivity application for managing tasks with team collaboration features.",
            technologies: ["Vue.js", "Firebase"],
            image: "https://via.placeholder.com/600x400?text=Task+Management",
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "Mobile Fitness Tracker",
            description: "Cross-platform mobile app for tracking workouts and nutrition.",
            technologies: ["React Native", "TypeScript"],
            image: "https://via.placeholder.com/600x400?text=Fitness+Tracker",
            liveLink: "#",
            codeLink: "#"
        }
    ];
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    <a href="${project.codeLink}" target="_blank"><i class="fab fa-github"></i> View Code</a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Initialize code background
    initCodeBackground();
});

function initCodeBackground() {
    const codeBg = document.getElementById('code-bg');
    const codeLines = [
        "function welcome() {",
        "  console.log('Hello, World!');",
        "  return 'Welcome to my portfolio';",
        "}",
        "",
        "class Developer {",
        "  constructor(name, skills) {",
        "    this.name = name;",
        "    this.skills = skills;",
        "  }",
        "",
        "  buildProject(project) {",
        "    return `Building ${project}...`;",
        "  }",
        "}",
        "",
        "const me = new Developer('Hackerug06', ",
        "  ['JavaScript', 'Angular', 'Vue', 'Node.js']);",
        "",
        "me.buildProject('Awesome Website');",
        "",
        "// This code runs in the background",
        "// Just like my skills powering your projects",
        "",
        "const express = require('express');",
        "const app = express();",
        "",
        "app.get('/', (req, res) => {",
        "  res.send('Hello from the backend!');",
        "});",
        "",
        "app.listen(3000, () => {",
        "  console.log('Server running on port 3000');",
        "});",
        "",
        "// More code continues to scroll...",
        "// Representing continuous learning and growth"
    ];
    
    codeLines.forEach(line => {
        const codeLine = document.createElement('div');
        codeLine.className = 'code-line';
        codeLine.textContent = line;
        codeBg.appendChild(codeLine);
    });
                                  }
