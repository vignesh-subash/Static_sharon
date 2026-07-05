/* ============================================================
   SHARONPLY — Footer
   ============================================================ */
(function() {
  'use strict';

  const accordionTriggers = document.querySelectorAll('.footer-accordion-trigger');
  
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const content = trigger.nextElementSibling;
      const isOpen = content.classList.contains('open');
      
      // Close all others
      document.querySelectorAll('.footer-accordion-content.open').forEach(c => {
        if (c !== content) {
          c.classList.remove('open');
          c.style.maxHeight = '0';
          c.previousElementSibling.classList.remove('open');
        }
      });
      
      content.classList.toggle('open');
      content.style.maxHeight = isOpen ? '0' : content.scrollHeight + 'px';
      trigger.classList.toggle('open');
    });
  });
})();
