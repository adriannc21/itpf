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
  const links = document.querySelectorAll(".redirs a");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Quitar "active" de todos
      links.forEach((l) => l.classList.remove("active"));

      // Agregar "active" al clicado
      this.classList.add("active");

      // Obtener el destino desde el href
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
