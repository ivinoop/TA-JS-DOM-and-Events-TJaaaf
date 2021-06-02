let form = document.querySelector('form');

let formInfo = {};

function handleSubmit(event) {
  event.preventDefault();

  formInfo.adventure = form.elements.adventure.value;
  formInfo.name = form.elements.name.value;
  formInfo.email = form.elements.email.value;
  formInfo.love = form.elements.love.value;
  formInfo.color = form.elements.color.value;
  formInfo.range = form.elements.range.value;
  formInfo.terms = form.elements.terms.checked;
  formInfo.fiction = form.elements.fiction.checked;
  // formInfo.non-fiction = form.elements.non-fiction.checked;

  console.log(formInfo);
}

form.addEventListener('submit', handleSubmit);