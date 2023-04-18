

  let tempoTotale = 60;

  //seleziona l'elemento HTML dove visualizzare il timer
  let timer = document.getElementById("timer");

  //imposta la funzione per aggiornare il timer
  let updateTimer = setInterval(function() {

    tempoTotale--;

    timer.textContent = tempoTotale;

    if (tempoTotale <= 0) {

      clearInterval(updateTimer);
      
      alert("Tempo scaduto!");
      
    }
  }, 1000); //la funzione viene eseguita ogni secondo (1000 millisecondi)


  

  

    