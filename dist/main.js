/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/electron-is-dev/index.js":
/*!***********************************************!*\
  !*** ./node_modules/electron-is-dev/index.js ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 13:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const electron = __webpack_require__(/*! electron */ "electron");

if (typeof electron === 'string') {
	throw new TypeError('Not running in an Electron environment!');
}

const app = electron.app || electron.remote.app;

const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

module.exports = isEnvSet ? getFromEnv : !app.isPackaged;


/***/ }),

/***/ "./node_modules/electron-load-devtool/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/electron-load-devtool/index.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 58:0-14 */
/*! CommonJS bailout: module.exports is used directly at 105:10-24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const fs = __webpack_require__(/*! fs */ "fs")
const os = __webpack_require__(/*! os */ "os")
const path = __webpack_require__(/*! path */ "path")
const electron = __webpack_require__(/*! electron */ "electron")
const isDev = __webpack_require__(/*! electron-is-dev */ "./node_modules/electron-is-dev/index.js")

const BrowserWindow = electron.BrowserWindow

const homedir = os.homedir()

const macos = profile =>
  path.join(
    homedir,
    'Library',
    'Application Support',
    'Google',
    'Chrome',
    profile,
    'Extensions'
  )

const windows = profile => {
  const appData =
    process.env.LOCALAPPDATA || path.join(homedir, 'AppData', 'Local')
  return path.join(
    appData,
    'Google',
    'Chrome',
    'User Data',
    profile,
    'Extensions'
  )
}

const linux = (chrome, profile) => {
  chrome = chrome || 'google-chrome'
  const configPath = path.join('.config', chrome, profile, 'Extensions')
  const candidates = [
    path.join(homedir, configPath),
    path.join(homedir, 'snap', chrome, 'current', configPath)
  ]
  return candidates.find(candidate => fs.existsSync(candidate))
}

const extensionPath = (name, profile) => {
  if (process.platform === 'darwin') {
    return macos(profile)
  }

  if (process.platform === 'win32') {
    return windows(profile)
  }

  return linux(name, profile)
}

module.exports = (target, opts) => {
  opts = {
    enabled: null,
    name: 'google-chrome',
    profile: 'Default',
    ...opts
  }

  if (opts.enabled === false || (opts.enabled === null && !isDev)) {
    return
  }

  if (typeof target === 'string') {
    target = { id: target }
  }

  const alredyAdded =
    target.name &&
    BrowserWindow.getDevToolsExtensions &&
    {}.hasOwnProperty.call(BrowserWindow.getDevToolsExtensions(), target.name)

  if (alredyAdded) {
    return
  }

  const extension = extensionPath(opts.name, opts.profile)

  if (!opts.version || opts.version === 'latest') {
    try {
      const versions = fs.readdirSync(path.join(extension, target.id)).sort()
      opts.version = versions.pop()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(
        `Skip loading '${
          target.name
        }' because it can't be found. Please install at Chrome Web Store.`
      )
      return
    }
  }

  BrowserWindow.addDevToolsExtension(
    path.join(extension, target.id, opts.version)
  )
}

const x = module.exports

x.REDUX_DEVTOOLS = {
  id: 'lmhkpmbekcpmknklioeibfkpmmfibljd',
  name: 'Redux DevTools'
}

x.EMBER_INSPECTOR = {
  id: 'bmdblncegkenkacieihfhpjfppoconhi',
  name: 'Ember Inspector'
}

x.REACT_DEVELOPER_TOOLS = {
  id: 'fmkadmapgofadopljbjfkapdkoienihi',
  name: 'React Developer Tools'
}

x.BACKBONE_DEBUGGER = {
  id: 'bhljhndlimiafopmmhjlgfpnnchjjbhd',
  name: 'Backbone Debugger'
}

x.JQUERY_DEBUGGER = {
  id: 'dbhhnnnpaeobfddmlalhnehgclcmjimi',
  name: 'jQuery Debugger'
}

x.ANGULARJS_BATARANG = {
  id: 'ighdmehidhipcmcojjgiloacoafjmpfk',
  name: 'AngularJS Batarang'
}

x.VUEJS_DEVTOOLS = {
  id: 'nhdogjmejiglipccpnnnanhbledajbpd',
  name: 'Vue.js devtools'
}

