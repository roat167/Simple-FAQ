const express = require('express');
const app = express();

app.use(express.static(__dirname + '/src/assets'));

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/src/index.html');
});

const port = process.env.PORT || 4200;
app.set('port', port);

app.listen(port, () => console.log('App is running on port', app.get('port')));
 