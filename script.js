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
    maintainAspectRatio: true,
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
  mychart.data.datasets[0].data.splice(1);
  mychart.data.labels.splice(1);
  mychart.data.datasets[0].backgroundColor.splice(1)
  mychart.data.datasets[0].label.shift();
  mychart.data.labels.shift();
  mychart.data.datasets[0].data.shift();
  mychart.data.datasets[0].backgroundColor.shift();
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

  let median, average, modus, quartil1, quartil2, quartil3;
  mychart.data.labels.push(
    "Median",
    "Mean",
    "Modus",
    "Quartil 1",
    "Quartil 2",
    "Quartil 3"
  );

  for (var bc = 0; bc < backgroundColor.length; bc++) {
    mychart.data.datasets[0].backgroundColor.push(backgroundColor[bc]);
  }

  median = formulajs.MEDIAN(numberArray);
  average = formulajs.AVERAGE(numberArray);
  modus = formulajs.MODEMULT(numberArray);
  quartil1 = formulajs.QUARTILEINC(numberArray, 1);
  quartil2 = formulajs.QUARTILEINC(numberArray, 2);
  quartil3 = formulajs.QUARTILEINC(numberArray, 3);
  mychart.data.datasets[0].data.push(
    median,
    average,
    modus,
    quartil1,
    quartil2,
    quartil3
  );
  let option = document.getElementById("option").value;
  const medianValue = document.querySelector(".median");
  const meanValue = document.querySelector(".mean");
  const modusValue = document.querySelector(".modus");
  const quartil1Value = document.querySelector(".quartil_1");
  const quartil2Value = document.querySelector(".quartil_2");
  const quartil3Value = document.querySelector(".quartil_3");


  switch (option) {
    case "Median":
      if (medianValue.innerHTML == 0) {
        medianValue.innerHTML = `${median}`;
      } else {
        meanValue.innerHTML = 0;
        modusValue.innerHTML = 0;
        quartil1Value.innerHTML = 0;
        quartil2Value.innerHTML = 0;
        quartil3Value.innerHTML = 0;
      }
      console.log(medianValue);
      break;
      
    case "Mean":
      if (meanValue.innerHTML == 0) {
        meanValue.innerHTML = `${average}`
      } else {
        medianValue.innerHTML = 0;
        modusValue.innerHTML = 0;
        quartil1Value.innerHTML = 0;
        quartil2Value.innerHTML = 0;
        quartil3Value.innerHTML = 0;
      }
      break;
    
    case "Modus":
      if (modusValue == 0) {
        modusValue.innerHTML = `${modus}`
      } else {
        medianValue.innerHTML = 0;
        meanValue.innerHTML = 0;
        quartil1Value.innerHTML = 0;
        quartil2Value.innerHTML = 0;
        quartil3Value.innerHTML = 0;
      }
      break;
    
    case "Quartil":
      if (quartil1Value.innerHTML == 0 || quartil2Value == 0 || quartil3Value == 0) {
         quartil1Value.innerHTML = `${quartil1}`;
         quartil2Value.innerHTML = `${quartil2}`;
         quartil3Value.innerHTML = `${quartil3}`;
      } else {
        meanValue.innerHTML = 0;
        medianValue.innerHTML = 0;
        modusValue.innerHTML = 0;
       }
      break;
      
    default:
      medianValue.innerHTML = `${median}`;
      meanValue.innerHTML = `${average}`;
      modusValue.innerHTML = `${modus}`;
      quartil1Value.innerHTML = `${quartil1}`;
      quartil2Value.innerHTML = `${quartil2}`;
      quartil3Value.innerHTML = `${quartil3}`;
      break;
  }

  console.log(mychart.data);
  switch (option) {
    case "Median":
      mychart.destroy();
      mychart.data.datasets[0].data.splice(1);
      mychart.data.labels.splice(1);
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
        medianValue.innerHTML = `${median}`;
      }
      break;

    case "Mean":
      mychart.destroy();
      mychart.data.datasets[0].data.splice(1);
      mychart.data.labels.splice(1);
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
        meanValue.innerHTML = `${average}`;
      }
      break;

    case "Modus":
      mychart.destroy();
      mychart.data.datasets[0].data.splice(1);
      mychart.data.labels.splice(1);
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
        mychart.data.datasets[0].data.push(...modus);
        modusValue.innerHTML = `${modus}`;
      }
      break;

    case "Quartil":
      mychart.destroy();
      mychart.data.datasets[0].data.splice(1);
      mychart.data.labels.splice(1);
      mychart.data.datasets[0].label.shift();
      mychart.data.labels.shift();
      mychart.data.datasets[0].backgroundColor.shift();
      mychart.data.datasets[0].data.shift();
      mychart.data.labels.push("Quartil 1", "Quartil 2", "Quartil 3");
      mychart.data.datasets[0].label.push("Quartil");
      mychart.data.datasets[0].backgroundColor.push(backgroundColor[(1, 2, 3)]);
      if (option === mychart.data.datasets[0].label[0]) {
        mychart = new Chart(chartJs, config);
        quartil1 = formulajs.QUARTILEINC(numberArray, 1);
        quartil2 = formulajs.QUARTILEINC(numberArray, 2);
        quartil3 = formulajs.QUARTILEINC(numberArray, 3);
        mychart.data.datasets[0].data.push(quartil1, quartil2, quartil3);
        quartil1Value.innerHTML = 
        `${quartil1}`;
        quartil2Value.innerHTML = 
        `${quartil2}`;
        quartil3Value.innerHTML = 
        `${quartil3}`;
      }
      break;
  }
  mychart.update();
};
