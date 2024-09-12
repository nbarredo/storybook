## Accessing Storybook

Live/Production URL - https://cdn.eversource.com/prod/storybook/latest/

Dev/"non-prod" URL - https://cdn.eversource.me/nonprod/storybook/latest/index.html

Note that "latest" can be replaced with a specific Azure build number as in this example:

Version 2024.8.14-5 - https://cdn.eversource.me/nonprod/storybook/2024.8.14-5/index.html

You can see a full list of Storybook package versions here: https://dev.azure.com/Eversource-Energy/ms-benchmark/_artifacts/feed/Benchmark/Npm/@eversource%2Fstorybook/versions/

## How to import and use the new storybook npm package in another repo:

1. Add .npmrc file on the root with this content:

```
registry=https://pkgs.dev.azure.com/Eversource-Energy/Eversource-Digital/_packaging/Eversource-Digital/npm/registry/

always-auth=true
```

2.  Run the command `npm uninstall @eversource/storybook` to remove any previous version of Storybook that you might have installed

3.  Run the command `npm i @eversource/storybook` to install the latest version of the new storybook npm package. You can install a specific version by first looking up the list of available versions here: https://dev.azure.com/Eversource-Energy/ms-benchmark/_artifacts/feed/Benchmark/Npm/@eversource%2Fstorybook/versions. If you get an authentication error, please follow the "Project Setup" steps here: https://dev.azure.com/Eversource-Energy/ms-benchmark/_artifacts/feed/Benchmark/connect

4.  If you are using Typescript, verify that the package name/path in the decs.d.ts is correct:

`declare module "@eversource/storybook";`

5. In your app's scss/css entry point file (usually something like index.scss or app.css), import Storybook's styles accordingly:

- If your entry point is a SASS/SCSS file: `@use "../node_modules/@eversource/storybook/dist/esm/index.css";`
- If your entry point is a CSS file: `@import url("../node_modules/@eversource/storybook/dist/esm/index.css");` or
- `@import "../node_modules/@eversource/storybook/dist/esm/index.css";`

## How to Contribute to Eversource Storybook

1. Clone the repo (HTTPS) to your local machine
2. Open a terminal and navigate to the root directory
3. Ensure that you're using Node version `20.10.0`. You can use this tool to help you manage your local node versions: http://tinyurl.com/ycynxd2z
4. run `npm ci` to add your dependencies. **DO NOT USE `npm install` OR `npm i`**.
5. To launch Storybook, enter the following at your terminal prompt: `npm run storybook`.
6. To run unit tests, use `npm test`. Optionally, you can request test coverage information with `npm run test:coverage`.

## Writing code for the Storybook

1.  Install the following IDE extension in your IDE in order to ensure that linting and code formatting function properly:

- "Biome" (biomejs.biome)

  The extension will automatically pick up the appropriate configuration from the project directory. Please be sure that you are pointing to the proper config files in the root of the project directory as opposed to some other location on your PC.

2.  There's no need to reinvent the wheel! Many Storybook components are based on components from [Carbon Design System (v10)](https://v10.carbondesignsystem.com/). Any new Storybook development should begin with a review of existing [Carbon components](https://v7-react.carbondesignsystem.com/?path=/story/getting-started--welcome) to see if something similar already exists. If it does, then you can import the carbon component into _your_ code and simply provide an Eversource _wrapper_ around the component, adding any Eversource-specific functionality that is required.

3.  When creating a new component, create a new folder in `/src/components`. This folder will house your JS, your scss, and your test file, along with any other assets that your component uses (such as images, etc...).

4.  We use CSS modules (https://github.com/css-modules/css-modules?tab=readme-ov-file#readme) in Storybook.
    Please locate your scss styles in a file named `*.module.scss`, located in the same folder as your component. In your component, you will import the file like this: `import styles from "../BillingCard.module.scss";`. Then you can apply the styles like this: `className={styles.yourclassname}` or `className={styles["your-hyphenated-classname"]}`.

## Branching and Deployment Strategy

When creating a new component, your local branch name should begin with `/feature` (e.x. "/feature/create-slider-component"). This will serve as your component's "trunk" branch.

As you develop, your commits, pushes, and PRs will trigger various pipeline processes:

When you commit code to your branches and push it to the remote server, a pipeline will activate which will deploy the code from your branch to a "prerelease" location where it can be reviewed by yourself and others:

`cdn.eversource.me/nonprod/storybook/review/[your-build-number]/index.html`

\*Note that these links are hosted on Akamai and therefore get purged after a certain period of time. As a result, even if the package is listed in Azure, its preview link might no longer function after some length of time.
