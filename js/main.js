const WHATSAPP_URL = 'https://wa.me/243997236789';

function getCurrentPageName() {
  const pageName = location.pathname.split('/').pop() || 'index.html';
  if (!pageName || pageName === '') return 'home';
  if (pageName.includes('services')) return 'services';
  if (pageName.includes('work')) return 'work';
  if (pageName.includes('contact')) return 'contact';
  return 'home';
}

function getStoredLanguage() {
  const saved = localStorage.getItem('bill-lang');
  return saved === 'en' ? 'en' : 'fr';
}

function setStoredLanguage(lang) {
  localStorage.setItem('bill-lang', lang);
}

function buildHeader() {
  const header = document.querySelector('[data-role="site-header"]');
  if (!header) return;

  const currentPage = getCurrentPageName();
  header.innerHTML = `
    <div class="container site-header-inner">
      <a href="index.html" class="brand" aria-label="BILL TFC & Mémoires home">
        <img src="images/Logo.2.JPG" alt="BILL TFC & Mémoires logo">
      </a>

      <button class="nav-toggle" type="button" aria-label="Toggle menu" aria-expanded="false">☰</button>

      <nav class="site-nav" aria-label="Main navigation">
        <a href="index.html" class="${currentPage === 'home' ? 'active' : ''}" data-i18n-key="navHome">Accueil</a>
        <a href="services.html" class="${currentPage === 'services' ? 'active' : ''}" data-i18n-key="navServices">Services</a>
        <a href="work.html" class="${currentPage === 'work' ? 'active' : ''}" data-i18n-key="navWork">Travail</a>
        <a href="contact.html" class="${currentPage === 'contact' ? 'active' : ''}" data-i18n-key="navContact">Contact</a>
      </nav>

      <div class="lang-switch" aria-label="Language switcher">
        <button class="lang-btn is-active" type="button" data-lang="fr">FR</button>
        <button class="lang-btn" type="button" data-lang="en">EN</button>
      </div>
    </div>
  `;

  const navToggle = header.querySelector('.nav-toggle');
  const nav = header.querySelector('.site-nav');
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const langButtons = header.querySelectorAll('.lang-btn');
  langButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      setStoredLanguage(lang);
      applyTranslations();
    });
  });

  const activeLang = getStoredLanguage();
  header.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === activeLang);
  });
}

function buildFooter() {
  const footer = document.querySelector('[data-role="site-footer"]');
  if (!footer) return;

  footer.innerHTML = `
    <div class="container footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="brand" aria-label="BILL TFC & Mémoires home">
          <img src="images/Logo.2.JPG" alt="BILL TFC & Mémoires logo">
        </a>
        <p class="footer-copy" data-i18n-key="tagline">L'excellence académique, notre engagement !</p>
      </div>

      <div>
        <div class="footer-title" data-i18n-key="quickLinks">Liens rapides</div>
        <ul class="footer-links">
          <li><a href="index.html" data-i18n-key="navHome">Accueil</a></li>
          <li><a href="services.html" data-i18n-key="navServices">Services</a></li>
          <li><a href="work.html" data-i18n-key="navWork">Travail</a></li>
          <li><a href="contact.html" data-i18n-key="navContact">Contact</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-title" data-i18n-key="contactTitle">Contact</div>
        <ul class="footer-contact">
          <li><a href="https://wa.me/243997236789">WhatsApp</a></li>
          <li><a href="tel:+243997236789">+243 99 72 36 789</a></li>
          <li><a href="mailto:billdollars965@gmail.com">billdollars965@gmail.com</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-title" data-i18n-key="social">Réseaux sociaux</div>
        <ul class="footer-social">
          <li><a href="#" aria-label="WhatsApp">WA</a></li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <div data-i18n-key="availabilityText">Disponible 24h/24, 7j/7 – à vos côtés, à chaque étape.</div>
      <div class="copyright-line" data-i18n-key="copyright">© BILL TFC &amp; Mémoires</div>
      <div class="designer-credit"><span data-i18n-key="builtByText">Built by</span> <a href="https://www.instagram.com/angelus.palata/" target="_blank" rel="noopener">Angelus</a></div>
    </div>
  `;
}

