// ============================================
// FORM VALIDATION & SUBMISSION
// ============================================

const form = document.getElementById("contactForm");

if(form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const message = document.getElementById("contactMessage").value.trim();
    
    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";
    
    let isValid = true;
    
    // Validate name
    if(!name) {
      document.getElementById("nameError").textContent = "Please enter your name";
      isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email) {
      document.getElementById("emailError").textContent = "Please enter your email";
      isValid = false;
    } else if(!emailRegex.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email";
      isValid = false;
    }
    
    // Validate message
    if(!message) {
      document.getElementById("messageError").textContent = "Please enter your message";
      isValid = false;
    } else if(message.length < 10) {
      document.getElementById("messageError").textContent = "Message must be at least 10 characters";
      isValid = false;
    }
    
    if(isValid) {
      alert("✅ Message Sent Successfully! I'll get back to you soon.");
      form.reset();
    }
  });
}

// ============================================
// SMOOTH SCROLL FOR NAVIGATION LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const href = this.getAttribute("href");
    
    // Skip scroll for empty hash
    if(href === "#") return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if(target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// ============================================
// MOBILE MENU TOGGLE
// ============================================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", !isExpanded);
    navLinks.classList.toggle("active");
  });
  
  // Close menu when a link is clicked
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
  
  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if(!e.target.closest("nav")) {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ============================================
// "VIEW PROJECTS" BUTTON SCROLL
// ============================================

const scrollProjectsBtn = document.getElementById("scrollProjects");
if(scrollProjectsBtn) {
  scrollProjectsBtn.addEventListener("click", () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  });
}

// ============================================
// LAZY LOAD IMAGES (PERFORMANCE)
// ============================================
// Native loading="lazy" is used in the HTML.
// IntersectionObserver code was removed because markup does not use data-src.

