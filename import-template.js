const fs = require('fs-extra');
const path = require('path');
const ejs = require('ejs');


module.exports.importTemplate = async function importTemplate(args) {
    const templateDir = path.join(__dirname, 'templates');
    const targetDir = process.cwd()+ "/test" 
    if(fs.existsSync(targetDir)) throw new Error("Template already imported or make sure your current directory is empty")
    fs.copySync(templateDir, targetDir);
    console.log('Template imported successfully!');
}


const checkTemplateHasBeenImported = (targetDir, templateDir) => {
     
}


const getFiles = (dir, fileList = []) => {
    const files = fs.readdirSync(dir)
    console.log(files)
    files.forEach(file => {

    })
}
