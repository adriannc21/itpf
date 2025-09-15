window.addEventListener("scroll", function () {
  // --- Header efecto ---
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".redirs a, a.contact, a.btn.coti");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      links.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      const targetId = this.getAttribute("href").substring(1); // quita el "#"
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
