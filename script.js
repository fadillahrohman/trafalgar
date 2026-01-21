// header
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("header");
  navbar.classList.toggle("border-bottom", window.scrollY > 0);
  navbar.classList.toggle("shadow-sm", window.scrollY > 0);
});
