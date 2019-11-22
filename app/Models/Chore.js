import { generateId } from "../utils.js";

export default class Chore {
  constructor(data) {
    this.id = data.id || generateId();
    this.name = data.name;
  }
  get template() {
    return /*html*/ `
    <dt>${this.name}</dt>
    `;
  }
}
