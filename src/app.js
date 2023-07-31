import "./counter/counter.js";
import "./timer/timer.js";

const counter = document.querySelector("#counter-btn");
const timer = document.querySelector("#timer-btn");

counter.addEventListener("click", showCounter);
timer.addEventListener("click", showTimer);

function showCounter() {
  document.querySelector("#counter").classList.remove("is-hidden");
  document.querySelector("#timer").classList.add("is-hidden");
}

function showTimer() {
  document.querySelector("#timer").classList.remove("is-hidden");
  document.querySelector("#counter").classList.add("is-hidden");
}
