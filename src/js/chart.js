import Chart from 'chart.js';
const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: [
      'Hausrat',
      'Privathaftpflicht',
      'Unfall',
      'Wohngebäude',
      'Kfz',
      'Rechtsschutz',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [60, 40, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(255, 159, 64, 0.3)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {},
});
