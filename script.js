const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".primary-nav ul");

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navList.setAttribute("aria-expanded", String(!expanded));
  });
}

const detailsElements = document.querySelectorAll("details");
detailsElements.forEach((detail) => {
  detail.addEventListener("toggle", () => {
    if (detail.open) {
      detailsElements.forEach((other) => {
        if (other !== detail) {
          other.open = false;
        }
      });
    }
  });
});

