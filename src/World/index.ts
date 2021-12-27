export class World {
  private _map: number[][];

  get map() {
    return this._map;
  }

  set map(map: number[][]) {
    this._map = map;
  }

  get width() {
    return this._width - 1;
  }

  get height() {
    return this._height;
  }

  constructor(private _width: number, private _height: number) {
    this._map = this.generateEmpty();
  }

  public clone() {
    const world = new World(this._width, this._height);

    const oldMap = this._map.map((row) => row.map((v) => v));

    world.map = oldMap;

    return world;
  }

  public updateCell(x: number, y: number, value: number) {
    this._map[x][y] = value;
  }

  public generateEmpty() {
    this._map = Array(this._height)
      .fill(0)
      .map(() => Array(this._width).fill(0));

    return this._map;
  }

  public generateRandom(chance = 0.5) {
    this._map = Array(this._height)
      .fill(0)
      .map(() =>
        Array(this._width)
          .fill(0)
          .map(() => (Math.random() < chance ? 1 : 0))
      );

    return this._map;
  }

  public clear() {
    this._map = this.generateEmpty();
  }
}
