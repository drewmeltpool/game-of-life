import { World } from '../src/World';
import { Game } from '../src/Game';
import { IOProvider } from '../src/IOProvider';
import { parseFile } from '../src/parseFile';
import { parseMap } from '../src/parseMap';

describe('Game test', () => {
  it('Update cell to 1', () => {
    const expected = 1;

    const world = new World(3, 3);
    world.generateRandom(1);
    const game = new Game(world);
    game.updateCell(0, 0, expected);

    const actual = game.map[0][0];

    expect(actual).toBe(expected);
  });

  it('Update cell to 0', () => {
    const expected = 0;

    const world = new World(3, 3);
    world.generateRandom(1);
    const game = new Game(world);
    game.updateCell(0, 0, expected);

    const actual = game.map[0][0];

    expect(actual).toBe(expected);
  });

  it('3 iteration', () => {
    const expected = `........
........
.xxx....
........
........`;

    const gameFieldText = `3
8 5
........
..x.....
..x.....
..x.....
........`;

    const testFile = new IOProvider('test.txt');

    testFile.writeFileSync(gameFieldText);

    const [file] = testFile.readFileSync();

    const { generation, width, height, matrix } = parseFile(file);

    const world = new World(width, height);

    world.map = matrix;

    const game = new Game(world);

    const actual = parseMap(game.loop(generation));

    expect(actual).toEqual(expected);
  });

  it('cells on border', () => {
    const expected = `xxx..
.....
.....
.....
xxx..`;

    const gameFieldText = `1
5 5
xx...
.....
.....
.....
.xx..`;

    const testFile = new IOProvider('test.txt');

    testFile.writeFileSync(gameFieldText);

    const [file] = testFile.readFileSync();

    const { generation, width, height, matrix } = parseFile(file);

    const world = new World(width, height);

    world.map = matrix;

    const game = new Game(world);

    const actual = parseMap(game.loop(generation));

    expect(actual).toEqual(expected);
  });
});
