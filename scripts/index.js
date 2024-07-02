// @todo: Темплейт карточки
const temp = document.querySelector('#card-template').content;
const container = document.querySelector('.places__list');

// @todo: DOM узлы


// @todo: Функция создания карточки

function createCard (item) {
    const card = temp.querySelector('.card');
    const cardElement = card.cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');

    deleteButton.addEventListener('click', deleteCard);

    const imageCard = cardElement.querySelector('.card__image');
    const nameCard = cardElement.querySelector('.card__title');
    imageCard.src = item.link;
    nameCard.textContent = item.name;
    return cardElement;
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
