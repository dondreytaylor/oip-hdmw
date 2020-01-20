import { Insight } from 'insight-explorer'
import coininfo from 'coininfo'
import bip44constants from 'bip44-constants'
import config from './config'

var bithereumFeePerKb = 100000

var n = coininfo.bithereum.main.toBitcoinJS()

module.exports = {
  name: 'bithereum',
  displayName: 'Bithereum',
  ticker: 'BTH',
  satPerCoin: 1e8,
  feePerKb: bithereumFeePerKb,
  feePerByte: bithereumFeePerKb / 1024,
  maxFeePerByte: 100,
  minFee: bithereumFeePerKb,
  dust: 54600,

  txVersion: 1,

  explorer: new Insight(config.defaultApiUrls.bithereum),

  getExtraBytes: function (options) { },

  network: {
    bip32: {
      public: n.bip32.public,
      private: n.bip32.private
    },
    slip44: bip44constants.BTH,
    messagePrefix: '\u0018Bithereum Signed Message:\n',
    pubKeyHash: n.pubKeyHash,
    scriptHash: n.scriptHash,
    wif: n.wif
  }
}
