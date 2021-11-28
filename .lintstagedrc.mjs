export default {
  '**/*.js?(x)': (filenames) =>
    `yarn lint:scripts --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ')}`,
};
