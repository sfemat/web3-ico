const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { DEGENS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  const degensNFTContract = DEGENS_NFT_CONTRACT_ADDRESS;


  const degensTokenContract = await ethers.getContractFactory(
    "DegensToken"
  );

  // deploy the contract
  const deployedDegensTokenContract = await degensTokenContract.deploy(
    degensNFTContract
  );

  console.log(
    "Degens Token Contract Address:",
    deployedDegensTokenContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });