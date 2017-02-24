## Instructions

Fetch your data using an http call that returns a promise. Save the returned data as a property of the `$scope` object and loop through it to display the guidebook info to the user.

Here's a list of some things to include in your app in the appropriate spots:
+ Directives:
  + `ng-app="<your module name>"`
  + `ng-controller="bookCtrl"`
  + `ng-repeat="book in books"`
+ A call to the data folder for `guides.json` using `$http`
+ Use the `$q` service to wrap your http call in a promise
+ `$scope.books = <your array of guide books data>`

### Dependencies for this project can be found in `package.json` & `bower.json`
