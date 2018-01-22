angular.module('consumerApp', ['ui.materialize'])

    .controller('consumerCtrl', function ($scope, $http) {
        /**
         *
         */
        $scope.selectedItem = null;
        $scope.showTrace = null;
//        if(!window.localStorage.orders) {
//            $http.get("/static/data/produces.json")
//                .then(function(response) {
//                    window.localStorage.orders = JSON.stringify(response.data);
//                    $scope.items = JSON.parse(window.localStorage.items);
//                });
//        }
//        else {
//            $scope.items = JSON.parse(window.localStorage.items);
//        }

        $http.get("/static/data/orders.json")
            .then(function(response) {
                $scope.items = response.data;
        });

        $scope.onSelectTransaction = function(item){
            $http.get("/static/data/orders.json")
                .then(function(response) {
                    $scope.selectedItem = response.data[item] ;
                    $scope.showTrace = true;
            });

        }
        $scope.transactionInitiated = false;
        $scope.initiateShipment = function (productId) {
            console.log($scope.items[productId]);
            console.log(window.w3App);
        };

        $scope.initiateTransaction = function() {
            $scope.transactionInitiated = true;
        }



    });