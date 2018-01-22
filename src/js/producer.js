angular.module('producerApp', ['ui.materialize'])

    .controller('producerCtrl', function ($scope, $http) {
        /**
         *
         */
        $scope.AUDIT_STATUS_MAP = {
            0: 'Not Certified',
            1: 'Awaiting Certification',
            2: 'Certified By APEDA'
        };
        if(!window.localStorage.items) {
            $http.get("../data/produces.json")
                .then(function(response) {
                    window.localStorage.items = JSON.stringify(response.data);
                    $scope.items = JSON.parse(window.localStorage.items);
                });
        }
        else {
            $scope.items = JSON.parse(window.localStorage.items);
        }
        $scope.openModal = false;

        $scope.formItem = {};

        $scope.openModal = function () {
          $('#addItemModal').modal('open');
        };
        $scope.addItem = function(item) {
            $scope.items.push(item);
            window.localStorage.items = JSON.stringify($scope.items);
            $('#addItemModal').modal('close');
        };

        $scope.initiateShipment = function (productId) {
            console.log($scope.items[productId]);
            console.log(window.w3App);
        };
    });