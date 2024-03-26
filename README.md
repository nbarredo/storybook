# Published Location

https://cdn.eversource.com/prod/storybook/latest/


## How to import and use the new storybook npm package on another repo:

1. Add .npmrc file on the root with this content:

registry=https://pkgs.dev.azure.com/Eversource-Energy/Eversource-Digital/_packaging/Eversource-Digital/npm/registry/

always-auth=true

2. Run the command `npm uninstall @eversource/storybook` to remove any previous version of Storybook that you might have installed

3. Run the command npm i @eversource/storybook to install the latest version of the new storybook npm package.  You can install a specific version by first looking up the list of available versions here:  https://dev.azure.com/Eversource-Energy/ms-benchmark/_artifacts/feed/Benchmark/Npm/@eversource%2Fstorybook/versions. If you get an authentication error, please follow the "Project Setup" steps here: https://dev.azure.com/Eversource-Energy/ms-benchmark/_artifacts/feed/Benchmark/connect

4. If you are using Typescript, verify that the package name/path in the decs.d.ts is correct:

`declare module "@eversource/storybook";`

5. In your app's scss/css entry point file (usually something like index.scss or app.css), import Storybook's styles accordingly:

 * If your entry point is a SASS/SCSS file: `@use "../node_modules/@eversource/storybook/dist/esm/index.css";`
 * If your entry point is a CSS file: `@import url("../node_modules/@eversource/storybook/dist/esm/index.css");` or
 * `@import "../node_modules/@eversource/storybook/dist/esm/index.css";`

## How to Contribute to Eversource Storybook (draft)

1. Clone the repo (HTTPS) to your local machine
2. Open a terminal and navigate to the root directory
3. Ensure that you're using Node version `20.10.0`.  You can use this tool to help you manage your local node versions:  http://tinyurl.com/ycynxd2z
4. run `npm ci` to add your dependencies. **DO NOT USE `npm install` OR `npm i`**.
5. To launch Storybook, enter the following at your terminal prompt: `npm run storybook`.
6. To run unit tests, use `npm test`. Optionally, you can request test coverage information with `npm run test:coverage`.

## Branching and Deployment Strategy

When creating a new component, your local branch name should begin with `/feature` (e.x. "/feature/create-slider-component").  This will serve as your component's "trunk" branch.  

If you need to create a "twig" branch off of the trunk, its name should begin with `/user` (e.x. "/user/create-automated-tests"). This user/twig branch should be derived from the trunk branch.

As you develop, your commits, merges, and Prs will trigger various pipeline processes:

#branches beginning with `/user`
* When you commit code to these branches, an artifact will be created and you can view its success/failure in Azure DevOps. Note that this artifact will not be published into a feed or elsewhere.  
* When you merge these branches back into the feature/trunk branch from which it was based, an artifact will be created and you can view its success/failure in Azure DevOps. Additionally, %%%%%%%%%%%%%%%%%%%%%%%%%

* branches beginning with `/feature`: When you commit code to these branches, an artifact will be created and you can view its success/failure in Azure DevOps. Note that this artifact will not be published into a feed or elsewhere/  


## Writing code for the Storybook
1.  Install the following IDE extensions in order to ensure that linting and code formatting function properly:  "ESLint", "Prettier - Code Formatter", "Stylelint".  The extensions will automatically pick up the appropriate configuration from the project directory. Please be sure that you are pointing to the proper config files in the project directory as opposed to some other location on your PC.
