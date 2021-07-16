const fs = require('fs');
const imageNamePosition = 0;

function errorCallback(err){
    return console.error(err);
}

function isImageFiles(fileName){
    const imgExtensionsRegex = /\.(jpe?g|png|webp|gif|tiff)$/;
    return imgExtensionsRegex.test(fileName);
}

function fileNameWithoutExtension(fileName){
    const imgRegex = /\.(jpe?g|png|webp|gif|tiff)$/;
    return fileName.split(imgRegex)[imageNamePosition];
}

function directoryExist(directoryToSearch){
    return fs.existsSync(`${directoryToSearch}`);
}

/**
 * Gets all images from an folder.
 * Suported files extensions are jpg, png, webp, gif and tiff.
 *
 * @param  {String} imagesFolderPath Directory to get images from
 * @return {List} List of the names of all images found in the directory.
 */
function getAllFolderImages(imagesFolderPath){
    return fs.readdirSync(imagesFolderPath).filter(isImageFiles);
}

/**
 * Creates an new folder called Thumbnails in the path.
 * @param  {String} newFolderPath Directory path to create the new folder inside.
 */
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

console.log(__dirname);

module.exports = {
    isImageFiles,
    createsThumbnailsFolder,
    errorCallback,
    fileNameWithoutExtension,
    getAllFolderImages
}