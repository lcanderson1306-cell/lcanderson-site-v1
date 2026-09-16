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
