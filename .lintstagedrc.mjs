export default {
  '**/*.{js,jsx,mjs}': (filenames) => {
    const stylelintCommand = `stylelint ${filenames.join(' ')}`;
    const nextLintFilenames = filenames.map((file) => file.split(process.cwd())[1]);
    const nextLintCommand = `yarn lint:js --file ${nextLintFilenames.join(' --file ')}`;

    return [stylelintCommand, nextLintCommand];
  }
};
