let close_icon = document.querySelector('.close_icon');
let rectangle = document.querySelector('.rectangle');
let popap = document.querySelector('.popap');
let page = document.querySelector('.page');
let inputs = document.querySelectorAll('input');
let profile_name = document.querySelector('.profile__h1');
let comment = document.querySelector('.profile__p');
let popap__container = document.querySelector('.popap__container');

var like = document.querySelectorAll('.box_like');

//function addLike() {
//    like[0].classList.toggle('box_like_active');
//   
//}

like[0].addEventListener('click', function () {
    like[0].classList.toggle('box_like_active');
});
like[1].addEventListener('click', function () {
    like[1].classList.toggle('box_like_active');
});
like[2].addEventListener('click', function () {
    like[2].classList.toggle('box_like_active');
});
like[3].addEventListener('click', function () {
    like[3].classList.toggle('box_like_active');
});
like[4].addEventListener('click', function () {
    like[4].classList.toggle('box_like_active');
});
like[5].addEventListener('click', function () {
    like[5].classList.toggle('box_like_active');
});



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

