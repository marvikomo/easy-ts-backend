const fs = require('fs')
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const { importTemplate } = require("./import-template")

const getCliOptions = () => {
    return yargs(hideBin(process.argv))
    .command('import', 'Run the import command', (yargs) => {
      return yargs.option('name', {
        alias: 'n',
        type: 'string',
        description: 'Specify the name'
      })
    })
    .demandCommand(1, 'You need to specify a command')
    .help()
    .argv;
}


importTemplate(getCliOptions()).then(async (generated) => {
  
})


module.exports = getCliOptions
