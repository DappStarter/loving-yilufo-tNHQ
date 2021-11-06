require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index royal pizza modify grid kangaroo army gift'; 
let testAccounts = [
"0xf280b97ec0ffe42060247af2f21e7dec4dca66d86c984431ed66b8bc582d995c",
"0xc5d2f15e892915c3bd1ba118f5cd42e76a6771a6baa24dcc68c4eafa36701ea1",
"0x3022d3d9afcd1b50ea0bb915fa0b5d2b9f590c51e1f53ed33fd09f41f14415c6",
"0x54ba967c5cdcd7843a51e8bf00120ee91e87a0d50651af2f26a04ad3b375fa97",
"0xf9729a08c8c8f0b6b2a1f417ebd5dcfe42daccbe4a2325517a61c40cc5c249f3",
"0xc0721236ea3aa789bbcfc6b1f147d28c46c59da495130356549299bdf047655b",
"0xe7057166e489576b38f12ada667679afe0765ea1c0cc6c3ccec9f22aeb93bd35",
"0x4c6b9a9753921bc4e2189fce88cf8784afa4af54493aba217795936549f1137d",
"0x553166d47c224000a12ab9e8942197e43daa7643df97b5f6da5abd41b71fa36b",
"0x7545faf474fcf1b45694fd165b54eb22bb4a1a603c0923eee66d19b6bc8fd538"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

