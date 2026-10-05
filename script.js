// ---------------------------------------------------------
// 0a. Scroll progress bar
// ---------------------------------------------------------
const progressBar = document.getElementById("scrollProgress");

const updateProgress = () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + "%";
};

window.addEventListener("scroll", updateProgress, { passive: true });
updateProgress();

// ---------------------------------------------------------
// 0b. Cursor-reactive glow in the hero (desktop only, respects
//     prefers-reduced-motion — purely decorative, never required
//     for usability)
// ---------------------------------------------------------
const heroGlow = document.getElementById("heroGlow");
const heroSection = document.getElementById("home");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (heroGlow && heroSection && !reduceMotion && window.matchMedia("(hover: hover)").matches) {
  heroSection.addEventListener("mousemove", (e) => {
    const rect = heroSection.getBoundingClientRect();
    heroGlow.style.left = (e.clientX - rect.left) + "px";
    heroGlow.style.top = (e.clientY - rect.top) + "px";
  });
}

// ---------------------------------------------------------
// 1. Highlight the current section in the nav as you scroll
// ---------------------------------------------------------
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const highlightNav = (id) => {
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.section === id);
  });
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) highlightNav(entry.target.id);
    });
  },
  { rootMargin: "-40% 0px -55% 0px" } // triggers when section is near vertical center
);

sections.forEach((section) => observer.observe(section));

// ---------------------------------------------------------
// 2. Expand / collapse project rows on click (or Enter/Space)
// ---------------------------------------------------------
const projectRows = document.querySelectorAll(".project-row");

projectRows.forEach((row) => {
  const toggle = () => {
    const isOpen = row.getAttribute("aria-expanded") === "true";
    row.setAttribute("aria-expanded", String(!isOpen));
  };

  row.addEventListener("click", toggle);

  row.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });
});
