/*
PART ONE
 */
const getFileTree = input => input
.split(`\n`)
.reduce(({current, files}, cmd) => {
  const newDir = cmd.match(/\$ cd (\w+)/)?.[1]
  const leaveDir = cmd.match(/^\$ cd \.\.$/)
  const file = cmd.match(/^(\d+) (.+)/)
  if (newDir) {
    return {files, current: [...current, newDir]}
  } else if (leaveDir) {
    return {files, current: current.slice(0, -1)}
  } else if (file) {
    const newFiles = {...files}
    current.forEach((directory, i, paths) => {
      const path = paths.slice(0, i + 1).join(`!`)
      newFiles[path] = [
        ...(newFiles[path] || []),
        file[1]
      ]
    })
    return {current, files: newFiles}
  } else {
    return {current, files}
  }
}, { current: ["/"], files: {"/": []}})

const sum = (a, b) => a + parseInt(b)
const directorySizes = input =>
  Object.values(getFileTree(input).files)
  .map((filesSizes) =>
    filesSizes.reduce(sum, 0)
  )
  .filter((directorySize) => directorySize < 100000)
  .reduce(sum, 0)