x.VUEJS_DEVTOOLS_BETA = {
  id: 'ljjemllljcmogpfapbkkighbhhppjdbg',
  name: 'Vue.js devtools beta channel'
}


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron_load_devtool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron-load-devtool */ "./node_modules/electron-load-devtool/index.js");
/* harmony import */ var electron_load_devtool__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron_load_devtool__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);



/**
 * Preload スクリプトの所在するディレクトリを取得
 *
 * 開発時には webpack の出力先を指定し、
 * electron-builder によるパッケージ後には 'asarUnpack' オプションに
 * 設定したディレクトリを返す
 */
const getResourceDirectory = () => {
    return  true
        ? path__WEBPACK_IMPORTED_MODULE_2___default().join(process.cwd(), 'dist')
        : 0;
};
/**
 * BrowserWindowインスタンスを作成する関数
 */
const createWindow = () => {
    const mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__.BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            /**
             * BrowserWindowインスタンス（レンダラープロセス）では
             * Node.jsの機能を無効化する（デフォルト）
             */
            nodeIntegration: false,
            contextIsolation: false,
            /**
             * Preloadスクリプトは絶対パスで指定する
             */
            preload: path__WEBPACK_IMPORTED_MODULE_2___default().resolve(getResourceDirectory(), 'preload.js'),
        },
    });
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcMain.on('async-message', (e, arg) => {
        // 受信 ping!
        console.log(arg);
        // 返信 pong!
        e.reply('async-reply', 'pong!');
    });
    // レンダラープロセスをロード
    mainWindow.loadFile('dist/index.html');
    // 開発時にはデベロッパーツールを開く
    if (true) {
        mainWindow.webContents.openDevTools({ mode: 'detach' });
        // React Developer Tools をロードする
        electron_load_devtool__WEBPACK_IMPORTED_MODULE_1___default()((electron_load_devtool__WEBPACK_IMPORTED_MODULE_1___default().REACT_DEVELOPER_TOOLS));
    }
};
/**
 * アプリが起動したら BrowserWindow インスタンスを作成し、
 * レンダラープロセス（index.htmlとそこから呼ばれるスクリプト）を
 * ロードする
 */
