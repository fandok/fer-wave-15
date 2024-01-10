// Contoh replace all

const no_telp = "021 255 32321";
const updated_no_telp = no_telp.replaceAll("21", "99");
console.log(updated_no_telp);
console.log("---");

// Contoh substring
const url_binar = "https://binaracademy.com";
const updated_url_binar = url_binar.substring(8); // binaracademy.com
// const updated_url_binar = url_binar.substring(8, url_binar.length - 4); // binaracademy

console.log(updated_url_binar);
console.log("---");

// Contoh lower case upper case
const frontend = "Fr0nT eNd";
const frontend_lowercase = frontend.toLowerCase();
const frontend_uppercase = frontend.toUpperCase();

console.log(frontend, frontend_lowercase, frontend_uppercase);
console.log("---");

// Contoh trim
const nama = "        Sabrina Binar       ";
const nama_trim = nama.trim();

console.log(nama_trim);
console.log("----");

// array sorting ascending
const data = [5, 3, 2, 9, 8];
console.log(data);
data.sort(); // ascending
console.log(data);
data.sort((a, b) => b - a); // descending
console.log(data);

// array sort object
const rows = [
  {
    id: 1,
    name: "Sabrina",
    age: 36,
    is_manager: true,
    start_date: "02-28-2019",
  },
  {
    id: 2,
    name: "Gun",
    age: 40,
    is_manager: true,
    start_date: "03-05-2017",
  },
  {
    id: 3,
    name: "Jimi Jamet",
    age: 39,
    is_manager: false,
    start_date: "07-12-2021",
  },
];

// rows.sort((a, b) => a.name.localeCompare(b.name)); // bandingin string
// rows.sort((a, b) => a.age - b.age); // number
// console.log(rows);

// const arrayHuruf = ["e", "m", "b", "E", "r", "R"];
// arrayHuruf.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0)); // ascii comparison
// console.log(arrayHuruf);
console.log("---");

// indexOf

const kalimat = "Aku sedang belajar searching algorithm";

// contoh pertama:
const indeks1 = kalimat.indexOf("searching algorithm");
console.log(indeks1); // 19

// contoh kedua:
const indeks2 = kalimat.indexOf("kata ini tidak ada");
console.log(indeks2); // -1
console.log("---");

const kalimatBaru = "Aku sedang belajar searching algorithm";

// contoh pertama:
const indeks1Baru = kalimat.includes("searching algorithm");
console.log(indeks1Baru); // 19

// contoh kedua:
const indeks2Baru = kalimat.includes("kata ini tidak ada");
console.log(indeks2Baru); // -1
console.log("---");

// contoh penggunaan index0f:
const return1 = kalimat.indexOf("Searching Algorithm");
console.log(return1); // -1

// contoh kedua:
const return2 = kalimat.includes("Searching Algorithm");
console.log(return2); // false
console.log("---");

// search
const hasilSearch = kalimat.search(/sEARCHING Algorithm/i);
console.log(hasilSearch);
console.log("---");

// indexOf array
const array = [10, 5, "Hai", 4, 1];

// contoh pertama:
const indeksArray1 = array.indexOf(4);
console.log(indeksArray1); // 3

// contoh kedua:
const indeksArray2 = array.indexOf("Ada?");
console.log(indeksArray2); // -1

const arrayFilter = array.filter((val) => val < 10);
// const arrayFilter = array.filter((val) => val === "Hai"); //string filter
console.log(arrayFilter);
