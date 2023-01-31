const formatInput = (input) => input
.split(`\n`)
.map((row, ri) =>
  row
  .split(``)
  .map((col, ci) => [ri, ci, col])
)

const hiddenTrees = row => row.filter(([x, y, v], i) =>
  i !== 0 &&
  (i !== row.length - 1) &&
  row.slice(0, i).some(([x, y, v2]) => v2 >= v) &&
  row.slice(i + 1).some(([x, y, v2]) => v2 >= v)
)

const hiddenTreesInRow = input =>
  input
  .map(hiddenTrees)
const hiddenTreesInCol = input =>
  input
  .reduce((cols, row) => {
    row.forEach(([x, y, tree]) => cols[y] = [...(cols[y] || []), [x, y, tree]])
    return cols
  }, [])
  .map(hiddenTrees)

const allHiddenTrees = (input) => {
  const formattedInput = formatInput(input)
  const rows = hiddenTreesInRow(formattedInput).flat()
  const cols = hiddenTreesInCol(formattedInput).flat()
  return formattedInput.flat().length - rows.filter(([x, y]) => cols.some(([x2, y2]) => x2 === x && y2 === y)).length
}