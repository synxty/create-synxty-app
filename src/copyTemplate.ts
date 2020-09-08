import cpy from 'cpy';
import path from 'path';
import configFilesMapper from './configFilesMapper';

async function copyTemplate(root: string) {
  await cpy('**', root, {
    parents: true,
    cwd: path.join(__dirname, '..', 'template', 'default'),
    rename: (name) => configFilesMapper[name] || name
  });
}

export default copyTemplate;