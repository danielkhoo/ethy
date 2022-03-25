#! /usr/bin/env node

const { program } = require('commander')

const { getBalance, lookupAddress, resolveName, getGasPrice, convertWei, keccak256 } = require('./ethersFunctions')

program
    .command('getBalance')
    .description('get the balance of an account')
    .argument('<addressOrName>', 'target address or ENS name')
    .option('-n, --network <network>', 'target network')
    .action(getBalance)

program
    .command('lookupAddress')
    .description('lookup the ENS name associated with an address')
    .argument('<address>', 'target address')
    .action(lookupAddress)

program
    .command('resolveName')
    .description('lookup the address associated with an ENS name')
    .argument('<name>', 'ENS name')
    .action(resolveName)

program
    .command('getGasPrice')
    .description('returns current estimated gas price')
    .action(getGasPrice)

program
    .command('convertWei')
    .argument('<amount>', 'amount in wei')
    .description('returns input amount in wei, gwei and eth')
    .action(convertWei)

program
    .command('keccak256')
    .argument('<input>', 'input string to be hashed')
    .description('returns the KECCAK256 hash of the text bytes')
    .action(keccak256)

program.parse()