document.addEventListener('DOMContentLoaded', function() {
    // Animate the heading
    const heading = document.querySelector('.animated-heading');
    if (heading) {
        // Split the text into letters
        const text = heading.textContent;
        heading.textContent = '';
        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.opacity = '0';
            span.style.display = 'inline-block';
            span.style.transform = 'translateY(20px)';
            span.style.transition = `all 0.3s ease ${i * 0.1}s`;
            heading.appendChild(span);
            
            // Animate each letter
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, 100);
        }
    }
    
    // Animate elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // Add animation classes to elements
    document.querySelectorAll('section').forEach(section => {
        const children = section.querySelectorAll('*:not(.section-title):not(.section-title *)');
        children.forEach((child, index) => {
            child.classList.add('animate-on-scroll');
        });
    });
    
    // Initial check
    animateOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Add animation styles
    const animationStyles = document.createElement('style');
    animationStyles.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-on-scroll.animated {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(animationStyles);
});
