let a = 0;
const iniInterval = setInterval(() => {
  console.log(`${++a} kali jalan`);
  if (a === 10) clearInterval(iniInterval);
}, 1000);

console.log("Apakah aku jalan duluan?");
