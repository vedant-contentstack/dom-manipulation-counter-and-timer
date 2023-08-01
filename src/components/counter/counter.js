import Element from "../Element.js";

class Counter extends Element {
  constructor(count = 0) {
    super("counter");
    this.count = count;
    this.element = null;
  }

  increment() {
    this.count++;
    this.updateDOM();
  }

  decrement() {
    if (this.count === 0) return;
    this.count--;
    this.updateDOM();
  }

  reset() {
    this.count = 0;
    this.updateDOM();
  }

  updateDOM() {
    if (!this.element) return;
    document.getElementById(this.id).querySelector("#count").innerText =
      this.count;
  }

  render() {
    this.element = document.createElement("div");
    this.element.classList.add(
      "is-flex",
      "is-justify-content-center",
      "is-align-items-center",
      "mt-2"
    );
    this.element.id = this.id;

    const dec_btn = document.createElement("button");
    dec_btn.classList.add("button", "is-primary", "is-large", "mr-2");
    dec_btn.innerText = "-";
    dec_btn.id = "decrement";
    dec_btn.onclick = this.decrement.bind(this);

    const inc_btn = document.createElement("button");
    inc_btn.classList.add("button", "is-primary", "is-large", "ml-2");
    inc_btn.innerText = "+";
    inc_btn.id = "increment";
    inc_btn.onclick = this.increment.bind(this);

    const reset_btn = document.createElement("button");
    reset_btn.classList.add("button", "is-primary", "is-large", "ml-2");
    reset_btn.innerText = "Reset";
    reset_btn.id = "reset";
    reset_btn.onclick = this.reset.bind(this);

    const countDisplay = document.createElement("span");
    countDisplay.innerText = this.count;
    countDisplay.id = "count";
    countDisplay.classList.add("is-size-3");

    this.element.append(dec_btn, countDisplay, inc_btn, reset_btn);
  }

  mount(parentEl) {
    if (this.element) return;
    this.render();
    if (parentEl instanceof HTMLElement) {
      parentEl.appendChild(this.element);
      return;
    }
    document.body.append(this.element);
  }
}

export default Counter;
