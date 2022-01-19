import { World } from './src/World';
import { Game } from './src/Game';
import { parseFile } from './src/parseFile';
import { IOProvider } from './src/IOProvider';
import { parseMap } from './src/parseMap';

const textFile = new IOProvider('qweqwe.txt');

const [file] = textFile.readFileSync();

const { generation, width, height, matrix } = parseFile(file);

const world = new World(width, height);

world.map = matrix;

const game = new Game(world);

const landscape = parseMap(game.loop(generation));

console.info(landscape);
