<!-- omit in toc -->
# Create a Synxty App

<img src="https://raw.githubusercontent.com/synxty/cra-template-synxty/master/.github/assets/banner.png" />

<!-- omit in toc -->
## Start your projects like a pro

<!-- omit in toc -->
### Table of Contents

- [📃 Why?](#-why)
- [🎨 Creating a Project](#-creating-a-project)
- [📁 Folder Structure](#-folder-structure)
- [▶️ Available Scripts Within the Created Project](#️-available-scripts-within-the-created-project)
- [🧠 Learn More](#-learn-more)
- [⚖️ License](#️-license)

## 📃 Why?

<!-- omit in toc -->
### Well...
✅ TypeScript is default  
✅ Next.js because SEO is essential and SSR is included  
✅ styled-components, write CSS with JS? Thanks  
✅ Jest, the only library you need to test your app behavior  
✅ Your code will always be beautiful with Prettier  
✅ ESLint to keep a code pattern between the team  
✅ lint-staged to assure that every code gets linted when committed  
✅ Your commits will be meaningful with commitizen and commitlint  
✅ A complete README file, every project deserves one

Overall, creating a project with `create-synxty-app` is as easy as create-react-app or create-next-app but it sets you and your team ready to develop with a much better experience.

## 🎨 Creating a Project

Using npx, run the following command:

`npx create-synxty-app my-app`

or, using yarn:

`yarn create synxty-app my-app`

**Note:** Since you're probably going to run this commands in a full stack application, if you don't specify the name of the project it defaults to `web`.

And that's it!

## 📁 Folder Structure

After the installation completes, a new directory is created with the name of your app. This is the structure that you get inside your project:

```.
my-app/
├── README.md
├── node_modules/
├── package.json
├── .gitignore
├── .eslintrc.json
├── .eslintignore
├── tsconfig.json
├── commitlint.config.js
├── .babelrc
├── setupTests.js
├── jest.config.js
├── next-env.d.ts
├── next.config.js
├── .prettierrc
├── .github/
│   └── assets/
│       └── banner.png
├── public/
│   ├── favicon.ico
│   └── synxty.svg
└── src/
    ├── pages/
    │   ├── Home/
    │   │    ├── index.tsx
    │   │    ├── index.spec.tsx
    │   │    └── styles.ts
    │   ├── _app.tsx
    │   ├── _document.tsx
    │   └── index.tsx
    └── styles/
        └── global.ts

```

## ▶️ Available Scripts Within the Created Project

`npm run dev` or `yarn dev`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.  
The page will reload if you make edits.  
You will also see any lint errors in the console.

___
`npm run test` or `yarn test`

Launches the test runner.  

___
`npm run build` or `yarn build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.  
The build is minified and the filenames include the hashes.
___
`npm start` or `yarn start`

Runs the app in production.
___

## 🧠 Learn More

To learn React, check out the [React documentation](https://reactjs.org/).  
To learn Next.js, check out the [Next.js documentation](https://nextjs.org/docs/getting-started).
To learn styled-components, checkout the [styled-components documentation](https://styled-components.com/docs).


## ⚖️ License

This template is open source software [licensed as MIT](LICENSE).

___

Thank you, made with 💗 by [Synxty](https://github.com/synxty).