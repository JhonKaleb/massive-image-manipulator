const fs = require('fs');
const yargs = require('yargs');
const imageNamePosition = 0;

function errorCallback(err){
    if (err)
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
 * @param  {String} imagesFolderPath Directory to get images from.
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
    if (directoryExist(`${newFolderPath}/Thumbnails`)) return 'Already created';
    if (!directoryExist(newFolderPath))
        throw 'The images-folder-path was not provided or the directory does not exist.'
    fs.mkdir(`${newFolderPath}/Thumbnails`, errorCallback);
    console.log(`Created Thumbnails directory in ${newFolderPath}`);
}

yargs.version('1.0.0');
yargs.command({
    command: 'run',
    describe: 'Runs the image manipulate script with arguments',
    builder: {
        'images-folder-path': {
            describe: 'Path of directory with the images to be manipulated',
            demandOption: true,
            type: 'string'
        },
        'resize': {
            describe: 'Use --resize if you want to set an new height and width',
            type: 'boolean'
        },
        'width': {
            describe: 'Define a new width from every image',
            type: 'number'
        },
        'height': {
            describe: 'Define a new height from every image',
            type: 'number'
        },
        'file-extension': {
            describe: 'Define a new file-extension from every image',
            type: 'string',
            choices: ['jpg', 'jpeg', 'png', 'webp', 'gif', 'tiff']
        },
    }
});

/**
 * Uses Yargs module to parse the paramethers passed by the terminal by the user.
 *
 * @param  {Object} yargs Paramethers passsed by user and parsed by yargs library
 * @returns  {Object} Parameters to base image manipulation.
 */
function getTerminalArguments(yargs) {
    return {
        resize: yargs.argv['resize'],
        newFileExtension: yargs.argv['file-extension'],
        newSize: {
            widthPx: yargs.argv['width'],
            heightPx: yargs.argv['height']
        },
        imagesFolderPath: yargs.argv['images-folder-path']
    };
}

module.exports = {
    isImageFiles,
    createsThumbnailsFolder,
    errorCallback,
    fileNameWithoutExtension,
    getAllFolderImages,
    getTerminalArguments,
}