var express    = require('express');
var app        = express();
var consign    = require('consign');
var bodyParser = require('body-parser');

app.use(express.static('./public'));
app.use(bodyParser.json());

app.set('secret', 'issoumamensagemdesegredoqualquer')

// requires removidos por conta do consign
//require('../app/controllers/fotosController')(app);
//require('../app/controllers/gruposController')(app);

consign({cwd: 'app' })    
    .include('models')
    .then('controllers')
    .then('routes')
    .into(app);

module.exports = app;