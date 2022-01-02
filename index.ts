import { World } from './src/World';
import { Game } from './src/Game';
import { IOProvider } from './src/IOProvider';

const textFile = new IOProvider('qweqwe.txt');

const [file, err] = textFile.readFileSync();

console.log(err);

// const world = new World(5, 5);

// world.generateRandom();

// const game = new Game(world);

// game.loop((counter, matrix, interval) => {
//   if (counter === 6) clearInterval(interval);

//   textFile.writeFileSync(matrix);

//   console.info(matrix);
// }, 300);
