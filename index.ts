import { World } from './src/World';
import { Game } from './src/Game';
import { IOProvider } from './src/IOProvider';

const textFile = new IOProvider('test.txt');
const world = new World(5, 5);
world.generateRandom();
const game = new Game(world);
const delay = 1000;

game.loop((counter, matrix, interval) => {
  if (counter === 6) clearInterval(interval);

  textFile.writeFileSync(matrix);

  console.info(matrix);
}, delay);
