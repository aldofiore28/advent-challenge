import { readFile } from "../common";

const input = readFile('day4/input.txt').split('\n');

const result = input
  .map(pair => {
    const [firstRange, secondRange] = pair.split(',');
    const [startFirst, endFirst] = firstRange.split('-').map(value => parseInt(value, 10));
    const [startSecond, endSecond] = secondRange.split('-').map(value => parseInt(value, 10));

    return (startFirst >= startSecond && endFirst <= endSecond) || (startSecond >= startFirst && endSecond <= endFirst);
  })
  .filter(Boolean)
  .length;

console.log(result);