const data = {
  labels: [],
  datasets: [
    {
      label: [],
      data: [],
      backgroundColor: [],
      hoverOffset: 4,
    },
  ],
};


const config = {
  type: "pie",
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  },
};

const chartJs = document.querySelector("#chart");
let mychart = new Chart(chartJs, config);

const submit = () => {
  mychart.destroy();
  mychart = new Chart(chartJs, config);
  let inputValue = document.querySelector(".inputNumber").value;
  let numberArray = [];
  let stringArray = [...inputValue.split(",")];
  length = stringArray.length;

  for (var i = 0; i < length; i++) {
    numberArray.push(parseInt(stringArray[i]));
  }
  let backgroundColor = [
    "rgb(255, 99, 132)",
    "rgb(220,110,192)",
    "rgb(150,100,500)",
    "rgb(60,500,220)",
    "rgb(250,150,200)",
  ];

  let median, average, modus, quartil;
  let option = document.getElementById("option").value;

  switch (option) {
    case "Semua":
      mychart.destroy();
      mychart.data.datasets[0].label.shift();
      mychart.data.labels.shift();
      mychart.data.datasets[0].data.shift();
      mychart.data.datasets[0].backgroundColor.shift();

      mychart.data.labels.push(
        "Median",
        "Mean",
        "Modus",
        "Quartil"
      );

      if (option === "Semua") {
        mychart.destroy()
        mychart = new Chart(chartJs, config);
        if (mychart.data.labels[0] === "Median") {
          mychart.data.datasets[0].backgroundColor.push(backgroundColor[0]);
          mychart.data.datasets[0].label.push("Median")
          median = formulajs.MEDIAN(numberArray);
          mychart.data.datasets[0].data.push(median);
        };
        
        if (mychart.data.labels[1] === "Mean") {
          mychart.data.datasets[0].backgroundColor.push(backgroundColor[1]);
          mychart.data.datasets[0].label.push("Mean")
          // mychart.data.labels.splice(2);
          average = formulajs.AVERAGE(numberArray);
          mychart.data.datasets[0].data.push(average);
        };

        if (mychart.data.labels[2] === "Modus") {
          mychart.data.datasets[0].backgroundColor.push(backgroundColor[2]);
          mychart.data.datasets[0].label.push("Modus")
          modus = formulajs.MODEMULT(numberArray);
          mychart.data.datasets[0].data.push(modus);
        };
        
        if (mychart.data.labels[3] === "Quartil") {
          mychart.data.datasets[0].backgroundColor.push(backgroundColor[3]);
          mychart.data.datasets[0].label.push("Quartil")
          quartil = formulajs.QUARTILEINC(numberArray, 1);
          mychart.data.datasets[0].data.push(quartil);
        };
      }
      break;

    case "Median":
      mychart.destroy();
      mychart.data.datasets[0].label.shift();
      mychart.data.labels.shift();
      mychart.data.datasets[0].data.shift();
      mychart.data.datasets[0].backgroundColor.shift();
      mychart.data.datasets[0].label.push("Median");
      mychart.data.labels.push("Median");
      mychart.data.datasets[0].backgroundColor.push(backgroundColor[0]);
      console.log(true);
      if (option === mychart.data.datasets[0].label[0]) {
        mychart = new Chart(chartJs, config);
        median = formulajs.MEDIAN(numberArray);
        mychart.data.datasets[0].data.push(median);
      }
      break;
      
    case "Mean":
      mychart.destroy();
      mychart.data.datasets[0].label.shift();
      mychart.data.labels.shift();
      mychart.data.datasets[0].data.shift();
      mychart.data.datasets[0].backgroundColor.shift();
      mychart.data.labels.push("Mean");
      mychart.data.datasets[0].label.push("Mean");
      mychart.data.datasets[0].backgroundColor.push(backgroundColor[1]);
      if (option === mychart.data.datasets[0].label[0]) {
        mychart = new Chart(chartJs, config);
        average = formulajs.AVERAGE(numberArray);
        mychart.data.datasets[0].data.push(average);
      }
      break;
      
      case "Modus":
      mychart.destroy();
      mychart.data.datasets[0].label.shift();
      mychart.data.labels.shift();
      mychart.data.datasets[0].backgroundColor.shift();
      mychart.data.datasets[0].data.shift();
      mychart.data.labels.push("Modus");
      mychart.data.datasets[0].label.push("Modus");
      mychart.data.datasets[0].backgroundColor.push(backgroundColor[2]);
      if (option === mychart.data.datasets[0].label[0]) {
        mychart = new Chart(chartJs, config);
        modus = formulajs.MODEMULT(numberArray);
        mychart.data.datasets[0].data.push(modus);
        console.log(true);
        console.log(mychart.data.datasets[0].data);
        console.log(mychart.data.datasets[0].data[0]);
      }
      break;

    case "Quartil":
      mychart.destroy();
      mychart.data.datasets[0].label.shift();
      mychart.data.labels.shift();
      mychart.data.datasets[0].backgroundColor.shift();
      mychart.data.datasets[0].data.shift();
      mychart.data.labels.push("Quartil 1");
      mychart.data.datasets[0].label.push("Quartil");
      mychart.data.datasets[0].backgroundColor.push(backgroundColor[1,2,3]);
      if (option === mychart.data.datasets[0].label[0]) {
        mychart = new Chart(chartJs, config);
        quartil = formulajs.QUARTILEINC(numberArray, 1);
        mychart.data.datasets[0].data.push(quartil);
      }
      break;
    default:
      console.log(1);
      break;
  }
  console.log(data);
  mychart.update();
};