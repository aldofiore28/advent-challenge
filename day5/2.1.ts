const crates = [
  ["T", "V", "J", "W", "N", "R", "M", "S",],
  ["V", "C", "P", "Q", "J", "D", "W", "B",],
  ["P", "R", "D", "H", "F", "J", "B",],
  ["D", "N", "M", "B", "P", "R", "F",],
  ["B", "T", "P", "R", "V", "H",],
  ["T", "P", "B", "C",],
  ["L", "P", "R", "J", "B",],
  ["W", "B", "Z", "T", "L", "S", "C", "N",],
  ["G", "S", "L",]
];

const moveCrates = (input, crates) => [...input
.matchAll(/move (\d+) from (\d) to (\d)\n?/g)]
.reduce((crates, [match, move, from, to]) => crates.map((crate, i) =>
    i + 1 == from ? crate.slice(move) :
      i + 1 == to ? [...crates[from - 1].slice(0, move), ...crate] :
        crate
  ),
  crates)
.map(([top]) => top)
.join('')