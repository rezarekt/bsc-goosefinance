const Timelock = artifacts.require("Timelock");
const EggToken = artifacts.require("EggToken");
const MasterChef = artifacts.require("MasterChef");

module.exports = async function (deployer) {
   await deployer.deploy(Timelock, '0x9e40abb0b3d27b285e8c6c383888285762a649e2', 86400);
   await deployer.deploy(EggToken);
   const eggTok = await EggToken.deployed();
   await deployer.deploy(MasterChef, eggTok.address, '0x3378d043ab527eee4556c950a9c4bd87f06cd804', '0xefb826ab5d566db9d5af50e17b0cec5a60c18aa3', 700000000, 4737518);
  };