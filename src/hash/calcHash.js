import { createReadStream } from 'fs';
import { createHash } from 'crypto';

const calculateHash = async () => {
  const source = new URL('./files/fileToCalculateHashFor.txt', import.meta.url);

  const hash = createHash('sha256');
  const stream = createReadStream(source);

  stream.on('data', (chunk) => hash.update(chunk));

  stream.on('end', () => {
    console.log(hash.digest('hex'));
  });
};

await calculateHash();
