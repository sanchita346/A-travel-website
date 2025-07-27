document.addEventListener('DOMContentLoaded', () => {
  // Global slider controls
  const globalSlider = document.getElementById('globalSlider');
  const globalLeft = document.getElementById('globalLeft');
  const globalRight = document.getElementById('globalRight');

  // Indian slider controls
  const indianSlider = document.getElementById('indianSlider');
  const indianLeft = document.getElementById('indianLeft');
  const indianRight = document.getElementById('indianRight');

  // Scroll amount per click
  const scrollAmount = 300;

  // Global slider navigation
  globalLeft.addEventListener('click', () => {
    globalSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  globalRight.addEventListener('click', () => {
    globalSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  // Indian slider navigation
  indianLeft.addEventListener('click', () => {
    indianSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  indianRight.addEventListener('click', () => {
    indianSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  // Auto slide functionality
  function autoSlide(slider) {
    let scrollPos = 0;
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    setInterval(() => {
      if (scrollPos >= maxScroll) {
        scrollPos = 0;
      } else {
        scrollPos += scrollAmount;
      }
      slider.scrollTo({ left: scrollPos, behavior: 'smooth' });
    }, 4000);
  }

  autoSlide(globalSlider);
  autoSlide(indianSlider);
});
