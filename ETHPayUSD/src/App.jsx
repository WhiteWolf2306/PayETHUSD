import { useState,useEffect } from 'react'
import './App.css';
import Header from "./components/Header/Header.jsx";
import { Outlet } from 'react-router-dom';
import Footer from "./components/Footer/Footer.jsx";
import { ethers } from "ethers";


function App() {
//   useEffect(()=>{

//  const walletAddress = "0x3Db90aCB312f8da70f058C09d7c474829c9292C6";
//  const walletABI = [
//   {
//     type: "constructor",
//     inputs: [{ name: "pricefeed", type: "address" }],
//     stateMutability: "nonpayable"
//   },
//   {
//     type: "function",
//     name: "getETHamount",
//     inputs: [{ name: "usdAmountInDollars", type: "uint256" }],
//     outputs: [{ name: "", type: "uint256" }],
//     stateMutability: "view"
//   },
//   {
//     type: "function",
//     name: "getOwnner", // typo? should be getOwner
//     inputs: [],
//     outputs: [{ name: "", type: "address" }],
//     stateMutability: "view"
//   },
//   {
//     type: "function",
//     name: "sendMoney",
//     inputs: [
//       { name: "amountUSD", type: "uint256" },
//       { name: "Reciever", type: "address" }
//     ],
//     outputs: [],
//     stateMutability: "payable"
//   },
//   {
//     type: "event",
//     name: "AmountSent",
//     inputs: [{ name: "amountsent", type: "uint256", indexed: true }],
//     anonymous: false
//   },
//   {
//     type: "event",
//     name: "RefundRecieved", // typo? should be RefundReceived
//     inputs: [{ name: "Refund", type: "uint256", indexed: true }],
//     anonymous: false
//   },
//   { type: "error", name: "EnterValidAmount", inputs: [] },
//   { type: "error", name: "InvalidPrice", inputs: [] },
//   { type: "error", name: "NotValidAdddress", inputs: [] },
//   { type: "error", name: "Owner_Cant", inputs: [] },
//   { type: "error", name: "PayTheExactAmountWritten", inputs: [] },
//   { type: "error", name: "Transaction_Failed", inputs: [] }
// ]


// const ConnectWallet = async()=>{
//   const provider = new ethers.providers.Web3Provider(window.ethereum);
//   await provider.send("eth_requestAccounts",[]);
//   // const signer = provider.getSigner();
//   // const walletcontract = new ethers.Contract(walletAddress,walletABI,signer);
// }

// ConnectWallet();
//   }
// ,[]);

  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App;
