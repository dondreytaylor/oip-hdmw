import { Insight } from 'insight-explorer'
import config from './config'

var bithereumFeePerKb = 100000

module.exports = {
  name: 'bithereum_testnet',
  displayName: 'Bithereum Testnet',
  ticker: 'tBTH',
  satPerCoin: 1e8,
  feePerKb: bithereumFeePerKb,
  feePerByte: bithereumFeePerKb / 1024,
  maxFeePerByte: 100,
  minFee: bithereumFeePerKb,
  dust: 54600,

  txVersion: 1,

  explorer: new Insight(config.defaultApiUrls.bithereum_testnet),

  getExtraBytes: function (options) { },

  network: {
    messagePrefix: '\u0018Bithereum Signed Message:\n',
    bip32: {
      public: 0x04358394,
      private: 0x043587cf
    },
    slip44: 1,
    pubKeyHash: 0x41,
    scriptHash: 0x3f,
    wif: 0xef,
    dustThreshold: 100000
  }
}
