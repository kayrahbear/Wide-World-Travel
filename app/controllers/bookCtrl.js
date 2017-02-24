"use strict";

app.controller("bookCtrl", function($scope, bookFactory){
	bookFactory.getBooks()
    .then((guides)=>{
	$scope.guides = guides.data.guides;
	});
});
