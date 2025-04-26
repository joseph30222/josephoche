require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    'lisk-sepolia': {
      url: 'https://rpc.sepolia-api.lisk.com',
      accounts: [`0x${process.env.WALLET_KEY}`],
      gasPrice: 1000000000,
      chainId: 4202,
    },
  },
};
