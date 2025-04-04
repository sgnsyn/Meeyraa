const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const bName = document.querySelector(".hero-brand-desktop");
const mainSection = document.querySelector(".main-section");
const heroImg = document.getElementById("hero-img");
const heroDesc = document.querySelector(".hero-desc");
const mobBrand = document.querySelector(".hero-brand-mobile");
const loadScreen = document.getElementById("loading-container");
function openMobileMenu() {
  const menuContainer = document.querySelector(".menu-container");
  menuContainer?.classList.remove("deactive");
}
function closeMobileMenu() {
  const menuContainer = document.querySelector(".menu-container");
  menuContainer?.classList.add("deactive");
}

window.addEventListener("load", () => {
  bName.classList.add("active");
  heroImg.classList.add("active");
  heroDesc.classList.add("active");
  mobBrand.classList.add("active");
  setTimeout(() => {
    loadScreen.classList.add("deactive");
  }, 750);
});
window.addEventListener("resize", () => {
  mainSection.style.height = window.innerHeight;
});
mainSection.style.height = window.innerHeight;

openBtn?.addEventListener("click", openMobileMenu);
closeBtn?.addEventListener("click", closeMobileMenu);
