```javascript
// Portfolio Website JavaScript

console.log("Portfolio website loaded successfully!");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(
      this.getAttribute("href")
    );

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Navbar shadow on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.boxShadow =
      "0 4px 20px rgba(0,0,0,0.25)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Reveal cards on scroll
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2
  }
);

cards.forEach(card => {
  observer.observe(card);
});

// Copy email to clipboard
const emailLink = document.getElementById("email-link");

if (emailLink) {
  emailLink.addEventListener("click", function (e) {
    e.preventDefault();

    const email = "mondezynnofranz@gmail.com";
    const originalText = this.textContent;

    navigator.clipboard.writeText(email).then(() => {
      this.textContent = "✅ Email Copied!";
      this.classList.add("copied");

      setTimeout(() => {
        this.textContent = originalText;
        this.classList.remove("copied");
      }, 2000);
    });
  });
}
```
