import { readFile } from "../common";

const input = readFile('day3/input.txt').split('\n');

const result = input.map(items => {
  const firstHalf = items.split('').slice(0, items.length / 2);
  const secondHalf = items.split('').slice(items.length / 2, items.length);

  const common = [...new Set(firstHalf.filter(letter => secondHalf.includes(letter)))][0];
  const asciiValue = common.charCodeAt(0);

  return common.toUpperCase() === common ? asciiValue - 38 : asciiValue - 96;
})
  .reduce((acc, curr) => acc + curr, 0);

console.log(result);