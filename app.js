const menuIcon = document.getElementById("menuIcon");
if (menuIcon) {
  menuIcon.addEventListener("click", () => {
    document.getElementById("header").classList.add("show");
  });
}
const closeIcon = document.getElementById("closeIcon");
if (closeIcon) {
  closeIcon.addEventListener("click", () => {
    document.getElementById("header").classList.remove("show");
  });
}