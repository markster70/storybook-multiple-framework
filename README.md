### Example Storybook compilation using Multiple Frameworks

Created a simple working example based on this great blog post :

https://scottnath.com/blahg/multi-framework-composition-storybook-ghpages/

This repo compiles a parent storybook, along with child storybooks ( locally )

Key points :

Web Components & React Framework Types for Storybook
Separate Vite Configs and Cache Folders
Components / Stories can live in same directory, or separate - your choice
See the main.js files for the configs
The refs file in the main .storybook directory pulls in the child storybooks

See the package.json file for the dependencies, and note carefully how the scripts run

### To fire up :

npm install
npm run sbook-multi

