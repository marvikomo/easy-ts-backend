const fs = require('fs')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { importTemplate } = require("./import-template")

const getCliOptions = () => {
    yargs(hideBin(process.argv))
    .command('import', 'Run the import command', () => {
      console.log('Running the import command...');
    })
    .demandCommand(1, 'You need to specify a command')
    .help()
    .argv;
}


importTemplate(getCliOptions()).then(async (generated) => {
  
})


module.exports = getCliOptions
