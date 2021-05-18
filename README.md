# Getting Started with Create React App

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

## Thoughts on "progress spinner"
Hi! 

I hope that this finds you well! Your assessment asked to re-create a progress spinner as a reusable component.

1) If i were tasked with building this as a re-usable component, I would be given specs from design on how this should look, and react. I just wanted to let you know I did this by eyeballing, and uploading a few files via your app :). (A gif or screen recording would have been awesome!). 

2) You may be looking at the architecture of how I laid out my components. Let me explain :)

- `patterns` would contain many re-usable components within an application. 
- Inside of `patterns` lives the folder `progress`, my thoughts on this would be that if we have a progress spinner, we are more then likely to have a "progress bar", etc. This would help house these components in a similar location. 
- Once you dive a little deeper `patterns/progress/ProgressCircle` you will see that this is where our "progress spinner" would live. I have broken it out into two sub-components to handle the spinner portion and content seperately. My thoughts on this, is these components do not rely on each other. This can help with testing, also maintanence on them in the future. Usually a component should do "one" thing, this helps make them less prone to bugs.
