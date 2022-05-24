let closeButton = document.querySelector('.close_icon');
let rectangle = document.querySelector('.rectangle');
let formElement = document.querySelector('.popap');
let page = document.querySelector('.page');
let inputs = document.querySelectorAll('input');
let nameInput = document.querySelector('.profile__h1');
let jobInput = document.querySelector('.profile__p');

function ChangeProfile (event) {
    event.preventDefault();

    nameInput.textContent = inputs[0].value;
    jobInput.textContent = inputs[1].value;
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

