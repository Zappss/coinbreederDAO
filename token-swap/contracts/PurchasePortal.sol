// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.6.0;
import 'BREE.sol';

// ----------------------------------------------------------------------------
// ERC Token Standard #20 Interface
// ----------------------------------------------------------------------------
interface IERC20 {
    function totalSupply() external view returns (uint256);
    function balanceOf(address tokenOwner) external view returns (uint256 balance);
    function allowance(address tokenOwner, address spender) external view returns (uint256 remaining);
    function transfer(address to, uint256 tokens) external returns (bool success);
    function approve(address spender, uint256 tokens) external returns (bool success);
    function transferFrom(address from, address to, uint256 tokens) external returns (bool success);

    event Transfer(address indexed from, address indexed to, uint256 tokens);
    event Approval(address indexed tokenOwner, address indexed spender, uint256 tokens);
}

contract BreePurchase{
    
    using SafeMath for uint256;
    
    Token bree;

    address constant private SBREE_TOKEN_ADDRESS = 0x022fbEc6D1b14b2d7B1ED3a870d079CBE837266E;
    
    event TOKENSPURCHASED(address _purchaser, uint256 _tokens);
    
    constructor(address breeTokenAddress) public {
        bree = Token(breeTokenAddress);
    }
    
    function purchase(address assetAddress, uint256 amountAsset) public payable{
        require(assetAddress == SBREE_TOKEN_ADDRESS, "NOT ACCEPTED: Unaccepted payment asset provided");
        require(bree.balanceOf(address(this)) >= amountAsset, "Balance: Insufficient liquidity");
        _purchase(assetAddress, amountAsset);
    }
    
    function _purchase(address assetAddress, uint256 assetAmount) internal{
        // burn the received tokens
        ERC20Interface(assetAddress).transferFrom(msg.sender, address(0), assetAmount);
        
        // send tokens to the purchaser
        bree.transfer(msg.sender, assetAmount);
        
        emit TOKENSPURCHASED(msg.sender, assetAmount);
    }
}