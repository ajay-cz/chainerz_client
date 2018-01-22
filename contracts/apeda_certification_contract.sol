pragma solidity ^0.4.0;
contract APEDA_CERTIFICATION{
    uint public value;
    address public producer;
    address public regulator;
 
    function APEDA() public payable {
       
    }

    event IsCertified();
    //Adduming the certification is achieved
    function Certified() public
    {
        IsCertified();
    }
    }