import path from 'path';
import userHaveWritePermissions from './userHaveWritePermissions';
import createProjectDirectory from './createProjectDirectory';
import isDirectoryEmpty from './isDirectoryEmpty';
import isUserOnline from './isUserOnline';
import chalk from 'chalk';
import writePackageFile from './writePackageFile';
import { isInGitRepository, isInMercurialRepository, initializeRepository, gitConfig, gitCommit, gitAddAll } from './gitManager';
import installDependencies from './installDependencies';
import { dependencies } from './dependencies';
import copyTemplate from './copyTemplate';


export interface IProjectProps {
  name: string;
  path: string;
  packageManager: 'yarn' | 'npm';
  git: boolean;
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

  const originalDirectory = process.cwd();
  console.log(`Creating a new Synxty App in ${chalk.green(root)}\n`);
  await createProjectDirectory(project.name);
  if (!isDirectoryEmpty(root, project.name)) process.exit(1);

  const isOnline = project.name === 'yarn' || await isUserOnline();
  process.chdir(root);
  writePackageFile(project);

  if (project.git) {
    gitConfig();
  } else {
    console.log(`
      Seems like you're not using ${chalk.bold.magenta('git')}.\n
      Consider use it so you can take advantages of the amazing CI tools out there!
      `);
  }

  console.log(`Installing (using ${chalk.green(project.packageManager)}):\n 
  -> ${chalk.cyan('react')} 
  -> ${chalk.cyan('react-dom')}
  -> ${chalk.cyan('next')}
  -> ${chalk.cyan('styled-components')}
`);

  await installDependencies(dependencies, project.packageManager, isOnline);

  await copyTemplate(root);

  if (project.git) {
    await gitAddAll();
    await gitCommit('chore', 'install react, next and styled-components');
  }
}

export default createProject;