<!-- omit in toc -->
# Synxty CRA Template

<img src="https://raw.githubusercontent.com/synxty/cra-template-synxty/master/.github/assets/banner.png" />

<!-- omit in toc -->
## Featuring husky, commitlint, commitizen, lint-staged with Airbnb code style, styled-components and react-router-dom

**Important Note:** In order for this template to work properly with npm (npx) you must have a git repository already created. Otherwise the installation will get stuck trying to make the initial "create-react-app" commit which does not respect the conventional changelog. If you're reading this note too late, don't worry just cancel out of the installation and initialize a git repository with `git init` within your project folder.

<!-- omit in toc -->
### Table of Contents

- [📃 Description](#-description)
- [🎨 Creating a Project](#-creating-a-project)
- [📁 File Structure](#-file-structure)
- [▶️ Available Scripts Within the Created Project](#️-available-scripts-within-the-created-project)
- [🧠 Learn More](#-learn-more)
- [⚠ Notes](#-notes)
- [⚖️ License](#️-license)

## 📃 Description

This template is going to create a project bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and adds the following packages to the default typescript template:

- [lint-staged](https://github.com/okonet/lint-staged)
- [husky](https://github.com/typicode/husky)
- [commitlint](https://github.com/conventional-changelog/commitlint)
- [commitizen (cz-cli and cz-conventional-changelog)](https://github.com/commitizen/cz-cli)
- [cross-env](https://www.npmjs.com/package/cross-env)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [styled-components](https://styled-components.com/)
- [react-router-dom](https://reactrouter.com/)

It offers an opinionated structure to get started with ease. Tests are performed on every commit after the linting stage successfully finishes. Finally, your offered with a README template that makes it easy to document your project. Have fun!

## 🎨 Creating a Project

Start by creating a repository for your project:

`git init my-app`

Then run the following command:

`yarn create react-app my-app --template @synxty/react-template`

or, using npx:

`npx create-react-app my-app --template @synxty/react-template`

And that's it!

## 📁 File Structure

After one of the commands above finishes, a new directory is created with the name `my-app` in this case. And this is the structure that you get inside your project:

```.
my-app/
├── README.md
├── node_modules/
├── package.json
├── .gitignore
├── .eslinttc.json
├── tsconfig.json
├── commitlint.config.js
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── App/
    |   |-- App.tsx
    ├── assets/
    ├── components/
    ├── pages/
    ├── routes/
    ├── services/
    ├── styles/
    |   |-- index.js
    └── index.tsx

```

## ▶️ Available Scripts Within the Created Project

`yarn start` or `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

___
`yarn test` or `npm test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

___
`yarn build` or `npm run build`

Builds the app for production to the `build` folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

___
`yarn eject` or `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## 🧠 Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## ⚠ Notes

- In your first commit, be sure that you are also committing the `.eslintrc.json`. Also, if you decide to make changes to this file commit those changes **before** you commit any changes to the src directory.

- Changes to the default Airbnb code style to fit this template:
  - import extensions were removed from ts and tsx files.
  - tsx was added as a jsx-filename-extension.
  - prop-types were disabled but feel free to enabled them by removing that option in the `.eslintrc.json` file.

## ⚖️ License

This template is open source software [licensed as MIT](LICENSE).

___

Thank you, made with 💗 by [Synxty](https://github.com/synxty).