import { readFile } from "../common";

type CodifiedOptions = 'A' | 'B' | 'C' | 'X' | 'Y' | 'Z';
type Outcomes = 'loss' | 'draw' | 'win';
type Options = 'rock' | 'paper' | 'scissor';

const scores: Record<Outcomes | Options, number> = {
  rock: 1,
  paper: 2,
  scissor: 3,
  loss: 0,
  draw: 3,
  win: 6
};

const translations: Record<CodifiedOptions, Options> = {
  A: 'rock',
  B: 'paper',
  C: 'scissor',
  X: 'rock',
  Y: 'paper',
  Z: 'scissor',
};

// Todo: how to create this type
const gameOutcomes: Record<string, number> = {
  rockpaper: 2,
  rockscissor: 1,
  rockrock: 0,
  paperrock: 1,
  paperscissor: 2,
  paperpaper: 0,
  scissorpaper: 1,
  scissorscissor: 0,
  scissorrock: 2
};

function determineWinner(playerOne: Options, playerTwo: Options): number {
  return gameOutcomes[`${playerOne}${playerTwo}`];
}

function calculatePoints(winner: number, choice: Options): number {
  return scores[choice] + (winner === 2 ? scores.win : winner === 1 ? scores.loss : scores.draw);
}

const input = readFile('day2/input.txt').split('\n');

const total = input
  .map(game => {
    const [elf, me] = game.split(' ');
    const elfChoice = translations[elf as CodifiedOptions];
    const myChoice = translations[me as CodifiedOptions];

    const winner = determineWinner(elfChoice, myChoice);
    return calculatePoints(winner, myChoice);
  })
  .reduce((totalPoints, gamePoints) => totalPoints + gamePoints, 0);

console.log(total);
