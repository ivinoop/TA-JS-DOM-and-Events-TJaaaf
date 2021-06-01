let display = document.querySelector('.calc-screen');
let allBtns = document.querySelectorAll('button');

let initialValue = 0;

function handleBtnClick(event) {
  if(event.target.classList.contains('equal')) {
    display.innerText = eval(display.innerText);
    return;
  }
  if(event.target.classList.contains('clear')) {
    display.innerText = initialValue;
    return;
  }
  if(display.innerText == initialValue) {
    display.innerText = event.target.innerText;
  } else {
    display.innerText += event.target.innerText;
  }
}

allBtns.forEach((btn) => {
  btn.addEventListener('click', handleBtnClick);
});

display.innerText = initialValue;