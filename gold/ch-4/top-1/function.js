function diskon(x) {
  return (x * 30) / 100;
}

let sale = diskon(20000);
console.log(sale);
console.log("----");

function sayHiTo(name) {
  let halo = `Hai ${name.toUpperCase()}!`;
  return halo;
}

let test1 = sayHiTo("everything");
console.log(test1);
// Output: Hai EVERYTHING!
// let test2 = sayHiTo(100);
// console.log(test2);
// Output: TypeError: name.toUpperCase is not a function
console.log("-----");

// // Function Declaration (ES5)
// function volTabung(r, t) {
//   return 3.14 * r ** 2 * t;
// }

// console.log("Volume Tabung:", volTabung(10, 4));
// // Volume Tabung: 1256

// // Function Expression
// const volTabung = function (r, t) {
//   return 3.14 * r ** 2 * t;
// };

// console.log("Volume Tabung:", volTabung(10, 4));
// // Volume Tabung: 1256

// // Arrow Function (ES6)
// const volTabung = (r, t) => 3.14 * r ** 2 * t;
// console.log("Volume Tabung:", volTabung(10, 4));
// // Volume Tabung: 1256

const strArray = ["JavaScript", "Java", "C"];
function forEach(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

const lenArray = forEach(strArray, (item) => {
  return item.length;
});
console.log(lenArray);
// Output: [ 10, 4, 1 ]
