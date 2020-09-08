import os from 'os';
import fs from 'fs';
import path from 'path';
import { IProjectProps } from './createProject';
import packagePreset from './packagePreset.json';
import ciConfig from './ciConfig.json';


function writePackageFile(project: IProjectProps) {
  fs.writeFileSync(path.join(project.path, 'package.json'),
    JSON.stringify(
      {
        name: project.name,
        ...packagePreset,
        ...project.git && ciConfig
      }, null, 2) + os.EOL
  );
}

export default writePackageFile;