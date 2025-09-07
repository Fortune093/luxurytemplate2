// ===== Smooth Scroll Reveal Animation =====
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((sec) => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < triggerBottom) {
      sec.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===== Hero Text Fade-In =====
window.addEventListener("load", () => {
  const heroContent = document.querySelector(".hero-content");
  heroContent.style.opacity = "1";
  heroContent.style.transform = "translateY(0)";
});

// ===== Responsive Menu (Mobile) =====
const createMobileMenu = () => {
  const nav = document.createElement("nav");
  nav.classList.add("mobile-nav");

  nav.innerHTML = `
    <div class="nav-toggle">☰</div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#showcase">Work</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  `;

  document.body.prepend(nav);

  const toggle = nav.querySelector(".nav-toggle");
  const links = nav.querySelector(".nav-links");

  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });
};
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
createMobileMenu();

