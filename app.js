//traer imput a javascript
const txtCharacter = document.getElementById('txt-character');
//traer contenedor de cards
const containerCards = document.getElementById('containerCards');
//funcion crear cards
const createCards = ( character ) => {
    const card = document.createElement('div')
    card.classList.add(card-character);

    const imgCard = document.createElement('img');
    imgCard.src = character.image;
    imgCard.alt = character.name;

    const containerDescription = document.createElement('div');
    containerDescription.classList.add('description-card');

    const nameCharacter = document.createElement('h2');
    nameCharacter.textContent = character.name;
    const genderCharacter = document.createElement('p');
    genderCharacter.textContent = character

}


<div class="card-character">
    <img src="./r&m_card.webp" alt="img-card">
    <div class="description-card">
        <h2>Rick & Morty</h2>
        <p>Gender: Male</p>
    </div>
</div>
//metodo fetch para cargar cards
