import './style.css';
import { initRouter, navigateTo } from './router.js';
import { products } from './products.js';
import { renderPdfPageContent } from './templates.js';

// Setup the initial structural layout shell in the DOM
function initAppShell() {
  const appEl = document.getElementById('app');
  if (!appEl) return;

  appEl.innerHTML = `
    <!-- Header -->
    <header class="header">
      <div class="container header-container">
        <!-- Logo -->
        <a href="/" class="logo-wrapper">
          <svg class="brand-logo-svg" viewBox="0 0 100 100" width="48" height="48" style="fill: none; overflow: visible;">
            <!-- Vertical bar (Orange) -->
            <rect x="15" y="15" width="10" height="70" rx="3" fill="#f26522" />
            <!-- Upper diagonal (Orange) -->
            <path d="M25,50 L58,18 C60,16 63,17.5 63,20.5 L63,31 C63,32.5 62,34 60.5,35 L38,55 Z" fill="#f26522" />
            <!-- Lower diagonal (Orange) -->
            <path d="M25,48 L60.5,80 C62,81.5 63,83 63,84.5 L63,94.5 C63,97.5 60,99 58,97 L25,66 Z" fill="#f26522" />
            <!-- Top Dark Teal Triangle accent -->
            <path d="M25,15 L50,15 C52,15 53,17 51.5,18.5 L25,45 Z" fill="#0a2c3a" />
            <!-- Bottom Dark Teal Triangle accent -->
            <path d="M25,85 L50,85 C52,85 53,83 51.5,81.5 L25,55 Z" fill="#0a2c3a" />
            <!-- Controller Icon on right of K -->
            <!-- D-Pad '+' -->
            <circle cx="78" cy="42" r="7" stroke="#0a2c3a" stroke-width="2.5" />
            <path d="M74,42 L82,42 M78,38 L78,46" stroke="#0a2c3a" stroke-width="2" />
            <!-- Play triangle button -->
            <circle cx="78" cy="58" r="7" stroke="#0a2c3a" stroke-width="2.5" />
            <polygon points="76,55 81,58 76,61" fill="#0a2c3a" />
          </svg>
          <div class="logo-text">
            <span class="logo-primary">KANA</span>
            <span class="logo-secondary">ENTERTAINMENT</span>
          </div>
        </a>

        <!-- Mobile Nav Toggle -->
        <button class="mobile-nav-toggle" aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Navigation -->
        <nav class="nav-menu">
          <ul>
            <li><a href="/" class="active">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/#who-we-are" class="scroll-anchor">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        <!-- CTA Action Buttons -->
        <div class="header-ctas">
          <button class="btn btn-outline btn-sm open-catalog-btn">Download Catalog</button>
          <button class="btn btn-primary btn-sm quote-trigger-btn" data-product="General Inquiry">Request Quote</button>
        </div>
      </div>
    </header>

    <!-- Main Content Dynamic Container -->
    <main id="main-content" class="main-content-flow"></main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-brand-column">
          <a href="/" class="logo-wrapper footer-logo">
            <svg class="brand-logo-svg" viewBox="0 0 100 100" width="48" height="48" style="fill: none; overflow: visible;">
              <!-- Vertical bar (Orange) -->
              <rect x="15" y="15" width="10" height="70" rx="3" fill="#f26522" />
              <!-- Upper diagonal (Orange) -->
              <path d="M25,50 L58,18 C60,16 63,17.5 63,20.5 L63,31 C63,32.5 62,34 60.5,35 L38,55 Z" fill="#f26522" />
              <!-- Lower diagonal (Orange) -->
              <path d="M25,48 L60.5,80 C62,81.5 63,83 63,84.5 L63,94.5 C63,97.5 60,99 58,97 L25,66 Z" fill="#f26522" />
              <!-- Top Dark Teal Triangle accent -->
              <path d="M25,15 L50,15 C52,15 53,17 51.5,18.5 L25,45 Z" fill="#0a2c3a" />
              <!-- Bottom Dark Teal Triangle accent -->
              <path d="M25,85 L50,85 C52,85 53,83 51.5,81.5 L25,55 Z" fill="#0a2c3a" />
              <!-- Controller Icon on right of K -->
              <!-- D-Pad '+' -->
              <circle cx="78" cy="42" r="7" stroke="#0a2c3a" stroke-width="2.5" />
              <path d="M74,42 L82,42 M78,38 L78,46" stroke="#0a2c3a" stroke-width="2" />
              <!-- Play triangle button -->
              <circle cx="78" cy="58" r="7" stroke="#0a2c3a" stroke-width="2.5" />
              <polygon points="76,55 81,58 76,61" fill="#0a2c3a" />
            </svg>
            <div class="logo-text">
              <span class="logo-primary">KANA</span>
              <span class="logo-secondary">ENTERTAINMENT</span>
            </div>
          </a>
          <p class="footer-desc">KANA Entertainment delivers innovative entertainment solutions, amusement attractions, VR experiences, bowling systems, soft play equipment, and family entertainment products worldwide.</p>
          <div class="footer-socials">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" aria-label="YouTube">
              <svg viewBox="0 0 24 24"><path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.107C19.516 3.5 12 3.5 12 3.5s-7.516 0-9.388.556a3.003 3.003 0 00-2.11 2.107C0 8.028 0 12 0 12s0 3.972.502 5.837a3.003 3.003 0 002.11 2.107C4.484 20.5 12 20.5 12 20.5s7.516 0 9.388-.556a3.003 3.003 0 002.11-2.107C24 15.972 24 12 24 12s0-3.972-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-links-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/catalog">Catalog</a></li>
            <li><a href="/#who-we-are" class="scroll-anchor">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-links-column">
          <h4>Product Categories</h4>
          <ul>
            <li><a href="/products/vr-arcade">VR & Arcade</a></li>
            <li><a href="/products/bowling">Bowling</a></li>
            <li><a href="/products/soft-play">Soft Play</a></li>
            <li><a href="/products/inflatables">Inflatables</a></li>
            <li><a href="/products/water-theme">Water Attractions</a></li>
            <li><a href="/products/adventure">Adventure Attractions</a></li>
            <li><a href="/products/kid-rides">Kid Rides</a></li>
            <li><a href="/products/amusement-rides">Amusement Rides</a></li>
          </ul>
        </div>

        <div class="footer-contact-column">
          <h4>Contact Information</h4>
          <ul>
            <li>
              <strong>Nagpur Plant Base:</strong><br>
              Industrial Area Phase II, Nagpur, Maharashtra, India
            </li>
            <li>
              <strong>Sales Hotlines:</strong><br>
              <a href="tel:+919823012345">+91 98230 12345</a><br>
              <a href="tel:+917122555123">+91 712 2555123</a>
            </li>
            <li>
              <strong>Inquiries:</strong><br>
              <a href="mailto:contact@kanaentertainment.com">contact@kanaentertainment.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom text-center">
        <p>&copy; ${new Date().getFullYear()} KANA Entertainment. All Rights Reserved. Built with Premium Amusement Grade Quality.</p>
      </div>
    </footer>

    <!-- Global Quote Modal -->
    <div id="quote-modal" class="modal-overlay hidden">
      <div class="modal-box glassmorphism reveal-scale">
        <button class="modal-close" aria-label="Close Modal">&times;</button>
        <h3 class="modal-title glow-text">Request Quotation</h3>
        <p class="modal-subtitle">Submit details and receive detailed pricing proposals within 24 business hours.</p>
        
        <form id="modal-quote-form" class="modal-form">
          <input type="hidden" id="modal-quote-product" name="product" value="General Sourcing">
          
          <div class="form-group">
            <label for="modal-product-display">Interested Item</label>
            <input type="text" id="modal-product-display" readonly value="General Inquiry">
          </div>
          
          <div class="form-row">
            <div class="form-group">
              <label for="modal-name">Full Name <span class="required">*</span></label>
              <input type="text" id="modal-name" required placeholder="John Doe">
            </div>
            <div class="form-group">
              <label for="modal-company">Company Name <span class="required">*</span></label>
              <input type="text" id="modal-company" required placeholder="Amusement Hub Inc">
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="modal-email">Email Address <span class="required">*</span></label>
              <input type="email" id="modal-email" required placeholder="john@company.com">
            </div>
            <div class="form-group">
              <label for="modal-phone">Phone Number <span class="required">*</span></label>
              <input type="tel" id="modal-phone" required placeholder="+91 98230 12345">
            </div>
          </div>

          <div class="form-group">
            <label for="modal-location">Delivery Location <span class="required">*</span></label>
            <input type="text" id="modal-location" required placeholder="City, Country">
          </div>

          <div class="form-group">
            <label for="modal-notes">Message / Custom Requirements</label>
            <textarea id="modal-notes" rows="3" placeholder="Provide details about spatial size, preferred speed levels, color schemes, or destination freight port..."></textarea>
          </div>

          <button type="submit" class="btn btn-primary btn-glow btn-full-width">
            Submit Quote Request
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
          </button>
        </form>

        <div id="modal-success-state" class="modal-success-box hidden">
          <div class="success-icon">✓</div>
          <h3>Quotation Request Submitted</h3>
          <p>Thank you! Your quote request has been routed to our project estimator team. We will contact you at your provided email with technical layout brochures within 24 business hours.</p>
          <button class="btn btn-primary" id="modal-success-close-btn">Close Window</button>
        </div>
      </div>
    </div>

    <!-- Global Download Catalog Modal -->
    <div id="catalog-modal" class="modal-overlay hidden">
      <div class="modal-box glassmorphism reveal-scale">
        <button class="modal-close" aria-label="Close Modal">&times;</button>
        <h3 class="modal-title glow-text">Download Main Catalog</h3>
        <p class="modal-subtitle">Enter your business details to unlock instant access to KANA Entertainment's full detailed catalogs.</p>
        
        <form id="modal-catalog-form" class="modal-form">
          <div class="form-group">
            <label for="cat-name">Full Name <span class="required">*</span></label>
            <input type="text" id="cat-name" required placeholder="John Doe">
          </div>
          <div class="form-group">
            <label for="cat-email">Work Email <span class="required">*</span></label>
            <input type="email" id="cat-email" required placeholder="john@company.com">
          </div>
          <div class="form-group">
            <label for="cat-phone">Phone Number <span class="required">*</span></label>
            <input type="tel" id="cat-phone" required placeholder="+91 98230 12345">
          </div>
          
          <button type="submit" class="btn btn-primary btn-glow btn-full-width">
            Download PDF Brochure
            <svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
          </button>
        </form>

        <div id="catalog-success-state" class="modal-success-box hidden">
          <div class="success-icon">✓</div>
          <h3>Catalog Download Started</h3>
          <p>Thank you! Your high-res brochure download is beginning now. A backup link has been sent to your email.</p>
          <button class="btn btn-primary" id="catalog-success-close-btn">Close Window</button>
        </div>
      </div>
    </div>

    <!-- Global Quick Lookup Modal (Product Name Only) -->
    <div id="quick-lookup-modal" class="modal-overlay hidden">
      <div class="modal-box quick-lookup-modal-box reveal-scale">
        <button class="modal-close" id="quick-lookup-close" aria-label="Close Modal">&times;</button>
        <span class="quick-lookup-title-badge">Product Lookup Key</span>
        <h2 class="quick-lookup-product-name" id="quick-lookup-name">Product Name</h2>
        <div class="quick-lookup-divider"></div>
        <p class="quick-lookup-helptext">Use this product name to search technical spec sheets in our downloadable engineering catalogues.</p>
      </div>
    </div>
  `;

  // Setup mobile navigation drawer behavior
  const navToggleBtn = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggleBtn && navMenu) {
    navToggleBtn.addEventListener('click', () => {
      navToggleBtn.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile nav menu on page link click
    navMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navToggleBtn.classList.remove('active');
        navMenu.classList.remove('active');
      }
    });
  }

  // Setup Global Quote Modal toggles
  const quoteModal = document.getElementById('quote-modal');
  const quoteInput = document.getElementById('modal-quote-product');
  const quoteDisplay = document.getElementById('modal-product-display');
  const modalQuoteForm = document.getElementById('modal-quote-form');
  const modalSuccess = document.getElementById('modal-success-state');

  document.body.addEventListener('click', (e) => {
    const trigger = e.target.closest('.quote-trigger-btn');
    if (trigger) {
      e.preventDefault();
      const product = trigger.getAttribute('data-product') || 'General Inquiry';
      if (quoteInput && quoteDisplay) {
        quoteInput.value = product;
        quoteDisplay.value = product;
      }

      // Reset form states
      if (modalQuoteForm) {
        modalQuoteForm.reset();
        modalQuoteForm.classList.remove('hidden');
      }
      if (modalSuccess) modalSuccess.classList.add('hidden');

      if (quoteModal) {
        quoteModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
      }
    }
  });

  // Setup Global Catalog Modal toggles
  const catalogModal = document.getElementById('catalog-modal');
  const catalogForm = document.getElementById('modal-catalog-form');
  const catalogSuccess = document.getElementById('catalog-success-state');

  document.body.addEventListener('click', (e) => {
    const trigger = e.target.closest('.open-catalog-btn');
    if (trigger) {
      e.preventDefault();

      const catName = trigger.getAttribute('data-catalog');
      const titleEl = catalogModal.querySelector('.modal-title');
      if (titleEl && catName) {
        titleEl.innerText = `Download ${catName} Catalog`;
      } else if (titleEl) {
        titleEl.innerText = `Download Main Catalog`;
      }

      // Reset catalog form
      if (catalogForm) {
        catalogForm.reset();
        catalogForm.classList.remove('hidden');
      }
      if (catalogSuccess) catalogSuccess.classList.add('hidden');

      if (catalogModal) {
        catalogModal.classList.remove('hidden');
        document.body.classList.add('modal-open');
      }
    }
  });

  // Setup collage image product name quick lookup modal trigger
  document.body.addEventListener('click', (e) => {
    const trigger = e.target.closest('.collage-trigger-btn');
    if (trigger) {
      e.preventDefault();
      const prodName = trigger.getAttribute('data-name');
      const modal = document.getElementById('quick-lookup-modal');
      const nameEl = document.getElementById('quick-lookup-name');
      if (modal && nameEl && prodName) {
        nameEl.innerText = prodName;
        modal.classList.remove('hidden');
        document.body.classList.add('modal-open');
      }
    }
  });

  // Setup close events for all modals
  const closeModalEls = document.querySelectorAll('.modal-close, .modal-overlay, #modal-success-close-btn, #catalog-success-close-btn, #quick-lookup-close');
  closeModalEls.forEach(el => {
    el.addEventListener('click', (e) => {
      // Only close if clicking close btn, background overlay, or success close
      if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close') || e.target.id === 'modal-success-close-btn' || e.target.id === 'catalog-success-close-btn' || e.target.id === 'quick-lookup-close') {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(m => m.classList.add('hidden'));
        document.body.classList.remove('modal-open');
      }
    });
  });

  // Handle quote modal submission
  if (modalQuoteForm) {
    modalQuoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = modalQuoteForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `Sending... <span class="spinner"></span>`;

      // Simulate API call
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        modalQuoteForm.classList.add('hidden');
        if (modalSuccess) modalSuccess.classList.remove('hidden');
      }, 1200);
    });
  }

  // Handle catalog modal submission
  if (catalogForm) {
    catalogForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = catalogForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `Preparing Download... <span class="spinner"></span>`;

      // Simulate API call and trigger file download
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        catalogForm.classList.add('hidden');
        if (catalogSuccess) catalogSuccess.classList.remove('hidden');

        // Trigger virtual file download for mockup catalog
        const link = document.createElement('a');
        link.href = '#';
        link.setAttribute('download', 'KANA_Entertainment_Catalog_2026.pdf');
        document.body.appendChild(link);
        // We will just alert that it starts in production
        console.log("Mock PDF catalog downloaded successfully.");
        document.body.removeChild(link);
      }, 1500);
    });
  }
}

