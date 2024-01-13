const angka = [1, 2, 3, 4, 5];

const total = angka.reduce((acc, val) => {
  //   console.log("Total sementara:", acc);
  //   console.log("yang mau dijumlahkan:", val);
  return acc + val;
}, 0);
console.log(total);

const hasil = [
  { pelajaran: "Fisika", nilai: 87 },
  { pelajaran: "Kimia", nilai: 64 },
  { pelajaran: "Matematika", nilai: 73 },
];

// Tujuannya, ingin menjumlahkan semua nilai pelajaran
const total_nilai = hasil.reduce((acc, curr) => {
  return acc + curr.nilai;
}, 0);
console.log(total_nilai); //224
