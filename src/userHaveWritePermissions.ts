import fs from 'fs';

async function userHaveWritePermissions(directory: string) {
  try {
    await fs.promises.access(directory, fs.constants.W_OK);
    return true;
  } catch (error) {
    return false;
  }
}

export default userHaveWritePermissions;