var http = require('http');
var express = require('express');
var expenseDb = require("./routes/expensedb");
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

console.log(__dirname + " dirname");

app.use(express.static(__dirname + '/Expenses'));


app.post('/AddExpense', function(req, res){
	console.log('addservice '+req.body);
	expenseDb.addExpense(req, function(err, docs){
		console.log('addservice '+docs);
		res.json(docs);
	} )
});

app.get('/GetExpense', function(req, res){
	expenseDb.getExpense(req, function(err, docs){
		console.log('addservice '+docs);
		res.json(docs);
	} )
});



http.createServer(app).listen(8000, '127.0.0.1');

console.log('server running at http://127.0.0.1: 8000/');
