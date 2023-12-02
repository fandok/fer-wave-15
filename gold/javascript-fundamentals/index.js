// alert("Hello world");
// alert(3 + 1 + 2);

// variables
// let message = "Hello!";

// console.log(message); // shows the variable content

let name = "John";

console.log(`Hello, ${name}!`);

console.log(`the result is ${1 + 2}`);

let year = 2016;

if (year === 2016) {
  console.log("benar");
} else {
  console.log("salah");
}

year === 2016 ? console.log("benar lagi") : console.log("salah lagi");

// if (age < 3) {
//   message = "Hi, baby!";
// } else if (age < 18) {
//   message = "Hello!";
// } else if (age < 100) {
//   message = "Greetings!";
// } else {
//   message = "What an unusual age!";
// }

// let age = Number(prompt("Berapa umurmu?"));

// console.log(age);

// switch (age) {
//   case age < 3: {
//     message = "Hi, baby!";
//     break;
//   }
//   case age < 18: {
//     message = "Hello!";
//     break;
//   }
//   case age < 100: {
//     message = "Greetings!";
//     break;
//   }
//   default: {
//     message = "What an unusual age!";
//     break;
//   }
// }

// alert(message);

let personName = "Budi";
let personAge = 20;

console.log(personName === "Agus" || personAge > 17);

let listAge = [23, 17, 12, 30, 31];

listAge.forEach((val) => {
  console.log(val);
});

let listNewAge = listAge.map((val) => {
  return val + 10;
});

console.log(listNewAge);

// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   alert(message);
// }

// showMessage();
// alert(message);

function showMessage(from, text) {
  // parameters: from, text
  alert(from + ": " + text);
}

showMessage("Ann", "Hello!"); // Ann: Hello! (*)
showMessage("Ann", "What's up?"); // Ann: What's up? (**)
