
// Contact form submission handler (optional)
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('.navbar a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });
  

//   // Apply animations when sections enter the viewport
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add('visible');
//       }
//     });
//   },
//   { threshold: 0.1 }
// );

// document.querySelectorAll('.section').forEach((section) => {
//   observer.observe(section);
// });

// // Add 'visible' class to trigger fade-in animation
// document.querySelectorAll('.section').forEach((section) => {
//   section.classList.add('visible');
// });




// Function to animate skills when the section is in view
const skillsSection = document.querySelector("#skills");
const skillItems = document.querySelectorAll(".skills-list li");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillItems.forEach((item, index) => {
          item.style.animationDelay = `${index * 0.2}s`; // Add delay dynamically
          item.classList.add("visible");
        });
      }
    });
  },
  { threshold: 0.5 } // Trigger when 50% of the section is visible
);

observer.observe(skillsSection);

// Smooth scroll when clicking on navbar
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });

    // If "Skills" is clicked, ensure animation starts
    if (link.getAttribute("href") === "#skills") {
      skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`; // Add delay dynamically
        item.classList.add("visible");
      });
    }
  });
});
