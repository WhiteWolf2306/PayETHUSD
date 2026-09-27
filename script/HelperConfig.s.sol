// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import {Script} from "forge-std/Script.sol";
import {PayETHUSD} from "../src/PayETHUSD.sol";

contract HelperConfig is Script {
    struct NetworkConfig {
        address pricefeed;
    }

    NetworkConfig public ActiveNetwork;

    function getSepoliaTestnet() public pure returns (NetworkConfig memory) {
        return NetworkConfig({
            pricefeed: address(0x694AA1769357215DE4FAC081bf1f309aDC325306) // ETH/USD on Sepolia
        });
    }

    function getMainnetConfig() public pure returns (NetworkConfig memory) {
        return NetworkConfig({
            pricefeed: address(0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419) // ETH/USD on Mainnet
        });
    }

    constructor() {
        if (block.chainid == 11155111) {
            ActiveNetwork = getSepoliaTestnet();
        } else if (block.chainid == 1) {
            ActiveNetwork = getMainnetConfig();
        } else {
            revert("Unsupported chain. Use Sepolia or Mainnet only.");
        }
    }
}
