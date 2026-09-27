import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

function Price() {
  const [ETHPRICE, setETHPRICE] = useState(null);

  useEffect(() => {
    const walletAddress = "0x49880B9d2ebcD8588DD44De532950678dF99AA8D";
    const walletABI = [
      {
        type: "constructor",
        inputs: [{ name: "pricefeed", type: "address", internalType: "address" }],
        stateMutability: "nonpayable",
      },
      {
        type: "function",
        name: "get1ETHPrice",
        inputs: [],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getETHamount",
        inputs: [{ name: "usdAmountInDollars", type: "uint256", internalType: "uint256" }],
        outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "getOwnner",
        inputs: [],
        outputs: [{ name: "", type: "address", internalType: "address" }],
        stateMutability: "view",
      },
      {
        type: "function",
        name: "sendMoney",
        inputs: [
          { name: "amountUSD", type: "uint256", internalType: "uint256" },
          { name: "Reciever", type: "address", internalType: "address payable" },
        ],
        outputs: [],
        stateMutability: "payable",
      },
      {
        type: "event",
        name: "AmountSent",
        inputs: [{ name: "amountsent", type: "uint256", indexed: true, internalType: "uint256" }],
        anonymous: false,
      },
      {
        type: "event",
        name: "RefundRecieved",
        inputs: [{ name: "Refund", type: "uint256", indexed: true, internalType: "uint256" }],
        anonymous: false,
      },
      { type: "error", name: "EnterValidAmount", inputs: [] },
      { type: "error", name: "InvalidPrice", inputs: [] },
      { type: "error", name: "NotValidAdddress", inputs: [] },
      { type: "error", name: "Owner_Cant", inputs: [] },
      { type: "error", name: "PayTheExactAmountWritten", inputs: [] },
      { type: "error", name: "Transaction_Failed", inputs: [] },
    ];

    const pricefeed = async () => {
      try {
        if (!window.ethereum) {
          console.log("MetaMask not detected");
          return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(walletAddress, walletABI, provider);
        const priceETH = await contract.get1ETHPrice(); // returns uint256
        const priceFormatted = ethers.utils.formatUnits(priceETH, 8); // assuming Chainlink 8 decimals
        console.log(priceFormatted);
        setETHPRICE(priceFormatted);
      } catch (error) {
        console.error("Failed to fetch ETH price:", error);
      }
    };

    pricefeed();
    const interval = setInterval(pricefeed, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-black to-blue-900 text-white">
      <div className="p-8 rounded-3xl shadow-2xl animate-bounce bg-gradient-to-r from-blue-800 via-blue-900 to-black border-4 border-blue-600 transform hover:scale-105 transition-all duration-500">
       <h1 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-400 
               text-4xl md:text-5xl font-extrabold tracking-wide animate-pulse drop-shadow-[0_1px_5px_rgba(255,215,0,0.75)] mb-6">
  Live Ethereum Price
</h1>
       <p className="text-5xl md:text-6xl font-extrabold text-center tracking-wide text-amber-400 
               animate-glow animate-pulse drop-shadow-[0_0_15px_rgba(255,191,0,0.9)]">
  {ETHPRICE !== null ? `$${parseFloat(ETHPRICE).toFixed(3)}` : "Loading..."}
</p>
        
      </div>
    </div>
  );
}

export default Price;
