var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mc = require('./controllers/messages_controller');

app.use(bodyParser.json());

app.use(express.static('../public/src/'));

var urlPath = '/api/messages'

app.get(urlPath, mc.read);
app.post(urlPath, mc.create);
app.put(`${urlPath}/:id`, mc.update)
app.delete(`${urlPath}/:id`, mc.delete)

const port = 3000;
app.listen(port, () => console.log(`this server is listening on port ${port}`));