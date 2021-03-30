// FEAT: Profile editing

const profileEditorPopup = document.querySelector('#profile-editor');
const profileEditor = new Form(profileEditorPopup);

const nameInput = profileEditor.form.elements.name;
const jobInput = profileEditor.form.elements.job;

const nameElement = document.querySelector('.profile__name');
const jobElement = document.querySelector('.profile__description');

const profileEditorOpenButton = document.querySelector('.profile__edit-button');
profileEditorOpenButton.addEventListener('click', () => {
  nameInput.value = nameElement.textContent;
  jobInput.value = jobElement.textContent;

  profileEditor.toggle();
});

profileEditor.submitHandler = () => {
  nameElement.textContent = nameInput.value;
  jobElement.textContent = jobInput.value;
};

// FEAT: Card adding

const elementEditorPopup = document.querySelector('#element-editor');
const elementEditor = new Form(elementEditorPopup);

const titleInput = elementEditor.form.elements.title;
const linkInput = elementEditor.form.elements.link;

const elementEditorOpenButton = document.querySelector('.profile__add-button');
elementEditorOpenButton.addEventListener('click', elementEditor.toggle);

const elementsContainer = document.querySelector('.elements__list');
function addCard(card, toBeginning) {
  toBeginning
    ? elementsContainer.prepend(card.created)
    : elementsContainer.append(card.created);
}

elementEditor.submitHandler = () => {
  const cardInstance = new Card({
    name: titleInput.value,
    link: linkInput.value,
  });

  addCard(cardInstance, 1);

  elementEditor.form.reset();
};

//  FEAT: Image preview

const imageViewerPopup = document.querySelector('#image-viewer');
const imageViewer = new Popup(imageViewerPopup);

const popupImage = imageViewerPopup.querySelector('.popup__image');
const popupCaption = imageViewerPopup.querySelector('.popup__caption');

function openPreview(e) {
  popupImage.src = e.target.src;

  popupCaption.textContent = e.target.alt;

  imageViewer.toggle();
}

// FEAT: Initial card loading

const initialCards = [
  {
    name: 'Замогилье (деревня)',
    link: './images/element-zamogilye.jpg',
  },
  {
    name: 'Путино',
    link: './images/element-putino.jpg',
  },
  {
    name: 'Гора Синай',
    link: './images/element-sinai.jpg',
  },
  {
    name: 'Куршская коса',
    link: './images/element-kosa.jpg',
  },
  {
    name: 'Кольский',
    link: './images/element-kolsky.jpg',
  },
  {
    name: 'Алтай',
    link: './images/element-altai.jpg',
  },
];

initialCards.forEach(card => {
  const cardInstance = new Card(card);
  addCard(cardInstance);
});