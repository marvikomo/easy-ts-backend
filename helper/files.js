const fs = require('fs-extra');
const path = require('path');

const checkTemplateHasBeenImported = (targetDir, templateDir) => {
     
}


const getFilesInDir = (dir) => {
    if(!dir) throw new Error("Provide directory")
     return readDir(dir)
} 

const getAllFiles = (dir, fileList = []) => {
    const files = readDir(dir)
    console.log(files)
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getFiles(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    })
}

const readDir = (dir) => {
    return fs.readdirSync(dir)
}

const readFile = (target, encoding='utf8') => {
    return fs.readFileSync(target, encoding);
}
const writeFile = (target, data) => {
    fs.writeFileSync(target, data);
}

module.exports = {
    getAllFiles,
    getFilesInDir,
    readFile,
    writeFile
}