import { readdir } from 'fs/promises';

const list = async () => {
  const directory = 'src/fs/files';

  try {
    const files = await readdir(directory);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();
