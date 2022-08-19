// пропишем функцию random
const body = document.querySelector("body");
const end = document.querySelector(".end");
const random = (min, max) => {
 const rand = min + Math.random() * (max - min + 1);
 return Math.floor(rand);
};
let total = 0;
// найдем кнопку
const btn = document.querySelector("#btn");
// повесим обработчик событий
btn.addEventListener("mouseenter", () => {
 if (x > 0) {
  btn.style.left = `${random(0, 90)}%`;
  btn.style.top = `${random(0, 90)}%`;
 }

 if (x === 0) {
  btn.style.left = `50%`;
  btn.style.top = `50%`;
 }
});

// в случае победы выведем:
btn.addEventListener("click", () => {
 alert("Congrats! You hit the button! What are you doing with your life? :D");
 total += 1;
});

let timer; // пока пустая переменная
let x = "30"; // стартовое значение обратного отсчета
countdown(); // вызов функции
function countdown() {
 // функция обратного отсчета
 let y = x.toString();
 document.getElementById("rocket").innerHTML = y.padStart(2, "0");
 x--; // уменьшаем число на единицу
 if (x < 0) {
  btn.classList.add("rotate-90-cw");
  end.classList.remove("end");

  clearTimeout(timer); // таймер остановится на нуле
 } else {
  timer = setTimeout(countdown, 1000);
 }
}

// rotate-90-cw
