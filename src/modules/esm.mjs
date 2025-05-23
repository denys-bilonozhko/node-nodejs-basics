import { sep } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import { readFile } from 'fs/promises';
import './files/c.mjs';

const aPath = new URL('./files/a.json', import.meta.url);
const bPath = new URL('./files/b.json', import.meta.url);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = JSON.parse(await readFile(aPath, 'utf8'));;
} else {
  unknownObject = JSON.parse(await readFile(bPath, 'utf8'));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${import.meta.filename}`);
console.log(`Path to current directory is ${import.meta.dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export default {
  unknownObject,
  myServer,
};
