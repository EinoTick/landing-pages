import "./styles/main.css";
import { initScrollReveal, initHeroParallax, initNavbar, initCounters } from "./js/animations.js";
import { initComparison } from "./js/comparison.js";
import { createIcons, Leaf, ShieldCheck, Recycle, ArrowRight, Sparkles, Cloud, Sun, Heart, Menu, X, Instagram, ArrowUpRight } from "lucide";

document.addEventListener("DOMContentLoaded", () => {
  initComparison();

  createIcons({
    icons: { Leaf, ShieldCheck, Recycle, ArrowRight, Sparkles, Cloud, Sun, Heart, Menu, X, Instagram, ArrowUpRight },
  });

  initScrollReveal();
  initHeroParallax();
  initNavbar();
  initCounters();
  initMobileMenu();
  initNewsletterForm();
});

function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const openIcon = document.getElementById("menu-open");
  const closeIcon = document.getElementById("menu-close");
  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    openIcon?.classList.toggle("hidden");
    closeIcon?.classList.toggle("hidden");
    btn.setAttribute("aria-expanded", String(!isOpen));
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      openIcon?.classList.remove("hidden");
      closeIcon?.classList.add("hidden");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

function initNewsletterForm() {
  const form = document.getElementById("newsletter-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector("input[type='email']");
    const msg = document.getElementById("newsletter-msg");
    if (input?.value) {
      input.value = "";
      if (msg) {
        msg.textContent = "Welcome to the transition.";
        msg.classList.remove("opacity-0");
        setTimeout(() => msg.classList.add("opacity-0"), 3000);
      }
    }
  });
}
