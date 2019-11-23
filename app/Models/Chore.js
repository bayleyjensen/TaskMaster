import { generateId } from "../utils.js";

export default class Chore {
  constructor({ id = generateId(), name, listId }) {
    this.id = id;
    this.name = name;
    this.listId = listId;
  }
  get template() {
    return /*html*/ `
    <dt>${this.name}</dt>
    `;
  }
}
