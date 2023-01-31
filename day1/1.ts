import { common } from "./common";

const elvesCalories = common();

const mostCalories = Math.max(...elvesCalories
  .map(elfCalorie => elfCalorie.reduce((acc, curr) => acc + curr, 0)));

console.log(mostCalories);
