let questionsArr = [];
let shuffledquestionsArr = [];
let selectedQuestion = {};
let counterQuestions = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

async function getQuestions() {
    fetch('https://opentdb.com/api.php?amount=11&category=18&difficulty=easy').then(async function(res) {
        let json = await res.json();
        questionsArr = json.results;
        shuffledquestionsArr = shuffle(questionsArr);
        buildQuiz();
    })
}

function addBtnsEvents() {
    let target = document.getElementById('contenitoreRisposte');
    let risposte_1 = target.querySelector('.risposte-1');
    let risposte_2 = target.querySelector('.risposte-2');

    risposte_1.firstElementChild.addEventListener('click', function() {
        doBtnEvents(1, 1);
    });
    risposte_2.firstElementChild.addEventListener('click', function() {
        doBtnEvents(2, 1);
    });

    if (risposte_1.children.length == 2) {
        risposte_1.lastElementChild.addEventListener('click', function() {
            doBtnEvents(1, 2);
        });
    }
    if (risposte_2.children.length == 2) {
        risposte_2.lastElementChild.addEventListener('click', function() {
            doBtnEvents(2, 2);
        });
    }
}

function doBtnEvents(ind, num) {
    let actualAnswer = "";
    if (ind == 1) {
        let risposte_1 = document.querySelector('.risposte-1');
        if (num == 1) {
            let btn = risposte_1.firstElementChild;
            actualAnswer = btn.textContent;
        } else {
            let btn = risposte_1.lastElementChild;
            actualAnswer = btn.textContent;
        }
    } else {
        let risposte_2 = document.querySelector('.risposte-2');
        if (num == 1) {
            let btn = risposte_2.firstElementChild;
            actualAnswer = btn.textContent;
        } else {
            let btn = risposte_2.lastElementChild;
            actualAnswer = btn.textContent;
        }
    }

    actualAnswer == selectedQuestion.correct_answer ? correctAnswers += 1 : wrongAnswers += 1;

    console.log(`Correct: ${correctAnswers} - Wrong: ${wrongAnswers}`);
    //clear interval / timer
    buildQuiz();
    //restart timer
}

getQuestions();
addBtnsEvents();

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
    if (shuffledquestionsArr.length == 0) {
        //blocca tutto e vai alla pagina successiva
    } else {
        let target = document.getElementById('contenitoreRisposte');
        let risposte_1 = target.querySelector('.risposte-1');
        let risposte_2 = target.querySelector('.risposte-2');
        let random = Math.floor(Math.random() * (shuffledquestionsArr.length));
        let numDomanda = document.getElementById('numeroDomande');
        let primo_titolo = document.querySelector('.prima-parte');
        selectedQuestion = shuffledquestionsArr[random];

        primo_titolo.innerHTML = shuffledquestionsArr[random].question;

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
            newB1.innerHTML = shuffledquestionsArr[random].correct_answer;
            risposte_1.replaceChild(newB1, risposte_1.firstElementChild);
            
            let newB2 = document.createElement('button');
            newB2.classList.add('risposte');
            newB2.id = "risposta3";
            newB2.innerHTML = shuffledquestionsArr[random].incorrect_answers[0];
            risposte_2.replaceChild(newB2, risposte_2.firstElementChild);
            
        } else {
            let tmpBtn = document.createElement('button');
            let tmpBtn2 = document.createElement('button');
            if (risposte_1.children.length == 1) {
                risposte_1.appendChild(tmpBtn);
            }
            if (risposte_2.children.length == 1) {
                risposte_2.appendChild(tmpBtn2);
            }

            let newB1 = document.createElement('button');
            newB1.classList.add('risposte');
            newB1.id = "risposta1";
            newB1.innerHTML = shuffledquestionsArr[random].correct_answer;
            risposte_1.replaceChild(newB1, risposte_1.firstElementChild);

            let newB2 = document.createElement('button');
            newB2.classList.add('risposte');
            newB2.id = "risposta2";
            newB2.innerHTML = shuffledquestionsArr[random].incorrect_answers[0];
            risposte_1.replaceChild(newB2, risposte_1.lastElementChild);

            let newB3 = document.createElement('button');
            newB3.classList.add('risposte');
            newB3.id = "risposta3";
            newB3.innerHTML = shuffledquestionsArr[random].incorrect_answers[1];
            risposte_2.replaceChild(newB3, risposte_2.firstElementChild);

            let newB4 = document.createElement('button');
            newB4.classList.add('risposte');
            newB4.id = "risposta4";
            newB4.innerHTML = shuffledquestionsArr[random].incorrect_answers[2];
            risposte_2.replaceChild(newB4, risposte_2.lastElementChild);
        }
        counterQuestions++;
        numDomanda.innerHTML = `QUESTION ${counterQuestions} <span id="domandeRimaste">&nbsp;/ 10</span>`;
        shuffledquestionsArr.splice(random, 1);
        console.log(shuffledquestionsArr);
        addBtnsEvents();

        //console.log(shuffledquestionsArr);
        // console.log(questionsArr);
        // newArr = shuffle(questionsArr);
        // console.log(newArr);
    }
}

