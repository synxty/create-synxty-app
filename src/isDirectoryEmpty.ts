import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

function isDirectoryEmpty(root: string, directoryName: string): boolean {

  const validFiles = [
    '.DS_Store',
    '.git',
    '.gitattributes',
    '.gitignore',
    '.gitlab-ci.yml',
    '.hg',
    '.hgcheck',
    '.hgignore',
    '.idea',
    '.npmignore',
    '.travis.yml',
    'LICENSE',
    'Thumbs.db',
    'docs',
    'mkdocs.yml',
    'npm-debug.log',
    'yarn-debug.log',
    'yarn-error.log',
  ];

  const conflicts = fs.readdirSync(root)
    .filter(
      (file) => !validFiles.includes(file)
    )
    .filter(
      (file) => !/\.iml$/.test(file)
    );

  if (conflicts.length > 0) {

    console.log(`
      The directory ${chalk.yellow(directoryName)} 
      contains files that could conflict with the installation:\n
    `);

    for (const file of conflicts) {
      try {
        const status = fs.lstatSync(path.join(root, file));
        if (status.isDirectory()) {
          console.log(`  ${chalk.blue(file)}/\n`);
        } else {
          console.log(`  ${file}\n`);
        }
      } catch {
        console.log(`  ${file}\n`);
      }
    }
    console.log(
      'Either try using a new directory name, or remove the files listed above.\n'
    );
    return false;
  }
  return true;
}

export default isDirectoryEmpty;
