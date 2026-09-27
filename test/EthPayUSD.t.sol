//SPDX-License-Identifier:MIT
pragma solidity ^0.8.18;

import {Test, console} from "forge-std/Test.sol";
import {PayETHUSD} from "../src/EthPayUSD.sol";
import {DeployEthPayUSD} from "../script/DeployEthPayUSD.s.sol";
import {Vm} from "lib/forge-std/src/Vm.sol";

contract EthPayUSDTest is Test {
    PayETHUSD public ethpayusd;

    DeployEthPayUSD public deployethpayusd;
    address owner;

    function setUp() external {
        deployethpayusd = new DeployEthPayUSD();
        ethpayusd = deployethpayusd.run();
        // number = number + 1;
        owner = ethpayusd.getOwnner();
    }

    receive() external payable {}

    // now the test
    // function testDemo() public view{
    // console.log(number);
    // }

    function testETHconversionIsCorrect() public {
        uint256 usdAmountInDollars = 100;
        uint256 eth = ethpayusd.getETHamount(usdAmountInDollars);
        console.log(eth);
    }

    function testOwnerCantSend() public {
        vm.prank(owner);
        address payable RECIEVER = payable(makeAddr("RECIEVER"));
        ethpayusd.sendMoney(10, RECIEVER);
    }

    function testSendersSendRecieverRecieves() public {
        address SENDER = makeAddr("SENDER");
        vm.deal(SENDER, 10 ether);

        address payable RECIEVER = payable(makeAddr("RECIEVER"));
        vm.deal(RECIEVER, 0 ether);

        vm.prank(SENDER);
        ethpayusd.sendMoney{value: ethpayusd.getETHamount(10)}(10, RECIEVER); // here i have to actually send the value the 10 i am taking int eh argumane is for thr record for the mapping to stroe that hwo is sending how much and here user would enter 10 dolalr but we convert it to the required eth necessary
        console.log(address(RECIEVER).balance);
        assert(address(RECIEVER).balance != 0);
    }

    function testRefundIsSuccessful() public {
        address SENDER = makeAddr("SENDER");
        vm.deal(SENDER, 10 ether);

        address payable RECIEVER = payable(makeAddr("RECIEVER"));
        vm.deal(RECIEVER, 0 ether);

        vm.prank(SENDER);
        vm.recordLogs();
        ethpayusd.sendMoney{value: ethpayusd.getETHamount(20)}(10, RECIEVER);
        Vm.Log[] memory getemmitedevents = vm.getRecordedLogs();
        assert(getemmitedevents.length > 0);
    }
}
