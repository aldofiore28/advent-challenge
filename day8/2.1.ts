const getCols = (input) => input
.split(`\n`)
.map(line => line.split(``))
.reduce((cols, line) => {
  line.forEach((col, i) =>
    cols[i] = [...(cols[i] || []), col])
  return cols
}, [])
const getRows = (input) => input
.split(`\n`)
.reduce((rows, line) => [...rows, line.split(``)],[])

const isVisible = (line) =>
  line
  .reduce(({ prevHighest, visibility }, current) => ({
      prevHighest: current > prevHighest ? current : prevHighest,
      visibility: [
        ...visibility,
        current > prevHighest
      ]
    }),
    {prevHighest: 0, visibility: []})
    .visibility

const visibleInLine = (line) => {
  const visibleRight = isVisible(line)
  return [
    ...visibleRight
    .slice(0, visibleRight.lastIndexOf(true) + 1),
    ...isVisible(
      line
      .slice(visibleRight.lastIndexOf(true) + 1)
      .reverse()
    ).reverse()
  ]
}
const getVisibility = (input) => {
  const cols = getCols(input)
  const rows = getRows(input)
  const rowVisibility = rows.map(visibleInLine)
  const colVisibility = cols.map(visibleInLine)
  
  const allVisible = rows.map((row, rowNumber) =>
    row.map((v, i) =>
      i === 0 ||
      rowNumber === 0 ||
      i === rows[0].length - 1 ||
      rowNumber === rows.length - 1 ||
      rowVisibility[rowNumber][i] ||
      colVisibility[i][rowNumber]
        ? v : false
    )
  )
  return allVisible
}

const scenicMeasureOfRows = (visibleTrees, allTrees) =>
  visibleTrees
  .map((row, rowNumber) =>
    row.map((tree, i) =>
        tree && (((allTrees[rowNumber]
          .slice(0, i)
          .reverse()
          .findIndex((v, vi) => v >= tree) + 1) || i)
          * ((allTrees[rowNumber]
          .slice(i + 1)
          .findIndex((v, vi) => v >= tree) + 1) || row.length - i - 1))
    )
  )

const getScenicMeasure = (input) => {
  const visibleTrees = getVisibility(input)
  const scenicRows = scenicMeasureOfRows(visibleTrees, getRows(input))
  const scenicCols = scenicMeasureOfRows(
    visibleTrees
    .reduce((cols, line) => {
      line.forEach((col, i) =>
        cols[i] = [...(cols[i] || []), col])
      return cols
    }, []),
    getCols(input))
  return scenicRows
  .map((row, rowNumber) =>
    row.map((v, i) => v * scenicCols[i][rowNumber])
  )
}

getScenicMeasure(input).flat().sort((a, b) => a - b).pop()