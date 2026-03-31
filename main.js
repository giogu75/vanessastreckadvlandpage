document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Animation logic
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Smooth Scroll for local links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form submission (Formspree Integration)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            
            btn.innerText = 'Enviando...';
            btn.disabled = true;

            const formData = new FormData(contactForm);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert('Obrigado pelo contato! Sua mensagem foi enviada com sucesso para o escritório Vanessa Streck.');
                    contactForm.reset();
                } else {
                    const data = await response.json();
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert('Ops! Ocorreu um problema ao enviar seu formulário. Tente novamente mais tarde.');
                    }
                }
            } catch (error) {
                alert('Ops! Ocorreu um erro de conexão. Verifique sua internet.');
            } finally {
                btn.innerText = originalText;
                btn.disabled = false;
            }
        });
    }

    // Header transparency change on scroll
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0';
            header.style.height = '80px';
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            header.style.padding = '10px 0';
            header.style.height = '100px';
            header.style.boxShadow = 'none';
        }
    });

    // Add staggered delay to reveal elements
    document.querySelectorAll('.services-grid .service-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.2}s`;
    });
});
