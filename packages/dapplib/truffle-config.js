require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give enroll slender solve cheap rescue noise attitude coral light army gauge'; 
let testAccounts = [
"0x523a8d009a7edabc725d3ee6b791fa9a80acb202502f1f35b6abec5802b1059b",
"0xf427661d4e8ac3c905c897033251a037b4415a75e9d121093dc0e3344db50be7",
"0x13da4f22f1149abc721d235e16e02c7b4d888ff9295f21342a6135c6211988f7",
"0x1bef8cd38020553bdffc2d7339b47141f94481316f26925d9e66471c4e297afa",
"0x006ca922c8d7c8ebcd46697aaf0b7a544fc93ecc35ae3ec53cf4476f51e2e3ab",
"0x2cef986b0c6cc81ee4de223dae6634446a1648ea9f15078c8cfc49c94f439c8b",
"0x03832428c190c0677f0b61448ea89a1667417cadc10d6a704409f542aa57e5e9",
"0xf6f5dc91e646cde21e7ed0aa21ea338fa13408dcd760eda5529740a4f5b3df5d",
"0xe426fb9339564b44e02e38ce125f40dc41ece5f5cbda97cf2d6d888710607503",
"0xc8d6dbbaea14d9e6d13d49fe5601cac9c72597cc8ee577da27d05ecdaa95d27b"
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

