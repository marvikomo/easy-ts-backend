const fs = require('fs-extra');
const path = require('path');
const ejs = require('ejs');
const {getFilesInDir, readFile} = require('./helper/files')


module.exports.importTemplate = async function importTemplate(args) {
    const name = args.name
    if(!name) throw new Error("Provide arg name")
    const templateDir = path.join(__dirname, 'templates');
    const targetDir = process.cwd()+ "/test" 
    //if(files.includes('.mkfile')) throw new Error("Template already imported or make sure your current directory is empty")
    fs.copySync(templateDir, targetDir);
    const files = getFilesInDir(targetDir)
    console.log(files)

    if(files.includes('package.json')){
        
       const packageObj = JSON.parse(readFile('package.json'))
       packageObj.name = name;
        console.log("packageobh", packageObj)
       const updatedData = JSON.stringify(packageObj, null, 2)
       fs.writeFileSync('package.json', updatedData);
    }
    console.log('Template imported successfully!');
}

