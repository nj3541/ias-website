document.addEventListener("DOMContentLoaded", function () {
  // Contact form
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      formMessage.textContent = "✅ Thank you for contacting us! (Demo only)";
      form.reset();
    });
  }

  // Newsletter form
  const newsletterForm = document.getElementById("newsletterForm");
  const newsletterMessage = document.getElementById("newsletterMessage");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      newsletterMessage.textContent = "📩 Thank you for subscribing! (Demo only)";
      newsletterForm.reset();
    });
  }

  // Signup form
  const signupForm = document.getElementById("signupForm");
  const signupMessage = document.getElementById("signupMessage");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      signupMessage.textContent = "🎉 Thank you for signing up! (Demo only)";
      signupForm.reset();
    });
  }

  // Smooth scroll
  document.querySelectorAll('nav a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Counter animation
  function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const speed = 200;
    const increment = Math.ceil(target / speed);
    let count = 0;
    function update() {
      count += increment;
      if (count < target) {
        counter.textContent = count;
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
      }
    }
    update();
  }
  const counters = document.querySelectorAll(".counter");
  let countersAnimated = false;
  function handleScrollCounters() {
    const countersSection = document.querySelector(".counters");
    if (!countersSection) return;
    const rect = countersSection.getBoundingClientRect();
    if (!countersAnimated && rect.top < window.innerHeight && rect.bottom > 0) {
      counters.forEach(animateCounter);
      countersAnimated = true;
    }
  }
  window.addEventListener("scroll", handleScrollCounters);
  handleScrollCounters();

  // Dark mode toggle
  const toggle = document.getElementById("darkModeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });
  }
});
