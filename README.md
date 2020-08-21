# Coin Breeder DAO (CBDAO)
![enter image description here](https://img.shields.io/github/issues/coinbreeder/coinbreederDAO?style=plastic) ![enter image description here](https://img.shields.io/github/forks/coinbreeder/coinbreederDAO) ![enter image description here](https://img.shields.io/github/stars/coinbreeder/coinbreederDAO) ![enter image description here](https://img.shields.io/github/license/coinbreeder/coinbreederDAO) ![enter image description here](https://img.shields.io/twitter/url?style=social&url=https://twitter.com/coinbreeder)
<br>
Welcome to the official GitHub repository for **CBDAO**. **CBDAO** has been created to serve as a *sandbo*x for users to experiment and proof-test various consensus protocols which help govern DAOs. The initial consensus mechanism put in place will be the ‘*Incentivized Governance Protocol*’, a model invented by **CBDAO** which simplifies and combines the solutions of the holographic consensus model on a completely decentralized level.

&nbsp;&nbsp;
## Why was this sandbox created?

Existing **DAO** environments are usually limited with pressures arising from regulations and internal/external politics. 
This makes it: 
 - Slow to implement changes
 - Limited in terms of implementing creative consensus mechanisms which has a tendency to directly affect the overall tokenomics of a DAO’s native token.

We believe that a *sandbox* free of these pressures will help bolster our abilities to research and implement various consensus mechanisms without any imposed limits, in a timely manner.

&nbsp;&nbsp;
## Articles to Read

[CBDAO, Explained Simply](https://medium.com/@coinbreeder/cbdao-explained-in-simple-terms-b8d779978fd8)

[Beginner's Guide](https://medium.com/@coinbreeder/beginners-guide-to-coin-breeder-dao-cbdao-500c208822d0)

[Tokenomics of BREE](https://medium.com/@coinbreeder/tokenomics-of-cbdao-bree-a622fca12907)

[How Farming Rates are Determined & How It Works to Autonomously Balance and Manage Staking Rates](https://medium.com/@coinbreeder/how-farming-rates-are-determined-c207295b4e0c)

[How Voting Works in CBDAO](https://medium.com/@coinbreeder/guide-incentivized-governance-protocol-how-voting-works-in-cbdao-7ea3a35a0aec)

[How Staking and Farming Works](https://medium.com/@coinbreeder/guide-staking-farming-bree-d47a66738a76https://medium.com/@coinbreeder/guide-staking-farming-bree-d47a66738a76)

[Proposals and Fundraisers](https://medium.com/@coinbreeder/proposals-fundraisers-9222df60351e)

[Smart Contract Audit Guideline](https://medium.com/@coinbreeder/bree-smart-contract-audit-guideline-109d60282a23)

[The State of DAOs](https://medium.com/@coinbreeder/the-state-of-daos-1aecba88d9ed)

[Public Participation in Decentralizing Governance](https://medium.com/@coinbreeder/public-participation-in-decentralizing-governance-c44ef3df58c4)

[Regulations vs Industry-driven Standardization on DAOs](https://medium.com/@coinbreeder/government-driven-regulation-vs-industry-driven-standardization-on-daos-bcb747eb1d51)

&nbsp;&nbsp;
 - ## [BREE](https://github.com/coinbreeder/coinbreederDAO/tree/master/bree)
#### Series of smart contracts (.solidity files) which are used on the Ethereum Blockchain
### Pre Requisites:
 - [Homebrew](https://brew.sh/) 
 - [Node & npm](https://nodejs.org/en/)
 - [Git](https://git-scm.com/download/)
 - [SolC](https://www.npmjs.com/package/solc) 
	- `npm install -g solc`
	- `solc --version`
 -  
### Installation: 
 - Start by installing the Truffle with command

   `npm install -g truffle`

 - Then, install the Ganache command line interface with

    `npm install -g ganache-cli`

 - Open up a second bash shell and verify that you have Ganache working
   as expected with

    `ganache-cli`
#### [geth](https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Ubuntu)

**This is an optional step for this project**. Short for GO-Ethereum, geth is a command-line tool that allows you to connect to the public Ethereum blockchain and deploy your contracts on it. You’ll need to first install Geth, and then later, when you’re ready, launch a node.

Note that connecting to the public Ethereum blockchain is no trivial task, and it will likely take a very long time to download depending on your system specs. Instructions: [Geth documentation](https://github.com/ethereum/go-ethereum).


#### Clone Bree

    git clone https://github.com/coinbreeder/coinbreederDAO.git
	cd /coinbreederDAO/Bree
Within your `bree` directory, run command

    truffle unbox bree

To run and test a Solidity contract, you will need to have two things set up: the contract, migration and test files themselves, and the test blockchain. 

    ganache-cli
This will initiate your test blockchain instance. Keep this open and running for the duration of your testing.

&nbsp;&nbsp;

2. ## [Dashboard-Prototypes](https://github.com/coinbreeder/coinbreederDAO/tree/master/dashboard-prototypes)
- #### Series of HTML, CSS files (Frontend Designs) with BREE.sol and BREE_STAKE_FARM.sol as JSON

&nbsp;&nbsp;

3. ## [Telegram-Helper-Bot](https://github.com/coinbreeder/coinbreederDAO/tree/master/telegram-helper-bot)
 - #### Code for Telegram Messenger Bot (Node)
 ### Pre Requisites:
 - [Node & npm](https://nodejs.org/en/)
 - [Git](https://git-scm.com/download/)
 
 
 ### Installation: 
  - Start by installing node & npm with the commands

   `curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -`
   `sudo apt-get install -y nodejs`
   
 ### Clone the Bot
    git clone https://github.com/coinbreeder/coinbreederDAO.git
	cd /coinbreederDAO/telegram-helper-bot

Within your `telegram-helper-bot` directory, run command

    npm install
    node bot.js

&nbsp;&nbsp;

4. ## [Token-Swap](https://github.com/coinbreeder/coinbreederDAO/tree/master/token-swap)
- #### Series of HTML, CSS files (Frontend Designs) with BREE_TOKEN_SWAP.sol connected as JSON

&nbsp;&nbsp;

## Official Links

<a href="https://coinbreeder.com/">
  <img src="https://github.com/coinbreeder/coinbreederDAO/blob/master/logo/icon.png?raw=true" width="100" title="hover text"> &nbsp; &nbsp;
<a href="https://twitter.com/coinbreeder">
  <img src="https://3.bp.blogspot.com/-NxouMmz2bOY/T8_ac97cesI/AAAAAAAAGg0/e3vY1_bdnbE/s320/Twitter+logo+2012.png" width="100" title="hover text"> &nbsp;&nbsp;
<a href="https://medium.com/@coinbreeder">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNreWlLZj-v64Is--pfO9zDCVEk0Gjp6XgkA&usqp=CAU" width="100" title="hover text"> &nbsp;&nbsp;
<a href="https://t.me/coinbreederdao">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/1024px-Telegram_2019_Logo.svg.png" width="100" title="hover text"> &nbsp;&nbsp;
<a href="mailto:hello@coinbreeder.com">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/%28at%29.svg/1024px-%28at%29.svg.png" width="100" title="hover text">

## Contributing

	Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

	Please make sure to update tests as appropriate.


