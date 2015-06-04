var app = angular.module('userProfiles');

app.service('mainService', function($http, $q) {

  this.getUsers = function() {
  	var deferred = $q.defer();
    return $http({
        method: 'GET',
        url: 'http://reqr.es/api/users?page=1'
    }).then(function(response){
    	console.log(response);
    	var parsedResponse = response.data.data
      deferred.resolve(parsedResponse)
      return deferred.promise;
    })
  }

});
