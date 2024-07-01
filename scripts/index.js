// @todo: Темплейт карточки
const temp = document.querySelector('#card-template').content;
const container = document.querySelector('.places__list');

// @todo: DOM узлы


// @todo: Функция создания карточки

function createCard (item) {
    const card = temp.querySelector('.card');
    const cards = card.cloneNode(true);
    const deleteButton = cards.querySelector('.card__delete-button');

    deleteButton.addEventListener('click', deleteCard);

    const imageCard = cards.querySelector('.card__image');
    const nameCard = cards.querySelector('.card__title');
    imageCard.src = item.link;
    nameCard.textContent = item.name;
    return cards;
}
initialCards.forEach((item) => {
    container.append(createCard(item));
});

// @todo: Функция удаления карточки
function deleteCard(event) {
    const cardDelete = event.target.closest('.card');
        cardDelete.remove();
}


// @todo: Вывести карточки на страницу
createCard();