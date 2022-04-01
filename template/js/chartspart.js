var canvas = document.getElementById('myChart');
var data = {// www . ja  v a 2s.c  om
  labels: ["1", "2", "3", "4", "5", "6", "7"],
  datasets: [
    {
      label: "My First dataset",
      fill: true,
      lineTension: 0.0,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 5,
      pointHitRadius: 10,
      data: [65, 59, 80, 0, 56, 55, 40],
    }
  ]
};
var zero = 8;
function adddata(){
  var value = Math.floor((Math.random() * 100) + 1);;
  myLineChart.data.labels.push(zero);
  myLineChart.data.labels.splice(0, 1);
  myLineChart.data.datasets[0].data.splice(0, 1);
  console.log(myLineChart.data.datasets[0].data);
  myLineChart.data.datasets[0].data.push(value);
  myLineChart.update();
  zero++;
}
setInterval(function(){
  adddata();
},1000);
var option = {
  showLines: true,
  scales: {
    yAxes: [{
      display: true,
      ticks: {
        beginAtZero:true,
        min: 0,
        max: 100
      }
    }]
  }
};
var myLineChart = Chart.Line(canvas,{
  data:data,
  options:option
});
