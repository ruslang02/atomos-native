const {
	BrowserWindow,
	app,
	ipcMain
} = require('electron');
const fs = require("fs");
global.clipboards = {
	file: []
};

global.winStorage = {
	args: [],
	icons: []
}

ipcMain.on("set-arguments", function(e, opts) {
	global.winStorage.args.push(opts);
})
let win;

app.on('ready', function () {
	const {
		width,
		height,
		x,
		y
	} = require("electron").screen.getPrimaryDisplay().bounds;
	win = new BrowserWindow({
		frame: false,
		resizable: false,
		movable: false,
		minimizable: false,
		maximizable: false,
		closable: false,
		type: "desktop",
		x: x,
		y: y,
		width: width,
		height: height,
		skipTaskbar: true,
		backgroundColor: '#bbd8e8',
		webPreferences: {
			nativeWindowOpen: true
		}
	});
	win.loadURL("file://" + __dirname + "/sys/init/index.html");
	win.on("beforeunload", function () {
		return false;
	});
	win.on('close', function () {
		win = null
	});
	win.webContents.on('will-navigate', ev => {
		ev.preventDefault()
	});
	win.toggleDevTools();
	win.show();
	win.setSize(width, height);
	/*taskbar.webContents.on('did-finish-load', function () {
		fs.readFile(app.getPath("appData") + "/autostart.json", function (err, autostart) {
			if(err || !autostart) {
				console.error(err);
				return;
			}
			autostart = JSON.parse(autostart);
			autostart.forEach(function (item) {
				let service = new BrowserWindow({
					skipTaskbar: true,
					show: false,
					width: 0,
					height: 0,
					x: x + height + 10,
					y: y + width + 10,
					resizable: false,
					frame: false,
					arguments: Object.assign({},{autostart: true}, item.args)
				});
				service.setMenu(null);
				service.loadURL("file:///" + app.getAppPath() + "/apps/" + item.app + "/index.html");
			})
		})
	});*/
});
