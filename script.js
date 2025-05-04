// DOM Elements
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');
const navItems = document.querySelectorAll('.nav-link');
const currentYear = document.getElementById('currentYear');
const whatsappFloat = document.getElementById('whatsappFloat');
const contactForm = document.getElementById('contactForm');
const skillsGrid = document.querySelector('.skills-grid');
const projectsGrid = document.querySelector('.projects-grid');
const typedElement = document.getElementById('typed');

// Data
const skills = [
    {
        icon: 'fa-code',
        title: 'Frontend Development',
        description: 'HTML5, CSS3, JavaScript, TypeScript, React, Angular, Vue.js'
    },
    {
        icon: 'fa-server',
        title: 'Backend Development',
        description: 'Node.js, Express, RESTful APIs, MongoDB, PostgreSQL, Authentication'
    },
    {
        icon: 'fa-mobile-alt',
        title: 'Mobile Development',
        description: 'React Native, Flutter, Progressive Web Apps, Responsive Design'
    },
    {
        icon: 'fa-chalkboard-teacher',
        title: 'Teaching & Mentoring',
        description: 'Web Development, Programming Fundamentals, Code Reviews, Workshops'
    }
];

const projects = [
    {
        image: 'assets/project1.jpg',
        title: 'E-Commerce Platform',
        description: 'Full-featured online store with payment integration and admin dashboard',
        tags: ['React', 'Node.js', 'MongoDB'],
        demo: '#',
        code: '#'
    },
    {
        image: 'assets/project2.jpg',
        title: 'Learning Management System',
        description: 'Online platform for courses with progress tracking and certifications',
        tags: ['Angular', 'Firebase', 'TypeScript'],
        demo: '#',
        code: '#'
    },
    {
        image: 'assets/project3.jpg',
        title: 'Fitness Tracker App',
        description: 'Mobile application for workout tracking with social features',
        tags: ['React Native', 'Redux', 'Firebase'],
        demo: '#',
        code: '#'
    }
];

// Toggle Mobile Navigation
function toggleMobileNav() {
    navLinks.classList.toggle('active');
}

// Close Mobile Menu When Clicking Links
function closeMobileMenu() {
    navLinks.classList.remove('active');
}

// Generate Skills Grid
function renderSkills() {
    skillsGrid.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <i class="fas ${skill.icon}"></i>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
        </div>
    `).join('');
}

// Generate Projects Grid
function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demo}"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                    <a href="${project.code}"><i class="fab fa-github"></i> Source Code</a>
                </div>
            </div>
        </div>
    `).join('');
}

// Typed Animation
function initTyped() {
    const text = "Hackerug06";
    let i = 0;
    
    function type() {
        if (i < text.length) {
            typedElement.textContent += text.charAt(i);
            i++;
            setTimeout(type, 150);
        }
    }
    
    type();
}

// Generate Code Background
function createCodeBackground() {
    const codingBackground = document.getElementById('codingBackground');
    const codeSnippets = [
        'function greet() { console.log("Hello World!"); }',
        'const user = { name: "Hackerug06", skills: ["JavaScript", "React"] };',
        'import React from "react";\nconst App = () => <h1>Welcome</h1>;',
        'router.get("/api/users", (req, res) => {\n  res.json(users);\n});',
        '@Component({\n  selector: "app-root",\n  templateUrl: "./app.component.html"\n})',
        'const express = require("express");\nconst app = express();',
        'function fibonacci(n) {\n  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);\n}',
        'const [count, setCount] = useState(0);',
        'docker build -t my-app .\ndocker run -p 3000:3000 my-app',
        'git commit -m "Initial commit"'
    ];

    const width = window.innerWidth;
    const linesCount = Math.min(Math.floor(width / 30), 20);
    
    for (let i = 0; i < linesCount; i++) {
        const line = document.createElement('div');
        line.className = 'code-line';
        line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${-Math.random() * 100}px`;
        line.style.animationDelay = `${Math.random() * 5}s`;
        line.style.animationDuration = `${10 + Math.random() * 15}s`;
        codingBackground.appendChild(line);
    }
}

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form Submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Form validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Here you would typically send the form data to a server
    // For this example, we'll just show a success message
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
}

// Initialize Everything
function init() {
    // Set current year in footer
    currentYear.textContent = new Date().getFullYear();
    
    // Render dynamic content
    renderSkills();
    renderProjects();
    
    // Initialize animations
    initTyped();
    createCodeBackground();
    
    // Set up event listeners
    toggleBtn.addEventListener('click', toggleMobileNav);
    navItems.forEach(item => item.addEventListener('click', closeMobileMenu));
    contactForm.addEventListener('submit', handleFormSubmit);
    
    // Initialize smooth scrolling
    initSmoothScrolling();
}

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', init);
