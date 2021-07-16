const ImageManipulator = require('../src/ImageManipulator')

const options = {
    resize: true,
    newSize: {
        widthPx: 10,
        heightPx: 10
    },
    imagesFolderPath: __dirname + '/imagesTest'
}

test('It has to be an sharp object',  () => {
    const manipulator = new ImageManipulator(options)
    const image = manipulator.manipulate('image2.jpg')[0]
    const imageObject = {
          format: 'jpeg',
          width: 10,
          height: 10,
          channels: 3,
          premultiplied: false,
          size: 167122
        }
    expect(image).toHaveProperty(newSize.widthPx, 10)
})
