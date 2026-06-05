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

    // ========== SCROLL REVEAL ANIMATION (with floating entrance from different directions) ==========
    const animatedElements = document.querySelectorAll('.scroll-animate');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger the animation
                entry.target.classList.add('visible');
            } else {
                // Remove class when out of view - so they animate again when scrolling back
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -20px 0px" }); // Trigger when 15% visible
    
    animatedElements.forEach(el => scrollObserver.observe(el));
});