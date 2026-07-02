document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const header = document.getElementById('header');

  if (!hamburger || !navMenu) return;

  const closeMenu = () => {
    navMenu.classList.remove('open');
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    navMenu.classList.add('open');
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
  };

  hamburger.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = navMenu.classList.contains('open');

    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        closeMenu();
      }
    });
  });

  document.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target instanceof Element)) return;

    if (!navMenu.contains(target) && !hamburger.contains(target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu();
    }
  });

  window.addEventListener('scroll', () => {
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }
  });

  if (header) {
    header.classList.toggle('scrolled', window.scrollY > 20);
  }
});
