// @todo: Темплейт карточки
const temp = document.querySelector('#card-template').content;
const container = document.querySelector('.places__list');

// @todo: DOM узлы

const addButton = document.querySelector('.profile__add-button');
const delButton = temp.querySelector('.card__delete-button');

// @todo: Функция создания карточки

function creationCard (item) {
    const card = temp.querySelector('.card');
    const cards = card.cloneNode(true);
    const deleteButton = cards.querySelector('.card__delete-button');

    deleteButton.addEventListener('click', deleteCard);

    let imageCard = cards.querySelector('.card__image');
    let nameCard = cards.querySelector('.card__title');
    imageCard.src = item.link;
    nameCard.textContent = item.name;
    return cards;
}
initialCards.forEach((item) => {
    container.append(creationCard(item));
});

// @todo: Функция удаления карточки
function deleteCard(event) {
    const cardDelete = event.target.closest('.card');
        cardDelete.remove();
}


// @todo: Вывести карточки на страницу
function showCards() {
    creationCard();
}

showCards();