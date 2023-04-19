// import './modules/quiz.js';

(function acceptButton() {
    const btn = document.getElementById('acceptBtn');
    const checkB = document.getElementById('consenso');
    btn.addEventListener('click', () => {
        if (checkB.checked) {
            location.href = "../questions.html"
        } else {
            document.getElementById('avviso').classList.remove('mostraAvviso');
        }
    })
})()