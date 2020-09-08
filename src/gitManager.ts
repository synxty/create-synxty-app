import { execSync } from 'child_process';
import chalk from 'chalk';

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

export { isGitInstalled, initializeRepository, isInGitRepository, isInMercurialRepository, gitConfig };