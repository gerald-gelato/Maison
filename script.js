const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 120);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 60
      ? 'rgba(15,14,12,0.97)'
      : 'linear-gradient(to bottom, rgba(15,14,12,0.95) 0%, transparent 100%)';
  });

  
  
