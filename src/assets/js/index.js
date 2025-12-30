      // Burger Menu Toggle
      const burger = document.getElementById('burger');
      const mobileMenu = document.getElementById('mobileMenu');
      const b1 = document.getElementById('b1');
      const b2 = document.getElementById('b2');
      const b3 = document.getElementById('b3');

      burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        // Burger Animation
        if (!mobileMenu.classList.contains('hidden')) {
          b1.style.transform = 'translateY(10px) rotate(45deg)';
          b2.style.opacity = '0';
          b3.style.transform = 'translateY(-10px) rotate(-45deg)';
        } else {
          b1.style.transform = 'translateY(0) rotate(0)';
          b2.style.opacity = '1';
          b3.style.transform = 'translateY(0) rotate(0)';
        }
      });

      // Close mobile menu when link clicked
      const mobileLinks = mobileMenu.querySelectorAll('a');
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          b1.style.transform = 'translateY(0) rotate(0)';
          b2.style.opacity = '1';
          b3.style.transform = 'translateY(0) rotate(0)';
        });
      });

      // Smooth scrolling
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });