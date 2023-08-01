import { generateUniqueId } from "../utils/generateUniqueId.js";

class Element {
  constructor(name) {
    this.id = generateUniqueId({ prefix: name });
  }
}

export default Element;