electron__WEBPACK_IMPORTED_MODULE_0__.app.whenReady().then(createWindow);
// すべてのウィンドウが閉じられたらアプリを終了する
electron__WEBPACK_IMPORTED_MODULE_0__.app.once('window-all-closed', () => electron__WEBPACK_IMPORTED_MODULE_0__.app.quit());


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("electron");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/*! dynamic exports */
/*! exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("os");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! dynamic exports */
/*! export __esModule [maybe provided (runtime-defined)] [no usage info] [provision prevents renaming (no use info)] */
/*! other exports [maybe provided (runtime-defined)] [no usage info] */
/*! runtime requirements: module */
/***/ ((module) => {

module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lbGVjdHJvbl90aW1lci8uL25vZGVfbW9kdWxlcy9lbGVjdHJvbi1pcy1kZXYvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb25fdGltZXIvLi9ub2RlX21vZHVsZXMvZWxlY3Ryb24tbG9hZC1kZXZ0b29sL2luZGV4LmpzIiwid2VicGFjazovL2VsZWN0cm9uX3RpbWVyLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vZWxlY3Ryb25fdGltZXIvZXh0ZXJuYWwgXCJlbGVjdHJvblwiIiwid2VicGFjazovL2VsZWN0cm9uX3RpbWVyL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9lbGVjdHJvbl90aW1lci9leHRlcm5hbCBcIm9zXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb25fdGltZXIvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vZWxlY3Ryb25fdGltZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZWxlY3Ryb25fdGltZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZWxlY3Ryb25fdGltZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2VsZWN0cm9uX3RpbWVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZWxlY3Ryb25fdGltZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9lbGVjdHJvbl90aW1lci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFhO0FBQ2IsaUJBQWlCLG1CQUFPLENBQUMsMEJBQVU7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNaWTtBQUNaLFdBQVcsbUJBQU8sQ0FBQyxjQUFJO0FBQ3ZCLFdBQVcsbUJBQU8sQ0FBQyxjQUFJO0FBQ3ZCLGFBQWEsbUJBQU8sQ0FBQyxrQkFBTTtBQUMzQixpQkFBaUIsbUJBQU8sQ0FBQywwQkFBVTtBQUNuQyxjQUFjLG1CQUFPLENBQUMsZ0VBQWlCOztBQUV2Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEp1RDtBQUNQO0FBQ3hCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEtBQXNDO0FBQ2pELFVBQVUsZ0RBQVM7QUFDbkIsVUFBVSxDQUEyRDtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1EQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtREFBWTtBQUNqQyxTQUFTO0FBQ1QsS0FBSztBQUNMLElBQUksZ0RBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLElBQXNDO0FBQzlDLDZDQUE2QyxpQkFBaUI7QUFDOUQ7QUFDQSxRQUFRLDREQUFXLENBQUMsb0ZBQWlDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQWE7QUFDYjtBQUNBLDhDQUFRLDRCQUE0Qiw4Q0FBUTs7Ozs7Ozs7Ozs7Ozs7O0FDekQ1QyxzQzs7Ozs7Ozs7Ozs7OztBQ0FBLGdDOzs7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBlbGVjdHJvbiA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XG5cbmlmICh0eXBlb2YgZWxlY3Ryb24gPT09ICdzdHJpbmcnKSB7XG5cdHRocm93IG5ldyBUeXBlRXJyb3IoJ05vdCBydW5uaW5nIGluIGFuIEVsZWN0cm9uIGVudmlyb25tZW50IScpO1xufVxuXG5jb25zdCBhcHAgPSBlbGVjdHJvbi5hcHAgfHwgZWxlY3Ryb24ucmVtb3RlLmFwcDtcblxuY29uc3QgaXNFbnZTZXQgPSAnRUxFQ1RST05fSVNfREVWJyBpbiBwcm9jZXNzLmVudjtcbmNvbnN0IGdldEZyb21FbnYgPSBwYXJzZUludChwcm9jZXNzLmVudi5FTEVDVFJPTl9JU19ERVYsIDEwKSA9PT0gMTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0VudlNldCA/IGdldEZyb21FbnYgOiAhYXBwLmlzUGFja2FnZWQ7XG4iLCIndXNlIHN0cmljdCdcbmNvbnN0IGZzID0gcmVxdWlyZSgnZnMnKVxuY29uc3Qgb3MgPSByZXF1aXJlKCdvcycpXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBlbGVjdHJvbiA9IHJlcXVpcmUoJ2VsZWN0cm9uJylcbmNvbnN0IGlzRGV2ID0gcmVxdWlyZSgnZWxlY3Ryb24taXMtZGV2JylcblxuY29uc3QgQnJvd3NlcldpbmRvdyA9IGVsZWN0cm9uLkJyb3dzZXJXaW5kb3dcblxuY29uc3QgaG9tZWRpciA9IG9zLmhvbWVkaXIoKVxuXG5jb25zdCBtYWNvcyA9IHByb2ZpbGUgPT5cbiAgcGF0aC5qb2luKFxuICAgIGhvbWVkaXIsXG4gICAgJ0xpYnJhcnknLFxuICAgICdBcHBsaWNhdGlvbiBTdXBwb3J0JyxcbiAgICAnR29vZ2xlJyxcbiAgICAnQ2hyb21lJyxcbiAgICBwcm9maWxlLFxuICAgICdFeHRlbnNpb25zJ1xuICApXG5cbmNvbnN0IHdpbmRvd3MgPSBwcm9maWxlID0+IHtcbiAgY29uc3QgYXBwRGF0YSA9XG4gICAgcHJvY2Vzcy5lbnYuTE9DQUxBUFBEQVRBIHx8IHBhdGguam9pbihob21lZGlyLCAnQXBwRGF0YScsICdMb2NhbCcpXG4gIHJldHVybiBwYXRoLmpvaW4oXG4gICAgYXBwRGF0YSxcbiAgICAnR29vZ2xlJyxcbiAgICAnQ2hyb21lJyxcbiAgICAnVXNlciBEYXRhJyxcbiAgICBwcm9maWxlLFxuICAgICdFeHRlbnNpb25zJ1xuICApXG59XG5cbmNvbnN0IGxpbnV4ID0gKGNocm9tZSwgcHJvZmlsZSkgPT4ge1xuICBjaHJvbWUgPSBjaHJvbWUgfHwgJ2dvb2dsZS1jaHJvbWUnXG4gIGNvbnN0IGNvbmZpZ1BhdGggPSBwYXRoLmpvaW4oJy5jb25maWcnLCBjaHJvbWUsIHByb2ZpbGUsICdFeHRlbnNpb25zJylcbiAgY29uc3QgY2FuZGlkYXRlcyA9IFtcbiAgICBwYXRoLmpvaW4oaG9tZWRpciwgY29uZmlnUGF0aCksXG4gICAgcGF0aC5qb2luKGhvbWVkaXIsICdzbmFwJywgY2hyb21lLCAnY3VycmVudCcsIGNvbmZpZ1BhdGgpXG4gIF1cbiAgcmV0dXJuIGNhbmRpZGF0ZXMuZmluZChjYW5kaWRhdGUgPT4gZnMuZXhpc3RzU3luYyhjYW5kaWRhdGUpKVxufVxuXG5jb25zdCBleHRlbnNpb25QYXRoID0gKG5hbWUsIHByb2ZpbGUpID0+IHtcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICdkYXJ3aW4nKSB7XG4gICAgcmV0dXJuIG1hY29zKHByb2ZpbGUpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgIHJldHVybiB3aW5kb3dzKHByb2ZpbGUpXG4gIH1cblxuICByZXR1cm4gbGludXgobmFtZSwgcHJvZmlsZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSAodGFyZ2V0LCBvcHRzKSA9PiB7XG4gIG9wdHMgPSB7XG4gICAgZW5hYmxlZDogbnVsbCxcbiAgICBuYW1lOiAnZ29vZ2xlLWNocm9tZScsXG4gICAgcHJvZmlsZTogJ0RlZmF1bHQnLFxuICAgIC4uLm9wdHNcbiAgfVxuXG4gIGlmIChvcHRzLmVuYWJsZWQgPT09IGZhbHNlIHx8IChvcHRzLmVuYWJsZWQgPT09IG51bGwgJiYgIWlzRGV2KSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKSB7XG4gICAgdGFyZ2V0ID0geyBpZDogdGFyZ2V0IH1cbiAgfVxuXG4gIGNvbnN0IGFscmVkeUFkZGVkID1cbiAgICB0YXJnZXQubmFtZSAmJlxuICAgIEJyb3dzZXJXaW5kb3cuZ2V0RGV2VG9vbHNFeHRlbnNpb25zICYmXG4gICAge30uaGFzT3duUHJvcGVydHkuY2FsbChCcm93c2VyV2luZG93LmdldERldlRvb2xzRXh0ZW5zaW9ucygpLCB0YXJnZXQubmFtZSlcblxuICBpZiAoYWxyZWR5QWRkZWQpIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGNvbnN0IGV4dGVuc2lvbiA9IGV4dGVuc2lvblBhdGgob3B0cy5uYW1lLCBvcHRzLnByb2ZpbGUpXG5cbiAgaWYgKCFvcHRzLnZlcnNpb24gfHwgb3B0cy52ZXJzaW9uID09PSAnbGF0ZXN0Jykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB2ZXJzaW9ucyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihleHRlbnNpb24sIHRhcmdldC5pZCkpLnNvcnQoKVxuICAgICAgb3B0cy52ZXJzaW9uID0gdmVyc2lvbnMucG9wKClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFNraXAgbG9hZGluZyAnJHtcbiAgICAgICAgICB0YXJnZXQubmFtZVxuICAgICAgICB9JyBiZWNhdXNlIGl0IGNhbid0IGJlIGZvdW5kLiBQbGVhc2UgaW5zdGFsbCBhdCBDaHJvbWUgV2ViIFN0b3JlLmBcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgfVxuXG4gIEJyb3dzZXJXaW5kb3cuYWRkRGV2VG9vbHNFeHRlbnNpb24oXG4gICAgcGF0aC5qb2luKGV4dGVuc2lvbiwgdGFyZ2V0LmlkLCBvcHRzLnZlcnNpb24pXG4gIClcbn1cblxuY29uc3QgeCA9IG1vZHVsZS5leHBvcnRzXG5cbnguUkVEVVhfREVWVE9PTFMgPSB7XG4gIGlkOiAnbG1oa3BtYmVrY3Bta25rbGlvZWliZmtwbW1maWJsamQnLFxuICBuYW1lOiAnUmVkdXggRGV2VG9vbHMnXG59XG5cbnguRU1CRVJfSU5TUEVDVE9SID0ge1xuICBpZDogJ2JtZGJsbmNlZ2tlbmthY2llaWhmaHBqZnBwb2NvbmhpJyxcbiAgbmFtZTogJ0VtYmVyIEluc3BlY3Rvcidcbn1cblxueC5SRUFDVF9ERVZFTE9QRVJfVE9PTFMgPSB7XG4gIGlkOiAnZm1rYWRtYXBnb2ZhZG9wbGpiamZrYXBka29pZW5paGknLFxuICBuYW1lOiAnUmVhY3QgRGV2ZWxvcGVyIFRvb2xzJ1xufVxuXG54LkJBQ0tCT05FX0RFQlVHR0VSID0ge1xuICBpZDogJ2JobGpobmRsaW1pYWZvcG1taGpsZ2Zwbm5jaGpqYmhkJyxcbiAgbmFtZTogJ0JhY2tib25lIERlYnVnZ2VyJ1xufVxuXG54LkpRVUVSWV9ERUJVR0dFUiA9IHtcbiAgaWQ6ICdkYmhobm5ucGFlb2JmZGRtbGFsaG5laGdjbGNtamltaScsXG4gIG5hbWU6ICdqUXVlcnkgRGVidWdnZXInXG59XG5cbnguQU5HVUxBUkpTX0JBVEFSQU5HID0ge1xuICBpZDogJ2lnaGRtZWhpZGhpcGNtY29qamdpbG9hY29hZmptcGZrJyxcbiAgbmFtZTogJ0FuZ3VsYXJKUyBCYXRhcmFuZydcbn1cblxueC5WVUVKU19ERVZUT09MUyA9IHtcbiAgaWQ6ICduaGRvZ2ptZWppZ2xpcGNjcG5ubmFuaGJsZWRhamJwZCcsXG4gIG5hbWU6ICdWdWUuanMgZGV2dG9vbHMnXG59XG5cbnguVlVFSlNfREVWVE9PTFNfQkVUQSA9IHtcbiAgaWQ6ICdsamplbWxsbGpjbW9ncGZhcGJra2lnaGJoaHBwamRiZycsXG4gIG5hbWU6ICdWdWUuanMgZGV2dG9vbHMgYmV0YSBjaGFubmVsJ1xufVxuIiwiaW1wb3J0IHsgYXBwLCBCcm93c2VyV2luZG93LCBpcGNNYWluIH0gZnJvbSAnZWxlY3Ryb24nO1xuaW1wb3J0IGxvYWREZXZ0b29sIGZyb20gJ2VsZWN0cm9uLWxvYWQtZGV2dG9vbCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbi8qKlxuICogUHJlbG9hZCDjgrnjgq/jg6rjg5fjg4jjga7miYDlnKjjgZnjgovjg4fjgqPjg6zjgq/jg4jjg6rjgpLlj5blvpdcbiAqXG4gKiDplovnmbrmmYLjgavjga8gd2VicGFjayDjga7lh7rlipvlhYjjgpLmjIflrprjgZfjgIFcbiAqIGVsZWN0cm9uLWJ1aWxkZXIg44Gr44KI44KL44OR44OD44Kx44O844K45b6M44Gr44GvICdhc2FyVW5wYWNrJyDjgqrjg5fjgrfjg6fjg7PjgatcbiAqIOioreWumuOBl+OBn+ODh+OCo+ODrOOCr+ODiOODquOCkui/lOOBmVxuICovXG5jb25zdCBnZXRSZXNvdXJjZURpcmVjdG9yeSA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcbiAgICAgICAgPyBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2Rpc3QnKVxuICAgICAgICA6IHBhdGguam9pbihwcm9jZXNzLnJlc291cmNlc1BhdGgsICdhcHAuYXNhci51bnBhY2snLCAnZGlzdCcpO1xufTtcbi8qKlxuICogQnJvd3NlcldpbmRvd+OCpOODs+OCueOCv+ODs+OCueOCkuS9nOaIkOOBmeOCi+mWouaVsFxuICovXG5jb25zdCBjcmVhdGVXaW5kb3cgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbldpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICAgICAgd2lkdGg6IDgwMCxcbiAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEJyb3dzZXJXaW5kb3fjgqTjg7Pjgrnjgr/jg7PjgrnvvIjjg6zjg7Pjg4Djg6njg7zjg5fjg63jgrvjgrnvvInjgafjga9cbiAgICAgICAgICAgICAqIE5vZGUuanPjga7mqZ/og73jgpLnhKHlirnljJbjgZnjgovvvIjjg4fjg5Xjgqnjg6vjg4jvvIlcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgbm9kZUludGVncmF0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbnRleHRJc29sYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBQcmVsb2Fk44K544Kv44Oq44OX44OI44Gv57W25a++44OR44K544Gn5oyH5a6a44GZ44KLXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHByZWxvYWQ6IHBhdGgucmVzb2x2ZShnZXRSZXNvdXJjZURpcmVjdG9yeSgpLCAncHJlbG9hZC5qcycpLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIGlwY01haW4ub24oJ2FzeW5jLW1lc3NhZ2UnLCAoZSwgYXJnKSA9PiB7XG4gICAgICAgIC8vIOWPl+S/oSBwaW5nIVxuICAgICAgICBjb25zb2xlLmxvZyhhcmcpO1xuICAgICAgICAvLyDov5Tkv6EgcG9uZyFcbiAgICAgICAgZS5yZXBseSgnYXN5bmMtcmVwbHknLCAncG9uZyEnKTtcbiAgICB9KTtcbiAgICAvLyDjg6zjg7Pjg4Djg6njg7zjg5fjg63jgrvjgrnjgpLjg63jg7zjg4lcbiAgICBtYWluV2luZG93LmxvYWRGaWxlKCdkaXN0L2luZGV4Lmh0bWwnKTtcbiAgICAvLyDplovnmbrmmYLjgavjga/jg4fjg5njg63jg4Pjg5Hjg7zjg4Tjg7zjg6vjgpLplovjgY9cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgbWFpbldpbmRvdy53ZWJDb250ZW50cy5vcGVuRGV2VG9vbHMoeyBtb2RlOiAnZGV0YWNoJyB9KTtcbiAgICAgICAgLy8gUmVhY3QgRGV2ZWxvcGVyIFRvb2xzIOOCkuODreODvOODieOBmeOCi1xuICAgICAgICBsb2FkRGV2dG9vbChsb2FkRGV2dG9vbC5SRUFDVF9ERVZFTE9QRVJfVE9PTFMpO1xuICAgIH1cbn07XG4vKipcbiAqIOOCouODl+ODquOBjOi1t+WLleOBl+OBn+OCiSBCcm93c2VyV2luZG93IOOCpOODs+OCueOCv+ODs+OCueOCkuS9nOaIkOOBl+OAgVxuICog44Os44Oz44OA44Op44O844OX44Ot44K744K577yIaW5kZXguaHRtbOOBqOOBneOBk+OBi+OCieWRvOOBsOOCjOOCi+OCueOCr+ODquODl+ODiO+8ieOCklxuICog44Ot44O844OJ44GZ44KLXG4gKi9cbmFwcC53aGVuUmVhZHkoKS50aGVuKGNyZWF0ZVdpbmRvdyk7XG4vLyDjgZnjgbnjgabjga7jgqbjgqPjg7Pjg4njgqbjgYzplonjgZjjgonjgozjgZ/jgonjgqLjg5fjg6rjgpLntYLkuobjgZnjgotcbmFwcC5vbmNlKCd3aW5kb3ctYWxsLWNsb3NlZCcsICgpID0+IGFwcC5xdWl0KCkpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZWxlY3Ryb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTs7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4udHNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9