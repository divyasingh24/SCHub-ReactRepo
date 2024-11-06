# Introduction
A React project containing a sample external component for Sitecore Content Hub.

## Getting Started
After cloning the repo, follow these initial steps to set up your environment:

Install Package Dependencies: Open your terminal, navigate to the project folder, and install dependencies by running: `npm install`. (Requires NodeJS and NPM package manager)

## Build and Test
To compile the TypeScript files and bundle them into a minified JavaScript file:

Build the Component:
1. In your terminal, run: `npm run build --component=<foldername>`.
2. Replace `<foldername>` with the actual name of the folder containing your component.
3. After a successful build, the compiled, bundled, and minified JavaScript file will be available in the /dist folder.
4. Then you start local webserver with `npm run dev`
5. Open a browser a navigate to localhost: https://localhost:5173/dist/<ScriptName>.js