// Set up page specific listeners
window.addEventListener('page-rendered', (e) => {
  const { route, path } = e.detail;

  // Setup reveal on scroll animations using IntersectionObserver
  setupScrollReveal();

  if (route.name === 'home') {
    initHomeSlider();
  } else if (route.name === 'catalog') {
    initCatalogPdfViewer();
  } else if (route.name === 'product-detail') {
    initProductDetailInteractivity();
  } else if (route.name === 'contact') {
    initContactFormHandler();
  }
});

// Setup reveal-on-scroll trigger logic
function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal-on-scroll, .reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-scale-in');
  if (reveals.length === 0) return;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -50px 0px"
  });

  reveals.forEach(el => observer.observe(el));

  // Animated counters
  const counters = document.querySelectorAll('.counter-animated[data-target]');
  if (counters.length > 0) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => counterObserver.observe(el));
  }
}

function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const suffix = el.textContent.includes('+') ? '+' : (el.textContent.includes('%') ? '%' : '');
  const duration = 2000;
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
    const current = Math.round(start + (target - start) * eased);
    el.textContent = current.toLocaleString() + suffix;
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

// Setup Home Slider logic
let sliderTimer = null;
function initHomeSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.querySelector('.prev-slide');
  const nextBtn = document.querySelector('.next-slide');

  if (slides.length === 0) return;
  let activeIndex = 0;

  function showSlide(index) {
    // Clear auto timer
    if (sliderTimer) clearInterval(sliderTimer);

    // Bounds check
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;

    activeIndex = index;

    slides.forEach((slide, i) => {
      if (i === activeIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });

    dots.forEach((dot, i) => {
      if (i === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Restart automatic loop
    startAutoSlide();
  }

  function startAutoSlide() {
    sliderTimer = setInterval(() => {
      showSlide(activeIndex + 1);
    }, 6000);
  }

  // Bind dot triggers
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'));
      showSlide(idx);
    });
  });

  // Bind arrows
  if (prevBtn) {
    prevBtn.addEventListener('click', () => showSlide(activeIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => showSlide(activeIndex + 1));
  }

  // Start automatic rotation
  startAutoSlide();
}

