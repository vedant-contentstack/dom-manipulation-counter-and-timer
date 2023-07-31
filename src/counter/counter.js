class Counter {
  constructor(count) {
    this.count = count;
  }

  increment() {
    this.count++;
  }

  decrement() {
    if (this.count === 0) return;
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}

const counter = new Counter(0);

const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const reset = document.querySelector("#reset");

let count = document.querySelector("#count");

count.innerText = counter.count;

increment.addEventListener("click", function () {
  counter.increment();
  count.innerText = counter.count;
});

decrement.addEventListener("click", function () {
  counter.decrement();
  count.innerText = counter.count;
});

reset.addEventListener("click", function () {
  counter.reset();
  count.innerText = counter.count;
});
