import { getRoute } from "./router-utils.js";
import { renderView } from "./templates.js";

// Returns blueprint animation HTML for the fullscreen page wipes
function getTransitionAnimationHtml(catId) {
  if (catId === "bowling") {
    return `
      <div class="wipe-anim-bowling">
        <div class="bowling-track">
          <div class="bowling-ball-wipe"></div>
          <div class="bowling-pins-wipe">
            <div class="pin-wipe"></div>
            <div class="pin-wipe"></div>
            <div class="pin-wipe"></div>
          </div>
        </div>
      </div>
    `;
  } else if (catId === "vr-arcade") {
    return `
      <div class="wipe-anim-optics">
        <div class="optics-ring ring-1"></div>
        <div class="optics-ring ring-2"></div>
        <div class="optics-ring ring-3"></div>
      </div>
    `;
  } else if (catId === "soft-play") {
    return `
      <div class="wipe-anim-blocks">
        <div class="block-shape block-1"></div>
        <div class="block-shape block-2"></div>
        <div class="block-shape block-3"></div>
      </div>
    `;
  } else if (catId === "trampoline-parks") {
    return `
      <div class="wipe-anim-trampoline">
        <div class="tramp-bed"></div>
        <div class="tramp-node"></div>
      </div>
    `;
  } else if (catId === "inflatables") {
    return `
      <div class="wipe-anim-inflatable">
        <div class="bubble-wipe"></div>
      </div>
    `;
  } else if (catId === "water-theme") {
    return `
      <div class="wipe-anim-water">
        <div class="wave-wipe-1"></div>
        <div class="wave-wipe-2"></div>
      </div>
    `;
  } else if (catId === "adventure") {
    return `
      <div class="wipe-anim-adventure">
        <div class="bridge-rope"></div>
        <div class="climber-dot"></div>
      </div>
    `;
  } else if (catId === "interactive") {
    return `
      <div class="wipe-anim-interactive">
        <div class="sonar-ring ring-a"></div>
        <div class="sonar-ring ring-b"></div>
      </div>
    `;
  } else if (catId === "kid-rides") {
    return `
      <div class="wipe-anim-carousel">
        <div class="carousel-rod"><svg viewBox="0 0 24 24" style="width:40px;height:40px;fill:var(--accent-gold)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/><path d="M12 6l-4 4h3v4h2v-4h3z"/></svg></div>
      </div>
    `;
  } else if (catId === "amusement-rides") {
    return `
      <div class="wipe-anim-rides">
        <div class="wheel-rim"></div>
      </div>
    `;
  }
  // General loader fallback
  return `<div class="wipe-anim-general"><div class="general-spinner"></div></div>`;
}