// Setup Mock PDF Catalog Player controls and view management
function initCatalogPdfViewer() {
  const loadingEl = document.getElementById("pdf-viewer-loading");
  const frameEl = document.getElementById("pdf-viewer-frame");
  const sheetEl = document.getElementById("pdf-sheet-content");

  const prevBtn = document.getElementById("pdf-prev-btn");
  const nextBtn = document.getElementById("pdf-next-btn");
  const pageInd = document.getElementById("pdf-current-page");
  const zoomInBtn = document.getElementById("pdf-zoom-in");
  const zoomOutBtn = document.getElementById("pdf-zoom-out");
  const zoomLevelEl = document.querySelector(".pdf-zoom-level");

  if (!frameEl) return;

  // Simulate heavy document rendering latency
  setTimeout(() => {
    if (loadingEl && frameEl) {
      loadingEl.classList.add("hidden");
      frameEl.classList.remove("hidden");
    }
  }, 1100);

  let currentPage = 1;
  let currentZoom = 100;

  const catId = sheetEl ? sheetEl.getAttribute("data-category") : "vr-arcade";
  const categoryObj = { id: catId, name: catId.replace("-", " ") };
  const catProducts = products.filter(p => p.category === catId);

  function updatePage(pageIndex) {
    if (pageIndex < 1 || pageIndex > 3) return;
    currentPage = pageIndex;
    if (pageInd) pageInd.innerText = currentPage;

    if (sheetEl) {
      sheetEl.innerHTML = renderPdfPageContent(categoryObj, catProducts, currentPage);
    }

    if (prevBtn) prevBtn.disabled = (currentPage === 1);
    if (nextBtn) nextBtn.disabled = (currentPage === 3);
  }

  // Bind page traversal
  if (prevBtn) {
    prevBtn.disabled = true;
    prevBtn.addEventListener("click", () => updatePage(currentPage - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener("click", () => updatePage(currentPage + 1));
  }

  // Bind zoom multipliers
  if (zoomInBtn) {
    zoomInBtn.addEventListener("click", () => {
      if (currentZoom < 140) {
        currentZoom += 10;
        if (zoomLevelEl) zoomLevelEl.innerText = `${currentZoom}%`;
        if (sheetEl) {
          sheetEl.style.transform = `scale(${currentZoom / 100})`;
        }
      }
    });
  }
  if (zoomOutBtn) {
    zoomOutBtn.addEventListener("click", () => {
      if (currentZoom > 70) {
        currentZoom -= 10;
        if (zoomLevelEl) zoomLevelEl.innerText = `${currentZoom}%`;
        if (sheetEl) {
          sheetEl.style.transform = `scale(${currentZoom / 100})`;
        }
      }
    });
  }

  const selectEl = document.getElementById("catalog-select");
  if (selectEl) {
    selectEl.removeAttribute("onchange");
    selectEl.addEventListener("change", (e) => {
      navigateTo(`/catalog?category=${e.target.value}`);
    });
  }
}

// Setup Product details galleries and tabs switcher
function initProductDetailInteractivity() {
  const mainImage = document.getElementById('product-main-image');
  const thumbs = document.querySelectorAll('.gallery-thumbnail');
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  // Thumbnail triggers
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      const newSrc = thumb.getAttribute('data-src');
      if (mainImage && newSrc) {
        mainImage.src = newSrc;
      }
    });
  });

  // Tab switcher triggers
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const targetTabId = `tab-${btn.getAttribute('data-tab')}`;
      const targetContent = document.getElementById(targetTabId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// Contact form handler
function initContactFormHandler() {
  const contactForm = document.getElementById('contact-form');
  const successState = document.getElementById('contact-success-state');
  const resetBtn = document.getElementById('reset-contact-form-btn');

  if (contactForm && successState) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `Sending enquiry... <span class="spinner"></span>`;

      // Simulate API submit latency
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.classList.add('hidden');
        successState.classList.remove('hidden');
      }, 1200);
    });

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        contactForm.reset();
        contactForm.classList.remove('hidden');
        successState.classList.add('hidden');
      });
    }
  }
}

// Run application setup
initAppShell();
initRouter();
