'use strict';
module.exports = function(app){
  app.controller('postingController', ['$scope','resource', function($scope, resource){

    var Articles = resource('articles');

    $scope.getAll = function(){
      Articles.getAll(function(response){
        console.log('Got some data');
        console.log(response);
        $scope.posts = response;
        });
    };


      $scope.destroy = function(id) {
    		console.log(id);
    		Articles.destroy(id,function(response) {
    			$scope.getAll();
    	   });
       }

      $scope.submitForm = function(article){
        console.log("This is what you pass in "+ article);
        Articles.submitForm(article, function(response){
          $scope.getAll();
        });
      };

      // $scope.update = function (post){
      //   articles.update(id, post, function(response){
      //     post.edit = false;
      //     $scope.refresh();
      //   });
      // };

      $scope.edit = function (post) {
          post.editing = true;
          console.log('edit post'+ post);
      };

  }]);
};
