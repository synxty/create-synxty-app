import spawn from 'cross-spawn';
import chalk from 'chalk';

function installDependencies(
  dependencies: string[],
  packageManager: 'yarn' | 'npm',
  isOnline: boolean,
  dev = false) {

  return new Promise(
    (resolve, reject) => {
      let args: string[] = [];
      let command = 'npm';

      if (packageManager === 'yarn') {
        command = 'yarn';
        args = ['add', ...dependencies];
        if (!isOnline) {
          console.log(chalk.yellow('You appear to be offline.\n Falling back to the local yarn cache.'));
          args.push('--offline');
        }
      }
      if (packageManager === 'npm') args = ['i', ...dependencies];
      args.push('-E');
      if (dev) args.push('-D');
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

export default installDependencies;