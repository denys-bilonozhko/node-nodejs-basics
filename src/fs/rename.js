import { rename as fsRename, access, constants } from 'fs/promises';

const rename = async () => {
  const sourceFile = 'src/fs/files/wrongFilename.txt';
  const destinationFile = 'src/fs/files/properFilename.md';

  const isSourceFileExists = await access(sourceFile, constants.F_OK)
    .then(() => true)
    .catch(() => false);
  const isDestinationFileExists = await access(destinationFile, constants.F_OK)
    .then(() => true)
    .catch(() => false);

  if (!isSourceFileExists || isDestinationFileExists) {
    throw new Error('FS operation failed');
  }

  await fsRename(sourceFile, destinationFile, (err) => {
    console.error(err);
  });
};

await rename();
