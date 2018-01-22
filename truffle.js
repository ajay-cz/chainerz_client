// var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = 'example easy midnight program rude north update shed wool armed entire mask';
var infura_apikey = 'Fyb0qZ4J9BPR9t41k70k';

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        },
        kovan: {
            // provider: new HDWalletProvider(mnemonic, 'https://kovan.infura.io' + infura_apikey),
            network_id: '*',
            gas: 4500000,
            gasPrice: 25000000000
        },
        rinkeby: {
            host: 'https://rinkeby.infura.io/' + infura_apikey,
            // provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io' + infura_apikey),
            network_id: '*',
            gas: 4500000,
            gasPrice: 25000000000
        },
        ropsten: {
            host: 'https://ropsten.infura.io/' + infura_apikey,
            // provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io' + infura_apikey),
            network_id: '*',
            gas: 4500000,
            gasPrice: 25000000000
        },
        mainnet: {
            // provider: new HDWalletProvider(mnemonic, 'https://mainnet.infura.io' + infura_apikey),
            network_id: '*',
            gas: 4500000,
            gasPrice: 25000000000
        }
    }
};
