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

// reduce(function, [initialValue])
// let M1 = [1, 2, 3];
// let sum2 = M1.reduce(
//   // Function
//   (accumulator, currentValue, currentIndex, array) => {
//     return currentValue + accumulator;
//   },
//   0
// );
// console.log(sum2);

// filter()

let student = {
  fullName: "Tran Nhu Nhong",
  birthYear: 2005,
  andress: {
    city: "Hanoi",
    country: "VietNam",
  },
  score: [8, 9, 10],
  getAge: function () {
    return 2024 - this.birthYear;
  },
  getAge2: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  dtb: function () {
    sumScore = this.score.reduce((a, b) => a + b, 0);
    return sumScore / 3;
  },
};

// student["web"] = "huhu";
// student["web"] = "abc";
// console.log(student);
// console.log(student["andress"].city);
// console.log(student.getAge2());
// console.log(student.age);
// console.log(student.dtb());

// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// let target = { c: 100 };
// let source1 = { a: 1 };
// let source2 = { b: 2 };
// Object.assign(target, source1, source2);
// console.log(target);
// console.log(target.hasOwnProperty("a"));
// Object.freeze(target);
// delete target.a;
// console.log(target);

// var cho tái định nghĩa, let thì không
// const target = { c: 100 };
// target.isAdmin = true;
// console.log(target);

// const SinhVien = function (fullName, ID, birthYear, homeTown) {
//   this.fullName = fullName;
//   this.ID = ID;
//   this.birthYear = birthYear;
//   this.homeTown = homeTown;
//   this.showInfo = function () {
//     return `${fullName} ${ID} ${birthYear} ${homeTown}`;
//   };
// };

// function SinhVien2(fullName, ID, birthYear, homeTown) {
//   this.fullName = fullName;
//   this.ID = ID;
//   this.birthYear = birthYear;
//   this.homeTown = homeTown;
//   this.showInfo = function () {
//     return `${fullName} ${ID} ${birthYear} ${homeTown}`;
//   };
// }

// console.log(new SinhVien2("Lộc", 123, 2004, "Đăk Lăk"));
// console.log(Object.getPrototypeOf(new SinhVien2("Lộc", 123, 2004, "Đăk Lăk")));

// let M = new Array();
// console.log(M);
// console.log(typeof M);
// console.log(M);

// class SinhVien {
//   constructor(fullName, ID, birthYear, homeTown) {
//     this.fullName = fullName;
//     this.ID = ID;
//     this.birthYear = birthYear;
//     this.homeTown = homeTown;
//   }
//   showInfo() {
//     return `${this.fullName} ${this.ID} ${this.homeTown}}`;
//   }

//   //   static
//   static calcArea(radius) {
//     return Math.PI * radius * radius;
//   }
// }
// SinhVien.prototype.calcAge = function (year) {
//   return year - this.birthYear;
// };
// console.log(SinhVien.calcArea(5.6));

// let a = new SinhVien("Lộc", 1, 1, "Đăk Lăk");
// a.name = "abc";
// console.log(a.calcAge(2024));

// class School {
//   constructor(id, name, birthYear) {
//     this.id = id;
//     this.name = name;
//     this.birthYear = birthYear;
//   }

//   calcAge(currentYear) {
//     return currentYear - this.birthYear;
//   }
// }

// class Student extends School {
//   constructor(id, name, birthYear, major) {
//     super(id, name, birthYear); //Gọi constructor cha
//     this.major = major;
//   }

//   study() {
//     console.log(`${this.name} ${this.major}`);
//   }
// }

// const p1 = new School("P2004001", "Jacky", 2000);
// console.log(`${p1.id} ${p1.calcAge(2024)}`);

// const p2 = new Student("P2004001", "Jacky", 2000, "Student");
// console.log(p2);
// console.log(`${p2.id} ${p2.calcAge(2024)}`);
// p2.study();

// class Shape {
//   constructor(name) {
//     this.name = name;
//   }
//   calculateArea() {
//     return 0;
//   }
// }

// class Square extends Shape {
//   constructor(name, side) {
//     super(name);
//     this.side = side;
//   }
//   calculateArea() {
//     return this.side * this.side;
//   }
// }
// class Rectangle extends Shape {
//   constructor(name, width, height) {
//     super(name);
//     this.width = width;
//     this.height = height;
//   }
//   calculateArea() {
//     return this.width * this.height;
//   }
// }

// const sq1 = new Square("Hình vuông", 1);
// const rec1 = new Rectangle("Hình chữ nhật", 4, 2);
// console.log(`${sq1.calculateArea()}`);
// console.log(`${rec1.calculateArea()}`);

// class SinhVien {
//   constructor(fullName, ID, birthYear, homeTown, score) {
//     this.fullName = fullName;
//     this.ID = ID;
//     this.birthYear = birthYear;
//     this.homeTown = homeTown;
//     this.#score = score; //protected
//   }
//   showInfo() {
//     return `${this.fullName} ${this.ID} ${this.homeTown}}`;
//   }
//   get score() {
//     return this.#score;
//   }

//   set score(value) {
//     this.#score = value;
//   }
// }

// const join = new SinhVien("P20202", "Lộc", 2021, "Đăk Lăk", 95);
// console.log(join.score);
// join.score = 250;
// console.log(join.score);

class Wallet {
  #pin;
  #balance;
  #isPinEntered = false;
  constructor(bankName, pin) {
    this.bankName = bankName;
    this.#pin = pin;
    this.#balance = 0;
  }

  deposit(value) {
    this.#balance += value;
  }
  // ====================================
  #validatePin(pin) {
    return this.#pin === pin;
  }

  //   Public
  enterPin(pin) {
    if (this.#validatePin(pin) === true) {
      this.#isPinEntered = true;
    } else {
      console.log("Sai");
    }
  }
  // ====================================
  widthdraw(value) {
    if (!this.#isPinEntered) {
      console.log("Sai");
      return;
    }
    if (value > this.#balance) {
      console.log("Không đủ");
    } else {
      this.#balance -= value;
      console.log("Đủ");
    }
  }

  get balance() {
    if (!this.#isPinEntered) {
      console.log("Sai");
      return;
    }
    return this.#balance;
  }
}

const wallet = new Wallet("MBBank", "1234");
wallet.deposit(500);
wallet.enterPin("1234");
wallet.widthdraw(300);
console.log(wallet.balance);
console.log(wallet);
