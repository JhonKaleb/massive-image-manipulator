const sharp = require('sharp');
const utils = require('./utils')

class ImageManipulator{

    constructor(options) {
        this.resize = options.resize,
        this.newSize = options.newSize,
        this.newFileExtension = options.newFileExtension,
        this.imagesFolderPath = options.imagesFolderPath,
        this.imageName = '',
        this.sharp = {}
    }

    manipulate(imageName){
        this.imageName = imageName
        this.sharp = sharp(`${this.imagesFolderPath}/${this.imageName}`);
        if (this.resize) this.resizeImage();
        this.saveFile();
    }

    saveFile() {
        this.sharp.toFile(`${this.imagesFolderPath}/Thumbnails/${this.imageName}`);
    }

    resizeImage() {
        try {
            this.sharp.resize(this.newSize.widthPx, this.newSize.heightPx)
        } catch (error) {
            console.log(`Could not resize the image ${this.imageName}. Try to use a diferent size.`);
        }
    }
}

module.exports = ImageManipulator