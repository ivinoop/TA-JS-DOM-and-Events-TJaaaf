let root = document.querySelector('.root');
let allPeople = got.houses.reduce( (acc,cv) => {
  acc = acc.concat(cv.people); 
  return acc;
},[]);

allPeople.forEach(person => {

  let div = document.createElement('div');
  div.classList.add('people-card','flex-30');

  let infoDiv = document.createElement('div');
  infoDiv.classList.add('infoDiv','flex');

  let img = document.createElement('img');
  img.src = person.image;
  
  let h3 = document.createElement('h3');
  h3.innerText = person.name;
  
  let p = document.createElement('p');
  p.innerText = person.description;
  
  let a = document.createElement('a');
  a.innerText = "Learn More";
  a.href = person.wikiLink;
  
  infoDiv.append(img,h3);
  div.append(infoDiv,p,a);
  root.append(div);
  });
    

// {
//   peoplCard : flex-30
//     infoDiv : flex
//       img
//       h3
//     p
//     a
// }