# Countries App

Countries is an app powered by the [RestCountries API](https://studies.cs.helsinki.fi/restcountries/api/all) and [WeatherStack API](https://weatherstack.com), providing extensive information about different countries alongside real-time weather data for their capitals. Users can explore country details by entering a search query into the search field.

If the query results in more than 10 matching countries, users are guided to refine their search for specificity. In cases where there are ten or fewer matching countries (but more than one), all relevant countries are prominently displayed. Users can easily select a specific country by clicking on a dedicated button, available only when there are 10 or fewer matching countries, streamlining the process to narrow the search to a single country.

For a single matching country, the application presents essential data, including the capital, area, flag, and languages spoken. Additionally, users can access the current weather report for the capital, complete with weather icons.

# Try out this app:

You can experience the app by clicking [this link](https://countries-by68.onrender.com).

# Project Details:

This project is part of the [fsopen2023](https://github.com/413C5/fsopen2023/tree/main/part2/countries) repository, specifically located in the countries directory. The creation of the standalone "countries" repository is specifically for hosting on render.com.

Feel free to explore the [fsopen2023](https://github.com/413C5/fsopen2023) repository to understand its broader context and discover related projects.

**Note:** This repository is considered legacy. Please be aware that the API used in this old version is no longer free. For the latest updates and developments, as well as access to a version using a free API, please visit the [newest repository](https://github.com/413C5/countries).



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

### What does this do?
This project lets the user search for a country, in order to get info such as area, capital of the country and languages. Weather information is also displayed (weather information is taken from OpenWeather).
