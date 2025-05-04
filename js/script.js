document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const toggleBtn = document.querySelector('.toggle-btn');
    const navList = document.querySelector('.nav-list');
    
    toggleBtn.addEventListener('click', function() {
        navList.classList.toggle('active');
        this.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navList.classList.remove('active');
            toggleBtn.classList.remove('active');
        });
    });
    
    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 300) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Animate progress bars when skills section comes into view
    const skillsSection = document.getElementById('skills');
    const progressBars = document.querySelectorAll('.progress');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    skillsObserver.observe(skillsSection);
    
    // Code background animation
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
    
    // Generate random code snippets
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
});

// Add code background animation styles
const style = document.createElement('style');
style.textContent = `
    .code-line {
        position: absolute;
        color: rgba(255, 255, 255, 0.1);
        font-family: 'Courier New', monospace;
        font-size: 14px;
        white-space: nowrap;
        animation: float 15s linear infinite;
    }
    
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 0.1;
        }
        90% {
            opacity: 0.1;
        }
        100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
