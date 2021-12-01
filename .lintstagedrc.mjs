export default {
  '**/*.js?(x)': (filenames) =>
    `yarn lint --file ${filenames
      .map((file) => file.split(process.cwd())[1])
      .join(' --file ')}`,
};
