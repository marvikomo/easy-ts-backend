const fs = require('fs-extra');
const path = require('path');
const ejs = require('ejs');
const {getFilesInDir, readFile, writeFile} = require('./helpers/file-helper')


module.exports.importTemplate = async function importTemplate(args) {
    const {name, author} = args
    if(!name) throw new Error("Name not provided")
    if(!author) throw new Error("Author not provided")
    const templateDir = path.join(__dirname, 'templates');
    const targetDir = process.cwd()+ "/test" 
    const files = getFilesInDir(targetDir)
    //if(files.includes('.mkfile')) throw new Error("Template already imported or make sure your current directory is empty")
    fs.copySync(templateDir, targetDir);
    console.log(files)

    if(files.includes('package.json')){
       const targetFile = `${targetDir}/package.json`;
       const packageObj = JSON.parse(readFile(targetFile))
       packageObj.name = name;
       packageObj.author = author
       const updatedData = JSON.stringify(packageObj, null, 2)
       console.log("upd", updatedData)
       writeFile(targetFile, updatedData);
       
    }
    console.log('Template imported successfully!');
}

