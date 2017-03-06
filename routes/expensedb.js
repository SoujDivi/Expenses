var mongo = require("mongodb");

var Server = mongo.Server,
	Db = mongo.Db,
	BSON = mongo.BSONPure;

var server = new Server('127.0.0.1', 27017, {auto_reconnect: true});

db = new Db('expensedb', server);

db.open(function(err, db) {
	if(!err){
		console.log("connected to 'expense' database");
		db.collection('expenses',{strict: true}, function(err, collection){
			if(err){
				console.log("the 'expenses' collection doesn't exist");
			}
		});
	}
});


exports.addExpense = function(req, res) {
	var expense = req.body;
	console.log('inside db'+ req.body);
	db.collection('expenses', function(err, collection) {
		collection.insert(expense, {safe:true}, function(err, result) {
			if(err){
				res.send({'error': 'an error has occurred'});
			} else {
				console.log('success'+expense);
				res(expense);
			}
		});
	});
}

exports.getExpense = function(req, res) {
	db.collection('expenses', function(err, collection) {
		collection.find().toArray(function(err, records) {
			if(err) {
				res.send({'error': 'an error has occurred'});
			} else {
				console.log("get "+records);
				res(records);
			}
		})
	});
}