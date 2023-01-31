import { readFile } from "../common";

const input = readFile('day3/input.txt').split(/\r?\n/);

const alpha1 = Array.from(Array(26)).map((e, i) => i + 65);
const alpha2 = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet1 = alpha1.map((x) => String.fromCharCode(x));
const alphabet2 = alpha2.map((x) => String.fromCharCode(x).toLowerCase());
const completeAlpha = [...alphabet2, ...alphabet1];

function sumAllCommonItems (inputArray: string[]) {
  let totalSum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    let letterMatch = '';
    let subStr1 = inputArray[i].slice(0, inputArray[i].length / 2)
    let subStr2 = inputArray[i].slice(inputArray[i].length / 2, inputArray[i].length);
    for (let j = 0; j < subStr1.length; j++) {
      let currentMatch = subStr1[j];
      if (subStr2.includes(currentMatch)) {
        letterMatch = currentMatch;
        totalSum += completeAlpha.indexOf(letterMatch) + 1;
        break;
      }
    }
  }
  return totalSum
}

console.log(sumAllCommonItems(input));
