# Star Wars Movie Character List

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Using API from [SWAPI](https://swapi.dev/).<br>

## Getting Started

Clone this repo :
`git clone https://github.com/swapnilsptil/Allica_bank_assignment.git`

Navigate to the root folder and install all dependencies :

- `yarn` or `npm install`

Start Development Mode :

- `yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint` or `yarn lint`

To check javascript linting rules.

### `npm run format` or `yarn format`

To format or prettier codebase using `Prettier`.

## Folder Structure

```
|-- src/
    |-- components/
    |-- shared/
        |-- assets/
            |-- fonts/
            |-- icon/
            |-- images/
        |-- components/
            |-- Loader/
        |-- constants/
        |-- helpers/
        |-- hooks/
        |-- styles/
            |-- base/
            |-- themes/
    |-- App.js
    |-- index.js
    |-- serviceWorker.js
    |-- setupTests.js
```

- `components` : Folder to put all non shared Component
- `shared/assets` : Folder to put assets like fonts, icons and images
- `shared/components`: Folder to put all shared Component
- `shared/constants` : Folder to put all of ours constant like `api url`, `mock`, `action types` and all others constant data that dont changed
- `shared/helpers` : Folder to put our helpers function like Consume API and formating data or others helpers
- `shared/hooks` : Folder to put all of ours custom hooks/logic for component
- `styles` : Folder to put our Styled Component that reusable

## Style Utilities

### Relative Unit

This project using relative unit based 10px. so you can use `1rem` which means `10px` properties in css to help ours styling more easier handling Responsive.

### Media Queries

#### Relative Unit

| State           | Properties  |
| --------------- | ----------- |
| Default         | 1rem = 10px |
| max-width 768px | 1rem = 9px  |
| max-width 576px | 1rem = 8px  |

#### Container

| State            | Properties     |
| ---------------- | -------------- |
| Default          | width = 100%   |
| min-width 576px  | width = 540px  |
| min-width 768px  | width = 720px  |
| min-width 992px  | width = 960px  |
| min-width 1200px | width = 1140px |

#### Column

| State           | Numbers of Column in Row |
| --------------- | ------------------------ |
| Default         | 1                        |
| min-width 768px | 2                        |
| min-width 992px | 3                        |
