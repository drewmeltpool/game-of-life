import { World } from '../src/World';
import { Game } from '../src/Game';

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

  it('One iteration', () => {
    const expected = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    const world = new World(4, 4);
    world.generateEmpty();
    const game = new Game(world);
    const actual = game.next();

    expect(actual).toEqual(expected);
  });
});
