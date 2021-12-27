import { World } from '../src/World';
import { Game } from '../src/Game';

describe('Game test', () => {
  it('update cell to 1', () => {
    const world = new World(1, 1);
    world.generateEmpty();
    const game = new Game(world);
    game.updateCell(0, 0, 1);
    expect(game.getCell(0, 0)).toBe(1);
  });

  it('update cell to 0', () => {
    const world = new World(1, 1);
    world.generateEmpty();
    const game = new Game(world);
    game.updateCell(0, 0, 0);
    expect(game.getCell(0, 0)).toBe(0);
  });

  it('get cell', () => {
    const world = new World(1, 1);
    world.generateEmpty();
    const game = new Game(world);
    expect(game.getCell(0, 0)).toBe(0);
  });

  it('one iteration', () => {
    const world = new World(1, 1);
    world.generateEmpty();
    const game = new Game(world);
    expect(game.next()).toEqual([[0]]);
  });

  it('game loop', () => {
    const world = new World(1, 1);
    world.generateEmpty();
    const game = new Game(world);

    game.loop((counter, _, timer) => {
      if (counter === 0) clearInterval(timer);
      expect(counter).toBe(0);
    });
  });
});
