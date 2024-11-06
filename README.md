# Confirmation TDD

This is a basic react repository setup to pracice using TDD (Test Driven Development) to create a 
basic confirmation component in react. For each of the requirements create a failing test in Confirmation.test.tsx file, then add the code to the project to make the test pass. The first test is in place for you, it should be failing so your first job is to write just enough code to make it pass. Robert C. Martin (“Uncle Bob”) provides a concise set of rules for practicing TDD, bear them in mind as you work thriug the requirements.

1. Write production code only to pass a failing unit test.
2. Write no more of a unit test than sufficient to fail (compilation failures are failures).
3. Write no more production code than necessary to pass the one failing unit test.

**Requiements**

Create a confirmation component that satisfies the following:

* has the dialog role
* has the title Confirmation
* displays the configured question
* has a 'OK' button
* has a 'Cancel' button
* supports event handler for ok button
* support event handler for cancel button


This exercise was inspired by Matti Bar-Zeev's dev.to tutorial [Creating a React component with TDD](https://dev.to/mbarzeev/creating-a-react-component-with-tdd-2jn8). It has a step by step guide on how to go about implementing this.

**Create React APP** 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
