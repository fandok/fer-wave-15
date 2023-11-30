import { snakeCase } from "snake-case";
import gantimatauang from "format-currency";
import date from "date-and-time";

console.log(snakeCase("stringData"));
console.log(gantimatauang(10000000.15)); // => 10,000,000.15
const now = new Date();
console.log(date.format(now, "YYYY/MM/DD HH:mm:ss"));

const a = <div>test 123</div>;
