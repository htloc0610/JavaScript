// function mouseOver() {
//   document.getElementById("message").textContent = "Đang trỏ";
// }

// function mouseOut() {
//   document.getElementById("message").textContent = "Đang thoát";
// }

// function setup() {
//   let btn = document.getElementById("btn2");
//   btn.onmouseover = mouseOver;
//   btn.onmouseout = mouseOut;
// }

// window.onload = setup;

// const btn = document.getElementById("btn3");
// btn.addEventListener("click", function () {
//   alert("Bạn đã click vào button");
// });

// function handleClick() {
//   alert("Bạn đã click vào button");
// }
// btn.addEventListener("click", handleClick);

// function randomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);
//   return `rgb(${r},${g},${b})`;
// }

// const btnList = document.querySelectorAll(".btn");

// function setColor() {
//   this.style.color = randomColor();
//   this.style.backgroundColor = randomColor();
// }

// for (let btn of btnList) {
//   btn.addEventListener("click", setColor);
// }

// const inp = document.querySelector("#inp");
// inp.addEventListener("keydown", function () {
//   console.log("Keydown");
// });
// inp.addEventListener("keyup", function (event) {
//   if (event.key === "r") {
//     document.body.style.background = "red";
//   }
// });

// const form = document.querySelector("#login");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
// });

// const form = document.querySelector("#login");
// const userName = document.querySelector("#name");
// const ulList = document.querySelector("#list");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const liTag = document.createElement("li");
//   liTag.textContent = userName.value;
//   ulList.appendChild(liTag);
//   userName.value = "";
// });

// const input = document.querySelector("#name");
// // input.addEventListener("change", function (e) {
// //   console.log(e);
// // });
// input.addEventListener("input", function (e) {
//   console.log(e);
// });
