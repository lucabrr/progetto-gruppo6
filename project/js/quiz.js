let questionsArr = [];

async function getQuestions() {
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy').then(async function(res) {
        let json = await res.json();
        questionsArr = json.results;
        buildQuiz();
    })
}

function buildQuiz() {
    //const target = document.getElementById('target');
    //let buttons = target.querySelectorAll('button');
    console.log(questionsArr);
}

getQuestions();