const fs = require('fs');
const yargs = require('yargs');
const ImageManipulator = require('./ImageManipulator');
const utils = require('./utils');

//node .\app.js resize width="1280" height="720" file-extension="png" imagesFolderPath="C:/Users/JhonK/Pictures/testes"
/** @const {Object} options  */
const options = {
    resize: true,
    newFileExtension: '',
    newSize: {
        widthPx: 1280,
        heightPx: 720
    },
    imagesFolderPath: ' '
}

/** @const {List} imageList an list with the name of every image in the user givem directory */
const imageList = utils.getAllFolderImages(options.imagesFolderPath);

utils.createsThumbnailsFolder(options.imagesFolderPath);

/**
 * Manipule and trasforme an list of images using the user givem options
 */
async function manipulateImage(imageList){
    imageManipulator = new ImageManipulator(options);
    console.info('Transforming images...');
    const imagePromisseList = [];

    imageList.forEach(image => {
        imagePromisseList.push(imageManipulator.manipulate(image));
    });

    console.log(`Saving images in ${options.imagesFolderPath}/Thumbnails...`);
    return Promise.all(imagePromisseList);
}

manipulateImage(imageList).then(() => {
    console.info('Process finished!');
});
