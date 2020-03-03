var app = angular.module("myApp", ["ngRoute","ngAside","ui.bootstrap"]);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    // Template Routes
    $routeProvider
        .when('/', {
            templateUrl: 'components/landing/landing.html',
            controller: 'landingCtrl',
            data: {
                showNavbar: true,
            }
        })
        .when('/login', {
            templateUrl: 'components/login/login.html',
            controller: 'landingCtrl',
            data: {
                showNavbar: true,
            }
        })
        .otherwise({ redirectTo: '/login' });
    // Hash Prefix
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
    });


}]);


app.run(['$rootScope', function($rootScope) {
    // app global config values where config
    $rootScope.$on('$routeChangeStart', function(event, current, next) {
        $rootScope.showNavbar = current.data.showNavbar;

    });

    $rootScope.$on('$routeChangeSuccess', function() {

    });

}]);