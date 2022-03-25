const { ethers } = require('ethers');
const { utils, providers } = ethers

async function getBalance(addressOrName, options) {
    const network = options.network || 'mainnet'
    const provider = new providers.InfuraProvider(network);
    console.log(utils.formatEther(await provider.getBalance(addressOrName)), 'eth');
}

async function lookupAddress(address, options) {
    const network = options.network || 'mainnet'
    const provider = new providers.InfuraProvider(network);
    console.log(await provider.lookupAddress(address));
}

async function resolveName(address, options) {
    const network = options.network || 'mainnet'
    const provider = new providers.InfuraProvider(network);
    console.log(await provider.resolveName(address));
}

async function getGasPrice(options) {
    const network = options.network || 'mainnet'
    const provider = new providers.InfuraProvider(network);
    console.log(utils.formatUnits(await provider.getGasPrice(), "gwei"), 'gwei');
}

async function convertWei(amount) {
    console.log(`${utils.formatUnits(amount, "gwei")} gwei\n${utils.formatUnits(amount, "ether")} eth`);
}

async function keccak256(input) {
    console.log(utils.id(input));
}


module.exports = { getBalance, lookupAddress, resolveName, getGasPrice, convertWei, keccak256 }