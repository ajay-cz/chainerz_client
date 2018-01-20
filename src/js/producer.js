angular.module('producerApp', ['ui.materialize'])
    .controller('producerCtrl', function ($scope) {
        if(!window.localStorage.items) {
            window.localStorage.items = JSON.stringify([
                {
                    'name': 'Mango Variety 1',
                    'price': '1000',
                    'unit': 'KG',
                    'qty': '10'
                },
                {
                    'name': 'Mango Variety 2',
                    'price': '700',
                    'unit': 'KG',
                    'qty': '100'
                },
                {
                    'name': 'Grape Variety 1',
                    'price': '9000',
                    'unit': 'KG',
                    'qty': '100'
                },
                {
                    'name': 'Apple Variety 1',
                    'price': '1500',
                    'unit': 'KG',
                    'qty': '100'
                }]);
        }
        $scope.openModal = false;
        $scope.items = JSON.parse(window.localStorage.items);
        $scope.formItem = {};

        $scope.openModal = function () {
          $('#addItemModal').modal('open');
        };

        $scope.addItem = function(item) {
            $scope.items.push(item);
            window.localStorage.items = JSON.stringify($scope.items);
            $('#addItemModal').modal('close');
        };
    });