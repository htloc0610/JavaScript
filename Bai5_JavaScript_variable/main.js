// alert("Huhu");
// prompt("Mời cụ nhập tên: ");

// Khai báo
// var myName;

// Khởi tạo
// var myName = "Trần Như Nhộng";
// let yourName = "Mãi Vẫn Dốt";
// const doSoi = 100;
// Xuất giá trị của biến
// console.log(myName);
// console.log(yourName);
// console.log(doSoi);

// doSoi = 50;
// console.log(doSoi);
// var name = prompt("Mời nhập vào tên của bạn");
// if (name) {
//   console.log("Tên của bạn là: " + name);
// } else {
//   console.log("Bạn đã không nhập tên!");
// }

// number
// let soNguyen = 10;
// let soThuc = 3.14;

// Boolean
// let check = true;

// undefined
// let abc;

// null
// let abcd = null;

// console.log(typeof abcd);
// console.log(abcd);
// console.log(typeof abc);
// console.log(abc);
// console.log(typeof check);
// console.log(check);
// console.log(typeof soNguyen);
// console.log(soNguyen);
// console.log(typeof soThuc);
// console.log(soThuc);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);

// Xuất dữ liệu với biến
// let soA = 25;
// let soB = 5;
// 1
// console.log("Căn bậc 2 của " + soA + " là: " + soB);
// 2
// console.log("Căn bậc 2 của", soA, "là:", soB);
// 3
// console.log(`testing: ${soA} là ${soB}`);
// 4
// console.log(`testing: %s là %s `, soA, soB);

// let a = 4,
//   b = 3,
//   kq = a * b;
// console.log(a + " + " + b + " = " + kq);
// console.log(a, `công với`, b, `=`, kq);
// console.log(`${a} + ${b} = ${kq}`);
// console.log(`%s + %s = %s`, a, b, kq);

// let a = 5;
// let b = 2;
// let thuong = a / b;
// console.log(thuong);

// Ưu tiên()
// let toan = 9.5;
// let van = 8.75;
// let tb = (toan + van) / 2;
// console.log(`Kết quả là: ${tb}`);

// let numberA = parseFloat(prompt("Nhập: "));
// let numberA = Number(prompt("Nhập: "));
// let b = 5;
// let kq = numberA + b;
// console.log(kq);
// let kq2 = numberA - b;
// console.log(kq2);
// let kq3 = numberA * b;
// console.log(kq3);
// let kq4 = numberA / b;
// console.log(kq4);

// Cộng -> chuỗi, khác -> tính toán, không đc -> Nan
// += -= *= /=
// let num = 5;
// num += 5;
// console.log(num);
// num *= 5;
// console.log(num);
// num /= 5;
// console.log(num);
// num %= 5;
// console.log(num);

// ++ --
// let i = 9;
// console.log(i > 0 && i < 10);

// let r = Number(prompt("Nhập: "));
// const P = 2 * r * Math.PI;
// const S = r * r * Math.PI;
// console.log(P);
// console.log(S);

// let a = Number(prompt("Nhập: "));
// let b = Number(prompt("Nhập: "));
// const P = 2 * (a + b);
// const S = a * b;
// console.log(P.toFixed(2));
// console.log(S.toFixed(2));

// == bằng nhau không quan tâm dữ liệu
// === bằng nhau có so giá trị
// console.log(1 != 1);
// console.log(1 != "1");
// console.log(1 !== "1");
// console.log(1 == 1);
// console.log(1 === "1");
// console.log(1 === 1);

// Number
// console.log(isNaN(Number("abc")));
// console.log(Number("123"));
// console.log(Number("123.567"));

// Number.isNaN
// console.log(Number.isNaN(NaN));

//Random [0, 1)
// let random = parseInt(Math.random() * 30);
// console.log(random);

// var dtb = (Math.random() * 10).toFixed(2);
// console.log(`${dtb}`);
// if (dtb > 5.0) {
//   console.log("Bạn đã đỗ");
// } else if (dtb < 7.0) {
//   console.log("Bạn đã trượt 2");
// } else {
//   console.log("Bạn đã trượt");
// }

let num = -10;
let massage = num >= 0 ? "Số dương" : "Số âm";
console.log(massage);
