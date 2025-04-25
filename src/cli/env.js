const parseEnv = () => {
  const env = process.env;
  const output = [];

  for (const property in env) {
    if (property.startsWith('RSS_')) {
      output.push(`${property}=${env[property]}`);
    }
  }

  console.log(output.join('; '));
};

parseEnv();
