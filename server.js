const express = require('express');
const html = require('./routes/html');
const api = require('./routes/api');

//initialize app and create a port
const app = express();
const PORT = process.env.port || 3001;

// set up body parsing, static, route middleware
app.use(epress.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);

// Start server on port
app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));