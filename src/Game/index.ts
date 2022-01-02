import { World } from 'src/World';

class GameOfLife {
  private readonly _width = this._world.width;
  private readonly _height = this._world.height;
  private _cloneWorld = this._world.clone();

  constructor(private _world: World) {}

  get map() {
    return this._world.map;
  }

  public findAmountOfAliveNeigbors(x: number, y: number) {
    const tl = this.getCell(x - 1, y - 1);
    const tm = this.getCell(x - 1, y);
    const tr = this.getCell(x - 1, y + 1);
    const ml = this.getCell(x, y - 1);
    const mr = this.getCell(x, y + 1);
    const bl = this.getCell(x + 1, y - 1);
    const bm = this.getCell(x + 1, y);
    const br = this.getCell(x + 1, y + 1);

    return [tl, tm, tr, ml, mr, bl, bm, br].filter((i) => i).length;
  }

  private updateCellInCloneWorld(x: number, y: number, value: number) {
    this._cloneWorld.updateCell(x, y, value);
  }

  public updateCell(x: number, y: number, value: number) {
    this._world.updateCell(x, y, value);
  }

  public getCell(x: number, y: number) {
    const row =
      x < 0 ? this._width + x : x > this._width - 1 ? this._width - x : x;
    const column =
      y < 0 ? this._height + y : y > this._height - 1 ? this._height - y : y;

    return this._world.map[row][column];
  }

  public next() {
    for (let x = 0; x < this._height; x++)
      for (let y = 0; y < this._width; y++) {
        const amountOfAliveCell = this.findAmountOfAliveNeigbors(x, y);
        if (this.getCell(x, y)) {
          if (!(amountOfAliveCell === 3 || amountOfAliveCell === 2))
            this.updateCellInCloneWorld(x, y, 0);
        } else {
          if (amountOfAliveCell === 3) this.updateCellInCloneWorld(x, y, 1);
        }
      }

    this._world = this._cloneWorld.clone();
    this._cloneWorld = this._world.clone();

    return this._world.map;
  }

  public loop(
    cb: (
      _counter: number,
      _matrix: number[][],
      _interval: NodeJS.Timer
    ) => void,
    delay = 0
  ) {
    let counter = 0;

    const interval: NodeJS.Timer = setInterval(
      () => cb(counter++, this.next(), interval),
      delay
    );

    return interval;
  }
}

export { GameOfLife as Game };
