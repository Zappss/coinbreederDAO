
pragma solidity ^0.6.0;

// ----------------------------------------------------------------------------
// 'BREE' token contract

// Symbol      : BREE 
// Name        : CBDAO 
// Total supply: 10 million 
// Decimals    : 18
// ----------------------------------------------------------------------------

import './SafeMath.sol';
import './ERC20contract.sol';
import './Owned.sol';

// ----------------------------------------------------------------------------
// ERC20 Token, with the addition of symbol, name and decimals and assisted
// token transfers
// ----------------------------------------------------------------------------
contract Token is ERC20Interface, Owned {
    using SafeMath for uint256;
    string public symbol = "BREE";
    string public  name = "CBDAO";
    uint256 public decimals = 18;
    uint256 private maxCapSupply = 1e7 * 10**(decimals); // 10 million
    uint256 _totalSupply = 0;
    address stakeFarmingContract;
    
    mapping(address => uint256) balances;
    mapping(address => mapping(address => uint256)) allowed;
    
    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    constructor() public {
        owner = msg.sender;
    }
    
    // ------------------------------------------------------------------------
    // Set the STAKE_FARMING_CONTRACT
    // @required only owner
    // ------------------------------------------------------------------------
    function setStakeFarmingContract(address _address) public onlyOwner{
        stakeFarmingContract = _address;
    }
    
    // ------------------------------------------------------------------------
    // Token Minting function
    // @params _amount expects the amount of tokens to be minted excluding the 
    // required decimals
    // @params _beneficiary tokens will be sent to _beneficiary
    // @required only owner OR stakeFarmingContract
    // ------------------------------------------------------------------------
    function mintTokens(uint256 _amount, address _beneficiary) public{
        require(msg.sender == owner || msg.sender == stakeFarmingContract);
        require(_totalSupply + _amount <= maxCapSupply, "exceeds max cap supply 10 million");
        _totalSupply += _amount;
        
        // mint _amount tokens and keep inside contract
        balances[_beneficiary] += _amount;
        emit Transfer(address(0),_beneficiary, _amount);
    }
    
    // ------------------------------------------------------------------------
    // Burn the `_amount` amount of tokens from the calling `account`
    // @params _amount the amount of tokens to burn
    // ------------------------------------------------------------------------
    function burnTokens(uint256 _amount) public {
        _burn(_amount, msg.sender);
    }

    // ------------------------------------------------------------------------
    // @dev Internal function that burns an amount of the token from a given account
    // @param _amount The amount that will be burnt
    // @param _account The tokens to burn from
    // ------------------------------------------------------------------------
    function _burn(uint256 _amount, address _account) internal {
        require(balances[_account] >= _amount, "insufficient account balance");
        _totalSupply = _totalSupply.sub(_amount);
        balances[address(_account)] = balances[address(_account)].sub(_amount);
        emit Transfer(address(_account), address(0), _amount);
    }
    
    /** ERC20Interface function's implementation **/
    
    // ------------------------------------------------------------------------
    // Get the total supply of the `token`
    // ------------------------------------------------------------------------
    function totalSupply() public override view returns (uint256){
       return _totalSupply; 
    }
    
    // ------------------------------------------------------------------------
    // Get the token balance for account `tokenOwner`
    // ------------------------------------------------------------------------
    function balanceOf(address tokenOwner) public override view returns (uint256 balance) {
        return balances[tokenOwner];
    }

    // ------------------------------------------------------------------------
    // Transfer the balance from token owner's account to `to` account
    // - Owner's account must have sufficient balance to transfer
    // - 0 value transfers are allowed
    // ------------------------------------------------------------------------
    function transfer(address to, uint256 tokens) public override returns  (bool success) {
        // prevent transfer to 0x0, use burn instead
        require(address(to) != address(0));
        require(balances[msg.sender] >= tokens );
        require(balances[to] + tokens >= balances[to]);
            
        balances[msg.sender] = balances[msg.sender].sub(tokens);
        balances[to] = balances[to].add(tokens);
        emit Transfer(msg.sender,to,tokens);
        return true;
    }

    // ------------------------------------------------------------------------
    // Token owner can approve for `spender` to transferFrom(...) `tokens`
    // from the token owner's account
    // ------------------------------------------------------------------------
    function approve(address spender, uint256 tokens) public override returns (bool success){
        allowed[msg.sender][spender] = tokens;
        emit Approval(msg.sender,spender,tokens);
        return true;
    }

    // ------------------------------------------------------------------------
    // Transfer `tokens` from the `from` account to the `to` account
    // 
    // The calling account must already have sufficient tokens approve(...)-d
    // for spending from the `from` account and
    // - From account must have sufficient balance to transfer
    // - Spender must have sufficient allowance to transfer
    // - 0 value transfers are allowed
    // ------------------------------------------------------------------------
    function transferFrom(address from, address to, uint256 tokens) public override returns (bool success){
        require(tokens <= allowed[from][msg.sender]); //check allowance
        require(balances[from] >= tokens);
            
        balances[from] = balances[from].sub(tokens);
        balances[to] = balances[to].add(tokens);
        allowed[from][msg.sender] = allowed[from][msg.sender].sub(tokens);
        emit Transfer(from,to,tokens);
        return true;
    }
    
    // ------------------------------------------------------------------------
    // Returns the amount of tokens approved by the owner that can be
    // transferred to the spender's account
    // ------------------------------------------------------------------------
    function allowance(address tokenOwner, address spender) public override view returns (uint256 remaining) {
        return allowed[tokenOwner][spender];
    }
}
