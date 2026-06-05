document.addEventListener('DOMContentLoaded', () => {
    // ========== TYPING ANIMATION ==========
    const phrases = ["Aspiring Data Analyst & AI Enthusiast", "Turning Data into Insights", "SQL • Python • Power BI"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedTextSpan = document.getElementById("typed-text");
    
    function typeEffect() {
        if (!typedTextSpan) return;
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextSpan.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
        
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            setTimeout(typeEffect, 300);
            return;
        }
        
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeEffect, speed);
    }
    
    typeEffect();

    // ========== SCROLL REVEAL ANIMATION ==========
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -20px 0px" });
    
    animatedElements.forEach(el => scrollObserver.observe(el));

    // ========== LIGHT / DARK THEME TOGGLE (FIXED) ==========
    const themeIconBtn = document.getElementById('themeIcon');
    const htmlElement = document.documentElement;

    if (themeIconBtn) {
        themeIconBtn.addEventListener('click', () => {
            // Check current theme attribute value on the <html> tag
            const currentTheme = htmlElement.getAttribute('data-theme');
            
            if (currentTheme === 'dark') {
                // Change to Light Mode
                htmlElement.setAttribute('data-theme', 'light');
                themeIconBtn.textContent = '🌙'; // Keeps switch visual clear
            } else {
                // Change back to Dark Mode
                htmlElement.setAttribute('data-theme', 'dark');
                themeIconBtn.textContent = '☀️'; // Toggle button internal emoji icon
            }
        });
    }
});
