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

function mountImage(newSrc, altText) {  
  const parent = document.getElementById('parte2');
  parent.innerHTML = null;
  const image = document.createElement('img'); 
  image.src = newSrc;
  image.altText = altText;
  image.classList.add('animation-fadein')  
  image.classList.add('info')
  image.setAttribute('id','imageHovered')
  parent.appendChild(image);
  mountChart(newSrc);
}

function unmountImage() { 
  var image = document.getElementById('imageHovered');
  image.classList.add('animation-fadeout')  
  image.classList.add('fade-out')
  unmountChart()   
}

function mountChart(src) {
  const parent = document.getElementById('parte1');
  parent.innerHTML = null;
  const ctx = document.createElement('canvas');
  parent.appendChild(ctx); 
  ctx.setAttribute('id','myChart');
  const character = getCharacter(src) 
  if (character.length === 0) return;
  const {power,jump,stamina,strategy,technique,speed} = character[0];
  const data = {
    labels: ['power','jump','stamina','strategy','technique','speed'],
    datasets: [{
      label: 'Stats',
      data: [power,jump,stamina,strategy,technique,speed],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  };
  new Chart(ctx, {
    type: 'radar',
    data: data,
    options: { 
      scale: {
        ticks: {
            beginAtZero: true,
            stepSize: 1
        },
        min: 0,
        max: 5,
    },
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  });
}

function unmountChart() {
  var image = document.getElementById('myChart');
  image.classList.add('animation-fadeout')  
  image.classList.add('fade-out')  
}