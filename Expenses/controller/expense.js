var expenseModule = angular.module("expensesApp",[]);

expenseModule.controller("expenseCtrl", ['$scope', 'expenseService', function($scope, expenseService) {
	$scope.addExpense = function(){

		console.log("controller");
		var pushData = {
			ExpenseInfo :  $scope.expense,  
			ExpenseAmt : $scope.expenseAmount
		};

		expenseService.push(pushData)
			.success(function() {
				$scope.status = "Successfully Inserted";

			})
			.error(function(error) {
				$scope.status = "Error while InsertionS";
			});

	}

	$scope.getExpense = function(){
		expenseService.get()
			.success(function() {
				$scope.status = "Retrieved data";

			})
			.error(function(error) {
				$scope.status = "Error while retrieving";
			});
	}

}]);