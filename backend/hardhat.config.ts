import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    fuji: {
      url: `https://avalanche-fuji.infura.io/v3/b093d7d6efc54a819ce2968e59023874`,
      chainId: 43113,
      accounts: [process.env.FUJI_API_KEY!],
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/b093d7d6efc54a819ce2968e59023874",
      accounts: [process.env.FUJI_API_KEY!],
    },
  },
};

export default config;
