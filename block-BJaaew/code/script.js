function main() {
  let rootElement = document.querySelector(".container");
  let rootTags = document.querySelector(".tags");

  let allPeople = got.houses.reduce((acc, cv) => {
    acc = acc.concat(cv.people);
    return acc;
  }, []);

  let activeHouse = "";

  let search = document.querySelector("#search");
  search.addEventListener("input", (event) => { 
      if (event.target.value !== "") {
        peopleWithName = allPeople.filter((people) =>
          people.name
            .toLocaleLowerCase()
            .includes(event.target.value.toLocaleLowerCase())
        );
      if (peopleWithName.length === 0) {
        alert(`No Character Found With the Name "${event.target.value}".`);
        event.target.value = "";
      } else {
        rootElement.innerHTML = "";
        createCardsUI(peopleWithName);
        createTagsUI(allTags);
      }
    } else {
      createCardsUI(allPeople);
      createTagsUI(allTags);
    }
  });

  let allTags = got.houses.map((house) => house.name);
  function createTagsUI(tags = []) {
    rootTags.innerHTML = "";
    tags.forEach((tag) => {
      let li = document.createElement("li");
      li.innerText = tag;

      if (activeHouse === tag) {
        li.classList.add("active");
      }
      li.addEventListener("click", () => {
        activeHouse = tag;
        let peopleOfHouse =
          got.houses.find((house) => house.name === tag).people || [];
        createCardsUI(peopleOfHouse);
        createTagsUI(allTags);
      });
      rootTags.append(li);
    });
  }

  function createCardsUI(data = []) {
    rootElement.innerHTML = "";
    data.forEach((people) => {
      let li = document.createElement("li");
      li.classList.add("box");
      let div = document.createElement("div");
      div.classList.add("name-pic");
      let charImg = document.createElement("img");
      charImg.src = people.image;
      charImg.alt = people.name;
      let charName = document.createElement("h4");
      charName.innerText = people.name;
      div.append(charImg, charName);
      let charDescription = document.createElement("p");
      charDescription.innerText = people.description;

      let learnMore = document.createElement("a");
      learnMore.innerText = "Learn More";
      learnMore.href = people.wikiLink;
      learnMore.target = "_blank";
      learnMore.classList.add("learn");

      li.append(div, charDescription, learnMore);
      rootElement.append(li);
    });
  }

  createCardsUI(allPeople);
  createTagsUI(allTags);
}

main();