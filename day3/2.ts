import { readFile } from "../common";

const input = readFile('day3/input.txt').split('\n');
const groupsOfThree: string[][] = [];
let index = 0;

while (index < input.length) {
  const threeItems = input.slice(index, index + 3);
  groupsOfThree.push(threeItems);
  index = index + 3;
}

const result = groupsOfThree.map(groupOfThree => {
  const [firstGroup, ...theRest] = groupOfThree;
  let allSeenLetters = firstGroup.split('');

  for(const group of theRest) {
    allSeenLetters = group.split('').filter(letter => allSeenLetters.includes(letter));
  }

  const common = [...new Set(allSeenLetters)][0];
  const asciiValue = common.charCodeAt(0);

  return common.toUpperCase() === common ? asciiValue - 38 : asciiValue - 96;
})
  .reduce((acc, curr) => acc + curr, 0);

console.log(result);