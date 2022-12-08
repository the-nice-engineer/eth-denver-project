// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";


contract Wizard is Initializable, UUPSUpgradeable, OwnableUpgradeable{


    function initialize() public initializer{

        __Ownable_init();
    }

    function _authorizeUpgrade(address) internal override onlyOwner {}

    function attack() pure external virtual returns(string memory){
        return "smoke";
    }
    
    }