function buildFloatingWhatsappButton() {
  const existing = document.querySelector('.floating-whatsapp');
  if (existing) return;

  const link = document.createElement('a');
  link.className = 'floating-whatsapp';
  link.href = WHATSAPP_URL;
  link.target = '_blank';
  link.rel = 'noopener';
  link.setAttribute('aria-label', 'Contact on WhatsApp');
  link.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" role="img">
      <path d="M19.05 4.95A9.9 9.9 0 0 0 12.02 2C6.5 2 2 6.5 2 12.02c0 1.78.47 3.52 1.36 5.04L2 22l5.08-1.31A9.98 9.98 0 0 0 12.02 22c5.52 0 10.02-4.5 10.02-10.02 0-2.67-.99-5.17-2.97-7.03ZM12.02 19.2c-1.53 0-3.03-.42-4.35-1.2l-.31-.19-3.02.78.81-2.95-.2-.31A7.1 7.1 0 0 1 4.9 12.02a7.12 7.12 0 1 1 12.88 4.97 7.05 7.05 0 0 1-5.76 2.21Zm3.9-5.31c-.22-.11-1.3-.64-1.5-.71-.2-.07-.35-.11-.49.11-.15.22-.57.71-.7.86-.13.15-.26.17-.48.06-.22-.11-.92-.34-1.75-1.08-.65-.58-1.08-1.3-1.21-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.49-1.18-.68-1.61-.18-.43-.37-.37-.49-.37h-.42c-.15 0-.39.06-.59.28-.2.22-.77.75-.77 1.83s.79 2.12.9 2.27c.11.15 1.54 2.37 3.74 3.31.52.23.93.37 1.25.47.53.17 1.01.14 1.38.09.42-.06 1.3-.53 1.48-1.04.18-.51.18-.95.13-1.04-.06-.08-.2-.13-.42-.24Z"/>
    </svg>
  `;

  document.body.appendChild(link);
}

function applyTranslations() {
  const lang = getStoredLanguage();
  const dictionary = window.billTranslations[lang];
  if (!dictionary) return;

  const currentPage = getCurrentPageName();
  document.documentElement.lang = lang;
  document.title = dictionary.pageTitles[currentPage] || 'BILL TFC & Mémoires';

  const keys = document.querySelectorAll('[data-i18n-key]');
  keys.forEach((node) => {
    const key = node.dataset.i18nKey;
    const value = key.split('.').reduce((acc, part) => acc && acc[part], dictionary);
    if (typeof value === 'string') {
      node.innerHTML = value;
    }
  });

  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('is-active', isActive);
  });

  const navLinks = document.querySelectorAll('.site-nav a');
  navLinks.forEach((link) => {
    const pageKey = link.getAttribute('href');
    const isActive = (pageKey === 'index.html' && currentPage === 'home')
      || (pageKey === 'services.html' && currentPage === 'services')
      || (pageKey === 'work.html' && currentPage === 'work')
      || (pageKey === 'contact.html' && currentPage === 'contact');
    link.classList.toggle('active', isActive);
  });

  const langButtonsInHeader = document.querySelectorAll('.lang-btn');
  langButtonsInHeader.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle('is-active', isActive);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  buildHeader();
  buildFooter();
  buildFloatingWhatsappButton();
  applyTranslations();

  const selectedLang = getStoredLanguage();
  const headerButtons = document.querySelectorAll('.lang-btn');
  headerButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === selectedLang);
  });

  document.querySelectorAll('[data-page-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();
      const subject = encodeURIComponent('Demande depuis le site');
      const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:billdollars965@gmail.com?subject=${subject}&body=${body}`;
    });
  });
});
