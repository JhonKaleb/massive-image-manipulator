const fs = require('fs');
const imageNamePosition = 0;

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

function directoryExist(directoryToSearch){
    return fs.existsSync(`${directoryToSearch}`);
}

function getAllFolderImages(imagesFolderPath){
    return fs.readdirSync(imagesFolderPath).filter(filterImageFiles);
}

function createsThumbnailsFolder(newFolderPath){
    try {
        if (directoryExist(`${newFolderPath}/Thumbnails`)) return `${newFolderPath}/Thumbnails`;
        if (!directoryExist(newFolderPath)) throw 'The specified image directory does not exist.'
        fs.mkdir(`${newFolderPath}/Thumbnails`, errorCallback);
        console.log(`Created Thumbnails directory in ${newFolderPath}`);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    filterImageFiles,
    createsThumbnailsFolder,
    errorCallback,
    fileNameWithoutExtension,
    getAllFolderImages
}