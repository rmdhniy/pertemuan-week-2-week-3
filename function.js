"use strict";
//function declaration
function sapa(nama) {
    console.log("Halo,aku" + nama);
}
sapa("onoy");
function calculate(a, b, c) {
    return a + b + c;
}
let hasil = calculate(3, 5, 1);
console.log("Hasil Penjumlahan: " + hasil);
let multiplication = (x, y) => {
    return x * y;
};
//arrow Function
let result = multiplication(5, 10);
console.log("Hasil perkalian: " + result);
//lat.tugas1
let cube = function (num) {
    return num ** 3;
};
console.log(cube(3));
//lat.tugas2
function greet(nama) {
    console.log("Haii, aku " + nama);
}
greet("yudo");
//lat.tugas3
//belum
//object
let person2;
person2 = {
    name: "Ramadhani yudo",
    age: 19,
    address: "Tegal"
};
console.log(person2);
