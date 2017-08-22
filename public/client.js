var app = angular.module('ColorApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/views/homepage.html'
    }).when('/red', {
        templateUrl: '/views/red.html',
        controller: 'RedController as vm'
    }).when('/yellow', {
        templateUrl: '/views/yellow.html',
        controller: 'YellowController as vm'
    }).when('/blue', {
        templateUrl: '/views/blue.html',
        controller: 'BlueController as vm'
    }).when('/homepage', {
        templateUrl: '/views/homepage.html',
        controller: 'HomepageController as vm'
    }).when('/green', {
        templateUrl: '/views/green.html',
        controller: 'GreenController as vm'
    });
}]);

// app.controller('YellowController', function() {
//     console.log('Yellow loaded!');
//     var self = this;
//     self.yellowMessage = 'Yellow Page Message'
// });

// app.controller('YellowController', ['$scope', function($scope) {
//     $scope.something = "This is something"
// }])

// app.controller('RedController', function() {
//     console.log('Red loaded!');
//     var self = this;
//     self.redMessage = 'Red Page Message'
// });

// app.controller('BlueController', function() {
//     console.log('Blue loaded!');
//     var self = this;
//     self.blueMessage = 'Blue Page Message'
// });

app.controller('HomepageController', function() {
    console.log('Homepage loaded!');
    var self = this;
    self.homepageMessage = 'Homepage Message'
});

// app.controller('GreenController', function() {
//     console.log('Green loaded!');
//     var self = this;
//     self.greenMessage = 'Green Page Message'
// });


// app.controller('RedController', [function() {
//     console.log('Red loaded!');
//     var self = this;
//     self.redThings = [
//         'Tomato',
//         'Apple',
//         'Cherry',
//         'Blood',
//         'Fire'
//     ];
// }]);