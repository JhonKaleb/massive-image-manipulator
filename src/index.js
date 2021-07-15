const fs = require('fs');
const ImageManipulator = require('./ImageManipulator')
const utils = require('./utils')

const options = {
    resize: true,
    newFileExtension: '',
    newSize: {
        widthPx: 1280,
        heightPx: 720
    },
    imagesFolderPath: 'C:/Users/JhonK/Pictures/testes'
}

utils.createsThumbnailsFolder(options.imagesFolderPath);
const imageList = utils.getAllFolderImages(options.imagesFolderPath);

async function manipulateImage(){
    imageManipulator = new ImageManipulator(options)
    console.info('Transforming images...');
    const imagePromisseList = []

    imageList.forEach(image => {
        imagePromisseList.push(imageManipulator.manipulate(image));
    });

    console.log(`Saving images in ${options.imagesFolderPath}/Thumbnails...`);
    return Promise.all(imagePromisseList)
}

manipulateImage().then(() => {
    console.info('Process finished!');
});
