const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const bName = document.querySelector(".hero-brand-desktop");
const mainSection = document.querySelector(".main-section");

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
});
window.addEventListener("resize", () => {
  mainSection.style.height = window.innerHeight;
});
mainSection.style.height = window.innerHeight;

openBtn?.addEventListener("click", openMobileMenu);
closeBtn?.addEventListener("click", closeMobileMenu);
