const ctx = document.getElementById('myChart');
let corrette = 6
let sbagliate = 4
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Risposte sbagliate', 'Risposte corrette'],
    datasets: [{
      label: '# of Votes',
      data: [sbagliate,corrette],
      backgroundColor: [
        '#C2128D',
        "#00FFFF",
        ],
      borderWidth:0 ,
      cutout: 130
      
    }]
  }});
