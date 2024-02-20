function mountChart(srcCharac) {
  const parent = document.getElementById("grafica");
  parent.innerHTML = null;
  const ctx = document.createElement("canvas");
  parent.appendChild(ctx);
  ctx.setAttribute("id", "myChart");
  const character = getCharacter(srcCharac);
  if (character.length === 0) return;
  const { power, jump, stamina, strategy, technique, speed } = character[0];
  const data = {
    labels: ["Power", "Jump", "Stamina", "Strategy", "Technique", "Speed"],
    datasets: [
      {
        label: "Stats",
        data: [power, jump, stamina, strategy, technique, speed],
        fill: true,
        backgroundColor: "rgba(45, 100, 250, 0.2)",
        borderColor: "rgba(0, 0, 0, 0.2)",
        pointBackgroundColor: "white",

        pointRadius: 10,
        pointBorderColor: "rgb(230, 115, 15)",
        pointBorderWidth: 3,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgb(255, 99, 132)",
      },
    ],
  };
  new Chart(ctx, {
    type: "radar",
    data: data,
    plugins: [ChartDataLabels],
    options: {
      responsive: true,
      plugins: {
        legend:{
          display: false
        },
        tooltip: {
          enabled: false,
        },
        datalabels: {
          color:'black',
          font: {
            size: '15px'
          },
          formatter: function (value, context) {
            return value;
          },
        },
      },
      scales: {
        r: {
          grid: { lineWidth: 3, color: "rgba(0,0,0, 0.8)" },
          pointLabels: {
            color: "black",
            font: { size: 14 },
            callback: function (value, index, values) {
              console.log(value);
              return value;
            },
          },
          angleLines: { color: "black" },
          ticks: { display: false }
        },
      },
      scale: {
        ticks: {
          beginAtZero: true,
          stepSize: 1,
        },
        min: 0,
        max: 5,
      },
      elements: {
        line: {
          borderWidth: 3,
        },
      },
    },
  });
}

function unmountChart() {
  var image = document.getElementById("myChart");
  image.classList.add("animation-fadeout");
  image.classList.add("fade-out");
}
