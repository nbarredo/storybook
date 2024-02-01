# Published Location

https://cdn.eversource.me/nonprod/storybook/latest/index.html


## How to import and use the new storybook npm package on another repo:

1. Add .npmrc file on the root with this content:

registry=https://pkgs.dev.azure.com/Eversource-Energy/Eversource-Digital/_packaging/Eversource-Digital/npm/registry/

always-auth=true

2. Remove the package "@eversource/mf-storybook" from package.json file

3. Run the command npm i @eversource/storybook to install the latest version of the new storybook npm package

4. Replace the package name on the decs.d.ts to use the new storybook package

declare module "@eversource/storybook";

5. Make sure all the components used are the ones from Storybook


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
