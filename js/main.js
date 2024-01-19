document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const caption = document.getElementById('slide-caption');
    const captions = [
      'Nieuwbouw AICS',
      'Renovatie de Wereldburger',
      'Nieuwbouw Spinoza20first',
      'Renovatie Bostheater',
      'Sportpark Goed Genoeg & Clubgebouw AFC',
      'Renovatie Amsterdam Museum',
      'Kwartiermaker Nationaal Slavernijmuseum',
      'Verbouwing en Nieuwbouw Werven en Overslagpunten',
    ];
    let index = 0;
  
    function showSlide(i) {
      slides.forEach(slide => {
        slide.style.display = 'none';
        slide.classList.remove('active');
      });
  
      slides[i].style.display = 'block';
      slides[i].classList.add('active');
      caption.textContent = captions[i];
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
  
    setInterval(nextSlide, 6000); // Change image every 6 seconds
  
    showSlide(index); // Initialize the slider
  });
  
  function toggleNav() {
    var navList = document.getElementById('navList');
    navList.classList.toggle('open');
  }
  
  