import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-solhint";
import * as dotenv from "dotenv";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
    contractSizer: {
        alphaSort: true,
        disambiguatePaths: false,
        runOnCompile: false,
        strict: true
    },
    abiExporter: {
        path: "./abi",
        runOnCompile: true,
        clear: true,
        spacing: 2,
        only: [
            /**
             * List of specific contract names for exporting ABI
             */
            // ":ERC20",
        ],
        format: "json"
    },
    networks: {
        hardhat: {},
		ETH_MAINNET: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://eth-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		},
		ETH_SEPOLIA: {
			accounts: [`${process.env.PRIVATE_KEY}`],
			url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
		}
    },
    etherscan: {
        apiKey: {
            mainnet: process.env.API_KEY_ETHERSCAN || ""
        }
    },
    solidity: {
        compilers: [
            {
                version: "0.8.18",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100
                    }
                }
            }
        ]
    }
};

export default config;