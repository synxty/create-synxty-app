#!/usr/bin/env node

import Yargs, { command } from 'yargs';
import validateProjectName from './src/validateProjectName';
import chalk from 'chalk';
import path from 'path';
import determinePackageManagerUsed from './src/determinePackageManagerUsed';
import createProject, { IProjectProps } from './src/createProject';
import { isGitInstalled } from './src/gitManager';
import checkForUpdate from 'update-check';
import packageJson from './package.json';

const argv = Yargs.check((argv) => {
  if (argv._.length > 1) {
    throw new Error("Only 0 or 1 files may be passed.");
  }
  return true;
}).argv;

const projectArgs = argv._;
const useNpm = argv['use-npm'] ? true : false;
const packageManager = useNpm ? 'npm' : determinePackageManagerUsed();

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
    packageManager,
    git: isGitInstalled()
  };

  try {
    await createProject(projectProps);
  } catch (reason) {
    throw reason;
  }

}

const update = checkForUpdate(packageJson).catch(() => null);

async function notifyUpdate() {
  try {
    const res = await update;
    if (res?.latest) {
      console.log(chalk.yellow.bold('A new version of `create-synxty-app` is available!'));
      console.log(`
        Consider to update to the latest version by running\ ${
        packageManager === 'yarn'
          ? 'yarn global add create-synxty-app'
          : 'npm i -g create-synxty-app'
        }
      \n`);
    }

  } catch { }
}

run().then(notifyUpdate).catch(
  async (reason) => {
    console.log('Aborting installation.');
    if (reason.command) {
      console.log(`    ${chalk.cyan(reason.command)} has failed.\n`);
    } else {
      console.log(`    ${chalk.red(`Unexpected error. Please report it as a bug:\n ${reason}`)}\n`);
    };
    await notifyUpdate();
    process.exit(1);
  }
);
