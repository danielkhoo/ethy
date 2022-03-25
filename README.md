## Ethy

![npm](https://img.shields.io/npm/v/ethy)
![npm bundle size](https://img.shields.io/bundlephobia/min/ethy)

A tiny command line utility for learning and developing on Ethereum.

Implemented as a commanderJS wrapper around the ethersJS, where possible it uses the same function signatures.

## Installation

The most convenient way is to install the package globally, that you can run `ethy <command>` from any directory.

```bash
npm i -g ethy
```

## Examples

### View all available commands

```bash
ethy --help

Commands:
  getBalance [options] <addressOrName>  get the balance of an account
  lookupAddress [options] <address>     lookup the ENS name associated with an address
  resolveName [options] <name>          lookup the address associated with an ENS name
  getGasPrice [options]                 returns current estimated gas price
  convertWei <amount>                   returns input amount in wei, gwei and eth
  keccak256 <input>                     returns the KECCAK256 hash of the text bytes
  help [command]                        display help for command
```

### Get Balance

Get the eth balance of an address or ENS name.

```bash
$ ethy getBalance vitalik.eth

3207.586970447020180416 eth
```

You can optionally specify network to target testnets.

```bash
$ ethy getBalance 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 --network rinkeby

0.410338958929449048 eth
```

### ENS Lookup and Resolution

Another common operation is resolving ENS names in both directions

```bash
$ ethy resolveName vitalik.eth

0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
```

```bash
$ ethy lookupAddress 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045

vitalik.eth
```

### Get current gas price

```bash
$ ethy getGasPrice

27.872450494 gwei
```

### Convert Wei

Much quicker than googling wei to eth converter five times a day

```bash
$ ethy convertWei 100000000000

100.0 gwei
0.0000001 eth
```

### Convert Wei

Check the keccak256 hash value of a string

```bash
$ ethy keccak256 "hello world"

0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad
```
