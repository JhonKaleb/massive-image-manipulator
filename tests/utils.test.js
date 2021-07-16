const {
    isImageFiles,
    fileNameWithoutExtension,
    getAllFolderImages,
    createsThumbnailsFolder,
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