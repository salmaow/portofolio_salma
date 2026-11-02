document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. LOGIKA NAVIGASI (PINDAH HALAMAN)
  // ==========================================
  const navLinks = document.querySelectorAll("[data-target]");

  navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
          e.preventDefault(); // Mencegah reload halaman
          
          const targetId = link.getAttribute("data-target");
          showPage(targetId);
          updateActiveNav(targetId);
      });
  });

  function showPage(pageId) {
      const pages = document.querySelectorAll('.page');
      pages.forEach(page => page.classList.remove('active'));

      const targetPage = document.getElementById(pageId);
      if (targetPage) {
          targetPage.classList.add('active');
      }
  }

  function updateActiveNav(pageId) {
      const links = document.querySelectorAll('.nav-links a');
      links.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-target') === pageId) {
              link.classList.add('active');
          }
      });
  }

  // ==========================================
  // 2. LOGIKA HAMBURGER MENU (TAMPILAN HP)
  // ==========================================
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-links');

  if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
          navMenu.classList.toggle('show');
      });
  }

  // ==========================================
  // 3. SIMULASI FORM KONTAK
  // ==========================================
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
          e.preventDefault(); // Mencegah form reload halaman
          alert('Terima kasih! Pesan Anda telah disimulasikan terkirim ke Salma.');
          contactForm.reset(); // Mengosongkan form setelah kirim
      });
  }
});