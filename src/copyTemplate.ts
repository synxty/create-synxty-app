import cpy from 'cpy';
import path from 'path';
import configFilesMapper from './configFilesMapper';
import fs from 'fs';

async function copyTemplate(root: string) {
  await cpy('**', root, {
    parents: true,
    cwd: path.join(__dirname, '..', 'template', 'default'),
    rename: (name) => configFilesMapper[name] || name
  });
  fs.renameSync('github', '.github');
}

export default copyTemplate;