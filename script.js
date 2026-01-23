document.addEventListener('DOMContentLoaded', function () {

  // ---------- NAV TOGGLE ----------
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // ---------- FOOTER YEAR ----------
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // ---------- CONTACT FORM ----------
  const contactForm = document.getElementById('contactForm');
  const clearBtn = document.getElementById('clearForm');
  const sendStatus = document.getElementById('sendStatus');

  // Clear button
  if (clearBtn && contactForm) {
    clearBtn.addEventListener('click', () => {
      contactForm.reset();
      if (sendStatus) sendStatus.style.display = 'none';
    });
  }

  // Send message clue
  if (contactForm && sendStatus) {
    contactForm.addEventListener('submit', () => {
      setTimeout(() => {
        sendStatus.style.display = 'block';
        contactForm.reset();

        // auto-hide after 6 seconds 
        setTimeout(() => {
          sendStatus.style.display = 'none';
        }, 6000);
      }, 500);
    });
  }
});

// ---------- SCROLL REVEAL ----------
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < windowHeight - 100) {
      card.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();





