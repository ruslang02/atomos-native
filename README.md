# atomOS "Native"

Version of AtomOS, that uses a single Electron instance and webview's to start apps. Half-compatible with AtomOS "awesome". 
AtomOS 0.7 partly implements features of Native version.

![alt text](https://raw.githubusercontent.com/ruslang02/atomos-native/master/PREVIEW.png)

Latest version: 0.6 (build 131). [Download 0.7 .iso](https://github.com/ruslang02/atomos/releases).

Fully web-based X11 Desktop Environment on Linux, working in Electron.
Contains web-based applications with absolute Node.JS access.
There is also an operating system available based on this.

## Installation (for Linux)

Download this repository and unpack it or run this command:
```
sudo git clone https://github.com/ruslang02/atomos.git <install_dir>
```

Firstly, you should have Node.JS and NPM installed:
```
sudo apt-get install -y nodejs
```
Then you need Electron to work:
```
sudo npm install -g electron --unsafe-perm=true --allow-root
```
Install the libraries:
```
cd <install_dir>
npm update
```
And, finally, to run this monster:
```
electron <install_dir>
```

## Changelog

Changelog is available [here](https://github.com/ruslang02/atomos/blob/master/CHANGELOG.md).

## Hacking
You can edit your desktop envionment in real-time, adding features and modifying the look and feel.
