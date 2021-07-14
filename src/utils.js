const fs = require('fs');
const imageNamePosition = 0;

// TODO criar um log para os erros que entrarem aqui, para detalhamento
function errorCallback(err){
    return console.error(err);
}

function filterImageFiles(fileName){
    const imgExtensionsRegex = /\.(jpe?g|png|webp)$/;
    return imgExtensionsRegex.test(fileName);
}

function fileNameWithoutExtension(fileName){
    const imgRegex = /(jpe?g|png|webp)$/;
    return fileName.split(imgRegex)[imageNamePosition];
}

function thumbnailsDirectoryExist(directoryToSearch){
    return fs.existsSync(`${directoryToSearch}/Thumbnails`);
}

function createsThumbnailsFolder(newFolderPath){
    if (thumbnailsDirectoryExist(newFolderPath)) return `${newFolderPath}/Thumbnails`;

    fs.mkdir(`${newFolderPath}/Thumbnails`, errorCallback);
    console.log(`Created Thumbnails directory in ${newFolderPath}`);
}


module.exports = {
    filterImageFiles,
    createsThumbnailsFolder,
    errorCallback,
    fileNameWithoutExtension
}