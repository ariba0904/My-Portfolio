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
const successMessage = document.getElementById('successMessage');

clearBtn.addEventListener('click', () => {
  contactForm.reset();
  successMessage.style.display = 'none';
});

// ---------- GOOGLE FORM SUBMIT SUCCESS MESSAGE ----------
contactForm.addEventListener('submit', () => {
  setTimeout(() => {
    successMessage.style.display = 'block';
    contactForm.reset(); 

    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 5000);
  }, 500); 
});


