app.service('rest', ['$http', function($http) {

    return {

        tableData: function() {
            return $http({
                method: 'GET',
                url: '/get/table/data'
            })

        }



    }
}]);