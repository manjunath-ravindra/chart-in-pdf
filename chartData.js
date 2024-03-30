let redData = [1, 71, 136, 250, 222, 153, 153];
let greyData = [3, 2, 1, 600, 0, 0, 0];

function getChartData() {
  let chartData = {
    data: {
      labels: ["0.4", "0.6", "0.8", "3.0 (WPS LIMITS)", "1.2", "1.4", "1.6"],
      datasets: [
        {
          label: "CRC Evans Sequencing",
          data: redData,
          borderColor: "#e03540",
          backgroundColor: "#e03540",
          yAxisID: "y",
        },
        {
          label: "Without CRC Evans Sequencing",
          data: greyData,
          borderColor: "#707070",
          backgroundColor: "#707070",
          yAxisID: "y",
        },
      ],
    },
    options: {
      responsive: true,
      devicePixelRatio: 3,
      interaction: { mode: "index", intersect: false },
      stacked: false,
      plugins: {
        title: {
          display: true,
          text: "GRAPHICAL REPRESENTATION",
          font: { size: 15, weight: "bold", style: "italic", color: "black" },
          position: "bottom",
          align: "center",
        },
        legend: {
          display: false,
        },
        datalabels: {
          anchor: "end",
          align: "top",
          font: {
            style: "italic",
            weight: "bold",
          },
        },
        /* annotation: {
          annotations: {
            label1: {
              type: "label",
              xValue: 3,
              yValue:
                20,
              color: "#707070",
              content: ["WPS LIMITS"],
              font: {
                size: 15,
                style: "italic",
                weight: "bold",
              },
            },
          },
        }, */
      },
      scales: {
        x: {
          display: true,
          grid: { drawOnChartArea: false },
          ticks: { font: { size: 15, weight:"bold", style:"italic" }, padding: 10 },
          title: {
            display: true,
            text: "HILO IN MM",
            font: { size: 15, weight: "bold", style: "italic", color: "black" },
            padding: 10,
          },
        },
        y: {
          type: "linear",
          display: false,
          position: "left",
          grid: { drawOnChartArea: false },
          ticks: { display: false },
          title: {
            display: true,
            text: "NUMBER OF WELDS",
            font: { size: 15, weight: "bold", style: "italic", color: "black" },
            padding: 10,
          },
        },
        y1: {
          type: "linear",
          display: false,
          position: "right",
          grid: { drawOnChartArea: false },
        },
      },
      elements: { bar: { borderRadius: 13 } },
      layout: { padding: { left: 20, right: 20, bottom: 30, top: 50 } },
    },
  };
  return chartData;
}
