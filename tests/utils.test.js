const fs = require('fs');
const {
    isImageFiles,
    fileNameWithoutExtension,
    getAllFolderImages,
    createsThumbnailsFolder,
    getTerminalArguments
} = require('../src/utils')

test('ImageFile should be true', () => {
    const imageFile = isImageFiles('image.png')
    expect(imageFile).toBe(true)
})

test('ImageFile should be true', () => {
    const imageFile = isImageFiles('image.gif')
    expect(imageFile).toBe(true)
})

test('ImageFile should be true', () => {
    const imageFile = isImageFiles('image.gif.jpeg')
    expect(imageFile).toBe(true)
})

test('ImageFile should be false', () => {
    const imageFile = isImageFiles('image.txt')
    expect(imageFile).toBe(false)
})

test('fileName should be file', () => {
    const fileName = fileNameWithoutExtension('file.png')
    expect(fileName).toBe('file')
})

test('fileName should be file.png', () => {
    const fileName = fileNameWithoutExtension('file.png.jpg')
    expect(fileName).toBe('file.png')
})

test('fileName should be file', () => {
    const fileName = fileNameWithoutExtension('file')
    expect(fileName).toBe('file')
})

test('ImagesList should contains only images files, image1 and image2', () => {
    let ImagesList = getAllFolderImages(__dirname + '/imagesTest')
    expect(ImagesList).toEqual(['image1.png', 'image2.jpg'])
})

test('ImagesList should contains no itens', () => {
    let ImagesList = getAllFolderImages(__dirname)
    expect(ImagesList).toEqual([])
})

test('Should create a new folder called Thumbnails in the test folder', () => {
    if (fs.existsSync(`${__dirname}/Thumbnails`))
        fs.rmdirSync(`${__dirname}/Thumbnails`)

    createsThumbnailsFolder(__dirname)
    let folderCreated = fs.existsSync(`${__dirname}/Thumbnails`)
    expect(folderCreated).toBe(true)
})

test('Should return folder is already created', () => {
    if (fs.existsSync(`${__dirname}/Thumbnails`))
        fs.rmdirSync(`${__dirname}/Thumbnails`)

    createsThumbnailsFolder(__dirname)

    const folderAlreadyCreated = createsThumbnailsFolder(__dirname)
    expect(folderAlreadyCreated).toBe('Already created')
})

test('Should throw that the directory does not exist', () => {
    try {
        createsThumbnailsFolder(__dirname + "/diretoryThatDoesNotExist")
    } catch (error) {
        expect(String(error)).toBe("The images-folder-path was not provided or the directory does not exist.")
    }
})

test('Should output an object with the options provided in yargs', () => {
    const yargs = {
        argv: {
            resize: true,
            'file-extension': 'jpg',
            width: 1000,
            height: 700,
            'images-folder-path': __dirname
        }
    }
    let argsObject = getTerminalArguments(yargs)
    objectExpeted = {
        resize: true,
        newFileExtension: 'jpg',
        newSize: {
            widthPx: 1000,
            heightPx: 700
        },
        imagesFolderPath: __dirname
    };
    expect(argsObject).toEqual(objectExpeted)
})