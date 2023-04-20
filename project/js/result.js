
  let corrette 
  let sbagliate 
  let domande = 10
  corrette = localStorage.getItem("correctAnswers")
  sbagliate = localStorage.getItem("wrongAnswers")



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

let percentCorrette
let percentSbagliate
function calcolaPercentuali() {
  let percentualeCorrette = document.getElementById("percentualeCorrette")
  let percentualeSbagliate = document.getElementById("percentualeSbagliate")
  percentCorrette = (corrette/domande)*100 
  percentSbagliate = (sbagliate/domande)*100 
  percentualeCorrette.textContent = percentCorrette.toFixed(1) + "%"
  percentualeSbagliate.textContent = percentSbagliate.toFixed(1) + "%"
}
calcolaPercentuali()

function risultatoTest() {
  let risultato = document.getElementById("complimenti")
  let descrizione = document.getElementById("descrizione")

  if(percentCorrette >= 60){
    risultato.textContent = "Complimenti!"
    descrizione.textContent = "hai superato il test!"
    risultato.style.color = "#00FFFF"
  }else{
    risultato.textContent = "Ci dispiace..."
    descrizione.textContent = "non hai superato il test..."
    risultato.style.color = "#C2128D"
  }
  
}
risultatoTest()



