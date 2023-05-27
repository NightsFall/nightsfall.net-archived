const parallaxLayer = document.querySelector('parallax');

document.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  // Calculate the new position for the parallax layer
  const offsetX = -(mouseX / window.innerWidth - 0.5) * 30; // Adjust the multiplier for the desired parallax effect
  const offsetY = -(mouseY / window.innerHeight - 0.5) * 30;

  // Apply the new position using CSS transform
  parallaxLayer.style.transform = `translate3d(${offsetX}px, ${offsetY}px, 0)`;
});