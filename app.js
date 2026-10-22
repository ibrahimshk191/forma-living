
const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("nav-menu");

// Mobile navigation
menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");

  const isOpen = navigation.classList.contains("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

// Menu band karna jab user kisi link par click kare
navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Footer mein current year
document.getElementById("year").textContent = new Date().getFullYear();

// Demo contact form
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  const subject = encodeURIComponent("Website project enquiry");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`
  );

  formStatus.textContent = "Opening your email application...";

  window.location.href =
    `mailto:hello@formaliving.example?subject=${subject}&body=${body}`;
});
