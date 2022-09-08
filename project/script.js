const input = document.querySelector(".input");
const body = document.querySelector(".body");
const reload = document.querySelector(".reload");
const counter = document.querySelector(".counter");

const arr = [];
let newArr = [];
let i = 1;

while (i < 25) {
  const num = Math.ceil(Math.random() * 24);

  if (!arr.includes(num)) {
    if (arr.length < 12) {
      arr.push(num);
    }
  } else continue;
  body.insertAdjacentHTML(
    "beforeend",
    `<button class='button' value='${i}'>${i}</button>`
  );

  i++;
}
const button = [...document.querySelectorAll(".button")];
button.forEach((e) => {
  if (e.value % 8 === 0) {
    e.insertAdjacentHTML("afterend", `</br>`);
  }
});
button.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let a = parseInt(e.target.value);
    if (
      !elem.matches(".button-clicked") &&
      !newArr.includes(e.target.value) &&
      newArr.length !== 12
    ) {
      elem.classList.add("button-clicked");
      newArr.push(a);
    } else {
      elem.classList.remove("button-clicked");
      newArr = newArr.filter((el) => {
        return el !== a;
      });
    }
    let finalArr = [];
    for (let x = 0; x < arr.length; x++) {
      for (let y = 0; y < arr.length; y++) {
        if (arr[x] === newArr[y]) {
          finalArr.push(newArr[y]);
        }
      }
    }
    counter.textContent = `Выбрано ${newArr.length} из ${arr.length}`;
    if (newArr.length === 12) {
      button.forEach((e) => {
        e.setAttribute("disabled", "disabled");
      });
      if (finalArr.length < 4 || finalArr.length > 8) {
        body.insertAdjacentHTML(
          "beforeend",
          `<div><p>Результат: ${arr.sort(
            (a, b) => a - b
          )}</p><p>Ваш результат:${newArr.sort(
            (a, b) => a - b
          )}</p><p>Совпавшие номера: ${finalArr.sort(
            (a, b) => a - b
          )}</p><p class="congratulation">Вы выиграли!</p></div>`
        );
      } else {
        body.insertAdjacentHTML(
          "beforeend",
          `<div><p>Результат: ${arr.sort(
            (a, b) => a - b
          )}</p><p>Ваш результат:${(newArr = newArr.sort(
            (a, b) => a - b
          ))}</p><p>Совпавшие номера: ${finalArr.sort(
            (a, b) => a - b
          )}</p><p class="unfortunately">Вы не выиграли =(</p></div>`
        );
      }
    }
  });
});

reload.addEventListener("click", () => {
  location.reload();
});


