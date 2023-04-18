// (function acceptButton() {
//     const btn = document.getElementById('acceptBtn');
//     const checkB = document.getElementById('checkB');
//     btn.addEventListener('click', () => {
//         if (checkB.checked) {
//             //do destroy
//             //call build function
//         }
//     })
// })()

async function getQuestions() {
  fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy').then(async function(res) {
      buildQuiz(await res.json());
  })
}

let questionsArr = [];

function buildQuiz(arr) {
  //const target = document.getElementById('target');
  //let buttons = target.querySelectorAll('button');
  console.log(arr);
  questionsArr = arr.results;
  console.log(questionsArr);
}

getQuestions();

// impostazione delle domande


let currentQuestion = 0;

// impostazione del timer
let timeLeft = 30; // in secondi
let timerId;

function startTimer() {
  timerId = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timerId);
      timeLeft = 10; // reset del timer
      generateNewQuestion();
      startTimer();
    }
  }, 1000);
}

function generateNewQuestion() {
  currentQuestion = Math.floor(Math.random() * questions.length);
  document.getElementById('question').textContent = questions[currentQuestion];
}

function startQuiz() {
  generateNewQuestion();
  startTimer();
}

  