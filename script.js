// ── SMOOTH SCROLL ──
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── HIRE ME MODAL ──
function openHireModal() {
  const modal = document.getElementById('hireModal');
  modal.style.display = 'flex';
  setTimeout(() => modal.style.opacity = '1', 10);
}

function closeHireModal() {
  document.getElementById('hireModal').style.display = 'none';
}

// Close modal on backdrop click
document.getElementById('hireModal').addEventListener('click', function(e) {
  if (e.target === this) closeHireModal();
});

// ── NAV SCROLL EFFECT ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(0,0,0,0.9)';
  } else {
    nav.style.background = 'rgba(0,0,0,0.72)';
  }
});

// ── PARALLAX ORBS ──
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const orb1 = document.querySelector('.orb1');
  const orb2 = document.querySelector('.orb2');
  if (orb1) orb1.style.transform = `translateY(${scrollY * 0.15}px)`;
  if (orb2) orb2.style.transform = `translateY(${-scrollY * 0.1}px)`;
});

// ── TILT ON PROJECT CARD ──
const projectCard = document.querySelector('.project-feature');
if (projectCard) {
  projectCard.addEventListener('mousemove', e => {
    const rect = projectCard.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    projectCard.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
  });
  projectCard.addEventListener('mouseleave', () => {
    projectCard.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
  });
}

// ── SCROLL REVEAL ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.edu-card, .project-feature, .skill-card, .achieve-item').forEach(el => {
  observer.observe(el);
});
