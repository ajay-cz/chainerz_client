pragma solidity ^0.4.0;
contract FPO_CERTIFICATION{
    uint public value;
    address public producer;
    address public regulator;
 
    function FPO() public payable {
       
    }
    event IsCertified();
    //Adduming the certification is achieved
    function FPO_Certified() public
    {
        IsCertified();
    }
    }