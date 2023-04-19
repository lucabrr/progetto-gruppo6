// import './modules/quiz.js';

const avviso = document.getElementById('avviso');

(function acceptButton() {
    const btn = document.getElementById('acceptBtn');
    const checkB = document.getElementById('consenso');

    btn.addEventListener('click', () => {
        if (!checkB.checked) {
            avviso.classList.remove('avviso')

        } else if (checkB.checked) {
            location.href = "../questions.html"

        }
    })
})()