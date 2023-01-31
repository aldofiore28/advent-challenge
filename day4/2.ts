import { readFile } from "../common";

const input = readFile('day4/input.txt').split('\n');

function compare(first: boolean, second: boolean): boolean {
  return first && second;
}

const result = input
  .map(pair => {
    const [firstRange, secondRange] = pair.split(',');
    const [startFirst, endFirst] = firstRange.split('-').map(value => parseInt(value, 10));
    const [startSecond, endSecond] = secondRange.split('-').map(value => parseInt(value, 10));
    const maxRangeSize = endFirst > endSecond ? endFirst : endSecond;

    const correctSizeRange = Array(maxRangeSize).fill(false);
    const correctSizeSecondRange = Array(maxRangeSize).fill(false);

    const comparableFirstRange = correctSizeRange.map(
      (value, index) => (index + 1) >= startFirst && (index + 1) <= endFirst ? true : value
    );

    const comparableSecondRange = correctSizeSecondRange.map(
      (value, index) => (index + 1) >= startSecond && (index + 1) <= endSecond ? true : value
    );

    return comparableFirstRange.reduce(
      (isShared, value, index) => isShared || compare(value, comparableSecondRange[index]),
      false
    )
  })
  .filter(Boolean)
  .length;

console.log(result);