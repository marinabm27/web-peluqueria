document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.15,
  });

  document.querySelectorAll('section, .card, .feature-grid article, .testimonial, .price-card, .gallery-grid figure').forEach((section) => {
    section.classList.add('reveal');
    observer.observe(section);
  });
});
