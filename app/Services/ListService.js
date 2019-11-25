import List from "../Models/List.js";
import Store from "../store.js";
import store from "../store.js";
import Chore from "../Models/Chore.js";

//Public
class ListService {
  addNewList(listData) {
    console.log("we made it even further!");
    let newList = new List(listData);
    Store.State.lists.push(newList);
    store.saveState();
  }
  addChore(newChore) {
    console.log("aaaaooogggaaaa");
    let freshChore = new Chore(newChore);
    console.log(freshChore);
    store.State.lists[newChore].chores.push(freshChore);
    store.saveState();
  }
  deleteList(listId) {
    let foundList = store.State.lists.findIndex(list => list.id == listId);
    store.State.lists = store.State.lists.filter(list => list.id != listId);
    store.saveState();
  }

  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
