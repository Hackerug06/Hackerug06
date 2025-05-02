// Toggle Navigation - Fully Working Version
const toggleBtn = document.getElementById('toggleBtn');
const navLinks = document.getElementById('navLinks');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change icon based on state
    const icon = toggleBtn.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close navigation when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        toggleBtn.querySelector('i').classList.remove('fa-times');
        toggleBtn.querySelector('i').classList.add('fa-bars');
    });
});

// WhatsApp Popup - Fully Working Version
const whatsappFloat = document.getElementById('whatsappFloat');
const whatsappPopup = document.getElementById('whatsappPopup');
const closePopup = document.getElementById('closePopup');

whatsappFloat.addEventListener('click', (e) => {
    // Only prevent default if we're showing the popup
    if (window.innerWidth > 768) { // Show popup only on desktop
        e.preventDefault();
        whatsappPopup.classList.toggle('show');
    }
    // On mobile, the default link behavior will work
});

closePopup.addEventListener('click', () => {
    whatsappPopup.classList.remove('show');
});

// Close popup when clicking outside
document.addEventListener('click', (e) => {
    if (!whatsappPopup.contains(e.target) && e.target !== whatsappFloat) {
        whatsappPopup.classList.remove('show');
    }
});

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Animated Coding Background
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
    'git commit -m "Fixed navigation and WhatsApp popup"'
];

function createCodeLines() {
    const width = window.innerWidth;
    const linesCount = Math.floor(width / 30); // Adjust density based on screen width
    
    for (let i = 0; i < linesCount; i++) {
        const line = document.createElement('div');
        line.className = 'code-line';
        line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        
        // Random positioning
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${-Math.random() * 100}px`;
        
        // Random delay for animation
        line.style.animationDelay = `${Math.random() * 5}s`;
        line.style.animationDuration = `${10 + Math.random() * 20}s`;
        
        codingBackground.appendChild(line);
    }
}

// Initialize code lines
createCodeLines();

// Smooth scrolling for all links
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

// Update copyright year automatically
document.getElementById('currentYear').textContent = new Date().getFullYear();
