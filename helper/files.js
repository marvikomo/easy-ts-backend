const checkTemplateHasBeenImported = (targetDir, templateDir) => {
     
}


const getFiles = (dir, fileList = []) => {
    const files = fs.readdirSync(dir)
    console.log(files)
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    })
}