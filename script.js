// Toggle mobile menu
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('active');
}

// Close menu on link click (especially for mobile)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('active');
  });
});

// Initialize AOS animations
AOS.init({
  duration: 800,
  once: true,
  offset: 100
});

// Smooth scroll to sections
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Floating email chat button effects
const chatButton = document.querySelector('.chat-button');
if (chatButton) {
  chatButton.addEventListener('mouseenter', () => {
    chatButton.style.transform = 'scale(1.1)';
  });
  chatButton.addEventListener('mouseleave', () => {
    chatButton.style.transform = 'scale(1)';
  });
}
