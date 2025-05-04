document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    
    window.addEventListener('load', function() {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });

    // Mobile Navigation
    const navToggle = document.querySelector('.nav-toggle');
    const navbar = document.querySelector('.navbar');
    
    navToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        navbar.classList.toggle('active');
    });

    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navbar.classList.remove('active');
        });
    });

    // Header scroll effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Back to top button
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Initialize animations
    initAnimations();
});

function initAnimations() {
    // Animate skills progress bars
    const progressBars = document.querySelectorAll('.progress');
    
    const animateProgressBars = () => {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = `${width}%`;
        });
    };
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }

    // Create code background animation
    const codeBackground = document.querySelector('.code-background');
    if (codeBackground) {
        // Create code lines
        for (let i = 0; i < 50; i++) {
            const codeLine = document.createElement('div');
            codeLine.className = 'code-line';
            codeLine.style.top = `${Math.random() * 100}%`;
            codeLine.style.left = `${Math.random() * 100}%`;
            codeLine.style.animationDelay = `${Math.random() * 5}s`;
            codeLine.textContent = generateCodeSnippet();
            codeBackground.appendChild(codeLine);
        }
    }
}

function generateCodeSnippet() {
    const snippets = [
        'function hello() { return "World"; }',
        'const x = 10;',
        'for (let i = 0; i < 10; i++) { console.log(i); }',
        'class Person { constructor(name) { this.name = name; } }',
        'document.querySelector(".btn").addEventListener("click", handleClick);',
        'import React from "react";',
        'export default function App() { return <div>Hello</div>; }',
        'const arr = [1, 2, 3].map(x => x * 2);',
        'interface User { name: string; age: number; }',
        'router.get("/api/users", getUsers);',
        'app.use(express.json());',
        'const [count, setCount] = useState(0);',
        '<div className="container">{children}</div>',
        'const user = await User.findById(id);',
        'db.collection("users").find().toArray();',
        'margin: 0 auto;',
        'display: flex;',
        'position: absolute;',
        '@media (max-width: 768px) { ... }',
        'npm install package --save-dev'
    ];
    
    return snippets[Math.floor(Math.random() * snippets.length)];
}
