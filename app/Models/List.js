import { generateId } from "../utils.js";
import Chore from "./Chore.js";

export default class List {
  constructor(data) {
    this.id = data.id || generateId();
    this.name = data.name;
    this.chores = data.chores.map(c => new Chore(c));
  }
  get template() {
    return /*html*/ `
    <div class="col-3">
    <h1>${this.name}</h1>
    ${this.drawChore()}
    <form onsubmit="app.listController.addChore(event)">
      <input
        type="text"
        class="form-control"
        placeholder="chore"
        name="name"
        id="name"
      />
      <button class='btn btn-secondary' type='submit'>add</button>
    </form>
  </div>`;
  }
  drawChore() {
    let template = "";
    this.chores.forEach(Chore => (template += Chore.template));
    return template;
    //Be sure to add the methods needed to create the view template for this model
    //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  }
}
