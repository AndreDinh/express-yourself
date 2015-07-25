'user strict';

require('angular/angular');
// require('angular-route');

var blogPosting = angular.module('blogPosting', []);


//controler
require("./BlogPost/Controllers/postingController.js")(blogPosting);

// services
require('./services/resourceServices.js')(blogPosting);
