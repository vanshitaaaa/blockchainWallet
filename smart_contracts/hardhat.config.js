require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    ropsten:{
      url: '';
      accounts: []
    }
  }
};
