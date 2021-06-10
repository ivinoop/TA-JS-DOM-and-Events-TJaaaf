// let ul = document.querySelector("ul");
// let input = document.querySelector("input");

// function handleInput(e){
//     if(e.keyCode === 13){
//        let li = document.createElement("li");
//        li.innerText = input.value;
//        ul.append(li);
//        let x = document.createElement("input")
//        x.setAttribute("type","checkbox")
//        x.classList.add("checkbox");
//        li.prepend(x);
//        let span = document.createElement("span");
//        span.classList.add("span");
//        span.innerText = "❌";
//        li.append(span);
//        span.addEventListener("click" , () => {
//            li.remove();
//        })
//     }
// }

// input.addEventListener("keydown", handleInput)

let input = document.querySelector(`input[type="text" ]`);
let rootElm = document.querySelector('.movie-list'); 

let allMovies = [
  // {
  //   name: "Inception",
  //   watched: true,
  // },
  // {
  //   name: "Forrest Gump",
  //   watched: false,
  // }
];


input.addEventListener('keyup', (event) => {
  //adding a movie
  if(event.keyCode === 13) {
    allMovies.push({
      name: event.target.value,
      watched: false,
    });
    event.target.value = "";
    createMovieUI();
  }  
});

function deleteMovie(event) {
  let id = event.target.dataset.id;
  allMovies.splice(id, 1);
  createMovieUI();
}

function handleCheck(event) {
  let id = event.target.id;
   allMovies[id].watched = !allMovies[id].watched;
}

function createMovieUI() {
  rootElm.innerHTML = "";
  allMovies.forEach((movie, i) => {
    let li = document.createElement("li");
    let input = document.createElement("input");
    input.type = "checkbox";
    input.id = i;
    input.checked = movie.checked;
    input.addEventListener('click', handleCheck);
    let label = document.createElement("label");
    label.for = i;
    label.innerText = movie.name;
    let span = document.createElement("span");
    span.innerText = "❌";
    span.addEventListener('click', deleteMovie);
    span.setAttribute("data-id", i);

    li.append(input, label, span);
    rootElm.append(li);
  });
}

createMovieUI();