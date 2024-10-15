let element = document.getElementById("myElement");

// thêm
element.classList.add("newClass");
console.log(element.classList.contains("newClass"));

// xoá
// element.classList.remove("newClass");
// console.log(element.classList.contains("newClass"));

// thay thế
element.classList.replace("newClass", "abc");
console.log(element.classList.contains("newClass"));

// toggle xoá nếu có, thêm nếu chưa
element.classList.toggle("newClass");
element.classList.toggle("newClass");
