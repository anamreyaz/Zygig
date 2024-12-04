import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const createObserver = (elements) => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            entry.target.classList.remove('animate-fadeUp');
            entry.target.classList.add('opacity-0', 'translate-y-10');
          } else {
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('animate-fadeUp');
          }
        });
      }, options);

      elements.forEach(element => observer.observe(element));
    };

    const fadeElements = document.querySelectorAll('.fade-up');
    createObserver(fadeElements);
  }, []);
};