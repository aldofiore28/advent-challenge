import { readFile } from "../common";

const input = readFile('day1/input.txt');

const getElfWithMostCalories = (data: string) => data
  .split(`\n\n`)
  .map((elfFoods) => elfFoods
    .split(`\n`)
    .reduce((a, b) => a + parseInt(b), 0))
  .reduce<[number, number][]>((acc, cals, index) => [...acc, [index, cals]], [])
  .map(x => { console.log(x); return x; })
  .sort((elf1, elf2) => elf2[1] - elf1[1])[0][1];

console.log(getElfWithMostCalories(input));