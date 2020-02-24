buttonIndex = [];

document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('#todo');
  const form = document.querySelector('#form');
  const button = document.querySelector('#button');
  // const dynamic_buttons = document.querySelectorAll('.dynamic_btn');
  // console.log("val of buttons", dynamic_btn);
  //
  // if dynamic_buttons != undefined {
  //   dynamic_buttons.addEventListener('change',  deleteAll);
  // }


  form.addEventListener('submit', handleFormSubmit);
  button.addEventListener('click', deleteAll);
});

const handleFormSubmit = function (event) {

  // console.log("buttonIndex length:", buttonIndex.length);
  event.preventDefault();
  let btnCounter = buttonIndex.length;
  const newBtn = document.createElement("BUTTON");
    newBtn.type = "button";
    newBtn.id = `btn_${btnCounter}`;
    newBtn.classList.add('btn-style', 'dynamic_btn');

  buttonIndex.push(newBtn);

  const list = document.querySelector('#todo');
  const newItem = document.createElement('li');
  const newText = document.createElement('p');
  const newText2 = document.createElement('p');
    newItem.classList.add('todo-style');
    newText.textContent = this.first_name.value;
    newText2.textContent = this.last_name.value;

  newItem.appendChild(newText);
  newItem.appendChild(newText2);
  list.appendChild(newItem);
  list.appendChild(newBtn);
  newBtn.addEventListener('click', deleteSelf(newBtn.id))
};
function deleteSelf(id) {
  const self = document.querySelector(`#${id}`);
  self.textContent = 'click to delete';

}
const deleteAll = function (event) {
  const list = document.querySelector('#todo');
  list.innerHTML = "";

}

// const createElement = (container, firstName, secondName, tag, style) => {
//     const para1 = document.createElement("p");
//       para1.textContent = firstName;
//     const para2 = document.createElement("p");
//       para2.textContent = secondName;
//
//     const element = document.createElement(tag);
//     element.classList.add(style);
//     element.appendChild(para1);
//     element.appendChild(para2);
//     container.appendChild(element);
// }
