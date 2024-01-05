function changeImage(newSrc, altText) {
  var image = document.getElementById('info-img');

  // Add a class to initiate the transition
  image.classList.add('fade-out');

  // After a short delay, change the image source and alt text
  setTimeout(function() {
      image.src = newSrc;
      image.alt = altText;

      // Remove the class to reset the opacity
      image.classList.remove('fade-out');
  }, 500); // Adjust the delay to match the transition duration
}