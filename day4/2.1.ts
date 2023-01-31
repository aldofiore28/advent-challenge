import { readFile } from "../common";

const input = readFile('day4/input.txt');

const overlappingPairs = (input: string) =>
  [...input.matchAll(/(\d+)-(\d+),(\d+)-(\d+)?/g)]
    .map(v => v.map(n => parseInt(n)))
    .map(([pair, a, b, c, d]) =>
      (a >= c && a <= d) ||
      (c >= a && c <= b))
    .filter(Boolean)
    .length;

console.log(overlappingPairs(input));