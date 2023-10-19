const fs = require('fs')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const getCliOptions = () => {
  return yargs(hideBin(process.argv))
    .option('type', {
      description: 'Either Service, Controller, Model or Route',
      alias: 't',
    })
    .option('name', {
      description: "Name of the type",
      alias: 'n'
    })
    .demandOption(['type', 'name'], 'See usages, required parameters missing')
    .help().argv
}

module.exports = getCliOptions
