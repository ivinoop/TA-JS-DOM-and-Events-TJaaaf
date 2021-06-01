// Genrate random number from 1 to 12.

function getRandomNumber(min = 0, max = 0) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//  Genrate Random color

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// // console.log(getRandomNumber(1, 12));

// create EventHandler for Wrapper 1 Without event delegation

let firstBoxes = document.querySelectorAll(".first li");

firstBoxes.forEach((box)  => {
  box.addEventListener("click", (event) => {
      let box = event.target;
      firstBoxes.forEach(box => {
              box.innerText = "";
              box.style.background = "#444";
              box.style.transform = "none";
      });

      box.style.background = getRandomColor();
      box.innerText = getRandomNumber(1, 12);
      box.style.color = getRandomColor();
      box.style.transform = "rotateY(360deg)";
      box.style.transition = " 1s ease-in-out"; 
      setTimeout(() => {
          box.innerText = "";
          box.style.transform = "none";
          box.style.background = "#444";
      }, 5000);
  })
});

// Create Eventhandler of Wrapper 2 with event Delegation

let secondBox = document.querySelector(".second");
let secondBoxes = document.querySelectorAll(".second li");

secondBox.addEventListener("click", (event) => {
  let box = event.target;
  secondBoxes.forEach(box => {
      box.innerText = "";
      box.style.background = "#444";
      box.style.transform = "none";
  });

  box.innerText = getRandomNumber(1, 12);
  box.style.background = getRandomColor();
  box.style.color = getRandomColor();
  box.style.transform = "rotateY(360deg)";
  box.style.transition = " 1s ease-in-out"; 

  setTimeout(() => {
      box.innerText = "";
      box.style.transform = "none";
      box.style.background = "#444";
  }, 5000);
});