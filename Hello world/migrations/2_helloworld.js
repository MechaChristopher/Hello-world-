var HelloWorld = artifacts.require("./HelloWorld.sol")
module.exports = function(deployer){ deployer.deploy(HelloWorld, "Hello, world! (CSC4980 - Zayra Uga)"); 
};
