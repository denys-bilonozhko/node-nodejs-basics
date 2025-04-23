import { writeFile } from 'node:fs';

const create = async () => {
  const text = 'I am fresh and young';
  const path = 'src/fs/files/';
  const file = 'fresh.txt';

  writeFile(`${path}${file}`, text, { flag: 'wx' }, (err) => {
    if (err) {
      if (err.code === 'EEXIST') {
        throw new Error('FS operation failed');
      } 
        console.error(err);
      
    } else {
      console.log(`${path}${file} created successfully`);
    }
  });
};

await create();
