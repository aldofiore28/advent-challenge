import { readFile } from "../common";

// for me
const key2 = {X: `Lose`, Y: `Draw`, Z: `Win`}
const key = {X: `Rock`, Y: `Paper`, Z: `Scissors`, A: `Rock`, B: `Paper`, C: `Scissors`};
const values: { [key: string]: number } = {X: 1, Y: 2, Z: 3};
const winsLossScores: { [key: string]: { [key: string]: number } } = {
  A: {X: 3, Y: 6, Z: 0},
  B: {X: 0, Y: 3, Z: 6},
  C: {X: 6, Y: 0, Z: 3}
};
const strategyKey: { [key: string]: { [key: string]: string } } = {
  A: {X: `Z`, Y: `X`, Z: `Y`},
  B: {X: `X`, Y: `Y`, Z: `Z`},
  C: {X: `Y`, Y: `Z`, Z: `X`}
};

const input = readFile('day2/input.txt');

const getScore = (input: string) => input
  .split(`\n`)
  .map(v => v.split(` `))
  .map(round =>
    values[strategyKey[round[0]][round[1]]] +
    winsLossScores[round[0]][strategyKey[round[0]][round[1]]])
  .reduce((a, b) => a + b, 0);

console.log(getScore(input));
