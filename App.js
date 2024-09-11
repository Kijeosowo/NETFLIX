'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const slideHeaders = document.querySelectorAll('.slide-header');
  
    slideHeaders.forEach(header => {
      header.addEventListener('click', function() {
        const slide = this.parentNode;
        const content = slide.querySelector('.slide-content');
  
        // Toggle the slide content
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
  
        // Adjust the height of the slide to fit the content
        if (content.style.display === 'block') {
          slide.style.height = slide.scrollHeight + 'px';
        } else {
          slide.style.height = null;
        }
  
        // Collapse other slides if open
        slideHeaders.forEach(otherHeader => {
          if (otherHeader !== header) {
            const otherSlide = otherHeader.parentNode;
            const otherContent = otherSlide.querySelector('.slide-content');
            otherContent.style.display = 'none';
            otherSlide.style.height = null;
          }
        });
      });
    });
  });
  