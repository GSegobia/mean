var app=angular.module("MainApp",[]);


app.controller("MainController",function($http, $scope){
	this.nome="";
	this.email="";
	this.senha="";

	this.rola= $http.get("/api/nerds").success(function(response){
		$scope.rola = response;
		return $scope.rola;
	});

});