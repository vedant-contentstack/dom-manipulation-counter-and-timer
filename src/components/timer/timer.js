import Element from "../Element.js";

class Timer extends Element {
  constructor(seconds = 0, minutes = 0, hours = 0) {
    super("timer");
    this.timer = null;
    this.seconds = seconds;
    this.minutes = minutes;
    this.hours = hours;
  }

  setTime() {
    this.seconds++;
    if (this.seconds == 60) {
      this.seconds = 0;
      this.minutes++;
      if (this.minutes == 60) {
        this.minutes = 0;
        this.hours++;
      }
    }
    this.updateDOM();
  }

  stopWatch() {
    clearInterval(this.timer);
  }

  resetWatch() {
    clearInterval(this.timer);
    this.seconds = this.minutes = this.hours = 0;
    this.updateDOM();
  }

  startWatch() {
    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(this.setTime.bind(this), 1000);
  }

  updateDOM() {
    if (!this.element) return;
    document
      .getElementById(this.id)
      .querySelector(
        "#display-time"
      ).innerText = `${this.hours} : ${this.minutes} : ${this.seconds}`;
  }

  render() {
    this.element = document.createElement("div");
    this.element.classList.add(
      "is-hidden",
      "is-flex",
      "is-justify-content-center",
      "is-align-items-center",
      "mt-2"
    );
    this.element.id = this.id;

    const stop_btn = document.createElement("button");
    stop_btn.classList.add("button", "is-primary", "is-large", "mr-2", "ml-2");
    stop_btn.innerText = "Stop";
    stop_btn.id = "stop";
    stop_btn.onclick = this.stopWatch.bind(this);

    const play_btn = document.createElement("button");
    play_btn.classList.add("button", "is-primary", "is-large", "ml-2");
    play_btn.innerText = "Play";
    play_btn.id = "play";
    play_btn.onclick = this.startWatch.bind(this);

    const reset_btn = document.createElement("button");
    reset_btn.classList.add("button", "is-primary", "is-large", "ml-2");
    reset_btn.innerText = "Reset";
    reset_btn.id = "replay";
    reset_btn.onclick = this.resetWatch.bind(this);

    const timerDisplay = document.createElement("span");
    timerDisplay.innerText = `${this.hours} : ${this.minutes} : ${this.seconds}`;
    timerDisplay.id = "display-time";
    timerDisplay.classList.add("is-size-3");

    this.element.append(timerDisplay, stop_btn, play_btn, reset_btn);
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

export default Timer;
