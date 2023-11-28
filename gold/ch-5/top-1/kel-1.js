import { snakeCase } from "snake-case";
import formatCurrency from "format-currency";
import date from "date-and-time";

console.log(snakeCase("stringData"));
console.log(formatCurrency(10000000.15)); // => 10,000,000.15
const now = new Date();
console.log(date.format(now, "YYYY/MM/DD HH:mm:ss"));
