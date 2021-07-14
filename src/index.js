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

const imageFilesList = fs.readdirSync(options.imagesFolderPath).filter(utils.filterImageFiles);
utils.createsThumbnailsFolder(options.imagesFolderPath);

imageManipulator = new ImageManipulator(options)
imageFilesList.forEach(image => {
    imageManipulator.manipulate(image);
});
