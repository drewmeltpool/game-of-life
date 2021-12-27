import { World } from '../src/World';

describe('Create world', () => {
  it('Clear map', () => {
    const world = new World(1, 1);
    world.clear();
    expect(world.map).toEqual([[0]]);
  });

  it('Generate empty', () => {
    const world = new World(1, 1);

    expect(world.generateEmpty()).toEqual([[0]]);
  });

  it('Generate random with 1', () => {
    const world = new World(1, 1);

    expect(world.generateRandom(1)).toEqual([[1]]);
  });

  it('Generate random with 0', () => {
    const world = new World(1, 1);

    expect(world.generateRandom(0)).toEqual([[0]]);
  });

  it('Update cell', () => {
    const world = new World(1, 1);
    world.updateCell(0, 0, 1);
    expect(world.map[0][0]).toBe(1);
  });

  it('Clone world', () => {
    const world = new World(1, 1);
    const newWorld = world.clone();
    expect(newWorld).toBeInstanceOf(World);
  });

  it('Check width', () => {
    const world = new World(1, 1);
    expect(world.width).toBe(1);
  });

  it('Check height', () => {
    const world = new World(1, 1);
    expect(world.height).toBe(1);
  });
});
