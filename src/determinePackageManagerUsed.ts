import { execSync } from 'child_process';

function determinePackageManagerUsed() {
  const userAgent = process.env.npm_config_user_agent;
  if (userAgent) return userAgent.startsWith('yarn') ? 'yarn' : 'npm';
  try {
    execSync('yarnpkg --version', { stdio: 'ignore' });
    return 'yarn';
  } catch (error) {
    return 'npm';
  }
}

export default determinePackageManagerUsed;
