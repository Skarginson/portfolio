document.addEventListener('DOMContentLoaded', (event) => {
  const currentLocation = window.location.pathname;
  const navLinks = document.querySelectorAll('nav ul li a');

  navLinks.forEach((link) => {
    if (link.href.includes(currentLocation)) {
      link.classList.add('active');
    }
  });
});

const container = document.getElementById('hover');
const image = document.getElementById('hover-image');

container.addEventListener('mouseenter', () => {
  console.log('hovered');
  image.style.display = 'block';
});

container.addEventListener('mouseleave', () => {
  console.log('left');
  image.style.display = 'none';
});
