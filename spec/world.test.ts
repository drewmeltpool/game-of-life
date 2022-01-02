import { World } from '../src/World';

// given
// when
// then

describe('Create world', () => {
  const emptyWorld = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  const expectedFill = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ];

  it('Clear map', () => {
    const world = new World(4, 4);
    world.clear();
    expect(world.map).toEqual(emptyWorld);
  });

  it('Generate empty', () => {
    const world = new World(4, 4);

    expect(world.generateEmpty()).toEqual(emptyWorld);
  });

  it('Generate random with 1', () => {
    const world = new World(4, 4);

    const actual = world.generateRandom(1);

    expect(actual).toEqual(expectedFill);
  });

  it('Generate random with 0', () => {
    const world = new World(4, 4);

    const actual = world.generateRandom(0);

    expect(actual).toEqual(emptyWorld);
  });

  it('Update cell', () => {
    const expected = 1;

    const world = new World(4, 4);
    world.updateCell(0, 0, expected);
    const actual = world.map[0][0];

    expect(actual).toBe(1);
  });

  it('Clone world', () => {
    const expected = new World(4, 4);
    const actual = expected.clone();

    expect(actual.map).toEqual(expected.map);
  });

  it('Check width', () => {
    const expected = 4;

    const world = new World(4, 4);

    const actual = world.width;
    expect(actual).toBe(expected);
  });

  it('Check height', () => {
    const expected = 4;

    const world = new World(4, 4);

    const actual = world.height;
    expect(actual).toBe(expected);
  });
});
