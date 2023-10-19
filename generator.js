const fs = require('fs');
const path = require('path');
const ejs = require('ejs');


const TYPES = [
    'controller',
    'services',
    'database',
    'routes',
    'config'
]

module.exports.generator = async function generator(args) {
    const {type, name} = args;
    const templatePath = path.join(__dirname, 'templates', `${type}.ejs`);
    
}