function showTransitionWipe(route, updateDOMCallback) {
  let overlay = document.getElementById("wipe-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "wipe-overlay";
    overlay.className = "wipe-overlay hidden";
    overlay.innerHTML = `
      <div class="wipe-content">
        <div class="wipe-animation-placeholder"></div>
        <h3 class="wipe-title">KANA ENTERTAINMENT</h3>
        <p class="wipe-subtitle">Loading...</p>
        <div class="wipe-progress-bar"><div class="wipe-progress-fill"></div></div>
      </div>
    `;
    document.body.appendChild(overlay);
  }

  const animPlaceholder = overlay.querySelector(".wipe-animation-placeholder");
  const wipeTitle = overlay.querySelector(".wipe-title");
  const wipeSubtitle = overlay.querySelector(".wipe-subtitle");
  
  let catId = "general";
  let title = "KANA ENTERTAINMENT";
  let subtitle = "Initializing Attraction Environment...";

  if (route.name === "category") {
    catId = route.category;
    title = `${catId.toUpperCase().replace("-", " ")}`;
    subtitle = "Rendering Category Portfolio...";
  } else if (route.name === "catalog") {
    // Check search params
    const params = new URLSearchParams(window.location.search);
    catId = params.get("category") || "general";
    title = `CATALOGUE // ${catId.toUpperCase().replace("-", " ")}`;
    subtitle = "Loading Digital Product Brochure...";
  }

  if (animPlaceholder) animPlaceholder.innerHTML = getTransitionAnimationHtml(catId);
  if (wipeTitle) wipeTitle.innerText = title;
  if (wipeSubtitle) wipeSubtitle.innerText = subtitle;

  // Reset progress bar animation
  const fill = overlay.querySelector(".wipe-progress-fill");
  if (fill) {
    fill.style.width = "0%";
    // Trigger layout reflow
    void fill.offsetWidth;
    fill.style.width = "100%";
  }

  // Open overlay
  overlay.classList.remove("hidden");
  overlay.classList.add("active");
  document.body.classList.add("modal-open");

  // Perform DOM switch halfway through (800ms)
  setTimeout(() => {
    updateDOMCallback();
  }, 900);

  // Close overlay after animations finish (1.8s)
  setTimeout(() => {
    overlay.classList.remove("active");
    document.body.classList.remove("modal-open");
    setTimeout(() => {
      overlay.classList.add("hidden");
      if (animPlaceholder) animPlaceholder.innerHTML = ""; // clean DOM
    }, 500); // match transition duration
  }, 2000);
}

export async function navigateTo(path, addToHistory = true) {
  const route = getRoute(path);
  
  const updateDOM = () => {
    const appEl = document.getElementById("main-content");
    if (appEl) {
      appEl.innerHTML = renderView(route);
      window.dispatchEvent(new CustomEvent("page-rendered", { detail: { route, path } }));
    }
    updateActiveNavLinks(path);
    window.scrollTo(0, 0);
  };

  if (addToHistory) {
    window.history.pushState({ path }, "", path);
  }

  // Trigger fullscreen wipe transition for category and catalog views
  if (route.name === "category" || route.name === "catalog") {
    showTransitionWipe(route, updateDOM);
  } else {
    // Normal cross-fade transition using View Transitions API where available
    if (document.startViewTransition) {
      document.documentElement.setAttribute("data-transition-type", "crossfade");
      const transition = document.startViewTransition(() => {
        updateDOM();
      });
      try {
        await transition.finished;
      } catch (e) {
        console.warn("Transition interrupted", e);
      } finally {
        document.documentElement.removeAttribute("data-transition-type");
      }
    } else {
      updateDOM();
    }
  }
}

function updateActiveNavLinks(path) {
  const links = document.querySelectorAll("header nav a");
  const cleanPath = path.replace(/\/$/, "");

  links.forEach(link => {
    const href = link.getAttribute("href");
    if (href === "/" && (cleanPath === "" || cleanPath === "/index.html")) {
      link.classList.add("active");
    } else if (href !== "/" && cleanPath.startsWith(href)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

export function initRouter() {
  document.body.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) {
      const href = link.getAttribute("href");
      // Handle anchor scroll links like /#who-we-are
      if (href && href.startsWith("/#")) {
        e.preventDefault();
        const anchorId = href.substring(2);
        const currentPath = window.location.pathname.replace(/\/+$/, '');
        if (currentPath === '' || currentPath === '/' || currentPath === '/index.html') {
          // Already on home, just scroll
          const target = document.getElementById(anchorId);
          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          // Navigate to home first, then scroll after render
          navigateTo('/').then(() => {
            setTimeout(() => {
              const target = document.getElementById(anchorId);
              if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
          });
        }
      } else if (href && href.startsWith("/") && !href.startsWith("//")) {
        e.preventDefault();
        navigateTo(href);
      }
    }
  });

  window.addEventListener("popstate", (e) => {
    const path = window.location.pathname + window.location.search;
    navigateTo(path, false);
  });

  navigateTo(window.location.pathname + window.location.search, false);
}
