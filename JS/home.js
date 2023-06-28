// JavaScript code

// Smooth scrolling when clicking on navigation links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
  
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  });
  
  // Form submission handling
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      // Get form input values
      const name = form.querySelector('input[name="name"]').value;
      const email = form.querySelector('input[name="email"]').value;
      const message = form.querySelector('textarea[name="message"]').value;
  
      // Perform form validation
      if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
      }

  
      // Process form submission (you can customize this part to suit your needs)
      // Example: Send form data to a server using fetch or submit the form to a backend endpoint
      // Replace the URL with your own endpoint or API
      fetch('https://example.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      })
        .then(response => {
          // Handle the response accordingly
          if (response.ok) {
            alert('Form submitted successfully!');
            form.reset();
          } else {
            alert('Form submission failed. Please try again.');
          }
        })
        .catch(error => {
          console.log('Error:', error);
          alert('An error occurred. Please try again later.');
        });
    });
  });
  