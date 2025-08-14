// Simple contact form handler (no backend, just a demo)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      formMessage.textContent = "Thank you for contacting us! (Demo only)";
      form.reset();
    });
  }
});
