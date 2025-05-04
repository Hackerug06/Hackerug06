document.addEventListener('DOMContentLoaded', function() {
    // Animated coding background
    const codingBackground = document.querySelector('.coding-background');
    if (codingBackground) {
        // Create animated code elements
        for (let i = 0; i < 30; i++) {
            const codeElement = document.createElement('div');
            codeElement.className = 'code-element';
            
            // Random properties
            const size = Math.random() * 20 + 10;
            const duration = Math.random() * 20 + 10;
            const delay = Math.random() * 5;
            const opacity = Math.random() * 0.3 + 0.1;
            
            codeElement.style.width = `${size}px`;
            codeElement.style.height = `${size}px`;
            codeElement.style.left = `${Math.random() * 100}%`;
            codeElement.style.top = `${Math.random() * 100}%`;
            codeElement.style.animationDuration = `${duration}s`;
            codeElement.style.animationDelay = `${delay}s`;
            codeElement.style.opacity = opacity;
            codeElement.style.backgroundColor = `rgba(255, 255, 255, ${opacity})`;
            
            codingBackground.appendChild(codeElement);
        }
        
        // Add CSS for animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0% {
                    transform: translateY(0) rotate(0deg);
                }
                100% {
                    transform: translateY(-100vh) rotate(360deg);
                }
            }
            .code-element {
                position: absolute;
                border-radius: 50%;
                animation: float linear infinite;
                filter: blur(1px);
            }
        `;
        document.head.appendChild(style);
    }
});
