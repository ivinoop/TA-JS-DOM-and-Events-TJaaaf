let form = document.querySelector('.form');


let usernameError = "";
let nameError = "";

function doesContainNumber(str) {
  return str.split('').some(e => Number(e));
}

function handleSubmit(event) {
  event.preventDefault();

  let userNameElm = event.target.elements.username;
  let userNameParentElm = userNameElm.parentElement;
  // let input =  document.querySelectorAll('input');

  if(userNameElm.value === "") {
    usernameError = "Username can't be empty!";
    userNameParentElm.classList.add('error');
  } else if (userNameElm.value.length < 4) {
    usernameError = "Username must be minimum 4 characters";
    userNameParentElm.classList.add('error');
  } else {
    usernameError = "";
    userNameParentElm.classList.add('success');
    userNameParentElm.classList.remove('error');
  }
  userNameElm.nextElementSibling.innerText = usernameError;

  let nameElm = event.target.elements.name;
  let nameParentElm = nameElm.parentElement;
  if(nameElm.value == "") {
    nameError = "Name cannot be empty!";
    nameParentElm.classList.add('error');
  } else if (doesContainNumber(nameElm.value)) {
    nameError = "Name cannot contain numbers!";
    nameParentElm.classList.add('error');
  } else {
    nameError = "";
    nameParentElm.classList.add('success');
    nameParentElm.classList.remove('error');
  }
  nameElm.nextElementSibling.innerText = nameError;
}

form.addEventListener('submit', handleSubmit);

//can't be empty
//can't be less than 4 characters

