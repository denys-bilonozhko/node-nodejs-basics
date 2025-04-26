import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

const create = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const text = 'I am fresh and young';
  const file = 'fresh.txt';

  try {
    await writeFile(path.join(__dirname, 'files', file), text, { flag: 'wx' });
  } catch (err) {
    if (err.code === 'EEXIST') {
      throw new Error('FS operation failed');
    } else {
      console.error(err);
    }
  }
};

await create();
