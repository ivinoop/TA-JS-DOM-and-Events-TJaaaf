let discoGrid = document.querySelector('.disco-grid');

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16); 

}

for (let i = 1; i <= 500; i++) {
  let grid = document.createElement("div");
  grid.classList.add("grid");
  let h3 = document.createElement("h3");
  h3.innerText = getRandomNumber(1, 500);
  
  grid.append(h3);
  discoGrid.append(grid);
};

let allGrids = document.querySelectorAll(".grid");

function handleMouseMove() {
  allGrids.forEach((grid) => {
      grid.style.background = getRandomColor();
      grid.querySelector("h3").innerText = getRandomNumber(1, 500);
      grid.style.color = getRandomColor();
  });
}

discoGrid.addEventListener("mousemove", handleMouseMove);
