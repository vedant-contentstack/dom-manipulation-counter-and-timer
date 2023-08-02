import App from "../app.js";
import Element from "./Element.js";
import Counter from "./counter/counter.js";
import Timer from "./timer/timer.js";

class Tabs extends Element {
  constructor(counterId, timerId) {
    super("tabs");
    this.element = null;
    this.active = "counter";
    this.isUpdate = false;
    this.counterId = counterId;
    this.timerId = timerId;
  }

  toggleTabs() {
    if (this.active === "counter") {
      document.getElementById(this.counterId).classList.remove("is-hidden");
      document.getElementById(this.timerId).classList.add("is-hidden");
    }
    if (this.active === "timer") {
      document.getElementById(this.timerId).classList.remove("is-hidden");
      document.getElementById(this.counterId).classList.add("is-hidden");
    }
  }

  updateDOM(name) {
    this.isUpdate = true;
    this.active = name;
    this.toggleTabs();
    this.mount(document.getElementById("root"));
  }

  render() {
    this.element = document.createElement("div");
    this.element.classList.add(
      "tabs",
      "is-toggle",
      "is-toggle-rounded",
      "is-fullwidth"
    );
    this.element.id = this.id;
    const tabsList = document.createElement("ul");

    const tab1 = document.createElement("li");
    this.active === "counter" && tab1.classList.add("is-active");
    tab1.innerHTML = "<a id='counter-tab'><span>Counter</span></a>";
    tab1.onclick = this.updateDOM.bind(this, "counter");

    const tab2 = document.createElement("li");
    this.active === "timer" && tab2.classList.add("is-active");
    tab2.innerHTML = "<a id='timer-tab'><span>Timer</span></a>";
    tab2.onclick = this.updateDOM.bind(this, "timer");

    tabsList.append(tab1, tab2);
    this.element.append(tabsList);
  }

  mount(parentEl) {
    if (this.element && !this.isUpdate) return;
    this.render();

    if (this.isUpdate) {
      const old = document.getElementById(this.id);
      old.parentElement.removeChild(old);
    }

    if (parentEl instanceof HTMLElement) {
      parentEl.insertBefore(this.element, parentEl.firstChild);
      return;
    }
    document.body.append(this.element);
    this.isUpdate = false;
  }
}

export default Tabs;
