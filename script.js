// Handle navigation link click
document.querySelectorAll('.nav-link').forEach(link => 
    link.addEventListener('click', () => 
      console.log(`Navigating to ${link.textContent} page.`)
    )
  );
  
  // Handle form submission
  document.querySelector('.contact-form').addEventListener('submit', event => {
    event.preventDefault(); // Prevent default form submission
    console.log('Response submitted');
    alert('Response Submitted'); // Show alert or message after submission
  });
  