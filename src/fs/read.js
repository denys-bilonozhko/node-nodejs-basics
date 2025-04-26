const { readFile } = await import('fs/promises');

const read = async () => {
  const file = 'src/fs/files/fileToRead.txt';

  try {
    const data = await readFile(file, { encoding: 'utf-8' });
    console.log(data);
  } catch {
    throw new Error('FS operation failed');
  }
};

await read();
