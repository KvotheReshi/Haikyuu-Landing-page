function mountChart(srcCharac) {
  const parent = document.getElementById('grafica');
  parent.innerHTML = null;
  const ctx = document.createElement('canvas');
  parent.appendChild(ctx); 
  ctx.setAttribute('id','myChart');
  const character = getCharacter(srcCharac) 
  if (character.length === 0) return;
  const {power,jump,stamina,strategy,technique,speed} = character[0];
  const data = {
    labels: ['power','jump','stamina','strategy','technique','speed'],
    datasets: [{
      label: 'Stats',
      data: [power,jump,stamina,strategy,technique,speed],
      fill: true,
      backgroundColor: 'rgba(45, 100, 250, 0.2)',
      borderColor: 'rgba(0, 0, 0, 0.1)',
      pointBackgroundColor: 'rgb(50, 50, 200)',
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