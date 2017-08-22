const express = require('express');
const app = express();
const path = require('path');

// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

app.set('views', __dirname + '/dist');
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/', function(request, response) {
  response.render('index');
});

const port = process.env.PORT || 4200;
app.set('port', port);

app.listen(port, () => console.log('App is running on port', app.get('port')));
 