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

rows.sort(
  (a, b) => new Date(a.start_date).valueOf() > new Date(b.start_date).valueOf()
);

console.log(rows);
