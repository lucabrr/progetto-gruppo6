let questionsArr = [];
/*utilizzo una funione asincrona (fetch) per ricevere dei dati ,  poi per riempire l'array
con i dati  */
async function getQuestions() {
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy').then(async function (res) {
        let json = await res.json(); //await = fino a che non avrai riempito la variabile json, non continuare.

        questionsArr = json.results;//asegnamo una variabile globale che contiene il nostro json precedentemente crato
        //il .result è come il return, serve per ritornare il valore selezionato
        buildQuiz();
    })
}

function buildQuiz() {
    //const target = document.getElementById('target');
    //let buttons = target.querySelectorAll('button');
    console.log(questionsArr);
}

getQuestions();
console.log(questionsArr); // log per le domande