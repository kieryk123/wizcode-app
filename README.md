## Wizcode App

This project is a recruitment task for Wizcode. I've decided to use Tailwind for styling and Recoil for fundamental state management. I've implemented the searching feature and favorites feature. The favorites feature uses local storage as an external DB to make it as simple as possible. I've also implemented some very basic unit tests. 

## Project structure

`__tests__` this directory contains all tests

`common` this directory contains utils, consts, ann commonly used functions

`components` this directory contains global components

`hooks` this directory contains React hooks

`models` this directory contains TypeScript models and enums

`services` this directory contains all external services and it's implementation

`state` this directory contains files related to store and state management

`views` this directory contains React components that are views/pages top root elements

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.  
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.  
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Packages and tools

This project uses some popular packages. 

Here is the list:

*   React
*   TypeScript
*   Recoil
*   Axios
*   Tailwind
*   Prettier
*   ESLint