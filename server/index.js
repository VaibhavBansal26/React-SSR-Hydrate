const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const AppServer = require('../src/App').default;
const path = require('path');
import {matchPath} from 'react-router-dom';
import routes from '../src/routes';
import { StaticRouter } from 'react-router-dom/server';
const serialize = require('serialize-javascript');
import { ServerStyleSheet } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';

const app = express();
const PORT = process.env.PORT || 3001;


app.get("*", (req, res, next) => {
    const activeRoute = routes.find((route) =>
      matchPath(route.path, req.url)
    ) || {}
    const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise
    .then((data) => {
        const sheet = new ServerStyleSheet();
        // const appContent = renderToString(sheet.collectStyles(<App />));
        const markup = ReactDOMServer.renderToString( sheet.collectStyles(<StaticRouter location={req.url} ><GlobalStyle/><AppServer serverData={data} /></StaticRouter>));
        const styles = sheet.getStyleTags();
     

      res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>SSR with React Router</title>
          <script src="/bundle.js" defer></script>
          <link href="/main.css" rel="stylesheet">
          ${styles} 
          <script>
            window.__INITIAL_DATA__ = ${serialize(data)}
          </script>
        </head>

        <body>
          <div id="app">${markup}</div>
        </body>
      </html>
    `);
    })
    .catch(next);
  
  })

// app.get('/', (req, res) => {
//   const content = ReactDOMServer.renderToString(<AppServer />);
//   const html = `
//     <!DOCTYPE html>
//     <html lang="en">
//       <head>
//         <meta charset="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>React SSR</title>
//       </head>
//       <body>
//         <div id="root">${content}</div>
//       </body>
//     </html>
//   `;

//   res.send(html);
// });


app.use(express.static(path.resolve(__dirname, '../build')));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});