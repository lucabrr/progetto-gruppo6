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
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy').then(res => {
        buildQuiz(res.json());
    })
}

let questionsArr = [];

function buildQuiz(arr) {
    //const target = document.getElementById('target');
    //let buttons = target.querySelectorAll('button');
    console.log(arr);
    questionsArr = arr.result;
    console.log(questionsArr);
}

getQuestions();