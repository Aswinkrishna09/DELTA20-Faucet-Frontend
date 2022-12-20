import { ethers } from "ethers";
require('dotenv').config()

const faucetABI = require("../abi.json");

const faucetContract = (provider) => {
  return new ethers.Contract(
    process.env.FAUCETADDRESS,
    faucetABI,
    provider
  );
};

export default faucetContract;
