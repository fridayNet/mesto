let close_icon = document.querySelector('.close_icon');
let rectangle = document.querySelector('.rectangle');
let popap = document.querySelector('.popap');
let page = document.querySelector('.page');
let inputs = document.querySelectorAll('input');
let profile_name = document.querySelector('.profile__h1');
let comment = document.querySelector('.profile__p');

function ChangeProfile (event) {
    
    event.preventDefault();

    profile_name.textContent = inputs[0].value;
    comment.textContent = inputs[1].value;
    popap.style.display = 'none';
}
  

function ClosePopap () {
    popap.style.display = 'none';
}

function OpenPopap() {
    popap.style.display = 'flex';
    
}

close_icon.addEventListener('click', ClosePopap);
rectangle.addEventListener('click', OpenPopap);
page.addEventListener('submit', ChangeProfile);
