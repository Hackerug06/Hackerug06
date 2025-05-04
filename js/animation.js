document.addEventListener('DOMContentLoaded', function() {
    // Animated heading
    const animatedHeading = document.querySelector('.animated-heading');
    if (animatedHeading) {
        const text = animatedHeading.textContent;
        animatedHeading.textContent = '';
        
        for (let i = 0; i < text.length; i++) {
            const span = document.createElement('span');
            span.textContent = text[i];
            span.style.opacity = '0';
            span.style.transform = 'translateY(20px)';
            span.style.display = 'inline-block';
            span.style.transition = `opacity 0.5s ${i * 0.1}s, transform 0.5s ${i * 0.1}s`;
            animatedHeading.appendChild(span);
            
            // Trigger animation
            setTimeout(() => {
                span.style.opacity = '1';
                span.style.transform = 'translateY(0)';
            }, 100);
        }
    }
    
    // Animated coding background
    const codingBackground = document.querySelector('.coding-background');
    if (codingBackground) {
        // Create animated code lines
        for (let i = 0; i < 20; i++) {
            const codeLine = document.createElement('div');
            codeLine.className = 'code-line';
            codeLine.style.position = 'absolute';
            codeLine.style.left = `${Math.random() * 100}%`;
            codeLine.style.top = `${Math.random() * 100}%`;
            codeLine.style.width = `${Math.random() * 200 + 100}px`;
            codeLine.style.height = '2px';
            codeLine.style.background = `rgba(255, 255, 255, ${Math.random() * 0.2 + 0.1})`;
            codeLine.style.transform = `rotate(${Math.random() * 360}deg)`;
            codeLine.style.animation = `float ${Math.random() * 20 + 10}s linear infinite`;
            codeLine.style.animationDelay = `${Math.random() * 5}s`;
            
            codingBackground.appendChild(codeLine);
        }
        
        // Add CSS for animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(0) rotate(${Math.random() * 360}deg);
                    opacity: ${Math.random() * 0.5 + 0.1};
                }
                100% {
                    transform: translateY(-100vh) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
});
