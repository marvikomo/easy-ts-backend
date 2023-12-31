const fs = require('fs')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { generator } = require("./generator")

const getCliOptions = () => {
  return yargs(hideBin(process.argv))
    .option('type', {
      description: 'Either Service, Controller, Model or Route',
      alias: 't',
      choices: ['controller', 'services', 'routes', 'database']
    })
    .option('name', {
      description: "Name of the type",
      alias: 'n'
    })
    .demandOption(['type', 'name'], 'See usages, required parameters missing')
    .help().argv
}


generator(getCliOptions()).then(async (generated) => {
  
})


module.exports = getCliOptions
