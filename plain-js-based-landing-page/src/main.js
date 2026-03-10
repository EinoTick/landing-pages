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
  testFunction();
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

const cartItems = [
  { name: "Smartphone", category: "electronics", price: 800 },
  { name: "T-shirt", category: "clothing", price: 25 },
  { name: "Laptop", category: "electronics", price: 1200 },
  { name: "Coffee Maker", category: "home", price: 100 },
  { name: "Bluetooth Speaker", category: "electronics", price: 150 },
  { name: "Jeans", category: "clothing", price: 60 }
];


const testFunction = () => {
  console.log('testFunction');
  console.log(discountedShoppingSpeed(cartItems))
}




const discountedShoppingSpeed = (arr) => {
  return arr.filter((item) => item.category === 'electronics')
    .map((item) => item.price * 0.9)
    .reduce((val, acc) => {
      return acc  + val;
    }, 0)
}