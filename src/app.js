import Tabs from "./components/Tabs.js";
import Counter from "./components/counter/counter.js";
import Timer from "./components/timer/timer.js";

class App {
  constructor() {
    this.counter1 = new Counter();
    this.counter2 = new Counter();
    this.timer1 = new Timer();

    this.elements = [
      new Tabs(this.counter1.id, this.timer1.id),
      this.counter1,
      this.timer1,
    ];
  }

  render(elements) {
    elements.forEach((el) => el.mount(document.getElementById("root")));
  }

  mount() {
    this.render(this.elements);
  }
}

const app = new App();
app.mount();

export default App;
