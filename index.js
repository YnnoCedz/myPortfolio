// Portfolio Website JavaScript

console.log("Portfolio website loaded successfully!");

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetSelector = this.getAttribute("href");

    if (!targetSelector || targetSelector === "#") {
      return;
    }

    e.preventDefault();

    const target = document.querySelector(targetSelector);

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
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.25)";
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
const emailStatus = document.getElementById("email-status");

if (emailLink) {
  const showEmailStatus = message => {
    if (!emailStatus) {
      return;
    }

    emailStatus.textContent = message;

    clearTimeout(showEmailStatus.timeoutId);
    showEmailStatus.timeoutId = setTimeout(() => {
      emailStatus.textContent = "";
    }, 2500);
  };

  const copyEmail = async email => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(email);
      return;
    }

    const tempInput = document.createElement("input");
    tempInput.value = email;
    tempInput.setAttribute("readonly", "");
    tempInput.style.position = "absolute";
    tempInput.style.left = "-9999px";

    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  };

  emailLink.addEventListener("click", async function (e) {
    e.preventDefault();

    const email = this.dataset.email;
    const originalText = this.textContent;

    try {
      await copyEmail(email);
      this.textContent = "Email Copied!";
      this.classList.add("copied");
      showEmailStatus("Email address copied to clipboard.");

      setTimeout(() => {
        this.textContent = originalText;
        this.classList.remove("copied");
      }, 2000);
    } catch (error) {
      showEmailStatus("Could not copy email automatically.");
      console.error("Failed to copy email:", error);
    }
  });
}
