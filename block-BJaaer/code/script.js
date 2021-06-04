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

function displayInfo(data) {
  console.log(data);
  let h1 = document.createElement('h1');
  h1.innerText = `Hello ${data.name}`;
  let email = document.createElement('email');
  email.innerText = `Email = ${data.email}`;
  let love = document.createElement('love');
  love.innerText = `TV choice = ${data.love}`;
  let color = document.createElement('color');
  color.innerText = `Fav Color = ${data.color}`;
  let range = document.createElement('range');
  range.innerText = `Inception Movie Rating = ${data.range}`;
  let book = document.createElement('book');
  book.innerText = `Fav Book Genre ${data.book}`;
  
  modalInfo.append(h1,email,love,color,range,book);
} 

