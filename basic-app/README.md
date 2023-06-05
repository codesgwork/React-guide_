# Snippets

// common snippets

```js

imp→ 	import moduleName from 'module'
imn→ 	import 'module'
imd→ 	import { destructuredModule } from 'module'
ime→ 	import * as alias from 'module'

exp→ 	export default moduleName
exd→ 	export { destructuredModule } from 'module'

enf→ 	export const functionName = (params) => { }
ednf→ 	export default function functionName(params) { }

edf→ 	export default (params) => { }

met→ 	methodName = (params) => { }
anfn→ 	(params) => { }

nfn→ 	const functionName = (params) => { }

dob→ 	const {propName} = objectToDescruct
dar→ 	const [propName] = arrayToDescruct

cp→ 	const { } = this.props
cs→ 	const { } = this.state
```

// React snippets

```js
imr→ 	import React from 'react'
imrd→ 	import ReactDOM from 'react-dom'


imrc→ 	import React, { Component } from 'react'
imrpc→ 	import React, { PureComponent } from 'react'
imrm→ 	import React, { memo } from 'react'
imrr→ 	import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
imbr→ 	import { BrowserRouter as Router} from 'react-router-dom'
imbrc→ 	import { Route, Switch, NavLink, Link } from react-router-dom'
imbrr→ 	import { Route } from 'react-router-dom'
imbrs→ 	import { Switch } from 'react-router-dom'
imbrl→ 	import { Link } from 'react-router-dom'
imbrnl→ 	import { NavLink } from 'react-router-dom'
imrs→ 	import React, { useState } from 'react'
imrse→ 	import React, { useState, useEffect } from 'react'
redux→ 	import { connect } from 'react-redux'
est→ 	this.state = { }
cdm→ 	componentDidMount = () => { }
scu→ 	shouldComponentUpdate = (nextProps, nextState) => { }
cdup→ 	componentDidUpdate = (prevProps, prevState) => { }
cwun→ 	componentWillUnmount = () => { }
gdsfp→ 	static getDerivedStateFromProps(nextProps, prevState) { }
gsbu→ 	getSnapshotBeforeUpdate = (prevProps, prevState) => { }
sst→ 	this.setState({ })
ssf→ 	this.setState((state, props) => return { })
props→ 	this.props.propName
state→ 	this.state.stateName
rcontext→ 	const $1 = React.createContext()
cref→ 	this.$1Ref = React.createRef()
fref→ 	const ref = React.createRef()
bnd→ 	this.methodName = this.methodName.bind(this)
```

# DOCTYPE html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <!--
      Notice the use of %PUBLIC_URL% in the tags above.
      It will be replaced with the URL of the `public` folder during the build.
      Only files inside the `public` folder can be referenced from the HTML.

      Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
      work correctly both with client-side routing and a non-root public URL.
      Learn how to configure a non-root public URL by running `npm run build`.
    -->

    <title>basic react App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
