#!/usr/bin/env node

const { program } = require('commander');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const cli = require("./generator-script")

// program
//   .command('generate <type>')
//   .description('Generate a new file of a given type (e.g., controller, service)')
//   .action(async (type) => {
//     const answers = await inquirer.prompt([
//       {
//         name: 'name',
//         message: `Enter the name for the new ${type}:`
//       }
//     ]);

//     const templatePath = path.join(__dirname, 'templates', `${type}.ejs`);
//     const outputPath = path.join(process.cwd(), `${answers.name}.${type}.js`);

//     const template = fs.readFileSync(templatePath, 'utf-8');
//     const content = ejs.render(template, answers);

//     fs.writeFileSync(outputPath, content);
//     console.log(`Generated new ${type} at ${outputPath}`);
//   });

// program.parse(process.argv);
cli()