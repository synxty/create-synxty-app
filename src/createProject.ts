import path from 'path';
import userHaveWritePermissions from './userHaveWritePermissions';
import createProjectDirectory from './createProjectDirectory';
import isDirectoryEmpty from './isDirectoryEmpty';


export interface IProjectProps {
  name: string;
  path: string;
  packageManager: 'yarn' | 'npm';
}

async function createProject(project: IProjectProps) {
  const root = path.resolve(project.path);

  if (!(await userHaveWritePermissions(path.dirname(root)))) {
    console.error(`
      Seems that you don't have write permission in this directory.\n
      Please check the folder permissions and try again. 
    `);
    process.exit(1);
  }

  await createProjectDirectory(project.name);

  if (!isDirectoryEmpty(root, project.name)) process.exit(1);
}

export default createProject;