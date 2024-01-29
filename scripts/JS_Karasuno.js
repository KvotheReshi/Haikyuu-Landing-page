function mountImage(imgToMount, parentId) {  
  const parent = document.getElementById(parentId);
  parent.innerHTML = null;
  const image = document.createElement('img'); 
  image.src = imgToMount;
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

function mountContent(imgToMountInfo, parentIdInfo, imgToMountBody, parentIdBody) {
  mountImage(imgToMountInfo, parentIdInfo)
  mountImage( imgToMountBody, parentIdBody)
  mountChart(imgToMountInfo)
}

function unmountContent() {
  unmountImage()
  unmountChart()
}