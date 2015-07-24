'use strict';

module.exports = function(app){

  app.directive('newSumbit', function(){
    return {
      restrict: 'AC',
      templateUrl: '/templates/newSubmit.html',
      replace: true
    }

  });
  app.directive('showData', function(){
    return {
      restrict: 'AC',
      templateUrl: '/templates/showData.html',
      replace: true
    }

  });

};
