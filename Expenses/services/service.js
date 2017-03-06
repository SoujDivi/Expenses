var expenseModule = angular.module("expensesApp");

expenseModule.factory("expenseService",['$http', '$log', function($http, $log){

	console.log("in services");

	var baseUrl = "http://localhost:8000";
	var expenseService = {};

	expenseService.push = function(pushData) {
		console.log("inside pushdata"+pushData);
		$log.info(pushData);
		return $http.post(baseUrl + '/AddExpense', pushData);
	} 

	expenseService.get = function() {
		console.log("inside getdata");
		//$log.info(pushData);
		return $http.get(baseUrl + '/GetExpense');
	}

	return expenseService;
}]);