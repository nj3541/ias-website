document.addEventListener("DOMContentLoaded", function () {
  // === Contact Form ===
  const form = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      formMessage.textContent = "✅ Thank you for contacting us!";
      form.reset();
    });
  }

  // === Signup Form ===
  const signupForm = document.getElementById("signupForm");
  const signupMessage = document.getElementById("signupMessage");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      signupMessage.textContent = "🎉 Thanks for joining IEEE IAS!";
      signupForm.reset();
    });
  }

  // === Animated Counters ===
  const counters = document.querySelectorAll(".counter");
  let countersAnimated = false;
  function animateCounter(counter) {
    const target = +counter.getAttribute("data-target");
    const increment = Math.ceil(target / 200);
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
  function handleScrollCounters() {
    const countersSection = document.querySelector(".counters");
    if (!countersSection) return;
    const rect = countersSection.getBoundingClientRect();
    if (!countersAnimated && rect.top < window.innerHeight) {
      counters.forEach(animateCounter);
      countersAnimated = true;
    }
  }
  window.addEventListener("scroll", handleScrollCounters);
  handleScrollCounters();

  // === Gallery Lightbox ===
  const galleryImgs = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-content");
  const lightboxCaption = document.querySelector(".lightbox-caption");
  const lightboxClose = document.querySelector(".lightbox-close");

  galleryImgs.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.classList.add("active");
      lightboxImg.src = img.src;
      lightboxCaption.textContent = img.alt;
    });
  });
  if (lightboxClose) {
    lightboxClose.addEventListener("click", () => {
      lightbox.classList.remove("active");
    });
  }

  // === Dark Mode Toggle ===
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      themeToggle.textContent = document.body.classList.contains("dark-mode")
        ? "☀️"
        : "🌙";
    });
  }
});
