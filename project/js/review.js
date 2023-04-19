let starsArr = document.querySelectorAll('.stars-container svg'); //seleziono tutti gli svg (stelle)

starsArr.forEach((star, i) => {
    star.addEventListener('click', function () {
        setFill(i);
    })
}) //imposto l'evento click a tutti gli svg (stelle) e gli dico di eseguire la funzione setFill quando appunto si clicca sulla stella. setFill prende come parametro il numero della stella, utile poi sotto per il ciclo

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

