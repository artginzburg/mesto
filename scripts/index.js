import Card from './Card.js';
import Form from './Popup__Form.js';
import FormValidator from './FormValidator.js';

const defaultFormConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible',
};

// FEAT: Profile editing

const profileEditorPopup = document.querySelector('#profile-editor');
const profileEditor = new Form(profileEditorPopup);

const profileEditorValidator = new FormValidator(defaultFormConfig, profileEditor.form);
profileEditorValidator.enableValidation();

const nameInput = profileEditor.form.elements.name;
const jobInput = profileEditor.form.elements.job;

const nameElement = document.querySelector('.profile__name');
const jobElement = document.querySelector('.profile__description');

profileEditor.form.addEventListener('reset', e => {
  e.preventDefault();

  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;
});

const profileEditorOpenButton = document.querySelector('.profile__edit-button');
profileEditorOpenButton.addEventListener('click', () => {
  profileEditor.form.reset();

  profileEditor.toggle();
});

profileEditor.submitHandler = () => {
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
};

// FEAT: Card adding

const elementEditorPopup = document.querySelector('#element-editor');
const elementEditor = new Form(elementEditorPopup);

const elementEditorValidator = new FormValidator(defaultFormConfig, elementEditor.form);
elementEditorValidator.enableValidation();

const titleInput = elementEditor.form.elements.title;
const linkInput = elementEditor.form.elements.link;

const elementEditorOpenButton = document.querySelector('.profile__add-button');
elementEditorOpenButton.addEventListener('click', elementEditor.toggle);

const elementsContainer = document.querySelector('.elements__list');
function addCard(card) {
  elementsContainer.prepend(card.created);
}
function createInsertDefaultCard(data) {
  const cardInstance = new Card(data, '#element-template');

  addCard(cardInstance);
}

elementEditor.submitHandler = () => {
  createInsertDefaultCard({
    name: titleInput.value,
    link: linkInput.value,
  });

  elementEditor.form.reset();
};

// FEAT: Initial card loading

const initialCards = [
  {
    name: 'Алтай',
    link: './images/element-altai.jpg'
  },
  {
    name: 'Кольский',
    link: './images/element-kolsky.jpg'
  },
  {
    name: 'Куршская коса',
    link: './images/element-kosa.jpg'
  },
  {
    name: 'Гора Синай',
    link: './images/element-sinai.jpg'
  },
  {
    name: 'Путино',
    link: './images/element-putino.jpg'
  },
  {
    name: 'Замогилье (деревня)',
    link: './images/element-zamogilye.jpg'
  }
];

initialCards.forEach(
  createInsertDefaultCard
);