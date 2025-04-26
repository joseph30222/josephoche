require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    liskSepolia: {
      url: "https://rpc.sepolia.lisk.com",
      accounts: [process.env.WALLET_KEY],
      chainId: 4202,
    },
  },
};
