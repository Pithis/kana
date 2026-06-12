import { categories, products, getProductsByCategory, getProductById, getFeaturedProducts } from "./products.js";

// Helper to render rating stars
function renderStars(count = 5) {
  let stars = "";
  for (let i = 0; i < count; i++) {
    stars += `<svg class="star-icon" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`;
  }
  return stars;
}

// Renders the Home Page View
function renderHome() {
  const featured = getFeaturedProducts();
  
  // Create slides for Hero Section
  const slides = [
    {
      title: "VR Experience Arena",
      desc: "Step into the future of digital competition with multiplayer VR treadmills.",
      img: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1600&auto=format&fit=crop",
      btnText: "Explore VR Systems",
      btnLink: "/products/vr-arcade"
    },
    {
      title: "Professional Bowling Systems",
      desc: "World-class synthetic lanes, interactive projection, and robust mechanics.",
      img: "https://images.unsplash.com/photo-1538510126845-f483ff3021f7?q=80&w=1600&auto=format&fit=crop",
      btnText: "Browse Lanes",
      btnLink: "/products/bowling"
    },
    {
      title: "Soft Play Masterpieces",
      desc: "Multi-level obstacle mazes designed with absolute safety and sensory joy.",
      img: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1600&auto=format&fit=crop",
      btnText: "See Playgrounds",
      btnLink: "/products/soft-play"
    },
    {
      title: "Adventure Ropes & Climbing",
      desc: "Suspended obstacles and auto-belay vertical climbing walls for shopping malls.",
      img: "https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=1600&auto=format&fit=crop",
      btnText: "View Adventure Rides",
      btnLink: "/products/adventure"
    }
  ];

  // Generate HTML for slides
  const slidesHtml = slides.map((slide, index) => `
    <div class="hero-slide ${index === 0 ? 'active' : ''}" style="background-image: linear-gradient(90deg, rgba(250, 249, 246, 0.92) 0%, rgba(250, 249, 246, 0.7) 30%, rgba(250, 249, 246, 0.15) 55%, rgba(250, 249, 246, 0) 70%), url('${slide.img}')">
      <div class="container hero-content-wrapper">
        <div class="hero-content">
          <span class="badge">KANA ENTERTAINMENT</span>
          <h1 class="hero-heading animated-text">Creating <span class="serif-italic-accent text-orange">Extraordinary</span><br>Entertainment <span class="serif-italic-accent text-orange">Experiences</span></h1>
          <p class="hero-description">${slide.desc}</p>
          <div class="hero-actions">
            <a href="/products" class="btn btn-primary">
              Explore Products
              <svg viewBox="0 0 24 24" class="arrow-icon"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </a>
            <a href="/catalog" class="btn btn-secondary">
              Explore Catalogues
              <svg viewBox="0 0 24 24" class="arrow-icon"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // Top Products & New Attractions Grid
  const featuredHtml = featured.map(prod => `
    <div class="product-card reveal-on-scroll">
      <div class="product-card-badge">Top Attraction</div>
      <div class="product-card-image-wrap">
        <img class="product-card-image" src="${prod.image}" alt="${prod.name}" style="view-transition-name: product-img-${prod.id}">
      </div>
      <div class="product-card-body">
        <span class="product-card-category">${prod.categoryName}</span>
        <h3 class="product-card-title">${prod.name}</h3>
        <p class="product-card-desc">${prod.description.substring(0, 85)}...</p>
        <div class="product-card-footer">
          <span class="product-card-price">${prod.price}</span>
          <a href="/products/${prod.category}/${prod.id}" class="btn btn-sm btn-outline">Details</a>
        </div>
        <button class="btn btn-primary btn-full-width quote-trigger-btn" data-product="${prod.name}" style="margin-top: 15px;">
          Request Quote
        </button>
      </div>
    </div>
  `).join("");

  // Project Gallery 20 Items Collage
  const worksImages = [
    { title: "FEC Trampoline Installation", url: "https://images.unsplash.com/photo-1519766304817-4f37bda74a27?q=80&w=600&auto=format&fit=crop", spanClass: "span-2-2" },
    { title: "Boutique 8-Lane Bowling Center", url: "https://images.unsplash.com/photo-1538510126845-f483ff3021f7?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Multi-level Indoor Soft Play Zone", url: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Shopping Mall Rope Adventure", url: "https://images.unsplash.com/photo-1470246973918-29a93221c455?q=80&w=600&auto=format&fit=crop", spanClass: "span-1-2" },
    { title: "Futuristic VR Arcade Hub", url: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=600&auto=format&fit=crop", spanClass: "span-2-1" },
    { title: "Resort Splash Water Slider", url: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Theme Park Swing Carousel", url: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop", spanClass: "span-2-2" },
    { title: "Bumper Cars Arena", url: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Carousel Golden Lights", url: "https://images.unsplash.com/photo-1560930961-b179268f6862?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Inflatable Mega Castle", url: "https://images.unsplash.com/photo-1561571994-3c61c554181a?q=80&w=600&auto=format&fit=crop", spanClass: "span-1-2" },
    { title: "VR Combat Platform", url: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=600&auto=format&fit=crop", spanClass: "span-2-1" },
    { title: "Racer Cockpit Simulator", url: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Duckpin Bowling Setup", url: "https://images.unsplash.com/photo-1544124499-58912cbddade?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Toddler Castle Soft Blocks", url: "https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=600&auto=format&fit=crop", spanClass: "span-2-2" },
    { title: "Ninja Warrior Jump Nets", url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Vertical Ledge Climber", url: "https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Interactive Sensory Fountain", url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=600&auto=format&fit=crop", spanClass: "span-2-1" },
    { title: "Dinosaur Slide Inflatable", url: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "Kids Safari Jeep Track", url: "https://images.unsplash.com/photo-1576085898312-911163fd41d2?q=80&w=600&auto=format&fit=crop", spanClass: "" },
    { title: "AR Climbing Wall Guide", url: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop", spanClass: "" }
  ];

  const galleryHtml = worksImages.map(item => `
    <div class="our-works-item ${item.spanClass} reveal-on-scroll">
      <img src="${item.url}" alt="${item.title}" class="gallery-image">
    </div>
  `).join("");

  return `
    <!-- Hero Slider -->
    <section class="hero-slider-section">
      <div class="hero-slides-container">
        ${slidesHtml}
      </div>
      <div class="slider-controls">
        <button class="slider-arrow prev-slide">
          <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>
        <div class="slider-dots">
          ${slides.map((_, i) => `<span class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`).join("")}
        </div>
        <button class="slider-arrow next-slide">
          <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
        </button>
      </div>
    </section>

    <!-- Who We Are & Customer Statistics -->
    <section id="who-we-are" class="section who-we-are-section">
      <div class="container">
        <div class="about-intro-grid">
          <div>
            <span class="section-subtitle">Attraction Solutions Architect</span>
            <h2 class="section-title">Who <span class="serif-italic-accent text-orange">We</span> Are</h2>
            <div class="divider align-left"></div>
            <p class="about-p" style="font-size: 1.15rem; line-height: 1.7; margin-top: 25px; color: var(--text-secondary);">
              KANA Entertainment supplies, sources, designs, and delivers high-performance entertainment products and turn-key attractions for global developers. We are the engineering backbone behind elite FEC setups, resorts, theme parks, and corporate play zones.
            </p>
            <p class="about-p" style="font-size: 1.05rem; line-height: 1.65; margin-top: 15px; color: var(--text-secondary);">
              From initial 3D spacing layouts to local regulatory compliance, customs logistics, and direct structural engineering support, we provide developers with end-to-end investment peace of mind.
            </p>
          </div>
          <div class="about-stats-panel">
            <div class="stat-pill reveal-on-scroll stagger-1">
              <h3 style="font-size: 2.8rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 5px;" class="counter-animated" data-target="2500">2,500+</h3>
              <p style="font-size: 0.75rem; letter-spacing: 0.1em; font-weight: 600; color: var(--text-secondary);">Trusted Customers</p>
            </div>
            <div class="stat-pill reveal-on-scroll stagger-2">
              <h3 style="font-size: 2.8rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 5px;" class="counter-animated" data-target="100">100+</h3>
              <p style="font-size: 0.75rem; letter-spacing: 0.1em; font-weight: 600; color: var(--text-secondary);">FEC Installations</p>
            </div>
            <div class="stat-pill reveal-on-scroll stagger-3">
              <h3 style="font-size: 2.8rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 5px;" class="counter-animated" data-target="10">10</h3>
              <p style="font-size: 0.75rem; letter-spacing: 0.1em; font-weight: 600; color: var(--text-secondary);">Attraction Divisions</p>
            </div>
            <div class="stat-pill reveal-on-scroll stagger-4">
              <h3 style="font-size: 2.8rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 5px;" class="counter-animated" data-target="100">100%</h3>
              <p style="font-size: 0.75rem; letter-spacing: 0.1em; font-weight: 600; color: var(--text-secondary);">Safety Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose KANA Section -->
    <section class="section why-choose-section section-dark">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">Global Solutions Partner</span>
          <h2 class="section-title">Why Choose <span class="serif-italic-accent text-gold">KANA</span> Entertainment</h2>
          <div class="divider"></div>
          <p class="section-desc">We deliver end-to-end entertainment solutions with unmatched quality, global sourcing, and dedicated engineering support.</p>
        </div>
        <div class="features-grid">
          <div class="feature-card reveal-on-scroll stagger-1">
            <div class="feature-icon-wrapper">
              <svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
            </div>
            <h3 class="feature-title">Certified Quality Assurance</h3>
            <p class="feature-desc">Every product undergoes rigorous quality checks. We are fully compliant with ASTM F2970, CE, EN1176, and USBC international safety standards.</p>
          </div>
          <div class="feature-card reveal-on-scroll stagger-2">
            <div class="feature-icon-wrapper">
              <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
            <h3 class="feature-title">Global Sourcing Network</h3>
            <p class="feature-desc">Direct manufacturing partnerships across China, Hong Kong, Europe, and North America ensure competitive pricing and reliable delivery timelines.</p>
          </div>
          <div class="feature-card reveal-on-scroll stagger-3">
            <div class="feature-icon-wrapper">
              <svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/></svg>
            </div>
            <h3 class="feature-title">Dedicated Project Managers</h3>
            <p class="feature-desc">Each project is assigned a dedicated solution architect who manages everything from CAD layouts to logistics and installation scheduling.</p>
          </div>
          <div class="feature-card reveal-on-scroll stagger-4">
            <div class="feature-icon-wrapper">
              <svg viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.3C.5 6.7.9 9.8 2.9 11.8c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.5z"/></svg>
            </div>
            <h3 class="feature-title">On-Site Installation</h3>
            <p class="feature-desc">Our certified engineering crews deploy globally for structural assembly, electronic calibration, safety testing, and staff training at your venue.</p>
          </div>
          <div class="feature-card reveal-on-scroll stagger-5">
            <div class="feature-icon-wrapper">
              <svg viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
            </div>
            <h3 class="feature-title">Turnkey Consultation</h3>
            <p class="feature-desc">Feasibility studies, 3D spatial rendering, revenue optimization per square meter, and local regulatory compliance handled entirely in-house.</p>
          </div>
          <div class="feature-card reveal-on-scroll stagger-6">
            <div class="feature-icon-wrapper">
              <svg viewBox="0 0 24 24"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
            </div>
            <h3 class="feature-title">Lifetime After-Sales</h3>
            <p class="feature-desc">Spare parts supply chain, preventive maintenance schedules, and remote technical diagnostics ensure zero downtime for your attractions.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Section -->
    <section class="section featured-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">Specially Selected</span>
          <h2 class="section-title">Top Products & <span class="serif-italic-accent text-orange">New</span> Attractions</h2>
          <div class="divider"></div>
        </div>
        <div class="products-grid">
          ${featuredHtml}
        </div>
      </div>
    </section>

    <!-- Our Works Section (20 Pics Collage) -->
    <section class="section our-works-section section-dark">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">Realised Environments</span>
          <h2 class="section-title">Our <span class="serif-italic-accent text-gold">Works</span></h2>
          <div class="divider"></div>
          <p class="section-desc">Explore KANA Entertainment\'s global portfolio of completed amusement zones, bowling clubs, and VR parks.</p>
        </div>
        <div class="our-works-collage-grid">
          ${galleryHtml}
        </div>
      </div>
    </section>
  `;
}

// Renders the main Products Page
function renderProducts() {
  const cards = categories.map(cat => `
    <div class="category-grid-card reveal-on-scroll">
      <div class="category-grid-image" style="background-image: url('${cat.image}')"></div>
      <div class="category-grid-body">
        <h3 class="category-grid-title">${cat.name}</h3>
        <p class="category-grid-desc">${cat.description}</p>
        <div class="category-grid-footer">
          <span class="category-grid-count">${cat.count} Systems Available</span>
          <a href="/products/${cat.id}" class="btn btn-primary">Explore Products</a>
        </div>
      </div>
    </div>
  `).join("");

  return `
    <section class="page-hero" style="background-image: linear-gradient(rgba(245, 245, 247, 0.35), rgba(245, 245, 247, 0.9)), url('https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop')">
      <div class="container">
        <h1 class="page-hero-title animated-text">Product Categories</h1>
        <p class="page-hero-desc">Explore KANA Entertainment's robust collections of certified amusement hardware, play zones, and simulators.</p>
      </div>
    </section>
    
    <section class="section">
      <div class="container">
        <div class="category-grid-layout">
          ${cards}
        </div>
      </div>
    </section>
  `;
}

// Dictionary of details for each category
const categoryDetails = {
  "vr-arcade": {
    general: "Virtual Reality and arcade systems represent the cutting edge of digital amusement. These installations feature motion platforms, haptic feedback, and immersive headsets that transport players into fully interactive virtual worlds.",
    history: "Arcades began in the 1970s with simple mechanical and pixel-art cabinets. The 2010s saw a revolution with the introduction of commercial-grade VR, transitioning arcades from single-screen players to full-scale multiplayer virtual reality arenas.",
    fun: "Extremely high. The thrill of physical motion combined with 360-degree visuals creates a suspension of disbelief that home gaming cannot replicate. From competitive shooter tournaments to immersive roller coasters, these rides are high-earning anchor attractions.",
    bestSellers: ["vr-omni-arena", "neon-cyber-racer"]
  },
  "bowling": {
    general: "Professional bowling lane installations designed for Family Entertainment Centers, hotels, and luxury lounges. Utilizing synthetic oil-resistant lanes, automated stringless pinsetters, and interactive lane projection overlays.",
    history: "Bowling dates back thousands of years but was modernized in the 19th century. Today, mechanical advancements have eliminated high-maintenance pin cables, replacing them with computer-controlled stringless pinsetters and reactive lane animations.",
    fun: "Perfect for group social dynamics. It brings families, friends, and corporate groups together. The interactive mapping tracks balls and triggers custom animations (fireworks, water ripples) on the lanes, elevating the excitement.",
    bestSellers: ["pro-lane-bowling", "duckpin-mini-bowling"]
  },
  "soft-play": {
    general: "Sensory-rich, multi-level soft play structures designed to keep young children active and safe. Featuring slides, ball fountains, suspension bridges, and crawling tunnels constructed from high-density foam and anti-bacterial PU wraps.",
    history: "Soft play emerged in the late 1980s as safety standards pushed away from hard outdoor metal structures. Padded indoor playground structures became key crowd pullers for shopping malls, prioritizing child safety and parent comfort.",
    fun: "Highly interactive for kids aged 2–12. It provides endless exploration, builds motor skills, and keeps kids engaged for hours in a safe, soft-cushioned castle maze.",
    bestSellers: ["jungle-safari-soft-play", "sensory-toddler-castle"]
  },
  "trampoline-parks": {
    general: "Modular, high-performance trampoline arenas, dodgeball courts, slam-dunk zones, and foam landing pits. Engineered using heavy structural steel columns and double-tapered piano wire springs.",
    history: "Originally built for gymnast training and military pilot coordination, trampolines became massive commercial parks in the early 2000s, leading to strict ASTM standards for safety padding and containment netting.",
    fun: "Exhilarating physical thrill. Bouncing off angled wall beds and launching into massive soft foam pits or airbags provides a gravity-defying workout and high-octane fun.",
    bestSellers: ["extreme-jump-arena"]
  },
  "inflatables": {
    general: "Commercial-grade bouncing castles, slides, and obstacles built from double-stitched Plato PVC Tarpaulin. Configured for quick setup with continuous high-volume air blowers.",
    history: "Invented by mechanical engineer John Scurlock in 1959, inflatables evolved from simple air mattresses into massive modular obstacle courses and multi-tiered theme structures with safety netting.",
    fun: "Energetic, fast-paced jumping and racing. Running head-to-head through climbing tunnels and slide exits is a favorite for kids' parties and events.",
    bestSellers: ["colossal-obstacle-course", "mega-bounce-kingdom"]
  },
  "water-theme": {
    general: "Precision-molded fiberglass water slides, splash pads, lazy rivers, and wave generators built to marine-grade anti-corrosive standards for resorts and water parks.",
    history: "Water slides evolved from wooden slides in the early 1900s to computer-modeled fiberglass tubes in the 1980s that optimize water lubrication, speed, and safety G-forces.",
    fun: "Refreshing, high-speed thrills. Standing under a tipping bucket or riding down twisty flumes provides instant relief and sensory thrills for guests of all ages.",
    bestSellers: ["aqua-splash-zone"]
  },
  "adventure": {
    general: "Suspended ropes courses, zip lines, and vertical auto-belayed climbing walls. Constructed using structural carbon steel columns and continuous-connection safety tracks.",
    history: "Derived from military obstacle courses, adventure attractions entered commercial malls and hotels with the introduction of magnetic auto-belay braking and continuous safety tracking.",
    fun: "Thrilling and empowering. Navigating narrow rope obstacles high above the ground or climbing rock panels tests a player's resolve, leaving them with an adrenaline rush of success.",
    bestSellers: ["sky-ropes-course", "vertical-ledge-wall"]
  },
  "interactive": {
    general: "Gamified floor and wall projection systems that track player movements using high-intensity laser scanners and infrared camera sensors.",
    history: "Emerging in the 2010s alongside advanced short-throw projectors and computer vision, interactive systems turned standard drywall or floors into responsive digital touchscreens.",
    fun: "High engagement. Combines physical exercise (throwing balls, stomping on projections) with video game progression and scoreboards, creating a highly interactive playground.",
    bestSellers: ["wall-projection-game"]
  },
  "kid-rides": {
    general: "Charming mechanical kid rides, track trains, and mini carousels. Outfitted with hand-painted fiberglass horses, warm light LEDs, and soft-start gearboxes.",
    history: "Mechanical coin-operated rides have been a staple since the late 19th century. Today's updates replace heavy cast iron with lightweight fiberglass and programmable music cards.",
    fun: "Gentle, magical, and comforting. The rhythmic bobbing of horses, carousel tunes, and soft lights create a wonderland experience for toddlers and younger children.",
    bestSellers: ["vintage-carousel-mini"]
  },
  "amusement-rides": {
    general: "Family mechanical thrill rides, spinning platforms, and drop towers designed with advanced PLC diagnostics and industrial hydraulics.",
    history: "Born in Victorian pleasure gardens, mechanical rides evolved into high-end attractions governed by strict global safety checks, combining hydraulic lifters and spinning platforms.",
    fun: "Exhilarating physical G-forces. Rapid spinning, elevation drops, and tilts make these rides the visual centerpieces of gaming zones and malls.",
    bestSellers: ["spinning-ufo-ride"]
  }
};

// Renders category pages with custom animation triggers
function renderCategory(categorySlug) {
  const category = categories.find(c => c.id === categorySlug);
  if (!category) return render404();

  const details = categoryDetails[categorySlug] || {
    general: `Complete attraction suites for ${category.name}. Designed to commercial standards.`,
    history: `Attractions of the ${category.name} class have historically driven crowd engagement and repeat business.`,
    fun: `High crowd appeal, bringing immersive play and active participant experiences.`,
    bestSellers: []
  };

  const catProducts = products.filter(p => p.category === categorySlug);
  
  const spanClasses = [
    "span-2-2",
    "",
    "",
    "span-1-2",
    "span-2-1",
    "",
    "",
    "",
    "span-2-1",
    ""
  ];

  const collageHtml = catProducts.map((prod, index) => {
    const sClass = spanClasses[index] || "";
    return `
      <div class="category-collage-item ${sClass} collage-trigger-btn" data-name="${prod.name}">
        <img src="${prod.image}" alt="${prod.name}">
      </div>
    `;
  }).join("");

  return `
    <section class="category-editorial-section">
      <div class="container">
        <!-- Editorial Header -->
        <div class="category-editorial-header text-center">
          <span class="category-editorial-subtitle">${category.name} Division</span>
          <h1 class="category-editorial-title glow-text animated-text">${category.name}</h1>
          <div class="divider"></div>
        </div>

        <!-- Editorial Content (Unboxed) -->
        <div class="category-info-editorial" style="margin-top: 50px; margin-bottom: 70px; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
          <div class="editorial-info-card">
            <h3>General Sourcing Information</h3>
            <p>${details.general}</p>
          </div>
          
          <div class="editorial-info-card">
            <h3>History & Evolution</h3>
            <p>${details.history}</p>
          </div>
          
          <div class="editorial-info-card">
            <h3>The Fun Factor</h3>
            <p>${details.fun}</p>
          </div>
        </div>

        <!-- Attraction Portfolio Mosaic Collage -->
        <div class="section-header text-center" style="margin-top: 80px;">
          <span class="section-subtitle">System Showcase</span>
          <h2 class="section-title">Attraction Portfolio</h2>
          <div class="divider"></div>
          <p class="section-desc">Click on any system image to display its unique search reference code for engineering catalogs.</p>
        </div>

        <div class="category-collage-grid">
          ${collageHtml}
        </div>

        <!-- Explore Product Catalogue Button Section -->
        <div class="category-explore-catalogue-box text-center" style="margin-top: 80px;">
          <h3>Explore Technical Details & Spec Sheets</h3>
          <p>Looking for floor loading weights, sizing layouts, power phases, and exact safety approvals? View our full PDF catalog for this attraction class.</p>
          <a href="/catalog?category=${category.id}" class="btn btn-primary btn-lg" style="margin-top: 25px;">
            Explore Product Catalogue
            <svg viewBox="0 0 24 24" style="width: 20px; height: 20px;"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
          </a>
        </div>

      </div>
    </section>
  `;
}

// Renders the Product Detail Page
function renderProductDetail(categorySlug, productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return render404();

  // Generate thumbnail elements for the gallery
  const thumbHtml = product.images.map((img, i) => `
    <div class="gallery-thumbnail ${i === 0 ? 'active' : ''}" data-src="${img}">
      <img src="${img}" alt="Thumbnail ${i+1}">
    </div>
  `).join("");

  // Key Features items
  const featuresHtml = product.features.map(feat => `
    <li>
      <svg class="check-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      <span>${feat}</span>
    </li>
  `).join("");

  // Technical Specs rows
  const specRows = Object.entries(product.specifications).map(([key, val]) => `
    <tr class="spec-row">
      <td class="spec-key">${key}</td>
      <td class="spec-value">${val}</td>
    </tr>
  `).join("");

  // Safety Guidelines list
  const safetyHtml = product.safety.map(safe => `
    <li>
      <svg class="warning-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
      <span>${safe}</span>
    </li>
  `).join("");

  // Variants tags
  const variantsHtml = product.variants.map(v => `
    <span class="variant-tag">${v}</span>
  `).join("");

  return `
    <section class="product-detail-breadcrumbs section-dark">
      <div class="container">
        <div class="breadcrumbs">
          <a href="/">Home</a> / 
          <a href="/products">Products</a> / 
          <a href="/products/${product.category}">${product.categoryName}</a> / 
          <span class="current">${product.name}</span>
        </div>
      </div>
    </section>

    <section class="section product-details-section">
      <div class="container">
        <div class="product-details-grid">
          
          <!-- Product Visuals (Left) -->
          <div class="product-visuals-panel">
            <div class="product-main-image-frame">
              <img id="product-main-image" src="${product.image}" alt="${product.name}" style="view-transition-name: product-img-${product.id}">
            </div>
            <div class="product-thumbnails-grid">
              ${thumbHtml}
            </div>
          </div>

          <!-- Product Info (Right) -->
          <div class="product-info-panel">
            <span class="product-category-tag">${product.categoryName}</span>
            <h1 class="product-detail-title">${product.name}</h1>
            <div class="product-rating-box">
              <div class="stars-wrap">${renderStars(5)}</div>
              <span class="rating-text">Verified Entertainment Grade</span>
            </div>
            
            <div class="product-detail-price-box">
              <span class="price-label">Pricing Estimate</span>
              <h2 class="price-value">${product.price}</h2>
              <p class="price-note">All quotes are customized based on site layout, customization, and freight/logistics.</p>
            </div>

            <div class="product-detail-description">
              <h3>Overview</h3>
              <p>${product.description}</p>
            </div>

            <div class="product-action-cards">
              <button class="btn btn-primary btn-glow quote-trigger-btn" data-product="${product.name}">
                Request Quotation
                <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>
              </button>
              <a href="/catalog?category=${product.category}" class="btn btn-secondary">
                Explore Product Catalogue
                <svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
              </a>
            </div>
          </div>

        </div>

        <div class="product-specs-tabs-wrap">
          <div class="tabs-header">
            <button class="tab-btn active" data-tab="specs">Technical Specs</button>
            <button class="tab-btn" data-tab="features">Highlights & Variants</button>
            <button class="tab-btn" data-tab="safety">Safety & Dimensions</button>
          </div>
          
          <div class="tab-content active" id="tab-specs">
            <div class="table-responsive">
              <table class="specs-table">
                <tbody>
                  ${specRows}
                </tbody>
              </table>
            </div>
          </div>

          <div class="tab-content" id="tab-features">
            <div class="features-variants-grid">
              <div>
                <h3>Key System Highlights</h3>
                <ul class="highlights-list">
                  ${featuresHtml}
                </ul>
              </div>
              <div>
                <h3>Available Configurations</h3>
                <div class="variants-container">
                  ${variantsHtml}
                </div>
                <p style="margin-top: 15px; font-size: 0.9rem; opacity: 0.8;">Custom branding and theme decors can be engineered on demand to align with your venue style guide.</p>
              </div>
            </div>
          </div>

          <div class="tab-content" id="tab-safety">
            <div class="safety-dimensions-grid">
              <div class="dimension-card">
                <h3>Physical Specifications</h3>
                <div class="spec-detail-pill">
                  <strong>Dimensions:</strong> ${product.dimensions}
                </div>
                <div class="spec-detail-pill">
                  <strong>Operating Capacity:</strong> ${product.capacity}
                </div>
              </div>
              <div>
                <h3>Safety Mechanisms & Guidelines</h3>
                <ul class="safety-list">
                  ${safetyHtml}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}// Helper to render pages inside the PDF Mock Player
export function renderPdfPageContent(category, catProducts, pageIndex) {
  if (pageIndex === 1) {
    // Page 1: Elegant cover page
    return `
      <div class="pdf-cover-page">
        <div class="pdf-grid-bg"></div>
        <div class="pdf-cover-header">
          <div class="pdf-logo-box">K</div>
          <div class="pdf-logo-text">KANA ENTERTAINMENT</div>
        </div>
        
        <div class="pdf-cover-main">
          <span class="pdf-cover-subtitle">DIVISION OF ATTRACTION SYSTEMS</span>
          <h2 class="pdf-cover-title">${category.name.toUpperCase()}</h2>
          <div class="pdf-cover-divider"></div>
          <p class="pdf-cover-desc">Complete engineering specifications, mechanical tolerances, spatial footprints, and installation safety guides for FEC and resort developments.</p>
        </div>
        
        <div class="pdf-cover-footer">
          <div class="pdf-footer-item">
            <strong>DOCUMENT ID:</strong>
            <span>KE-BRO-${category.id.toUpperCase()}-2026</span>
          </div>
          <div class="pdf-footer-item">
            <strong>REVISION:</strong>
            <span>v4.8 (June 2026)</span>
          </div>
          <div class="pdf-footer-item">
            <strong>SECURITY:</strong>
            <span>Commercial Confidential</span>
          </div>
        </div>
      </div>
    `;
  } else if (pageIndex === 2) {
    // Page 2: Product Sourcing & Specifications Grid
    const prodItemsHtml = catProducts.map(prod => `
      <div class="pdf-spec-item">
        <div class="pdf-spec-item-header">
          <h4>${prod.name}</h4>
          <span class="pdf-spec-cat-tag">System Spec</span>
        </div>
        <div class="pdf-spec-grid">
          <div class="pdf-spec-image-col">
            <img src="${prod.image}" alt="${prod.name}" class="pdf-spec-img">
          </div>
          <div class="pdf-spec-details-col">
            <p class="pdf-spec-desc">${prod.description}</p>
            <table class="pdf-specs-table">
              <tr><td><strong>Footprint:</strong></td><td>${prod.dimensions}</td></tr>
              <tr><td><strong>Capacity:</strong></td><td>${prod.capacity}</td></tr>
              <tr><td><strong>Power Draw:</strong></td><td>${prod.specifications["Power Requirements"] || prod.specifications["Power"] || "220V AC / 10A"}</td></tr>
            </table>
          </div>
        </div>
      </div>
    `).join("");

    return `
      <div class="pdf-spec-page">
        <div class="pdf-page-header">
          <span class="pdf-page-chapter">01 // PRODUCT RANGE</span>
          <span class="pdf-page-title">${category.name} Catalog</span>
        </div>
        
        <div class="pdf-spec-content">
          ${prodItemsHtml || `
            <div class="no-products-catalog">
              <p>Engineering datasheets are currently being generated for this category's catalog division. Please contact Corporate Sales for immediate CAD requests.</p>
            </div>
          `}
        </div>
        
        <div class="pdf-page-footer">
          <span>KANA Entertainment Brochure &copy; 2026</span>
          <span>Page 2 of 3</span>
        </div>
      </div>
    `;
  } else {
    // Page 3: General Infrastructure & Site Engineering Guidelines
    return `
      <div class="pdf-engineering-page">
        <div class="pdf-page-header">
          <span class="pdf-page-chapter">02 // SITE ENGINEERING</span>
          <span class="pdf-page-title">Technical Integration Guide</span>
        </div>
        
        <div class="pdf-engineering-content">
          <h3>Venue Infrastructure Requirements</h3>
          <p class="pdf-engineering-intro">Installing ${category.name} systems requires pre-coordinated structural, electrical, and routing layouts. Local contractors must ensure the following baseline conditions are met prior to KANA technician arrival.</p>
          
          <div class="pdf-engineering-box">
            <h4>1. Floor Load & Sub-structure</h4>
            <ul>
              <li><strong>Bowling Lanes:</strong> Flat concrete slab with +/- 2.0mm thickness tolerance across length.</li>
              <li><strong>Rides & Trampolines:</strong> Minimum floor shear stress capacity of 450 kg/sqm.</li>
              <li><strong>Soft Play:</strong> Flat floor base with zero anchor points exposed.</li>
            </ul>
          </div>
          
          <div class="pdf-engineering-box">
            <h4>2. Electrical & Power Phases</h4>
            <ul>
              <li>Dedicated distribution board with surge protection dampers.</li>
              <li>Power requirements: Three-Phase 380V (mechanical rides) or Single-Phase 220V (VR / soft play).</li>
              <li>Grounding impedance limit of &lt; 4.0 Ohms.</li>
            </ul>
          </div>
          
          <div class="pdf-engineering-box">
            <h4>3. Global Safety & Compliance</h4>
            <p>All supplied components are fully certified. Certificates are shipped directly with cargo sets:</p>
            <div class="pdf-stamps-row">
              <span class="pdf-stamp">ASTM F2970</span>
              <span class="pdf-stamp">EN 1176</span>
              <span class="pdf-stamp">CE CERTIFIED</span>
              <span class="pdf-stamp">USBC APPROVED</span>
            </div>
          </div>
        </div>
        
        <div class="pdf-page-footer">
          <span>KANA Entertainment Brochure &copy; 2026</span>
          <span>Page 3 of 3</span>
        </div>
      </div>
    `;
  }
}

// Renders the interactive Product Catalog Page
function renderCatalog() {
  const params = new URLSearchParams(window.location.search);
  const categorySlug = params.get("category");

  if (!categorySlug) {
    // Render catalog directory hub listing all 10 divisions
    const rowsHtml = categories.map(cat => `
      <div class="catalog-dir-row">
        <div class="catalog-dir-icon-wrap">
          <svg viewBox="0 0 24 24" style="width: 24px; height: 24px;"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
        </div>
        <div class="catalog-dir-info">
          <h3>${cat.name} Division</h3>
          <p>Complete mechanical dimensions, electrical drawings, and floor loads.</p>
        </div>
        <div class="catalog-dir-meta">
          <strong>File Size:</strong> ~4.8 MB<br>
          <strong>Pages:</strong> 3 Pages (PDF Spec Sheet)
        </div>
        <div class="catalog-dir-actions">
          <a href="/catalog?category=${cat.id}" class="btn btn-secondary btn-sm">View Online Spec</a>
          <button class="btn btn-primary btn-sm open-catalog-btn" data-catalog="${cat.name}">Quick Download</button>
        </div>
      </div>
    `).join("");

    return `
      <section class="catalog-page-section">
        <div class="container">
          <div class="catalog-header-bar" style="margin-bottom: 50px;">
            <div class="catalog-title-block">
              <span class="catalog-badge">KANA DOCUMENT HUB</span>
              <h1 class="catalog-main-title">Engineering Product Catalogs</h1>
              <p class="catalog-subtitle" style="margin-top: 10px; color: var(--text-secondary);">Browse technical drawing specifications, power ratings, and installation dimensions across our 10 divisions.</p>
            </div>
          </div>
          
          <div class="catalog-directory-grid">
            ${rowsHtml}
          </div>
        </div>
      </section>
    `;
  }

  const category = categories.find(c => c.id === categorySlug) || categories[0];
  
  // Fetch products under this category
  const catProducts = products.filter(p => p.category === category.id);
  
  // Render dropdown category list
  const categoryDropdownOptions = categories.map(c => `
    <option value="${c.id}" ${c.id === category.id ? "selected" : ""}>${c.name}</option>
  `).join("");
  
  return `
    <section class="catalog-page-section">
      <div class="container">
        <!-- Catalog Sub-Header & Selector -->
        <div class="catalog-header-bar">
          <div class="catalog-title-block">
            <span class="catalog-badge">KANA DOCUMENT HUB</span>
            <h1 class="catalog-main-title">Engineering Product Catalogs</h1>
          </div>
          <div class="catalog-selector-block">
            <label for="catalog-select">Select Division:</label>
            <select id="catalog-select" class="catalog-select-dropdown" onchange="window.location.href='/catalog?category=' + this.value">
              ${categoryDropdownOptions}
            </select>
          </div>
        </div>

        <!-- Local PDF Loader Animation Block (Category specific) -->
        <div id="pdf-viewer-loading" class="pdf-viewer-loading-container">
          <div class="pdf-loading-spinner-wrapper">
            <div class="pdf-loading-animation">
              <!-- Inline loading wave/dots -->
              <div class="bounce-dot dot-1"></div>
              <div class="bounce-dot dot-2"></div>
              <div class="bounce-dot dot-3"></div>
            </div>
            <h3 class="pdf-loading-status">Compiling Technical Brochure for ${category.name}...</h3>
            <p class="pdf-loading-subtext">Initializing drawing tables & structural loads</p>
          </div>
        </div>

        <!-- High Fidelity Mock PDF Player Frame -->
        <div id="pdf-viewer-frame" class="pdf-viewer-frame hidden">
          <!-- PDF Viewer Top Toolbar -->
          <div class="pdf-toolbar">
            <div class="pdf-toolbar-left">
              <svg class="pdf-icon-file" viewBox="0 0 24 24" style="color: #d93838;"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>
              <span class="pdf-filename" id="pdf-title-text">KANA_Brochure_${category.id.replace("-", "_")}_2026.pdf</span>
            </div>
            
            <div class="pdf-toolbar-center">
              <button class="pdf-nav-btn" id="pdf-prev-btn" title="Previous Page">
                <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
              </button>
              <span class="pdf-page-indicator">Page <span id="pdf-current-page">1</span> of 3</span>
              <button class="pdf-nav-btn" id="pdf-next-btn" title="Next Page">
                <svg viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
              </button>
            </div>
            
            <div class="pdf-toolbar-right">
              <button class="pdf-zoom-btn" id="pdf-zoom-out" title="Zoom Out">
                <svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>
              </button>
              <span class="pdf-zoom-level">100%</span>
              <button class="pdf-zoom-btn" id="pdf-zoom-in" title="Zoom In">
                <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              </button>
              <div class="pdf-divider">|</div>
              <!-- Download Option Button -->
              <button class="btn btn-primary btn-sm open-catalog-btn" style="padding: 8px 16px; font-size: 0.8rem; border-radius: 4px;">
                <svg viewBox="0 0 24 24" style="width: 14px; height: 14px;"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                Download Brochure
              </button>
            </div>
          </div>

          <!-- Document Stage -->
          <div class="pdf-document-scroll">
            <div class="pdf-page-sheet" id="pdf-sheet-content" data-category="${category.id}">
              <!-- Rendered dynamically by page index -->
              ${renderPdfPageContent(category, catProducts, 1)}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Renders the About Us Page
function renderAbout() {
  return `
    <section class="page-hero" style="background-image: linear-gradient(rgba(245, 245, 247, 0.35), rgba(245, 245, 247, 0.9)), url('https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=1600&auto=format&fit=crop')">
      <div class="container">
        <span class="page-hero-subtitle">Engineering Entertainment. Delivering Experiences.</span>
        <h1 class="page-hero-title animated-text">About KANA Entertainment</h1>
      </div>
    </section>

    <!-- Company Profile -->
    <section class="section">
      <div class="container">
        <div class="about-intro-grid">
          <div>
            <h2 class="section-title">Who We Are</h2>
            <div class="divider align-left"></div>
            <p class="about-p">KANA Entertainment is a premium supplier and turnkey solutions provider of advanced amusement attractions, family entertainment center equipment, and dynamic interactive games.</p>
            <p class="about-p">We serve an extensive network of shopping malls, theme parks, water parks, luxury resorts, and high-end gaming zones globally. We source only certified, top-performance hardware and support our clients from physical architectural layout designs to long-term post-installation diagnostics.</p>
          </div>
          <div class="about-stats-panel">
            <div class="stat-pill">
              <h3>100+</h3>
              <p>FEC Installations</p>
            </div>
            <div class="stat-pill">
              <h3>10</h3>
              <p>Attraction Classes</p>
            </div>
            <div class="stat-pill">
              <h3>4</h3>
              <p>Global Base Nodes</p>
            </div>
            <div class="stat-pill">
              <h3>100%</h3>
              <p>Safety Audits Passed</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision / Mission -->
    <section class="section section-dark">
      <div class="container">
        <div class="vision-mission-grid">
          <div class="vision-card reveal-on-scroll">
            <h3 class="vision-title">Our Vision</h3>
            <p>To lead the entertainment supply industry by pioneering immersive, tactile, and highly memorable experiences that draw families together and turn local zones into high-traffic landmarks.</p>
          </div>
          <div class="vision-card reveal-on-scroll">
            <h3 class="vision-title">Our Mission</h3>
            <p>To supply premium, safe, and commercially viable attraction hardware to developers while offering seamless end-to-end design, installation, and engineering support.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Services -->
    <section class="section">
      <div class="container">
        <div class="section-header text-center">
          <h2 class="section-title">Turnkey Service Offerings</h2>
          <div class="divider"></div>
        </div>
        <div class="services-list-grid">
          <div class="service-list-card reveal-on-scroll">
            <h4>Product Sourcing & Supply</h4>
            <p>Direct supply contracts with top industrial manufacturers ensuring pricing efficiency, customized decals, and original spare-parts.</p>
          </div>
          <div class="service-list-card reveal-on-scroll">
            <h4>Project Planning & Layout</h4>
            <p>Our architects create functional flow mockups and detailed 3D CAD renders of play zones, lanes, and mechanical layouts.</p>
          </div>
          <div class="service-list-card reveal-on-scroll">
            <h4>Safety & QA Certification</h4>
            <p>Every system undergoes double-stress structural evaluations and safety system diagnostics to meet ASTM/CE codes.</p>
          </div>
          <div class="service-list-card reveal-on-scroll">
            <h4>On-Site Installation Support</h4>
            <p>We deploy senior engineering crews globally to run steel structural assembly, electronic leveling, and testing.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Offices -->
    <section class="section section-dark">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-subtitle">Logistical Strength</span>
          <h2 class="section-title">Our Global Presence</h2>
          <div class="divider"></div>
        </div>
        <div class="offices-grid">
          <div class="office-card reveal-on-scroll stagger-1">
            <div class="office-icon">
              <svg viewBox="0 0 24 24" style="width:32px;height:32px;fill:var(--accent-gold)"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
            </div>
            <h3>Nagpur Office & Plant</h3>
            <p class="office-location">Industrial Area Phase II, Nagpur, Maharashtra, India</p>
            <span class="office-badge">Manufacturing & Sourcing Hub</span>
          </div>
          <div class="office-card reveal-on-scroll stagger-2">
            <div class="office-icon">
              <svg viewBox="0 0 24 24" style="width:32px;height:32px;fill:var(--accent-gold)"><path d="M15 11V5l-3-3-3 3v2H3v14h18V11h-6zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm6 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>
            </div>
            <h3>Delhi Corporate Office</h3>
            <p class="office-location">Connaught Place, New Delhi, India</p>
            <span class="office-badge">Executive Sales & Custom Sourcing</span>
          </div>
          <div class="office-card reveal-on-scroll stagger-3">
            <div class="office-icon">
              <svg viewBox="0 0 24 24" style="width:32px;height:32px;fill:var(--accent-gold)"><path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/></svg>
            </div>
            <h3>Mumbai Export Center</h3>
            <p class="office-location">JNPT Logistics Park, Navi Mumbai, India</p>
            <span class="office-badge">Global Logistics Node</span>
          </div>
          <div class="office-card reveal-on-scroll stagger-4">
            <div class="office-icon">
              <svg viewBox="0 0 24 24" style="width:32px;height:32px;fill:var(--accent-gold)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            </div>
            <h3>China & Hong Kong Operations</h3>
            <p class="office-location">Kowloon, Hong Kong / Shenzhen Industrial Hub, China</p>
            <span class="office-badge">Supply Integration Node</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Renders the Contact Page View
function renderContact() {
  const cats = categories.map(c => `
    <option value="${c.id}">${c.name}</option>
  `).join("");

  return `
    <section class="page-hero" style="background-image: linear-gradient(90deg, var(--bg-deep) 0%, rgba(250, 249, 246, 0.96) 35%, rgba(250, 249, 246, 0.2) 75%, rgba(250, 249, 246, 0) 100%), url('https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1600&auto=format&fit=crop')">
      <div class="container">
        <span class="page-hero-subtitle">Let's Build Your Next Entertainment Destination</span>
        <h1 class="page-hero-title animated-text">Contact <span class="serif-italic-accent text-gold">KANA</span></h1>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-layout-grid">
          
          <!-- Contact Form (Left) -->
          <div class="contact-form-wrapper">
            <h2 class="contact-form-title">Send a <span class="serif-italic-accent text-orange">Direct</span> Inquiry</h2>
            <p class="contact-form-subtitle">Fill out the details below and our solution architects will draft a response within 24 business hours.</p>
            
            <form id="contact-form" class="kana-inquiry-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="contact-name">Full Name <span class="required">*</span></label>
                  <input type="text" id="contact-name" name="name" required placeholder="John Doe">
                </div>
                <div class="form-group">
                  <label for="contact-company">Company Name <span class="required">*</span></label>
                  <input type="text" id="contact-company" name="company" required placeholder="Entertainment Zone LLC">
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="contact-email">Email Address <span class="required">*</span></label>
                  <input type="email" id="contact-email" name="email" required placeholder="john@company.com">
                </div>
                <div class="form-group">
                  <label for="contact-phone">Phone Number <span class="required">*</span></label>
                  <input type="tel" id="contact-phone" name="phone" required placeholder="+91 98230 12345">
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="contact-location">Project Location <span class="required">*</span></label>
                  <input type="text" id="contact-location" name="location" required placeholder="City, Country">
                </div>
                <div class="form-group">
                  <label for="contact-category">Interested Category <span class="required">*</span></label>
                  <select id="contact-category" name="category" required>
                    <option value="" disabled selected>Select an attraction category</option>
                    ${cats}
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-enquiry-type">Enquiry Type <span class="required">*</span></label>
                <select id="contact-enquiry-type" name="enquiryType" required>
                  <option value="" disabled selected>Select enquiry focus</option>
                  <option value="Product Sourcing">Product Sourcing / Purchase</option>
                  <option value="New Project">New Entertainment Center Setup</option>
                  <option value="Installation">Shopping Mall Zone Placement</option>
                  <option value="Resort Setup">Hotel/Resort Play Zone Setup</option>
                  <option value="Mechanical Rides">Theme Park Mechanical Rides</option>
                  <option value="Consultation">Technical/Site Layout Sizing</option>
                  <option value="Partnership">Distribution / Agency Partnership</option>
                </select>
              </div>

              <div class="form-group">
                <label for="contact-message">Message Details <span class="required">*</span></label>
                <textarea id="contact-message" name="message" rows="5" required placeholder="Provide brief details about your venue size, target launch dates, or specific models you need quotes for..."></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-glow btn-full-width" style="margin-top: 10px;">
                Submit Inquiry
                <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </button>
            </form>

            <div id="contact-success-state" class="contact-success-card hidden">
              <div class="success-icon">✓</div>
              <h3>Thank you for contacting KANA Entertainment.</h3>
              <p>Our solutions team has received your details. A project specialist will reply with catalogs and layout questionnaire guides within 24 business hours.</p>
              <button class="btn btn-primary" id="reset-contact-form-btn">Submit Another Inquiry</button>
            </div>
          </div>

          <!-- Contact Details (Right Column - Sidebar style, unboxed, SVG-realized) -->
          <div class="contact-details-sidebar">
            <div class="contact-sidebar-block">
              <h3 class="contact-sidebar-title">Global <span class="serif-italic-accent text-gold">Bases</span></h3>
              <div class="address-grid-list">
                
                <div class="address-card-inline">
                  <div class="address-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div class="address-content-cell">
                    <h4>Nagpur Plant Base</h4>
                    <p>Industrial Area Phase II, Nagpur, Maharashtra, India</p>
                  </div>
                </div>

                <div class="address-card-inline">
                  <div class="address-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div class="address-content-cell">
                    <h4>Delhi Corporate Base</h4>
                    <p>Connaught Place, New Delhi, India</p>
                  </div>
                </div>

                <div class="address-card-inline">
                  <div class="address-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div class="address-content-cell">
                    <h4>Mumbai Export Base</h4>
                    <p>JNPT Logistics Park, Navi Mumbai, India</p>
                  </div>
                </div>

                <div class="address-card-inline">
                  <div class="address-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                  </div>
                  <div class="address-content-cell">
                    <h4>China / HK Sourcing Base</h4>
                    <p>Kowloon, Hong Kong / Shenzhen Industrial Hub, China</p>
                  </div>
                </div>

              </div>
            </div>

            <div class="contact-sidebar-block">
              <h3 class="contact-sidebar-title">Corporate <span class="serif-italic-accent text-orange">Identity</span></h3>
              <div class="corporate-info-list">
                
                <div class="corporate-info-item">
                  <div class="info-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <div class="info-content-cell">
                    <strong>Primary Sourcing Hub</strong>
                    <span><a href="mailto:contact@kanaentertainment.com">contact@kanaentertainment.com</a></span>
                  </div>
                </div>

                <div class="corporate-info-item">
                  <div class="info-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  </div>
                  <div class="info-content-cell">
                    <strong>Corporate Sales</strong>
                    <span><a href="mailto:sales@kanaentertainment.com">sales@kanaentertainment.com</a></span>
                  </div>
                </div>

                <div class="corporate-info-item">
                  <div class="info-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <div class="info-content-cell">
                    <strong>Nagpur Plant Line</strong>
                    <span><a href="tel:+917122555123">+91 712 2555123</a></span>
                  </div>
                </div>

                <div class="corporate-info-item">
                  <div class="info-icon-cell">
                    <svg viewBox="0 0 24 24" class="contact-svg-icon"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                  </div>
                  <div class="info-content-cell">
                    <strong>Hotline & WhatsApp</strong>
                    <span><a href="tel:+919823012345">+91 98230 12345</a></span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}

// 404 Error page template
function render404() {
  return `
    <section class="section text-center" style="padding: 100px 20px;">
      <div class="container">
        <h1 class="glow-text" style="font-size: 6rem; margin-bottom: 20px;">404</h1>
        <h2>Page Not Found</h2>
        <p style="margin-bottom: 30px;">The amusement attraction path you are trying to visit does not exist.</p>
        <a href="/" class="btn btn-primary">Return Home</a>
      </div>
    </section>
  `;
}

// Core routing display mapper
export function renderView(route) {
  switch (route.name) {
    case "home":
      return renderHome();
    case "products":
      return renderProducts();
    case "category":
      return renderCategory(route.category);
    case "product-detail":
      return renderProductDetail(route.category, route.productId);
    case "catalog":
      return renderCatalog();
    case "about":
      return renderAbout();
    case "contact":
      return renderContact();
    default:
      return render404();
  }
}
