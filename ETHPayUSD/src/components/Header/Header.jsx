import {React} from "react"
import { Link, NavLink } from "react-router-dom";
import myImage from "../../Images/myImage.png"
import {ethers} from "ethers";


function Header() {
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



const ConnectWallet = async()=>{
 if(!window.ethereum){
  alert("Please Install Metamask");
  return;
 }
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts",[]);
  // const signer = provider.getSigner();
  // const walletcontract = new ethers.Contract(walletAddress,walletABI,signer);
}


    return(
    <>
      <div className="bg-black h-20 flex items-center justify-between px-6 py-4">
        <Link to="/">
          <img src={myImage} alt="My Description" className="ml-0" style={{ width: "188px", marginLeft: "-30px" }}/>
        </Link>
                            
        <ul className="flex space-x-6">
          <li>
            <NavLink to="/" className="text-white text-lg hover:text-red-800 underline">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Send"
              className="text-white text-lg hover:text-red-800 underline"
            >
              Send Money
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className="text-white text-lg hover:text-red-800 underline"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Price"
              className="text-white text-lg hover:text-red-800 underline"
            >
              Price Feed
            </NavLink>
          </li>
          
          <li>
            <button
              onClick={ConnectWallet}
              className="text-black bg-red-700 font-bold  rounded-full p-1 animate-pulse text-lg hover:text-white "
            >
              Connect Wallet
           </button>
          </li>
        </ul>
      </div>
    </>
    )
  
}




export default Header;
