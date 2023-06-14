// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require('../constants');

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataUrl = METADATA_URL;

  const cryptoDevsContract = await hre.ethers.getContractFactory("CryptoDevs");

  const deployedContract = await cryptoDevsContract.deploy(metadataUrl, whitelistContract);

  await deployedContract.deployed();

  console.log(
    "Crypto Devs Contract Address:",
    deployedContract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
