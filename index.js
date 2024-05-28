const btn1 = document.getElementsByClassName("button1")[0];
const btn2 = document.getElementsByClassName("button2")[0];
const btn3 = document.getElementsByClassName("button3")[0];
const btn4 = document.getElementsByClassName("button4")[0];
const btn5 = document.getElementsByClassName("button5")[0];
const btn6 = document.getElementsByClassName("button6")[0];
const btn7 = document.getElementsByClassName("button7")[0];
const body = document.querySelector("body");
btn1.addEventListener("click", () => {
  body.style.backgroundColor = "#9400D3";
});
btn2.addEventListener("click", () => {
  body.style.backgroundColor = "#4B0082";
});
btn3.addEventListener("click", () => {
  body.style.backgroundColor = "#0000FF";
});
btn4.addEventListener("click", () => {
  body.style.backgroundColor = "#00FF00";
});
btn5.addEventListener("click", () => {
  body.style.backgroundColor = "#FFFF00";
});
btn6.addEventListener("click", () => {
  body.style.backgroundColor = "#FF7F00";
});
btn7.addEventListener("click", () => {
  body.style.backgroundColor = "#FF0000";
});
