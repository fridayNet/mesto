
// edit profile and description 
let closeButton = document.querySelector('.popap-edit-profile__close_icon');
let rectangle = document.querySelector('.rectangle');
let formElement = document.querySelector('.popap-edit-profile');
let page = document.querySelector('.page');
let FirstName = document.querySelector('#firstname');
let Status = document.querySelector('#status');
let nameInput = document.querySelector('.profile__h1');
let jobInput = document.querySelector('.profile__p');



function ChangeProfile (event) {
    event.preventDefault();

    nameInput.textContent = FirstName.value;
    jobInput.textContent = Status.value;
    formElement.style.display = 'none';
}

function ClosePopap () {
    formElement.style.display = 'none';
}

function OpenPopap() {
    formElement.style.display = 'flex';
}

closeButton.addEventListener('click', ClosePopap);
rectangle.addEventListener('click', OpenPopap);
page.addEventListener('submit', ChangeProfile);


// add card from arr

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
  let galleryTemplate = document.querySelector('#gallery__template').content;
  let placeContainer = document.querySelector('.gallery__container');

  const placeInfo = initialCards.map(function(item){
        return {
            name: item.name,
            link: item.link

            
        };
  });

  function renderCard ({name, link}) {
    const placeElement = galleryTemplate.querySelector('.gallery__box').cloneNode(true);
    placeElement.querySelector('.gallery__pic').src = link;
    placeElement.querySelector('.gallery__title').textContent = name;

    placeContainer.prepend(placeElement);
    
    
  }

  function render () {
    placeInfo.forEach(renderCard);
    
  }


render();

// add new card

let closeAddButton = document.querySelector('.popap-add-card__close_icon');
let ButtonAddCard = document.querySelector('.profile__add-button');
let formAddElement = document.querySelector('.popap-add-card');

function CloseAddPopap () {
    formAddElement.style.display = 'none';
}
function OpenAddPopap () {
    formAddElement.style.display = 'flex';
}
function AddNewCard( event) {
    event.preventDefault();
    
        let CardTitle = document.querySelector('#card_title');
        let CardLink = document.querySelector('#card_link');

        let ButtonLikes = document.querySelector('.box_like');
        ButtonLikes.addEventListener('click', Addlike());
        

        const placeElement = galleryTemplate.querySelector('.gallery__box').cloneNode(true);
        placeElement.querySelector('.gallery__title').textContent = CardTitle.value;
        placeElement.querySelector('.gallery__pic').src = CardLink.value;
        formAddElement.style.display = 'none';

        placeContainer.prepend(placeElement);
        Addlike();
        DeleteCard();
        
   
}



closeAddButton.addEventListener('click', CloseAddPopap);
ButtonAddCard.addEventListener('click', OpenAddPopap);

formAddElement.addEventListener('submit', AddNewCard);







// add like 


function Addlike() {
    let ButtonLike = document.querySelectorAll('.box_like');

    ButtonLike.forEach((item) => {
        item.addEventListener('click', function(){
            item.classList.toggle('box_like_active');
        });
    })
};

Addlike();

// delete card

function DeleteCard() {
    let DeleteButtons = document.querySelectorAll('.delete_box');

DeleteButtons.forEach((item) => {
    item.addEventListener('click', function(){
       
     const DeleteCard =  item.closest('.gallery__box');
     DeleteCard.remove();

    })
});
};

DeleteCard();



    



