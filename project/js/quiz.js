let questionsArr = [];
let shuffledquestionsArr = [];
let selectedQuestion = {};

async function getQuestions() {
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy').then(async function(res) {
        let json = await res.json();
        questionsArr = json.results;
        buildQuiz();
    })
}

getQuestions();

function shuffle(array) {
    const newArray = [...array]
    const length = newArray.length
  
    for (let start = 0; start < length; start++) {
      const randomPosition = Math.floor((newArray.length - start) * Math.random())
      const randomItem = newArray.splice(randomPosition, 1)
  
      newArray.push(...randomItem)
    }
    return newArray
  }

function buildQuiz() {
    let target = document.getElementById('contenitoreRisposte');
    let risposte_1 = target.querySelector('.risposte-1');
    let risposte_2 = target.querySelector('.risposte-2');
    shuffledquestionsArr = shuffle(questionsArr);
    let random = Math.floor(Math.random() * (shuffledquestionsArr.length));
    
    if (shuffledquestionsArr[random].type == "boolean") {
        if (risposte_1.children.length == 2) {
            risposte_1.removeChild(risposte_1.lastElementChild);
        }
        if (risposte_2.children.length == 2) {
            risposte_2.removeChild(risposte_2.lastElementChild);
        }
        let newB1 = document.createElement('button');
        newB1.classList.add('risposte');
        newB1.id = "risposta1";
        newB1.textContent = shuffledquestionsArr[random].correct_answer;
        risposte_1.replaceChild(newB1, risposte_1.firstElementChild);
        
        let newB2 = document.createElement('button');
        newB2.classList.add('risposte');
        newB2.id = "risposta3";
        newB2.textContent = shuffledquestionsArr[random].incorrect_answers[0];
        risposte_2.replaceChild(newB2, risposte_2.firstElementChild);
        
    } else {
        let newB1 = document.createElement('button');
        newB1.classList.add('risposte');
        newB1.id = "risposta1";
        newB1.textContent = shuffledquestionsArr[random].correct_answer;
        risposte_1.replaceChild(newB1, risposte_1.firstElementChild);

        let newB2 = document.createElement('button');
        newB2.classList.add('risposte');
        newB2.id = "risposta2";
        newB2.textContent = shuffledquestionsArr[random].incorrect_answers[0];
        risposte_1.replaceChild(newB2, risposte_1.lastElementChild);

        let newB3 = document.createElement('button');
        newB3.classList.add('risposte');
        newB3.id = "risposta3";
        newB3.textContent = shuffledquestionsArr[random].incorrect_answers[1];
        risposte_2.replaceChild(newB3, risposte_2.firstElementChild);

        let newB4 = document.createElement('button');
        newB4.classList.add('risposte');
        newB4.id = "risposta4";
        newB4.textContent = shuffledquestionsArr[random].incorrect_answers[2];
        risposte_2.replaceChild(newB4, risposte_2.lastElementChild);
    }
    
    shuffledquestionsArr.splice(random, 1);

    //console.log(shuffledquestionsArr);
    // console.log(questionsArr);
    // newArr = shuffle(questionsArr);
    // console.log(newArr);
}

