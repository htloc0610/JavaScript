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
// console.log(c);
// let c = 5;
// console.log(c);

//var: function scope, let, const: block scope
// function example() {
//   console.log(y);
//   if (true) {
//     var y = 20;
//     console.log(y);
//   }
//   console.log(y);
// }
// example();

// let, const: block scope
// function example() {
//   if (true) {
//     let y = 20;
//     console.log(y);
//   }
//   console.log(y);
// }
// example();

// Declaration -> có hosting
// function tinhGiaiThua(N) {
//   if (N === 1 || N === 0) {
//     return 1;
//   }
//   return N * tinhGiaiThua(N - 1);
// }
// console.log(tinhGiaiThua(6));

// ===================================================String=================================================================
// String
// console.log(`hu\nhu`);
// let ten = "huuh";
// console.log(ten[0]);

// length
// console.log(ten.length);

// slice, substring
// console.log("0123456789".slice(0, 2));
// console.log("0123456789".slice(2));
// console.log("0123456789".substring(0, 2));

// trim(), trimEnd(), trimStart()
// let s11 = "             he               lo           lwo               ";
// console.log(s11.trim().length);
// console.log(s11.trimEnd().length);
// console.log(s11.trimStart().length);

//concat(), toUpperCase(), toLowerCase(), charAt()
// console.log(`abc`.concat(`bcd`));
// console.log(`abc`.toUpperCase());
// console.log(`aBc`.toLowerCase());
// console.log(`aBc`.charAt(2));

// replace (oldValue, newValue) repeat (count)
// console.log(`abc def  def`.replace("def", "abc"));
// console.log(`abc def  def`.replace(/def/g, "abc"));
// console.log(`abc `.repeat(3));

//  indexOf , lastIndexOf, includes
// console.log(`abc def  def`.indexOf("d"));
// // từ 5 trở đi
// console.log(`abc def  def`.indexOf("d", 5));
// console.log(`abc def  def`.lastIndexOf("d"));
// // từ đầu đến 6
// console.log(`abc def  def`.lastIndexOf("d", 6));
// // kiếm từ 7
// console.log(`abc def  def`.includes("def", 7));

// startsWith()
// console.log(`abc def  def`.startsWith("def"));
// // Kiếm từ 4
// console.log(`abc def  def`.startsWith("def", 4));
// //endsWith()
// console.log(`abc def  def`.endsWith("def"));
// console.log(`abc def  def`.startsWith("def", 3));

// split()
// có limit
// let arr = "apple,orange,banana".split(",", 2);
// let arr2 = "apple,orange,banana".split("");
// console.log(arr);
// console.log(arr2);
// for (var x of arr) {
//   console.log(x);
// }

// Date
// let date = new Date();
// console.log(date.getMonth() + 1);
// console.log(date.getFullYear());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// let counter = 0;

// function abc() {
//   console.log(counter++);
//   if (counter === 5) {
//     clearInterval(a);
//   }
// }

// // setTimeout(abc(), 1000);
// let a = setInterval(abc, 100);

// Array
// let arr = [];
// console.log(arr);
// let arr1 = [1, 2, "huhu", true];
// console.log(arr1[2]);

// let a = new Array(5);
// console.log(a);

// concat(), push(), unshift(), pop(), shift(), slice(): tạo bản sao, includes()
// console.log([1, `huhu`, 2, 3].concat([5, 6, "hehe"]));
// let a = new Array(1, `huhu`, 2, 3);
// a.push("aaa", 7, true);
// console.log(a);
// console.log(a.unshift());
// console.log(a.pop());
// console.log(a);
// console.log(a.shift());
// console.log(a);

// let b = a.slice();
// console.log(b);
// console.log(b.includes("aaa"));

// indexOf(), lastIndexOf(), reverse(), join(separator)
// console.log([1, 2, "abc", 4].indexOf(0));
// console.log([1, 2, 2, "abc", 4].indexOf(2));
// console.log([1, 2, 2, "abc", 4].lastIndexOf(2));
// console.log([1, 2, 2, "abc", 4].reverse());
// console.log([1, 2, 2, "abc", 4].join());

// splice(start, count, num1, num2, ...)
// let a = [1, 2, "33", 4, 5];
// a.splice(2, 2, 2, 4, 5);
// console.log(a);
// console.log([1, 2, "33", 4, 5].splice(0, 0));

// spread()
// let a = [1, 2, 3];
// let b = [...a];
// console.log(b);
// let c = [...a, ...b, 4];
// console.log(...c);
// console.log(sum(...a));
// console.log(sum(...c));

// function sum(a, b, c) {
//   return a + b + c;
// }

// let M = ["b", "a", "c", 1];
// let M2 = [1, 223, 4, 3323];
// let b = M2.sort();
// console.log(b);
// let c = M2.sort((a, b) => a - b);
// console.log(c);

// reduce()
