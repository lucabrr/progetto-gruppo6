const urlParams = new URLSearchParams(window.location.search);//qui indico i parametri della barra browser URL

const MYFETCH_URL = 'https://jsonplaceholder.typicode.com/photos';//qui assegno la mia fetch a una costante per richiamarla più failmente

fetch(MYFETCH_URL) // poi vado a lanciare la funzione per richiamare la fetch

    // dopo il punto then verifico lo stato della mia request
    .then((res) => {
        console.log(res);
        // controllo nell if l'esito dell'operazione e se è ok la trasformo in json
        if (res.ok) {
            return res.json();
        } else {
            // se non va genererà un errore
            throw new Error('Errore')
        }
    })

    //inizio a lavorare con la fetch per generare il dom con i dati ottenuti dalla fetch(server) con il .then
    .then((artist) => {
        console.log(artist);
        //faccio un console log di artist per vedere il json

        // mi seleziono l'elemento da popolare nel html
        const cardSection = document.getElementById('cardSection')
        //eseguo un for each che per ogni elemento del mio json genererà una nuova carta in questo caso
        artist.forEach((art) => {
            //creo il div che conterrà il mio inner
            let col = document.createElement('div');

            // scrivo ui il dom in modo che si generi dinamicamente per ogni elemento del json
            // per prelevare gli attributi della fetch dinamicamente devo accederci con i puntatori this(${}) con l'indice del mio foreach e l'attributo che voglio prelevare
            col.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${art.url}" class="img-fluid rounded-start" alt="..."> 
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${art.title}</h5>
        <p class="card-text"></p>
        <p class="card-text"><small class="text-body-secondary"></small></p>
      </div>
    </div>
  </div>
</div>
        `
            //appendo tutto il mio inner all'elemento id del dom selezionato precedentemente
            cardSection.appendChild(col)
        });
    })


    // se la request del then fallisce loggera un errore ES. 400-404-500 ecc
    .catch((err) => {
        console.log(err);
    })