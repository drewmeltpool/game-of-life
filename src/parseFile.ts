type parseFileType = (_file: string) => {
  generation: number;
  width: number;
  height: number;
  matrix: number[][];
};

const parseMatrix = (matrix: string[]) => {
  return matrix.map((row) =>
    [...row.trim()].map((cell) => (cell === '.' ? 0 : 1))
  );
};

export const parseFile: parseFileType = (file) => {
  const [generation, size, ...matrix] = file.split('\n');
  const [width, height] = size.split(' ');

  return {
    generation: Number(generation),
    width: Number(width),
    height: Number(height),
    matrix: parseMatrix(matrix),
  };
};
