const pelajar = [
  { id: 1, nama_depan: "Budi", nama_belakang: "Cahyono" },
  { id: 2, nama_depan: "Agus", nama_belakang: "Kurniawan" },
  { id: 3, nama_depan: "Sheila", nama_belakang: "Andriani" },
  { id: 4, nama_depan: "Jessica", nama_belakang: "Lutfiana" },
  { id: 5, nama_depan: "Erwin", nama_belakang: "Setiadi" },
];

// Tujuannya, ingin mendapatkan data nama pelajar
const nama_pelajar = pelajar.map((data) => data.id);
// console.log(nama_pelajar); // [ 'Budi', 'Agus', 'Sheila','Jessica', 'John' ]

// Tujuannya, ingin mendapatkan nama lengkap pelajar yang merupakan gabungan dari nama_depan dan nama_belakang
const nama_lengkap_pelajar = pelajar.map((data) => {
  return data.nama_depan + " " + data.nama_belakang;
});

console.log(nama_lengkap_pelajar); // [ 'Budi Cahyono', 'Agus    Kurniawan', 'Sheila Andriani', 'Jessica Lutfiana', 'Erwin Setiadi']
