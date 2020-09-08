import { execSync } from 'child_process';
import chalk from 'chalk';
import spawn from 'cross-spawn';

function isGitInstalled(): boolean {
  try {
    execSync('git --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

function isInGitRepository(): boolean {
  try {
    execSync('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function isInMercurialRepository(): boolean {
  try {
    execSync('hg --cwd . root', { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function initializeRepository() {
  execSync('git init', { stdio: 'ignore' });
}

function gitConfig() {
  if ((isInGitRepository() || isInMercurialRepository())) {
    console.log(`Seems like you already initialized a ${chalk.bold.magenta('git')} repository.\n`);
  } else {
    initializeRepository();
    console.log(`Initialized a ${chalk.bold.magenta('git')} repository.\n`);
  };
}

function gitCommit(type: string, message: string) {
  return new Promise(
    (resolve, reject) => {
      const command = 'git';
      const args = ['commit', '-m', `${type}: ${message}`];
      const child = spawn(command, args, { stdio: 'inherit' });
      child.on('close', (code) => {
        if (code !== 0) {
          reject({ command: `${command} ${args.join(' ')}` });
          return;
        }
        resolve();
      });
    }
  );
}

function gitAddAll() {
  return new Promise(
    (resolve, reject) => {
      const command = 'git';
      const args = ['add', '-A'];
      const child = spawn(command, args, { stdio: 'inherit' });
      child.on('close', (code) => {
        if (code !== 0) {
          reject({ command: `${command} ${args.join(' ')}` });
          return;
        }
        resolve();
      });
    }
  );
}

export { isGitInstalled, initializeRepository, isInGitRepository, isInMercurialRepository, gitConfig, gitCommit, gitAddAll };