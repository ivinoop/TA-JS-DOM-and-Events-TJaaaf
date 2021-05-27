let boxOne = document.querySelector('.box-one');
let boxTwo = document.querySelector('.box-two');
let clickBtn = document.querySelector('.click-btn');
let mouseMoveBtn = document.querySelector('.mouse-move-btn');

const genBg = (element) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  element.style.backgroundColor = '#' + randomColor;
}

clickBtn.addEventListener('click', () => genBg(boxOne));

mouseMoveBtn.addEventListener('mousemove', () => genBg(boxTwo));
