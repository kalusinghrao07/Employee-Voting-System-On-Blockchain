// deploy.js
const hre = require("hardhat");
async function main() {
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  // We get the contract to deploy
  const ResourceShare = await hre.ethers.getContractFactory("ResourceVoting");
  const resourceshare = await ResourceShare.deploy();
  await resourceshare.deployed();
  console.log("Token deployed to :", resourceshare.address);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });