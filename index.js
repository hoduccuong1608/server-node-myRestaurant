const express = require("express")
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const route = require('./src/routes/index');
const port = 5000;

app.use((req, res, next) => {
	res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'DELETE,GET,PATCH,POST,PUT');
    res.append('Access-Control-Allow-Headers', 'Content-Type,Authorization');

	if (res.method == 'OPTIONS') {
		res.send(200);
	} else next();
})

app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  // http log
  app.use(morgan('combined'))
  route(app)

app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})