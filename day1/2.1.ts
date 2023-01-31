import { readFile } from "../common";

const input = readFile('day1/input.txt');

const getElvesWithMostCalories = (data: string) => data
  .split(`\n\n`)
  .map((elfFoods) => elfFoods.split(`\n`).reduce((a, b) => a + parseInt(b), 0))
  .reduce<[number, number][]>((acc, cals, index) => [...acc, [index, cals]], [])
  .sort((elf1, elf2) => elf2[1] - elf1[1])
  .slice(0, 3)
  .reduce((acc, elf) => acc + elf[1], 0)

console.log(getElvesWithMostCalories(input));