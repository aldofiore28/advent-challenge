import { readFile } from "../common";

const input = readFile('day3/input.txt').split(/\r?\n/);

const alpha1 = Array.from(Array(26)).map((e, i) => i + 65);
const alpha2 = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet1 = alpha1.map((x) => String.fromCharCode(x));
const alphabet2 = alpha2.map((x) => String.fromCharCode(x).toLowerCase());
const completeAlpha = [...alphabet2, ...alphabet1];

function sumGroupsOf3 (inputArray: string[]) {
  let totalSum = 0;
  for (let i = 0; i < inputArray.length; i += 3) {
    let str1 = inputArray[i];
    let str2 = inputArray[i+1];
    let str3 = inputArray[i+2];
    for (let j = 0; j < str1.length; j++) {
      let currentLetter = str1[j]
      if(str2.includes(currentLetter) && str3.includes(currentLetter)) {
        totalSum += completeAlpha.indexOf(currentLetter) + 1;
        break;
      }
    }
  }
  return totalSum
}

console.log(sumGroupsOf3(input));
