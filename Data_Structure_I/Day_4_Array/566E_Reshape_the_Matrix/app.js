var matrixReshape = (mat, r, c) => {
  if (mat.length * mat[0].length !== r * c) return mat
  const M = mat.length
  const N = mat[0].length
  const result = new Array(r).fill(0).map((o) => new Array(c))

  let k = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      const m = Math.floor(k / N)
      const n = k % N
      console.log(i, j, m, n, k)
      result[i][j] = mat[m][n]
      k++
    }
  }
  return result
}

var mat = [[1, 2, 3, 4]],
  r = 2,
  c = 2
console.log(matrixReshape(mat, r, c))
