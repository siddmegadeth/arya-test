app.controller('landingCtrl', ['$scope', '$timeout', 'rest', '$uibModal', function($scope, $timeout, rest, $uibModal) {




    $scope.getTableData = function() {
        
        rest.tableData().then(function(resp) {
            console.log(resp);
            $scope.tableData = resp.data;
        });
    }

    $scope.filterByDays = function(filterDays) {

        console.log("Days To Filter : " + filterDays);
        if (filterDays != undefined) {
            var timeCreated = moment();

            var goodDates = [];
            for (var e = 0; e < $scope.tableData.length; e++) {
                var objects = $scope.tableData[e];
                if (moment(objects.date).isAfter(moment(timeCreated).subtract(filterDays, 'days'))) {
                    var goodDates = [];
                    goodDates.push(objects);
                }
            }
            console.log("Data Filtered For : " + filterDays);
            console.log(goodDates)
            $scope.tableData = goodDates;
        } else {
            console.log("Show Filter For All Dates");
            $scope.getTableData();
        }

    };

    $scope.filterTableData = function(tableValue, index) {
        console.log(tableValue);
        console.log(index);
        $uibModal.open({
            templateUrl: 'components/landing/templates/modal-filter.html',
            placement: 'left',
            size: 'lg',
            controller: 'modalFilterCtrl',
            resolve: {
                modalViewData: function() {
                    return tableValue;
                }
            }
        });
    };


    $timeout(function() {
        $scope.orderByField = 'name';
        $scope.reverseSort = false;
        $scope.getTableData();
    })


}])