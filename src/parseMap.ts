export const parseMap = (matrix: number[][]) => {
  return matrix
    .map((row) => row.map((cell) => (cell === 1 ? 'x' : '.')).join(''))
    .join('\n');
};
