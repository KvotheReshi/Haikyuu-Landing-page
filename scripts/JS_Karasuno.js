/*function changeImage(newSrc, altText) {
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
}*/

function mountImage(newSrc, altText, divId) {  
  const parent = document.getElementById(divId);
  parent.innerHTML = null;
  const image = document.createElement('img'); 
  image.src = newSrc;
  image.altText = altText;
  image.classList.add('animation-fadein')  
  image.classList.add('info')
  image.classList.add('imageHovered')
  parent.appendChild(image);
}

function unmountImage() { 
  var images = document.getElementsByClassName('imageHovered');

  for (var i = 0; i < images.length; i++) {
    images[i].classList.add('animation-fadeout')  
    images[i].classList.add('fade-out')
  }
}

/*function mountImage2(newSrc, altText) {  
  const parent = document.getElementById('parte2');
  parent.innerHTML = null;
  const image = document.createElement('img'); 
  image.src = newSrc;
  image.altText = altText;
  image.classList.add('animation-fadein')  
  image.classList.add('info')
  image.setAttribute('id','imageHovered')
  parent.appendChild(image);
}

function unmountImage2() { 
  var image = document.getElementById('imageHovered');
  image.classList.add('animation-fadeout')  
  image.classList.add('fade-out')   
}*/