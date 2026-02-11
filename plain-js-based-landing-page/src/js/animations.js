/**
 * Scroll-reveal animations via IntersectionObserver.
 */
export function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * Smooth parallax on the hero image.
 */
export function initHeroParallax() {
  const hero = document.querySelector("[data-parallax]");
  if (!hero) return;

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          hero.style.transform = `translateY(${scrolled * 0.3}px)`;
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

/**
 * Navbar opacity on scroll.
 */
export function initNavbar() {
  const nav = document.getElementById("navbar");
  if (!nav) return;

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (window.scrollY > 60) {
            nav.classList.add("bg-paper/95", "backdrop-blur-md", "shadow-sm");
          } else {
            nav.classList.remove("bg-paper/95", "backdrop-blur-md", "shadow-sm");
          }
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
}

/**
 * Counter animation for statistics.
 */
export function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || "";
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(target * eased).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}
