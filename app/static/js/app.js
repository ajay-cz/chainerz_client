App = {
    web3Provider: null,
    contracts: {},

    init: function () {
        return App.initWeb3();
    },

    initWeb3: function () {
        /*
         * Replace me...
         */

        // Is there an injected web3 instance?
        if (typeof web3 !== 'undefined') {
            App.web3Provider = web3.currentProvider;
        } else {
            // If no injected web3 instance is detected, fall back to Ganache
            App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
        }
        web3 = new Web3(App.web3Provider);
        App.initContract();

        App.bindEvents();
    },

    initContract: function () {
        // Load pets.
        $.getJSON('/static/contracts/PathsDB.json', function (data) {
            console.log(data);
            App.contracts.PathsDB = TruffleContract(data);
            // Set the provider for our contract
            App.contracts.PathsDB.setProvider(App.web3Provider);
        });

        $.getJSON('/static/contracts/PathsController.json', function (data) {
            App.contracts.PathsController = TruffleContract(data);
            // Set the provider for our contract
            App.contracts.PathsController.setProvider(App.web3Provider);
        });
    },

    createCheckPoint: function (lot, address) {
        var pathControllerInstance;
        web3.eth.getAccounts(function (error, accounts) {
            if (error) {
                console.log(error);
                console.log("Inside web3.eth.getAccounts Error")
            }

            var account = accounts[0];

            App.contracts.PathsController.deployed().then(function(instance) {
                pathControllerInstance = instance;

                pathControllerInstance.createOrUpdatePath(lot, address).call();
            }).then(function (value) {
                console.log("Inside createCheckPoint");
                console.log(value);
            })

        })
    },
    //
    bindEvents: function() {
//      $('.ship_this').off('click').on('.ship_this', function (event) {
//            alert("hello");
//      });
    },

    markAdopted: function (adopters, account) {
        /*
         * Replace me...
         */
        var adoptionInstance;

        App.contracts.Adoption.deployed().then(function (instance) {
            adoptionInstance = instance;

            return adoptionInstance.getAdopters.call();
        }).then(function (adopters) {
            for (i = 0; i < adopters.length; i++) {
                if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
                    $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
                }
            }
        }).catch(function (err) {
            console.log(err.message);
        });
    },

    handleAdopt: function (event) {
        event.preventDefault();

        var petId = parseInt($(event.target).data('id'));

        /*
         * Replace me...
         */
        var adoptionInstance;

        web3.eth.getAccounts(function (error, accounts) {
            if (error) {
                console.log(error);
            }

            var account = accounts[0];

            App.contracts.Adoption.deployed().then(function (instance) {
                adoptionInstance = instance;

                // Execute adopt as a transaction by sending account
                return adoptionInstance.adopt(petId, {from: account});
            }).then(function (result) {
                return App.markAdopted();
            }).catch(function (err) {
                console.log(err.message);
            });
        });
    }
};

(function ($) {
    $(window).load(function () {
        App.init();
        window.w3App = App;
    });
})($);
