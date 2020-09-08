#!/usr/bin/env node
import Yargs from 'yargs';
import validateProjectName from './validateProjectName';
import chalk from 'chalk';
import path from 'path';
import determinePackageManagerUsed from './determinePackageManagerUsed';
import createProject, { IProjectProps } from './createProject';
import { isGitInstalled } from './gitManager';

const { _: projectArgs } = Yargs.check((argv) => {
  if (argv._.length > 1) {
    throw new Error("Only 0 or 1 files may be passed.");
  }
  return true;
}).argv;

async function run() {
  const projectName = validateProjectName(projectArgs[0] ? projectArgs[0].trim() : 'web');
  if (!projectName.isValid) {
    console.error(
      `Could not create a project with the name ${chalk.red(
        `"${projectName.value}"`
      )} due to the following npm naming restrictions:`
    );
    projectName.problems!.forEach(problem => console.error(`    ${chalk.red.bold('*')} ${problem}`));
    process.exit(1);
  }
  const projectProps: IProjectProps = {
    name: projectName.value,
    path: path.resolve(projectName.value),
    packageManager: determinePackageManagerUsed(),
    git: isGitInstalled()
  };
  await createProject(projectProps);
}

run();
