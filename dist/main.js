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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90c190ZW1wLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWlzLWRldi9pbmRleC5qcyIsIndlYnBhY2s6Ly90c190ZW1wLy4vbm9kZV9tb2R1bGVzL2VsZWN0cm9uLWxvYWQtZGV2dG9vbC9pbmRleC5qcyIsIndlYnBhY2s6Ly90c190ZW1wLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vdHNfdGVtcC9leHRlcm5hbCBcImVsZWN0cm9uXCIiLCJ3ZWJwYWNrOi8vdHNfdGVtcC9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vdHNfdGVtcC9leHRlcm5hbCBcIm9zXCIiLCJ3ZWJwYWNrOi8vdHNfdGVtcC9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly90c190ZW1wL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RzX3RlbXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdHNfdGVtcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHNfdGVtcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RzX3RlbXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90c190ZW1wL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWE7QUFDYixpQkFBaUIsbUJBQU8sQ0FBQywwQkFBVTs7QUFFbkM7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7OztBQ1pZO0FBQ1osV0FBVyxtQkFBTyxDQUFDLGNBQUk7QUFDdkIsV0FBVyxtQkFBTyxDQUFDLGNBQUk7QUFDdkIsYUFBYSxtQkFBTyxDQUFDLGtCQUFNO0FBQzNCLGlCQUFpQixtQkFBTyxDQUFDLDBCQUFVO0FBQ25DLGNBQWMsbUJBQU8sQ0FBQyxnRUFBaUI7O0FBRXZDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSnVEO0FBQ1A7QUFDeEI7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsS0FBc0M7QUFDakQsVUFBVSxnREFBUztBQUNuQixVQUFVLENBQTJEO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbURBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFZO0FBQ2pDLFNBQVM7QUFDVCxLQUFLO0FBQ0wsSUFBSSxnREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBc0M7QUFDOUMsNkNBQTZDLGlCQUFpQjtBQUM5RDtBQUNBLFFBQVEsNERBQVcsQ0FBQyxvRkFBaUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBYTtBQUNiO0FBQ0EsOENBQVEsNEJBQTRCLDhDQUFROzs7Ozs7Ozs7Ozs7Ozs7QUN6RDVDLHNDOzs7Ozs7Ozs7Ozs7O0FDQUEsZ0M7Ozs7Ozs7Ozs7Ozs7QUNBQSxnQzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IGVsZWN0cm9uID0gcmVxdWlyZSgnZWxlY3Ryb24nKTtcblxuaWYgKHR5cGVvZiBlbGVjdHJvbiA9PT0gJ3N0cmluZycpIHtcblx0dGhyb3cgbmV3IFR5cGVFcnJvcignTm90IHJ1bm5pbmcgaW4gYW4gRWxlY3Ryb24gZW52aXJvbm1lbnQhJyk7XG59XG5cbmNvbnN0IGFwcCA9IGVsZWN0cm9uLmFwcCB8fCBlbGVjdHJvbi5yZW1vdGUuYXBwO1xuXG5jb25zdCBpc0VudlNldCA9ICdFTEVDVFJPTl9JU19ERVYnIGluIHByb2Nlc3MuZW52O1xuY29uc3QgZ2V0RnJvbUVudiA9IHBhcnNlSW50KHByb2Nlc3MuZW52LkVMRUNUUk9OX0lTX0RFViwgMTApID09PSAxO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRW52U2V0ID8gZ2V0RnJvbUVudiA6ICFhcHAuaXNQYWNrYWdlZDtcbiIsIid1c2Ugc3RyaWN0J1xuY29uc3QgZnMgPSByZXF1aXJlKCdmcycpXG5jb25zdCBvcyA9IHJlcXVpcmUoJ29zJylcbmNvbnN0IHBhdGggPSByZXF1aXJlKCdwYXRoJylcbmNvbnN0IGVsZWN0cm9uID0gcmVxdWlyZSgnZWxlY3Ryb24nKVxuY29uc3QgaXNEZXYgPSByZXF1aXJlKCdlbGVjdHJvbi1pcy1kZXYnKVxuXG5jb25zdCBCcm93c2VyV2luZG93ID0gZWxlY3Ryb24uQnJvd3NlcldpbmRvd1xuXG5jb25zdCBob21lZGlyID0gb3MuaG9tZWRpcigpXG5cbmNvbnN0IG1hY29zID0gcHJvZmlsZSA9PlxuICBwYXRoLmpvaW4oXG4gICAgaG9tZWRpcixcbiAgICAnTGlicmFyeScsXG4gICAgJ0FwcGxpY2F0aW9uIFN1cHBvcnQnLFxuICAgICdHb29nbGUnLFxuICAgICdDaHJvbWUnLFxuICAgIHByb2ZpbGUsXG4gICAgJ0V4dGVuc2lvbnMnXG4gIClcblxuY29uc3Qgd2luZG93cyA9IHByb2ZpbGUgPT4ge1xuICBjb25zdCBhcHBEYXRhID1cbiAgICBwcm9jZXNzLmVudi5MT0NBTEFQUERBVEEgfHwgcGF0aC5qb2luKGhvbWVkaXIsICdBcHBEYXRhJywgJ0xvY2FsJylcbiAgcmV0dXJuIHBhdGguam9pbihcbiAgICBhcHBEYXRhLFxuICAgICdHb29nbGUnLFxuICAgICdDaHJvbWUnLFxuICAgICdVc2VyIERhdGEnLFxuICAgIHByb2ZpbGUsXG4gICAgJ0V4dGVuc2lvbnMnXG4gIClcbn1cblxuY29uc3QgbGludXggPSAoY2hyb21lLCBwcm9maWxlKSA9PiB7XG4gIGNocm9tZSA9IGNocm9tZSB8fCAnZ29vZ2xlLWNocm9tZSdcbiAgY29uc3QgY29uZmlnUGF0aCA9IHBhdGguam9pbignLmNvbmZpZycsIGNocm9tZSwgcHJvZmlsZSwgJ0V4dGVuc2lvbnMnKVxuICBjb25zdCBjYW5kaWRhdGVzID0gW1xuICAgIHBhdGguam9pbihob21lZGlyLCBjb25maWdQYXRoKSxcbiAgICBwYXRoLmpvaW4oaG9tZWRpciwgJ3NuYXAnLCBjaHJvbWUsICdjdXJyZW50JywgY29uZmlnUGF0aClcbiAgXVxuICByZXR1cm4gY2FuZGlkYXRlcy5maW5kKGNhbmRpZGF0ZSA9PiBmcy5leGlzdHNTeW5jKGNhbmRpZGF0ZSkpXG59XG5cbmNvbnN0IGV4dGVuc2lvblBhdGggPSAobmFtZSwgcHJvZmlsZSkgPT4ge1xuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ2RhcndpbicpIHtcbiAgICByZXR1cm4gbWFjb3MocHJvZmlsZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInKSB7XG4gICAgcmV0dXJuIHdpbmRvd3MocHJvZmlsZSlcbiAgfVxuXG4gIHJldHVybiBsaW51eChuYW1lLCBwcm9maWxlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9ICh0YXJnZXQsIG9wdHMpID0+IHtcbiAgb3B0cyA9IHtcbiAgICBlbmFibGVkOiBudWxsLFxuICAgIG5hbWU6ICdnb29nbGUtY2hyb21lJyxcbiAgICBwcm9maWxlOiAnRGVmYXVsdCcsXG4gICAgLi4ub3B0c1xuICB9XG5cbiAgaWYgKG9wdHMuZW5hYmxlZCA9PT0gZmFsc2UgfHwgKG9wdHMuZW5hYmxlZCA9PT0gbnVsbCAmJiAhaXNEZXYpKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpIHtcbiAgICB0YXJnZXQgPSB7IGlkOiB0YXJnZXQgfVxuICB9XG5cbiAgY29uc3QgYWxyZWR5QWRkZWQgPVxuICAgIHRhcmdldC5uYW1lICYmXG4gICAgQnJvd3NlcldpbmRvdy5nZXREZXZUb29sc0V4dGVuc2lvbnMgJiZcbiAgICB7fS5oYXNPd25Qcm9wZXJ0eS5jYWxsKEJyb3dzZXJXaW5kb3cuZ2V0RGV2VG9vbHNFeHRlbnNpb25zKCksIHRhcmdldC5uYW1lKVxuXG4gIGlmIChhbHJlZHlBZGRlZCkge1xuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uUGF0aChvcHRzLm5hbWUsIG9wdHMucHJvZmlsZSlcblxuICBpZiAoIW9wdHMudmVyc2lvbiB8fCBvcHRzLnZlcnNpb24gPT09ICdsYXRlc3QnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHZlcnNpb25zID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKGV4dGVuc2lvbiwgdGFyZ2V0LmlkKSkuc29ydCgpXG4gICAgICBvcHRzLnZlcnNpb24gPSB2ZXJzaW9ucy5wb3AoKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgU2tpcCBsb2FkaW5nICcke1xuICAgICAgICAgIHRhcmdldC5uYW1lXG4gICAgICAgIH0nIGJlY2F1c2UgaXQgY2FuJ3QgYmUgZm91bmQuIFBsZWFzZSBpbnN0YWxsIGF0IENocm9tZSBXZWIgU3RvcmUuYFxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICB9XG5cbiAgQnJvd3NlcldpbmRvdy5hZGREZXZUb29sc0V4dGVuc2lvbihcbiAgICBwYXRoLmpvaW4oZXh0ZW5zaW9uLCB0YXJnZXQuaWQsIG9wdHMudmVyc2lvbilcbiAgKVxufVxuXG5jb25zdCB4ID0gbW9kdWxlLmV4cG9ydHNcblxueC5SRURVWF9ERVZUT09MUyA9IHtcbiAgaWQ6ICdsbWhrcG1iZWtjcG1rbmtsaW9laWJma3BtbWZpYmxqZCcsXG4gIG5hbWU6ICdSZWR1eCBEZXZUb29scydcbn1cblxueC5FTUJFUl9JTlNQRUNUT1IgPSB7XG4gIGlkOiAnYm1kYmxuY2Vna2Vua2FjaWVpaGZocGpmcHBvY29uaGknLFxuICBuYW1lOiAnRW1iZXIgSW5zcGVjdG9yJ1xufVxuXG54LlJFQUNUX0RFVkVMT1BFUl9UT09MUyA9IHtcbiAgaWQ6ICdmbWthZG1hcGdvZmFkb3BsamJqZmthcGRrb2llbmloaScsXG4gIG5hbWU6ICdSZWFjdCBEZXZlbG9wZXIgVG9vbHMnXG59XG5cbnguQkFDS0JPTkVfREVCVUdHRVIgPSB7XG4gIGlkOiAnYmhsamhuZGxpbWlhZm9wbW1oamxnZnBubmNoampiaGQnLFxuICBuYW1lOiAnQmFja2JvbmUgRGVidWdnZXInXG59XG5cbnguSlFVRVJZX0RFQlVHR0VSID0ge1xuICBpZDogJ2RiaGhubm5wYWVvYmZkZG1sYWxobmVoZ2NsY21qaW1pJyxcbiAgbmFtZTogJ2pRdWVyeSBEZWJ1Z2dlcidcbn1cblxueC5BTkdVTEFSSlNfQkFUQVJBTkcgPSB7XG4gIGlkOiAnaWdoZG1laGlkaGlwY21jb2pqZ2lsb2Fjb2Fmam1wZmsnLFxuICBuYW1lOiAnQW5ndWxhckpTIEJhdGFyYW5nJ1xufVxuXG54LlZVRUpTX0RFVlRPT0xTID0ge1xuICBpZDogJ25oZG9nam1lamlnbGlwY2Nwbm5uYW5oYmxlZGFqYnBkJyxcbiAgbmFtZTogJ1Z1ZS5qcyBkZXZ0b29scydcbn1cblxueC5WVUVKU19ERVZUT09MU19CRVRBID0ge1xuICBpZDogJ2xqamVtbGxsamNtb2dwZmFwYmtraWdoYmhocHBqZGJnJyxcbiAgbmFtZTogJ1Z1ZS5qcyBkZXZ0b29scyBiZXRhIGNoYW5uZWwnXG59XG4iLCJpbXBvcnQgeyBhcHAsIEJyb3dzZXJXaW5kb3csIGlwY01haW4gfSBmcm9tICdlbGVjdHJvbic7XG5pbXBvcnQgbG9hZERldnRvb2wgZnJvbSAnZWxlY3Ryb24tbG9hZC1kZXZ0b29sJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuLyoqXG4gKiBQcmVsb2FkIOOCueOCr+ODquODl+ODiOOBruaJgOWcqOOBmeOCi+ODh+OCo+ODrOOCr+ODiOODquOCkuWPluW+l1xuICpcbiAqIOmWi+eZuuaZguOBq+OBryB3ZWJwYWNrIOOBruWHuuWKm+WFiOOCkuaMh+WumuOBl+OAgVxuICogZWxlY3Ryb24tYnVpbGRlciDjgavjgojjgovjg5Hjg4PjgrHjg7zjgrjlvozjgavjga8gJ2FzYXJVbnBhY2snIOOCquODl+OCt+ODp+ODs+OBq1xuICog6Kit5a6a44GX44Gf44OH44Kj44Os44Kv44OI44Oq44KS6L+U44GZXG4gKi9cbmNvbnN0IGdldFJlc291cmNlRGlyZWN0b3J5ID0gKCkgPT4ge1xuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50J1xuICAgICAgICA/IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnZGlzdCcpXG4gICAgICAgIDogcGF0aC5qb2luKHByb2Nlc3MucmVzb3VyY2VzUGF0aCwgJ2FwcC5hc2FyLnVucGFjaycsICdkaXN0Jyk7XG59O1xuLyoqXG4gKiBCcm93c2VyV2luZG9344Kk44Oz44K544K/44Oz44K544KS5L2c5oiQ44GZ44KL6Zai5pWwXG4gKi9cbmNvbnN0IGNyZWF0ZVdpbmRvdyA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xuICAgICAgICB3aWR0aDogODAwLFxuICAgICAgICBoZWlnaHQ6IDYwMCxcbiAgICAgICAgd2ViUHJlZmVyZW5jZXM6IHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQnJvd3NlcldpbmRvd+OCpOODs+OCueOCv+ODs+OCue+8iOODrOODs+ODgOODqeODvOODl+ODreOCu+OCue+8ieOBp+OBr1xuICAgICAgICAgICAgICogTm9kZS5qc+OBruapn+iDveOCkueEoeWKueWMluOBmeOCi++8iOODh+ODleOCqeODq+ODiO+8iVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBub2RlSW50ZWdyYXRpb246IGZhbHNlLFxuICAgICAgICAgICAgY29udGV4dElzb2xhdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFByZWxvYWTjgrnjgq/jg6rjg5fjg4jjga/ntbblr77jg5HjgrnjgafmjIflrprjgZnjgotcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgcHJlbG9hZDogcGF0aC5yZXNvbHZlKGdldFJlc291cmNlRGlyZWN0b3J5KCksICdwcmVsb2FkLmpzJyksXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgaXBjTWFpbi5vbignYXN5bmMtbWVzc2FnZScsIChlLCBhcmcpID0+IHtcbiAgICAgICAgLy8g5Y+X5L+hIHBpbmchXG4gICAgICAgIGNvbnNvbGUubG9nKGFyZyk7XG4gICAgICAgIC8vIOi/lOS/oSBwb25nIVxuICAgICAgICBlLnJlcGx5KCdhc3luYy1yZXBseScsICdwb25nIScpO1xuICAgIH0pO1xuICAgIC8vIOODrOODs+ODgOODqeODvOODl+ODreOCu+OCueOCkuODreODvOODiVxuICAgIG1haW5XaW5kb3cubG9hZEZpbGUoJ2Rpc3QvaW5kZXguaHRtbCcpO1xuICAgIC8vIOmWi+eZuuaZguOBq+OBr+ODh+ODmeODreODg+ODkeODvOODhOODvOODq+OCkumWi+OBj1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICBtYWluV2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scyh7IG1vZGU6ICdkZXRhY2gnIH0pO1xuICAgICAgICAvLyBSZWFjdCBEZXZlbG9wZXIgVG9vbHMg44KS44Ot44O844OJ44GZ44KLXG4gICAgICAgIGxvYWREZXZ0b29sKGxvYWREZXZ0b29sLlJFQUNUX0RFVkVMT1BFUl9UT09MUyk7XG4gICAgfVxufTtcbi8qKlxuICog44Ki44OX44Oq44GM6LW35YuV44GX44Gf44KJIEJyb3dzZXJXaW5kb3cg44Kk44Oz44K544K/44Oz44K544KS5L2c5oiQ44GX44CBXG4gKiDjg6zjg7Pjg4Djg6njg7zjg5fjg63jgrvjgrnvvIhpbmRleC5odG1s44Go44Gd44GT44GL44KJ5ZG844Gw44KM44KL44K544Kv44Oq44OX44OI77yJ44KSXG4gKiDjg63jg7zjg4njgZnjgotcbiAqL1xuYXBwLndoZW5SZWFkeSgpLnRoZW4oY3JlYXRlV2luZG93KTtcbi8vIOOBmeOBueOBpuOBruOCpuOCo+ODs+ODieOCpuOBjOmWieOBmOOCieOCjOOBn+OCieOCouODl+ODquOCkue1guS6huOBmeOCi1xuYXBwLm9uY2UoJ3dpbmRvdy1hbGwtY2xvc2VkJywgKCkgPT4gYXBwLnF1aXQoKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJlbGVjdHJvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi50c1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=