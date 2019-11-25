import { generateId } from "../utils.js";
import Chore from "./Chore.js";

export default class List {
  constructor({ id = generateId(), name, chores = [] }) {
    this.id = id;
    this.name = name;
    this.chores = chores.map(c => new Chore(c));
  }
  get template() {
    return /*html*/ `
    <div class="col-3">
    <h1>${this.name}</h1>
    <p id="chore"> 
    <h3>${this.drawChore()}</h3>
    </p>
    <form onsubmit="app.listController.addChore(event, '${this.id}')">
      <input
        type="text"
        class="form-control"
        placeholder="chore"
        name="name"
        id="name"
      />
  <button class='btn btn-secondary' type="submit" onclick="app.listController.addChore(event, listId)" >add</button>
  <button class='btn btn-danger' type="button" onclick="app.listController.deleteList('${
    this.id
  }')">Done</button>
      </form>
  </div>`;
  }
  drawChore() {
    let template = "";
    this.chores.forEach(Chore => (template += Chore.template1));
    return template;
    //Be sure to add the methods needed to create the view template for this model
    //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  }
}
