const fs = require('fs');

const thumbnailWidth = 1280;
const thumbnailHeight = 720;

function errorCallback(err){
    return console.error(err);
}

function filterImageFiles(fileName){
    let imgExtensionsRegex = /\.(jpe?g|png|webp)$/;
    return imgExtensionsRegex.test(fileName);
}

function thumbnailsDirectoryExist(directoryToSearch){
    return fs.existsSync(`${directoryToSearch}/Thumbnails`)
}

function createsThumbnailsFolder(newFolderPath){
    if (thumbnailsDirectoryExist(newFolderPath)) return `${newFolderPath}/Thumbnails`

    fs.mkdir(`${newFolderPath}/Thumbnails`, errorCallback);
    console.log(`Created Thumbnails directory in ${newFolderPath}`);
    return `${newFolderPath}/Thumbnails`
}


module.exports = {
    filterImageFiles,
    createsThumbnailsFolder,
    errorCallback,
    thumbnailWidth,
    thumbnailHeight
}