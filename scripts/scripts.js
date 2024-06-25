document.addEventListener("DOMContentLoaded", (event) => {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    if (link.href.includes(currentLocation)) {
      link.classList.add("active");
    }
  });
});
