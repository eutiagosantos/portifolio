import { useEffect, useRef } from 'react';

export const useScrollAnimation = () => {
  const elementRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Observe all elements with scroll animation classes
    const elementsToObserve = document.querySelectorAll(
      '.scroll-fade-in, .scroll-slide-left, .scroll-slide-right, .scroll-scale'
    );

    elementsToObserve.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elementsToObserve.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  const addElementRef = (element: HTMLElement | null) => {
    if (element && !elementRefs.current.includes(element)) {
      elementRefs.current.push(element);
    }
  };

  return { addElementRef };
};