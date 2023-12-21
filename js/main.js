document.addEventListener('DOMContentLoaded', () => {
  // Slider functionality
  const slides = document.querySelectorAll('.slide');
  let index = 0;

  function showSlide(i) {
      slides.forEach(slide => {
          slide.style.display = 'none';
          slide.classList.remove('active'); // Assuming 'active' class controls visibility
      });
      slides[i].style.display = 'block';
      slides[i].classList.add('active'); // Make sure to add 'active' class to the current slide
  }

  function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
  }

  function prevSlide() {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
  }

  document.getElementById('next').addEventListener('click', nextSlide);
  document.getElementById('prev').addEventListener('click', prevSlide);

  // Automatic slider
  setInterval(nextSlide, 3000); // Change image every 3 seconds
});


document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const caption = document.getElementById('slide-caption');
  const captions = [
      'Caption for Image 1', // Caption for the first image
      // Add more captions for each image accordingly
  ];
  let index = 0;

  function showSlide(i) {
      slides.forEach(slide => {
          slide.style.display = 'none';
      });
      slides[i].style.display = 'block';
      caption.textContent = captions[i]; // Update the caption text
  }

  function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
  }

  function prevSlide() {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
  }

  document.getElementById('prev').addEventListener('click', prevSlide);
  document.getElementById('next').addEventListener('click', nextSlide);

  showSlide(index);
});


function showSlide(i) {
  slides.forEach((slide, index) => {
      slide.style.display = 'none';
      slide.classList.remove('active'); 
  });
  slides[i].style.display = 'block';
  slides[i].classList.add('active'); 
  caption.textContent = captions[i]; 
}