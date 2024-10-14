//Variable global
const URL1 = "https://rickandmortyapi.com/api/character";
//traer imput a javascript
const txtCharacter = document.getElementById('txt-character');
//traer contenedor de cards
const containerCards = document.getElementById('containerCards');

//fetch generico para obtener resultados de la api
const getAPI = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    //array
    return data.results;
}

//funcion crear cards
const createCards = ( character ) => {
    const card = document.createElement('div')
    card.classList.add('card-character');

    const imgCard = document.createElement('img');
    imgCard.src = character.image;
    imgCard.alt = character.name;

    const containerDescription = document.createElement('div');
    containerDescription.classList.add('description-card');

    const nameCharacter = document.createElement('h2');
    nameCharacter.textContent = character.name;
    const genderCharacter = document.createElement('p');
    genderCharacter.textContent = "Gender: "+character.gender;

    containerDescription.appendChild(nameCharacter);
    containerDescription.appendChild(genderCharacter);
    
    card.appendChild(imgCard);
    card.appendChild(containerDescription);
    
    containerCards.appendChild(card);
}

//funcion crear todos los personajes (asincrono)
const generateAllCharacters = async () => {
    const data = await getAPI(URL1);
    data.map(character => createCards(character));
}

window.addEventListener('DOMContentLoaded',generateAllCharacters);

