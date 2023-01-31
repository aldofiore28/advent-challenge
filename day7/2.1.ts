const directoryToDelete = input => {
  const fileTree = getFileTree(input).files
  return Object.values(fileTree)
  .map((filesSizes) =>
    filesSizes.reduce(sum, 0)
  )
  .filter((directorySize) => directorySize > 30000000 - (70000000 - fileTree["/"].reduce(sum, 0)))
  .sort((a, b) => a - b)[0]
  // 30000000 - (70000000 - 41272621)
}