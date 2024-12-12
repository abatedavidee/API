// Dati JSON contenuti in una variabile 'data'
data = [
    [{
        "id": 1,
        "make": "Toyota",
        "model": "Corolla",
        "year": 2022,
        "color": "Silver",
        "mileage": 20000,
        "price": 25000,
        "fuelType": "Gasoline",
        "transmission": "Automatic",
        "engine": "2.0L 4-cylinder",
        "horsepower": 169,
        "features": ["Bluetooth", "Backup Camera", "Keyless Entry"],
        "owners": 1,
        "image": "https://storage.googleapis.com/fp-media/1/2021/11/Toyota-Corolla-2022-5.jpg"
    }]
];

// Selezioniamo l'elemento dove inseriremo la card
const carContainer = document.getElementById('car-container');

// Funzione per creare una card a partire dai dati del JSON
function createCarCard(car) {
    // Creiamo l'elemento card con le classi di Bootstrap
    const card = document.createElement('div');
    card.className = 'card col-md-4 col-lg-3 mb-4'; // Aggiungiamo la larghezza responsiva

    // Aggiungiamo l'immagine
    const img = document.createElement('img');
    img.setAttribute('src', car.image);
    img.setAttribute('alt', `${car.make} ${car.model}`);
    img.className = 'card-img-top';

    // Aggiungiamo il corpo della card
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Aggiungiamo il nome del modello e l'anno
    const title = document.createElement('h5');
    title.className = 'card-title';
    title.innerHTML = `${car.make} ${car.model} (${car.year})`;

    // Aggiungiamo la descrizione del veicolo
    const description = document.createElement('p');
    description.className = 'card-text';
    description.innerHTML = `Mileage: ${car.mileage} km<br>Fuel: ${car.fuelType}<br>Transmission: ${car.transmission}`;

    // Aggiungiamo il prezzo
    const price = document.createElement('p');
    price.className = 'card-price';
    price.innerHTML = `$${car.price.toLocaleString()}`;

    // Aggiungiamo il footer con un bottone
    const footer = document.createElement('div');
    footer.className = 'card-footer';
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.innerHTML = 'View Details';
    footer.appendChild(button);

    // Aggiungiamo tutto il contenuto alla card
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(price);
    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(footer);

    // Aggiungiamo la card al contenitore
    carContainer.appendChild(card);
}

// Creiamo la card per il primo veicolo nel nostro JSON
createCarCard(data[0][0]);
