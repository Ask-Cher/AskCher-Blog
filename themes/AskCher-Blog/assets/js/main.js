document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Table of Contents functionality (for single post pages)
    const tocLinks = document.querySelectorAll('.toc-list .toc-link');
    const sections = document.querySelectorAll('.post-content h2[id], .post-content h3[id]');

    if (tocLinks.length > 0 && sections.length > 0) {
        function updateActiveTocLink() {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.href.includes(current)) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveTocLink);
        updateActiveTocLink(); // Call on page load
    }
    
    // Simple form submission handler for newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('email-input');
            const email = emailInput.value;

            if (email) {
                alert('Thank you for subscribing!');
                console.log('Subscribed email:', email);
                emailInput.value = ''; // Clear the input
            }
        });
    }
});