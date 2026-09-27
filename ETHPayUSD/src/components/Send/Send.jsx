import React from "react";
import {ethers} from "ethers";    
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

function Send() {
     const [amountUSD, setAmountUSD] = useState('');
     const [receiver, setReceiver] = useState('');
const walletAddress = "0x49880B9d2ebcD8588DD44De532950678dF99AA8D";
 const walletABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "pricefeed",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "nonpayable"
  },
  {
    type: "function",
    name: "get1ETHPrice",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getETHamount",
    inputs: [
      {
        name: "usdAmountInDollars",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "getOwnner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address"
      }
    ],
    stateMutability: "view"
  },
  {
    type: "function",
    name: "sendMoney",
    inputs: [
      {
        name: "amountUSD",
        type: "uint256",
        internalType: "uint256"
      },
      {
        name: "Reciever",
        type: "address",
        internalType: "address payable"
      }
    ],
    outputs: [],
    stateMutability: "payable"
  },
  {
    type: "event",
    name: "AmountSent",
    inputs: [
      {
        name: "amountsent",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "event",
    name: "RefundRecieved",
    inputs: [
      {
        name: "Refund",
        type: "uint256",
        indexed: true,
        internalType: "uint256"
      }
    ],
    anonymous: false
  },
  {
    type: "error",
    name: "EnterValidAmount",
    inputs: []
  },
  {
    type: "error",
    name: "InvalidPrice",
    inputs: []
  },
  {
    type: "error",
    name: "NotValidAdddress",
    inputs: []
  },
  {
    type: "error",
    name: "Owner_Cant",
    inputs: []
  },
  {
    type: "error",
    name: "PayTheExactAmountWritten",
    inputs: []
  },
  {
    type: "error",
    name: "Transaction_Failed",
    inputs: []
  }
];


   
const SendMoney=async()=>{
    try{
     const provider = new ethers.providers.Web3Provider(window.ethereum); // provider set up
     const signer = provider.getSigner();
     const contract = new ethers.Contract(walletAddress,walletABI,signer);// contract all set up 
      const usdAmountNumber = Number(amountUSD);
         const ETHamount = await contract.getETHamount(usdAmountNumber);
      console.log("USD amount:", usdAmountNumber);
console.log("ETH amount (wei):", ETHamount);
  
     const overrides = {
    value: ETHamount,
    gasLimit: 100000 
}
 console.log("USD amount:", usdAmountNumber);
console.log("ETH amount (wei):", ETHamount.toString());
if (!ethers.utils.isAddress(receiver)) {
  alert("❌ Invalid receiver address");
  return;
}
if (ETHamount.lte(0)) {
  alert("❌ ETH amount to send is 0 or less");
  return;
}
     const transaction = await contract.sendMoney(usdAmountNumber,receiver,overrides);
     await transaction.wait();
     alert("You Transaction is successful, thankyou for using PayETHUSD😊");
    }
    catch (error){
        console.error("❌ Transaction Failed",error);
        console.log(error.reason);
        alert("❌Transaction Failed");
    }

}
    return(
        <>
        
    <div className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-4">

      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-br from-purple-500 via-indigo-500 to-pink-500 rounded-full filter blur-3xl opacity-30 animate-blob1"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-[500px] h-[500px] bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 rounded-full filter blur-3xl opacity-25 animate-blob2"></div>
      <div className="absolute top-1/3 left-[60%] w-[350px] h-[350px] bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-500 rounded-full filter blur-2xl opacity-20 animate-blob3"></div>

      <div className="w-full max-w-lg bg-white/5 backdrop-blur-xl border border-purple-800/20 rounded-3xl shadow-[0_0_20px_rgba(168,85,247,0.15)] p-10 text-white relative overflow-hidden group z-10">

        <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition duration-700 bg-gradient-to-br from-purple-500 via-transparent to-indigo-600 rounded-3xl blur-3xl pointer-events-none"></div>

        <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
          Send Ethereum
        </h1>

        <div className="mb-6">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            USD Amount
          </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amountUSD}
            onChange={(e)=>setAmountUSD(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg focus:shadow-purple-500/20 transition duration-300 appearance-none 
            [&::-webkit-outer-spin-button]:appearance-none 
            [&::-webkit-inner-spin-button]:appearance-none"
            style={{ MozAppearance: 'textfield' }}
          />
        </div>

        <div className="mb-8">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
            Receiver Address
          </label>
          <input
            type="text"
            placeholder="0x..."
            value={receiver} 
            onChange={(e)=>setReceiver(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-gray-400 border border-purple-700/30 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:shadow-lg focus:shadow-purple-500/20 transition duration-300"
          />
        </div>

        <button
          onClick={SendMoney}
          className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-xl shadow-xl transition duration-300 transform hover:scale-[1.02] active:scale-95 flex items-center justify-center"
        >
          <FaPaperPlane className="mr-2 animate-bounce-slow" />
          Send
        </button>
      </div>
    </div>

        </>
    )
}

export default Send;