// https://eth-goerli.g.alchemy.com/v2/RrQwBxdQHUDBETVEl5aRakw0iOwhKp4L

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/RrQwBxdQHUDBETVEl5aRakw0iOwhKp4L",
      accounts: [
        "11c5152b04ee7aa83ec2ca61952bd625ec6ce817456a3756b180ff7b486515b3",
      ],
    },
  },
};
