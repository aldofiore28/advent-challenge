import { readFile } from "../common";

type CodifiedOptions = 'A' | 'B' | 'C';
type CodifiedOutcomes = 'X' | 'Y' | 'Z';
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

const translations: Record<CodifiedOptions | CodifiedOutcomes, Options> = {
  A: 'rock',
  B: 'paper',
  C: 'scissor',
  X: 'rock',
  Y: 'paper',
  Z: 'scissor',
};

const iWin: Record<Options, Options> = {
  rock: 'paper',
  paper: 'scissor',
  scissor: 'rock'
};

const elfWin: Record<Options, Options> = {
  rock: 'scissor',
  paper: 'rock',
  scissor: 'paper'
};

const outcomes: Record<CodifiedOutcomes, number> = {
  X: 1,
  Y: 0,
  Z: 2
}

const outcomeToResultMap: Record<CodifiedOutcomes, (choice: Options) => Options> = {
  X: (choice: Options) => elfWin[choice],
  Y: (choice: Options) => choice,
  Z: (choice: Options) => iWin[choice]
}

function determineMyChoice(outcome: CodifiedOutcomes, elfChoice: Options) {
  return outcomeToResultMap[outcome](elfChoice);
}

function calculatePoints(winner: number, choice: Options): number {
  return scores[choice] + (winner === 2 ? scores.win : winner === 1 ? scores.loss : scores.draw);
}

const input = readFile('day2/input.txt').split('\n');

const total = input
  .map(game => {
    const [elf, outcome] = game.split(' ');
    const elfChoice = translations[elf as CodifiedOptions];
    const myChoice = determineMyChoice(outcome as CodifiedOutcomes, elfChoice);
    const winner = outcomes[outcome as CodifiedOutcomes];

    return calculatePoints(winner, myChoice);
  })
  .reduce((totalPoints, gamePoints) => totalPoints + gamePoints, 0);

console.log(total);
