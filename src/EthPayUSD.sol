//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

import {AggregatorV3Interface} from
    "../lib/chainlink-brownie-contracts/contracts/src/v0.8/shared/interfaces/AggregatorV3Interface.sol";

contract PayETHUSD {
    //variables
    address immutable i_owner;
    AggregatorV3Interface private s_pricefeed;

    constructor(address pricefeed) {
        s_pricefeed = AggregatorV3Interface(pricefeed);
        i_owner = msg.sender;
    }

    //events
    event AmountSent(uint256 indexed amountsent);
    event RefundRecieved(uint256 indexed Refund);

    //error
    error InvalidPrice();
    error Owner_Cant();
    error EnterValidAmount();
    error NotValidAdddress();
    error Transaction_Failed();
    error PayTheExactAmountWritten();

    modifier NotOwner() {
        if (msg.sender == i_owner) {
            revert Owner_Cant();
        }
        _;
    }

    //mapping
    mapping(address => uint256) AddressToAmountSent;

    // function to get the price converted

    function get1ETHPrice() public view returns (uint256) {
        (, int256 price,,,) = s_pricefeed.latestRoundData();
        return uint256(price);
    }

    function getETHamount(uint256 usdAmountInDollars) public view returns (uint256) {
        (, int256 price,,,) = s_pricefeed.latestRoundData();
        if (price < 0) {
            revert InvalidPrice();
        }
        uint256 ethAmount = (usdAmountInDollars * 1e26) / uint256(price);

        return ethAmount; // so here we got the amount sent to the reciever in wei
    }
    //as now we got the amount of eth we want we can send and our price in eth
    //fucntion to pay somone

    function sendMoney(uint256 amountUSD, address payable Reciever) public payable NotOwner {
        if (amountUSD == 0) {
            revert EnterValidAmount();
        }
        if (Reciever == address(0)) {
            revert NotValidAdddress();
        }
        uint256 amountTobeSent = getETHamount(amountUSD);
        if (amountTobeSent > msg.value) {
            // msg.value is already in eth as we are sending that only
            revert PayTheExactAmountWritten();
        }
        (bool success,) = address(Reciever).call{value: amountTobeSent}("");
        if (!success) {
            revert Transaction_Failed();
        }
        emit AmountSent(amountTobeSent); // this would reflect thw user that ho much amount has been sent
        AddressToAmountSent[msg.sender] = amountUSD;

        uint256 refund = msg.value - amountTobeSent;

        if (refund > 0) {
            (bool refundSuccess,) = msg.sender.call{value: refund}("");
            require(refundSuccess, "Refund failed");
            emit RefundRecieved(refund);
        }
    }

    function getOwnner() public view returns (address) {
        return i_owner;
    }
}
