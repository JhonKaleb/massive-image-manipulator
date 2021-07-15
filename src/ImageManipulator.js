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
        if (this.newFileExtension) this.changefileExtension();
        return this.saveFile();
    }

    saveFile() {
        return this.sharp.toFile(`${this.imagesFolderPath}/Thumbnails/${this.imageName}`);
    }

    resizeImage() {
        try {
            this.sharp.resize(this.newSize.widthPx, this.newSize.heightPx)
        } catch (error) {
            console.log(`Could not resize the image ${this.imageName}. Try to use a diferent size.`);
        }
    }

    changefileExtension() {
        this.imageName = utils.fileNameWithoutExtension(this.imageName) + this.newFileExtension;
    }
}

module.exports = ImageManipulator