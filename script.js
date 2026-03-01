document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('active');
            }
        });

        // Trigger skill bars animation when visible
        skillProgressBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            if (barTop < windowHeight - revealPoint) {
                const targetWidth = bar.style.width; // Capture original width
                bar.style.width = targetWidth;
            }
        });
    };

    // Initialize skill bars to 0 width for animation
    skillProgressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.dataset.width = targetWidth; // Store target
        bar.style.width = '0%';          // Reset
        
        // Use timeout to allow CSS transition to grab the updated width
        setTimeout(() => {
            // Re-apply if already visible on load
            revealOnScroll(); 
        }, 100);
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger on initial load

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
});
