import { createReadStream } from 'fs';

const read = async () => {
  const source = new URL('./files/fileToRead.txt', import.meta.url);
  const stream = createReadStream(source);

  stream.on('data', (chunk) => {
    process.stdout.write(chunk);
  });
};

await read();
