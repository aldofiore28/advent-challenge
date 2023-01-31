import { readFile } from "../common";

const input = readFile('day3/input.txt');

const values = `0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;

const totUpCommonLetters = (input: string) => input
  .split(`\n`)
  .map(rucksack => [
    rucksack.slice(0, rucksack.length / 2),
    rucksack.slice(rucksack.length / 2)]
  )
  .map(pockets =>
    pockets[0]
      .split(``)
      .find(letter => pockets[1].indexOf(letter) > -1)
  )
  .reduce((a, letter) => a + values.indexOf(letter as string), 0);

console.log(totUpCommonLetters(input));
