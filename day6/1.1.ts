const dedupeRegex = /(a[^a][^a][^a]|b[^b][^b][^b]|c[^c][^c][^c]|d[^d][^d][^d]|e[^e][^e][^e]|f[^f][^f][^f]|g[^g][^g][^g]|h[^h][^h][^h]|i[^i][^i][^i]|j[^j][^j][^j]|k[^k][^k][^k]|l[^l][^l][^l]|m[^m][^m][^m]|n[^n][^n][^n]|o[^o][^o][^o]|p[^p][^p][^p]|q[^q][^q][^q]|r[^r][^r][^r]|s[^s][^s][^s]|t[^t][^t][^t]|u[^u][^u][^u]|v[^v][^v][^v]|w[^w][^w][^w]|x[^x][^x][^x]|y[^y][^y][^y]|z[^z][^z][^z])/g

const foo = (input) => [...input.matchAll(dedupeRegex)]
.filter(([fragment]) =>
  fragment.split(``)
  .filter((letter, i) =>
    fragment.indexOf(letter) === i).length === fragment.length
)[0].index + 4