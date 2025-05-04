// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
body.classList.add(savedTheme + '-theme');

// Set initial icon
const icon = themeToggle.querySelector('i');
icon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
    
    // Update icon
    const isDark = body.classList.contains('dark-theme');
    icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    
    // Save preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Animated Heading
const heading = document.querySelector('.animated-heading');
setTimeout(() => {
    heading.classList.add('animate');
}, 500);

// Mobile Navigation
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Current Year in Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// WhatsApp Popup
const whatsappFloat = document.getElementById('whatsappFloat');
whatsappFloat.addEventListener('click', (e) => {
    if (window.innerWidth > 768) {
        e.preventDefault();
        // Implement popup logic here
        window.open(this.href, '_blank');
    }
});

// Initialize Coding Background
const codingBackground = document.getElementById('codingBackground');
const codeSnippets = [
    'function greet() { console.log("Hello World!"); }',
    'const user = { name: "Hackerug06", skills: ["JavaScript", "React"] };',
    'import React from "react";\nconst App = () => <h1>Welcome</h1>;'
];

function createCodeLines() {
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

createCodeLines();
