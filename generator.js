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
    if(args){
        const {type, name} = args;
    }else throw Error("args not provided")
    const templatePath = path.join(__dirname, 'templates', `${type}.ejs`);

    
}
