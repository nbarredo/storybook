Steps to set up Eversource Storybook (draft)

1. Clone the repo (HTTPS) to your local machine
2. Open a terminal and navigate to the root directory
3. run `npm ci` to add your dependencies. **DO NOT USE `npm install` OR `npm i`**.
4. To launch Storybook, enter the following at your terminal prompt: `npm run storybook`.
5. To run unit tests, use `npm test`.

# Legacy Documentation

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## How to import and use the new storybook npm package on another repo:

1. Add .npmrc file on the root with this content:

registry=https://pkgs.dev.azure.com/Eversource-Energy/Eversource-Digital/_packaging/Eversource-Digital/npm/registry/

always-auth=true

2. Remove the package "@eversource/mf-storybook" from package.json file

3. Run the command npm i @eversource/storybook to install the latest version of the new storybook npm package

4. Replace the package name on the decs.d.ts to use the new storybook package

declare module "@eversource/storybook";

5. Make sure all the components used are the ones from Storybook
