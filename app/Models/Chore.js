import { generateId } from "../utils.js";
import List from "../Models/List.js";
export default class Chore {
  constructor({ id = generateId(), name, listId }) {
    this.id = id;
    this.name = name;
    this.listId = listId;
  }
  get template1() {
    return /*html*/ `
    <dt>${this.name}</dt>
    `;
  }
}
