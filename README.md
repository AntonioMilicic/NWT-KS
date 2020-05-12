# Welcome to Sell Me More

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
<hr>

## Gulp Script

### gulp watch
Start Gulp script to edit scss files and convert them to minified versions of css for browser usage.

## API server

### nodemon ./server/server.js
Start API server to fatch needed data from local DB. Because of that, web page wont work on any other computer, since there is no seed,
and web page is not deployed yet.
Data is read from [http://localhost:4000](http://localhost:4000) port.<br/>Without It web page will not work properly.
