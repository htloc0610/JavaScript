// Number, parseInt, parseFloat
// String
// let a = 123;
// console.log(typeof a);
// let b = String(a);
// console.log(typeof b);
// console.log(`Giá trị của b là: ${b}`);
// // falsy -> false 0 -0 0n "" null undefined NaN
// let c = Boolean(1);
// console.log(c);

// let number = prompt("Nhập:");
// switch (number % 2) {
//   case 0:
//     console.log("Số chẵn");
//     break;
//   case 1:
//     console.log("Số lẻ");
//     break;
//   default:
//     console.log("Không phải số");
// }

// let i = 1;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// do {
//   console.log(i);
//   i++;
// } while (i < 0);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// function ten(a, b) {
//   console.log(`Hello ${a / b}`);
//   return a - b;
// }

// console.log(ten("23", 2));

// function tong(a = 0, b = 0) {
//   return a + b;
// }

// console.log(tong("56", 3));

// function cong(a, b) {
//   return a + b;
// }

// function nhan(x, y) {
//   return x * y;
// }

// function congNhan(x, y, z) {
//   return nhan(cong(x, y), z);
// }

// console.log(congNhan(1, 5, 3));

// global scope: toàn cục, truy được mọi nơi
// function-scope: phạm vi của hàm
// block-scope: phạm vi của khối

// Hoisting: di chuyển khai báo lên đầu phạm vi hiện tại (lệnh, hàm, block)
// var nâng cao lên tập lệnh, hàm hiện tại, có thể sử dụng trước khi được khai báo
// let, const nâng cao lên đầu phạm vi block scope, nhưng không thể sử dụng trước khi được khai báo
