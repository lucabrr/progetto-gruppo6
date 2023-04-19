
  let corrette = 9
  let sbagliate = 4
  let domande = 13



const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'doughnut',
  data: {
   // labels: ['Risposte sbagliate', 'Risposte corrette'],
    datasets: [{
      label: '# of Votes',
      data: [sbagliate,corrette],
      backgroundColor: [
        '#C2128D',
        "#00FFFF",
        ],
      borderWidth:0 ,
      cutout: 145
      
    }]
  }});

  function inserisciValori(){
      let numeroCorrette = document.getElementById("numeroCorrette")
      let numeroSbagliate = document.getElementById("numeroSbagliate")
      let numeroDomande = document.querySelectorAll(".numeroDomande")

    for (const domanda of numeroDomande) {
      domanda.textContent = domande
    }
      numeroCorrette.textContent = corrette
      numeroSbagliate.textContent = sbagliate
}
inserisciValori()

function calcolaPercentuali() {
  let percentualeCorrette = document.getElementById("percentualeCorrette")
  let percentualeSbagliate = document.getElementById("percentualeSbagliate")
   let percentCorrette = (corrette/domande)*100 
   let percentSbagliate = (sbagliate/domande)*100 
  percentualeCorrette.textContent = percentCorrette.toFixed(1) + "%"
  percentualeSbagliate.textContent = percentSbagliate.toFixed(1) + "%"
}
calcolaPercentuali()

