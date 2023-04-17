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
const questions = [ {
    "response_code": 0,
    "results": [
    {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    "correct_answer": "Apple",
    "incorrect_answers": [
    "Microsoft",
    "Atari",
    "Commodore"
    ]
    },
    {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    "correct_answer": "Final",
    "incorrect_answers": [
    "Static",
    "Private",
    "Public"
    ]
    },
    {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "easy",
    "question": "The programming language &quot;Python&quot; is based off a modified version of &quot;JavaScript&quot;.",
    "correct_answer": "False",
    "incorrect_answers": [
    "True"
    ]
    },
    {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "easy",
    "question": "RAM stands for Random Access Memory.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "easy",
    "question": "&quot;HTML&quot; stands for Hypertext Markup Language.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which computer language would you associate Django framework with?",
    "correct_answer": "Python",
    "incorrect_answers": [
    "C#",
    "C++",
    "Java"
    ]
    },
    {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "easy",
    "question": "Time on Computers is measured via the EPOX System.",
    "correct_answer": "False",
    "incorrect_answers": [
    "True"
    ]
    },
    {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "easy",
    "question": "The Windows 7 operating system has six main editions.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "category": "Science: Computers",
    "type": "boolean",
    "difficulty": "easy",
    "question": "The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "category": "Science: Computers",
    "type": "multiple",
    "difficulty": "easy",
    "question": "What does the computer software acronym JVM stand for?",
    "correct_answer": "Java Virtual Machine",
    "incorrect_answers": [
    "Java Vendor Machine",
    "Java Visual Machine",
    "Just Virtual Machine"
    ]
    }
    ]
    }];

   

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

  