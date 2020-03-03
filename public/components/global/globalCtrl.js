app.controller('globalCtrl', ['$rootScope', '$scope', '$timeout', '$location', '$aside', function($rootScope, $scope, $timeout, $location, $aside) {

    $rootScope.isActive = function(loc) {
        return loc === $location.path();
    }

    $rootScope.showAsideMenu = function() {
        $aside.open({
            templateUrl: 'components/global/templates/side-menu.html',
            placement: 'left',
            size: 'lg'
        });
    }

}])