const fs = require('fs');
const yargs = require('yargs');
const ImageManipulator = require('./src/ImageManipulator');
const {
    getTerminalArguments,
    createsThumbnailsFolder,
    getAllFolderImages
} = require('./src/utils');

/** @const {Object} options parameters passed by the terminal by the user */
const options = getTerminalArguments(yargs);

/**
 * Manipule and trasforme an list of images using the user givem options
 */
async function manipulateImage(){
    createsThumbnailsFolder(options.imagesFolderPath);
    const imageList = getAllFolderImages(options.imagesFolderPath);

    imageManipulator = new ImageManipulator(options);
    console.log('Transforming images...');
    const imagePromisseList = [];

    imageList.forEach(image => {
        imagePromisseList.push(imageManipulator.manipulate(image));
    });

    console.log(`Saving images in ${options.imagesFolderPath}/Thumbnails...`);
    return Promise.all(imagePromisseList);
}

manipulateImage().then(() => {
    console.log('Process finished!');
}).catch(err => {
    console.log(err);
});
