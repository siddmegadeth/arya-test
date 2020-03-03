app.controller('modalFilterCtrl', ['$scope', '$uibModalInstance', 'modalViewData', '$timeout', function($scope, $uibModalInstance, modalViewData, $timeout) {


    $timeout(function() {
        $scope.modalViewData = modalViewData;
        console.log("Data in modalFilterCtrl");
        console.log($scope.modalViewData);

    });

}])