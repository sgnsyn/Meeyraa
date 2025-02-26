const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const bName = document.querySelector(".hero-brand-desktop");

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
openBtn?.addEventListener("click", openMobileMenu);
closeBtn?.addEventListener("click", closeMobileMenu);
