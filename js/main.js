let lastX;
let isHovering = false;

document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.custom-cursor');

  // Center the cursor on the mouse position
  cursor.style.left = `${e.pageX - cursor.offsetWidth / 2}px`;
  cursor.style.top = `${e.pageY - cursor.offsetHeight / 2}px`;

  // Tilt the cursor based on mouse movement direction (only left and right)
  if (!isHovering) {
    if (lastX !== undefined) {
      if (e.pageX < lastX) {
        // Mouse moved left
        cursor.style.transform = 'rotateY(180deg)';
      } else if (e.pageX > lastX) {
        // Mouse moved right
        cursor.style.transform = 'rotateY(0deg)';
      }
    }
  }

  // Update lastX to the current X position
  lastX = e.pageX;
});

// Elements that trigger the hover effect
const hoverElements = document.querySelectorAll('.text-hover');

hoverElements.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.transform = 'scale(2)';
    isHovering = true;
  });

  el.addEventListener('mouseleave', () => {
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.transform = 'scale(1)';
    isHovering = false;
  });
});

// Reset the cursor when not moving horizontally
document.addEventListener('mouseleave', () => {
  const cursor = document.querySelector('.custom-cursor');
  cursor.style.transform = 'scale(1) rotateY(0deg)';
});


js: const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const slideContainer = document.getElementById('slideContainer');

slideContainer.addEventListener('mouseover', () => {
    slideContainer.style.animationPlayState = 'paused';
});

slideContainer.addEventListener('mouseout', () => {
    slideContainer.style.animationPlayState = 'running';
});