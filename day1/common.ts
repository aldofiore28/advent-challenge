import { readFile } from '../common';

export function common(): number[][] {
  const input = readFile('day1/input.txt');

  const inputToArray = input.split('\n');
  let elvesCalories: number[][] = [];
  let elfCaloriesTemp: number[] = [];

  inputToArray.forEach((calorie, i) => {
    if (calorie) {
      elfCaloriesTemp.push(parseInt(calorie, 10));
    }

    if (!calorie || i === (inputToArray.length - 1)) {
      elvesCalories.push(elfCaloriesTemp);
      elfCaloriesTemp = [];
    }
  });

  return elvesCalories;
}
