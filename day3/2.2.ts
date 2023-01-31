import { readFile } from "../common";

const input = readFile('day3/input.txt');

const values2 = `0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;

const findGroupLetters = (input: string) => [...input.matchAll(/.*\n.*\n.*\n?/g)]
  .map(v => v[0])
  .map(group => group.split(`\n`))
  .map(group => group[0]
    .split(``)
    .find(letter =>
      group[1].indexOf(letter) >= 0 &&
      group[2].indexOf(letter) >= 0)
  )
  .reduce((a, letter) => (a as string) + values2.indexOf(letter as string, 0));

console.log(findGroupLetters(input));