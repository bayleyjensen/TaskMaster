import ListService from "../Services/ListService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let template = "";
  let lists = store.Lists;
  lists.forEach(lists => (template += lists.template));
  document.querySelector("#lists").innerHTML = template;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  addNewList(event) {
    console.log("we made it");
    event.preventDefault();
    let form = event.target;

    let listData = {
      chores: [],
      name: form.name.value
    };

    ListService.addNewList(listData);
    form.reset();
    _drawLists();
  }

  addChore(event, listId) {
    console.log("great");
    event.preventDefault();
    let formData = event.target;

    let newChore = {
      name: formData.name.value,
      listId: listId
    };
    ListService.addChore(newChore);
    formData.reset();
    _drawLists();
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
