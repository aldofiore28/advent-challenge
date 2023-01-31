import { common } from "./common";

const elvesCalories = common();

const topThreeMostCaloriesTotal = elvesCalories.map(
  elfCalorie => elfCalorie.reduce((acc, curr) => acc + curr, 0)
)
  .sort((a ,b) => b - a)
  .slice(0, 3)
  .reduce((acc, curr) => acc + curr, 0);

console.log(topThreeMostCaloriesTotal);
