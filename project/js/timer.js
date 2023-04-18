let tempoTotale = 60;

//seleziona l'elemento HTML dove visualizzare il timer
let timer = document.getElementById("timer");

// tempo limite
const TIME_LIMIT = 10;

// due variabili per controllare il timer
let timePassed = 0;
let timeLeft = TIME_LIMIT;

(function buildTimer() {
  timer.innerHTML = `
  <div class="base-timer">
    <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g class="base-timer__circle">
        <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45" />
      </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">
      ${timeLeft}
    </span>
  </div>
  `;
  startTimer();
})()

let timerInterval = null;

function startTimer() {
  timerInterval = setInterval(() => {
    if (timeLeft == 0) {
      clearInterval(timerInterval);
      //passa alla prox domanda e resetta il timer
    }
    // si incrementa il tempo passato ad ogni secondo
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    
    // aggiorno il tempo visualizzato su html
    document.getElementById("base-timer-label").innerHTML = timeLeft;
  }, 1000);
}
