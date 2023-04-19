const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const path = require('path');
var bodyParser = require('body-parser');

const app = express(); 
app.set ('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
  
  }));
  app.set('view engine', '.hbs'); 


  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(express.urlencoded({extended: false}));
  app.use(express.json());
  app.use('/', require('./routes/page'));
  app.use(express.static(path.join(__dirname, 'public')));

  app.listen(app.get('port'), () => {
    console.log('Server on port',app.get('port'));

});