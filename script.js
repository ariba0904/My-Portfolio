// ---------- NAV TOGGLE ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ---------- FOOTER YEAR ----------
const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

// ---------- CONTACT FORM CLEAR ----------
const clearBtn = document.getElementById('clearForm');
const contactForm = document.getElementById('contactForm');

clearBtn.addEventListener('click', () => {
  contactForm.reset();
});
