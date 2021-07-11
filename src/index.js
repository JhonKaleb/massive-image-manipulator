const sharp = require('sharp');
const fs = require('fs');
const utils = require('./utils')

const imagesFolderPath = 'C:/Users/JhonK/Pictures/testes';
const imageFilesList = fs.readdirSync(imagesFolderPath).filter(utils.filterImageFiles);
const thumbnailsDirectory = utils.createsThumbnailsFolder(imagesFolderPath)
const options = {
    resize: true,
    newFileExtension: 'png',
    newSize: {
        widthPx: 1280,
        heightPx: 720
    },
    imagesFolderPath: 'C:/Users/JhonK/Pictures/testes'
}


class ImageManipulator{
    constructor(options) {
        const {
            resize,
            newFileExtension,
            newSize,
            imagesFolderPath
        } = options;
        console.log(this.imagesFolderPath);
    }

    manipulate(imageName){
        this.sharp = sharp(`${this.imagesFolderPath}/${imageName}`)
        if (this.resize) this.resizeImage();

        this.saveFile(imageName);
    }

    saveFile(imageName) {
        this.sharp.toFile(`${imagesFolderPath}/Thumbnails/${imageName}`);
    }

    resizeImage() {
        this.sharp.resize(newSize.widthPx, newSize.heightPx)
    }
}

imageManipulator = new ImageManipulator(options)

imageFilesList.forEach(image => {
    imageManipulator.manipulate(image)
});
