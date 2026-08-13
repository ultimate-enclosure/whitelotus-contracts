import { defineConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-mocha";
import "@nomicfoundation/hardhat-ethers-chai-matchers";
import "@openzeppelin/hardhat-upgrades";

export default defineConfig({
  solidity: {
    version: "0.8.24",
    settings: {
      evmVersion: "cancun",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test"
  },
});
