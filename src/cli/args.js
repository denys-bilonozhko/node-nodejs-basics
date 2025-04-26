const parseArgs = () => {
  const args = process.argv.slice(2);
  const output = [];

  args.forEach((arg, i) => {
    if (arg.startsWith('--') && args[i + 1] && !args[i + 1].startsWith('--')) {
      output.push(`${arg.slice(2)} is ${args[i + 1]}`);
    } else if (arg.startsWith('--')) {
      output.push(`${arg.slice(2)} is`);
    }
  });

  console.log(output.join(', '));
};

parseArgs();
