var express = require('express');

var bodyParser = require('body-parser');

var methodOverride = require('method-override');

var port = process.env.port || 8080;

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

//Initiate Handlebars
var handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var routes = require('./controllers/eat_controller.js');

app.use('/', routes);

app.listen(port);
