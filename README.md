# Lab 37 - React Odometer

### *Author: Thomas Sherer*, 2020-09-30

---

## Description
### Feature Tasks and Requirements
- Display an odometer with 4 digits
    - Pad with zeroes as needed (e.g. 0045)
        - JavaScript has a method for this. Research as needed. <br>
- Add buttons to increment the “miles” by 1, 10, 100 and 1000.
    - Roll over when odometer value exceeds 9999
    - Maintain any “extra” amount when rolling over. <br>
- The root __`App`__ component should contain __`Odometer`__,__`Header`__ and __`Footer`__ components.
    - You decide when appropriate to use class based or functional components.
    - __`Header`__ component should receive a __`text`__ value via props.
    - __`Footer`__ component should receive a __`trademark`__ value via props.
    - __`Odometer`__ component should store numeric value in it’s state.
        - Remember to update state in the React way.

---

## Collaborations and Attributions

Huge Shoutouts to __Skyler Burger__, __Brai Frauen__ and __Merry Cimakasky__ for helping me dig out of the holes I dug myself into!

<br>

String.prototype.padStart code from [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart) <br>

<br>
Stock Create-React-App .gitignore content supplemented with content from [gitignore.io](https://www.toptal.com/developers/gitignore/api/react)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
