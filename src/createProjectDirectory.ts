import fs from 'fs';

function createProjectDirectory(root: string, options = { recursive: true }) {
  return fs.promises.mkdir(root, options);
}

export default createProjectDirectory;