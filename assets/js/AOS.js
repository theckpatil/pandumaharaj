document.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('[data-aos]');
  
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
  
      // Check if the element is in view and hasn't already been animated
      if (isInView && !element.classList.contains('animated')) {
        element.style.opacity = '1'; // Ensure the element is visible
  
        // Add the specific animation class based on the custom CSS
        if (element.dataset.aos === 'zoom-in') {
          element.classList.add('zoom-in-animate');
        } else if (element.dataset.aos === 'zoom-out-up') {
          element.classList.add('zoom-out-up-animate');
        } else if (element.dataset.aos === 'zoom-in-right') {
          element.classList.add('zoom-in-right-animate');
        } else if (element.dataset.aos === 'zoom-in-left') {
          element.classList.add('zoom-in-left-animate');
        }
  
        // Mark the element as animated to prevent re-triggering
        element.classList.add('animated');
      }
    });
  });
  