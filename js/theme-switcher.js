document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = document.querySelector('.theme-switcher');
    const themeBtns = document.querySelectorAll('.theme-btn');
    const html = document.documentElement;
    
    if (themeSwitcher) {
        // Get saved theme preference or use system preference
        const savedTheme = localStorage.getItem('theme') || 'system';
        setTheme(savedTheme);
        
        // Set active button
        themeBtns.forEach(btn => {
            if (btn.classList.contains(savedTheme)) {
                btn.classList.add('active');
            }
            
            btn.addEventListener('click', function() {
                const theme = this.classList.contains('light') ? 'light' :
                             this.classList.contains('dark') ? 'dark' : 'system';
                
                setTheme(theme);
                localStorage.setItem('theme', theme);
                
                // Update active button
                themeBtns.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
    
    function setTheme(theme) {
        if (theme === 'system') {
            const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            html.setAttribute('data-theme', systemDark ? 'dark' : 'light');
        } else {
            html.setAttribute('data-theme', theme);
        }
    }
    
    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('theme') === 'system') {
            setTheme('system');
        }
    });
});
