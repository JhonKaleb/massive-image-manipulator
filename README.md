<h1 align="center">
  Massive Image Manipulator
  <br>
</h1>

<h4 align="center">A software written in Node.js that manipulates and creates thumbnails from another image, based on parameters provided by the user.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a>
</p>

## Key Features

* Resize to any size a big number of images at once.
* Converts the extension of a big number of images at once.

## How To Use

To clone and run this script, you'll need [Git](https://git-scm.com) and [Openpyxl](https://nodejs.org/en/) installed on your environment. From your command line:

### Cloning and installing

```bash
# Clone this repository
$ git clone https://github.com/JhonKaleb/massive-image-manipulator.git

# Go into the repository folder
$ cd massive-image-manipulator

# Install dependencies
$ npm install

```

### Usage exemple


#### Resize an large number of images in an directory at once:
Below is an example of how to use the script to create new resized images from an folder with images.

In an bash or terminal, inside the project root directory runs:

```bash
node app.js run app --images-folder-path="<Directory path where your images are at>" --resize --width=1280 --height=720

# Parameter --images-folder-path is the location where the images that you want to manipulate are (e.g: --images-folder-path="C:/Users/user1/Pictures/").
# Parameter --resize, is what you need to specify when you whant to resize the images.
# Paramethers --width and --height are the size of the new images that will be generated in pixels.
```

The script will create a new folder called Thumbnails inside the folder that you provide, with the images resized. Using the example above, would create the folder in C:/Users/user1/Pictures/, so C:/Users/user1/Pictures/Thumbnails.



#### Setting an new extension to a large number of images at once:
Exemple of to how convert all images inside an folder to a new extension.

In an bash or terminal, inside the project root directory runs:
```bash
node app.js run app --images-folder-path="<Directory path where your images are at>" --file-extension="<new image extension>"

# Parameter --images-folder-path is the location where the images that you want to manipulate are (e.g: --images-folder-path="C:/Users/user1/Pictures/").
# Parameter --file-extension is the new file extension that you want the new images have (e.g: --file-extension="jpg").
```

The script will create a new folder called Thumbnails inside the folder that you provide, with the images converted. Using the example above, would create the folder in C:/Users/user1/Pictures/, so C:/Users/user1/Pictures/Thumbnails.



#### Setting an size and a new extension to a large number of images at once:
To set a new size and an format the images to another file extension in only one command, uses the exemple below.

In an bash or terminal, inside the project root directory runs:
```bash
node app.js run app --images-folder-path="<Directory path where your images are at>" --resize --width=1280 --height=720 --file-extension="<new image extension>"

# Parameter --images-folder-path is the location where the images that you want to manipulate are (e.g: --images-folder-path="C:/Users/user1/Pictures/").
# Parameter --resize, is what you need to specify when you whant to resize the images.
# Paramethers --width and --height are the size of the new images that will be generated in pixels.
# Parameter --file-extension is the new file extension that you want the new images have (e.g: --file-extension="jpg").
```

The script will create a new folder called Thumbnails inside the folder that you provide, with the images formated an resized. Using the example above, would create the folder in C:/Users/user1/Pictures/, so C:/Users/user1/Pictures/Thumbnails.

## Emailware

massive-image-manipulator is an [emailware](https://en.wiktionary.org/wiki/emailware). Meaning, if you liked using this project or it has helped you in any way, I'd like you send me an email at <jhon.kaleb@hotmail.com> about anything you'd want to say about this extention. I'd really appreciate it!

## Credits

This software uses the following open source packages:

- [Jest](https://jestjs.io/pt-BR/)
- [Sharp](https://openpyxl.readthedocs.io/en/stable/)
- [Yargs](https://sharp.pixelplumbing.com/)
