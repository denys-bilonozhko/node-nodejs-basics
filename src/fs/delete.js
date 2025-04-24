import { rm, access, constants } from 'fs/promises';

const remove = async () => {
  const file = 'src/fs/files/fileToRemove.txt';
  const isFileExists = await access(file, constants.F_OK)
    .then(() => true)
    .catch(() => false);

  if (!isFileExists) {
    throw new Error('FS operation failed');
  }

  await rm(file).catch((err) => {
    console.error(err);
  });
};

await remove();
