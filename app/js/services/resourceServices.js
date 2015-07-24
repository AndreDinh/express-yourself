'user strict'

exports.module = function(app){

  var errorHandler = function(data) {
  		console.log(data);
  	};

  app.factory('resource',['$http', function($http){
    return function(resourceName){
      return {
        getAll: function(callback){
          $http({
						method: 'GET',
						url: '/' + resourceName
					})
					.success(callback)
					.error(errorHandler);
				  }
        };
      };
  }]);
};
