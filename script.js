const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  toggleBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Scroll animation
window.addEventListener('scroll', () => {
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 100) {
      section.style.opacity = 1;
      section.style.transform = 'translateY(0)';
    }
  });
});
