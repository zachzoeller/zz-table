function getUserDetails() {
    var deferred = $q.defer();
    
    productService.getUserTransactionDetails(productId, userId).success(function (data) {                        
        var list = extendDataList(data.Result);
        deferred.resolve(list);
    });

    return deferred.promise;
}

$scope.FilterAll = '';
$scope.searchCriteria = {
    Page: 1,
    NumberPerPage: 5,
    Sort: "+Date",
    SearchText: $scope.FilterAll
};

$scope.tableModel = {
    list: $scope.trans,
    searchCriteria: $scope.searchCriteria,
    customGet: getUserDetails,
    pageSizes: [5, 10, 15]
};
