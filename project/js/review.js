



let starsArr = document.querySelectorAll('.stars-container svg'); //seleziono tutti gli svg (stelle)

starsArr.forEach((star, i) => {
    star.addEventListener('click', function () {
        setFill(i);
        // salvo l'indice dell'ultima stella selezionata nel localStorage
        localStorage.setItem('selectedStarIndex', i.toString());
    })
}) //imposto l'evento click a tutti gli svg (stelle) e gli dico di eseguire la funzione setFill quando appunto si clicca sulla stella. setFill prende come parametro il numero della stella, utile poi sotto per il ciclo


const salvataggioIndex = localStorage.getItem('votoStelle');

if (salvataggioIndex) {

    setFill(parseInt(salvataggioIndex, 10));

}


function setFill(index) {
    for (let x = 0; x < starsArr.length; x++) {
        if (starsArr[x].classList.contains('stars-svg-with-color')) {
            starsArr[x].classList.remove('stars-svg-with-color');
        }
    } //ripulisco tutte le stelle, ossia tolgo l'eventuale sfondo azzurro presente in tutte le stelle

    for (let i = 0; i <= index; i++) {
        starsArr[i].classList.add('stars-svg-with-color');
    } //applico lo sfondo azzurro a tutte le stelle dalla prima fino a quella selezionata, le altre rimangono pulite
}

// seleziono l'elemento input 
const commentiInput = document.querySelector('.user-review');

// seleziono l'elemento in cui riesco a visualizzare i commenti 
const listaCommenti = document.querySelector('.comments');

document.querySelector('input').addEventListener('submit', (event) => {

    // metodo dell'interfaccia Eventdice all'agente utente che se l'evento non viene gestito in modo esplicito, la sua azione predefinita non dovrebbe essere intrapresa come sarebbe normalmente.
    event.preventDefault();
})

// ottengo il valore del commento dall'input
const commenti = commentiInput.value;

// creo un array vuoto di commenti 
let comments = [];

// creo un if che controlla se ci sono dei commenti già salvati nel local storage

if (localStorage.getItem('comments')) {

    // se ci sono dei commenti li ottiene e li converte in un'array tramite JSON.parse
    comments = JSON.parse(localStorage.getItem('comments'));

}

// aggiungo il commento all'array
comments.push(commenti);

// salvo l'array di commenti nel localStorage tramite stringify
localStorage.setItem('comments', JSON.stringify(comments));

// visualizzo il commento nell'elenco dei commenti
// const commentItem = document.createElement('li');
// listaCommenti.appendChild(commentItem);

// impostazione di reset del valore input
commentiInput.value = "";



// // visualizzo  i commenti salvati al caricamento della pagina


// if (localStorage.getItem("comments")) {

//     const newComment = JSON.parse(localStorage.getItem("comments"));
//     comments.forEach((comment) => {

//         const oggettiCommenti = document.createElement('li');
//         oggettiCommenti.textContent = commenti;
//         listaCommenti.appendChild(oggettiCommenti);
//     })

// }
function invioForm() {
    let campoForm = document.querySelector('form');
    campoForm.addEventListener('submit', function (event) { })
}