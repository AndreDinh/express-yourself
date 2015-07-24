'use strict';
module.exports = function(app){
  app.controller('postingController', ['$scope','resource',function($scope, resource){
    
    var articles = resource('articles');

    var refresh = function(){
      articles.getall(function(response){
        console.log('Got some data');
        console.log(response);
        $scope.posts = response;
        $scope.post ='';
        });
    };

      $scope.destroy = function(id) {
    		console.log(id);
    		articles.destroy(id,function(response) {
    			$scope.refresh();
    	   });
       };

      $scope.newArticle = function(article){
        console.log("This is what you pass in "+ article);
        articles.submitform(article, function(response){
          $scope.refresh();
        });
      };

      $scope.update = function (post){
        articles.update(id, post, function(response){
          post.edit = false;
          $scope.refresh();
        });
      };

      $scope.edit = function (post) {
          post.editing = true;
          console.log('edit post'+ post);
      };

  }]);
};
