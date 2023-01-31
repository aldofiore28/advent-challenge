import { readFile } from "../common";

const input = readFile('day4/input.txt');

const countRedundancies = (input: string) =>
  [...input.matchAll(/(\d+)-(\d+),(\d+)-(\d+)?/g)]
    .map(([pair, a, b, c, d]) => [parseInt(a), parseInt(b), parseInt(c), parseInt(d)])
    .map(([a, b, c, d]) =>
      (a >= c && b <= d) ||
      (c >= a && d <= b))
    .filter(Boolean)
    .length;

console.log(countRedundancies(input));