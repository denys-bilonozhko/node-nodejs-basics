import { cp, access, constants } from 'fs/promises';

const copy = async () => {
  const checkDirectoryExists = async (path) => {
    try {
      await access(path, constants.F_OK);

      return true;
    } catch (error) {
      if (error.code === 'ENOENT') {
        return false;
      }

      throw error;
    }
  };

  const sourceDir = 'files';
  const targetDir = 'files_copy';

  const sourceExists = await checkDirectoryExists(sourceDir);
  const targetExists = await checkDirectoryExists(targetDir);

  if (!sourceExists || targetExists) {
    throw new Error('FS operation failed');
  }

  await cp(sourceDir, targetDir, { recursive: true });
};

await copy();
