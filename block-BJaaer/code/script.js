let form = document.querySelector('form');
let modal = document.querySelector('.modal-display');
let modalInfo = document.querySelector('.modal-info');

let formInfo = {};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let elements = event.target.elements;
  formInfo.name = elements.name.value;
  formInfo.email = elements.email.value;
  formInfo.love = elements.love.value;
  formInfo.color = elements.color.value;
  formInfo.range = elements.range.value;
  formInfo.book = elements.book.value;
  formInfo.terms = elements.terms.value;

  console.log(formInfo.name);

  modal.classList.add('open');
  modal.style.display = "block";
  displayInfo(formInfo);
});

let close = document.querySelector('.modal-close');
  close.addEventListener('click', () => { 
    modal.style.display = "none";
  });

let submit = document.querySelector('.submit');
submit.addEventListener('click', () => {
});

function displayInfo(data) {
  console.log(data);
  let h1 = document.createElement('h1');
  h1.innerText = `Hello ${data.name}`;
  modalInfo.append(h1);
} 

