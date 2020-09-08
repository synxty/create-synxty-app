import validateNpmPackageName from 'validate-npm-package-name';

function validateProjectName(name: string) {
  const { errors, warnings, validForNewPackages } = validateNpmPackageName(name);
  if (validForNewPackages) return { value: name, isValid: true };
  return {
    value: name,
    isValid: false,
    problems: [
      ...(errors || []),
      ...(warnings || [])
    ]
  };
}

export default validateProjectName;
