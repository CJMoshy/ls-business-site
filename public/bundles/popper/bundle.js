/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var _scenes_BalloonPopGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/BalloonPopGame */ \"./src/scenes/BalloonPopGame.ts\");\n/* harmony import */ var _scenes_GameOver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/GameOver */ \"./src/scenes/GameOver.ts\");\n\n\nconst config = {\n    parent: 'Side Scroller',\n    type: Phaser.AUTO,\n    width: 500,\n    height: 450,\n    physics: {\n        default: 'arcade',\n        arcade: {\n            gravity: { x: 0, y: 0 },\n            debug: false // true\n        }\n    },\n    scene: [_scenes_BalloonPopGame__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _scenes_GameOver__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]\n};\n// const game = new Phaser.Game(config);\nlet game = null;\nconst init = () => {\n    game = new Phaser.Game(config);\n};\n// init();\nconst end = () => {\n    game === null || game === void 0 ? void 0 : game.destroy(true);\n};\nwindow.run = () => {\n    return [init, end];\n};\n\n\n//# sourceURL=webpack://balloon-popper/./src/main.ts?");

/***/ }),

/***/ "./src/scenes/BalloonPopGame.ts":
/*!**************************************!*\
  !*** ./src/scenes/BalloonPopGame.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BalloonPopGame)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ \"./src/main.ts\");\n/* harmony import */ var _assets_Green_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Green.png */ \"./src/assets/Green.png\");\n/* harmony import */ var _assets_Balloon_Yellow_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/Balloon_Yellow.png */ \"./src/assets/Balloon_Yellow.png\");\n/* harmony import */ var _assets_Balloon_Grey_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/Balloon_Grey.png */ \"./src/assets/Balloon_Grey.png\");\n/* harmony import */ var _assets_Balloon_Blue_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/Balloon_Blue.png */ \"./src/assets/Balloon_Blue.png\");\n/* harmony import */ var _assets_Balloon_Red_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/Balloon_Red.png */ \"./src/assets/Balloon_Red.png\");\n/* harmony import */ var _assets_Dart_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/Dart.png */ \"./src/assets/Dart.png\");\n\n\n\n\n\n\n\n\nclass BalloonPopGame extends phaser__WEBPACK_IMPORTED_MODULE_0__.Scene {\n    constructor() {\n        super('BalloonPopGame');\n        this.gameTimer = undefined;\n        this.balloons = undefined;\n        this.darts = undefined;\n        this.scoreText = undefined;\n        this.timeLeft = 10;\n        this.score = 0;\n        this.shot = false;\n        // this.timeLeft = undefined\n        this.names = [\n            ['_yellow', 2],\n            ['_grey', 0.5],\n            ['_blue', 3],\n            ['_red', 5]\n        ];\n    }\n    init() {\n        this.timeLeft = 10;\n        this.score = 0;\n    }\n    preload() {\n        this.load.image('balloon_yellow', _assets_Balloon_Yellow_png__WEBPACK_IMPORTED_MODULE_3__);\n        this.load.image('balloon_grey', _assets_Balloon_Grey_png__WEBPACK_IMPORTED_MODULE_4__);\n        this.load.image('balloon_blue', _assets_Balloon_Blue_png__WEBPACK_IMPORTED_MODULE_5__);\n        this.load.image('balloon_red', _assets_Balloon_Red_png__WEBPACK_IMPORTED_MODULE_6__);\n        this.load.image('dart', _assets_Dart_png__WEBPACK_IMPORTED_MODULE_7__);\n        this.load.image('green', _assets_Green_png__WEBPACK_IMPORTED_MODULE_2__);\n    }\n    create() {\n        this.add.tileSprite(_main__WEBPACK_IMPORTED_MODULE_1__.config.width / 2, _main__WEBPACK_IMPORTED_MODULE_1__.config.height / 2, _main__WEBPACK_IMPORTED_MODULE_1__.config.width, _main__WEBPACK_IMPORTED_MODULE_1__.config.height, 'green', 0);\n        this.balloons = this.add.group();\n        this.darts = this.add.group();\n        this.scoreText = this.add.text(_main__WEBPACK_IMPORTED_MODULE_1__.config.width / 2, 16, 'Score: 0', { fontFamily: 'Roboto', fontSize: '32px', color: '#000' }).setDepth(2).setOrigin(0.5, 0);\n        this.timeText = this.add.text(_main__WEBPACK_IMPORTED_MODULE_1__.config.width / 2, 60, this.timeLeft.toString(), { fontFamily: 'Roboto', fontSize: '32px', color: '#000' }).setDepth(2).setOrigin(0.5, 0);\n        this.gameTimer = this.time.addEvent({\n            delay: 1000,\n            callback: this.updateTimer,\n            callbackScope: this,\n            loop: true\n        });\n        this.input.on('pointerdown', this.shootDart, this);\n        this.time.addEvent({\n            delay: 750,\n            callback: this.spawnBalloon,\n            callbackScope: this,\n            loop: true\n        });\n        this.physics.add.collider(this.darts, this.balloons, this.popBalloon, null, this);\n    }\n    update() {\n        var _a, _b;\n        (_a = this.darts) === null || _a === void 0 ? void 0 : _a.children.entries.forEach((dart) => {\n            dart.y -= 4;\n            if (dart.y < 0) {\n                console.log('dart dead');\n                dart.destroy();\n            }\n        });\n        (_b = this.balloons) === null || _b === void 0 ? void 0 : _b.children.entries.forEach((balloon) => {\n            balloon.x += 2;\n            if (balloon.x > _main__WEBPACK_IMPORTED_MODULE_1__.config.width) {\n                balloon.destroy();\n            }\n        });\n    }\n    shootDart(pointer) {\n        var _a;\n        if (!this.shot) {\n            this.shot = true;\n            const dart = this.physics.add.sprite(pointer.x, this.sys.game.config.height, 'dart', 0)\n                .setSize(5, 30).setOffset(79, 50);\n            (_a = this.darts) === null || _a === void 0 ? void 0 : _a.add(dart);\n            setTimeout(() => {\n                this.shot = false;\n            }, 1000);\n        }\n    }\n    spawnBalloon() {\n        var _a;\n        // const names = [['_yellow',1] ,['_grey',0.5], ['_blue',1], ['_red',1]]\n        const y = phaser__WEBPACK_IMPORTED_MODULE_0__.Math.Between(60, (_main__WEBPACK_IMPORTED_MODULE_1__.config.height - 200));\n        const _balname = `balloon${this.names[phaser__WEBPACK_IMPORTED_MODULE_0__.Math.Between(0, this.names.length - 1)][0]}`;\n        // const balloon = this.physics.add.sprite(0, y, 'balloon' + names[Phaser.Math.Between(0, names.length - 1)][0], 0).setCircle(12, 63, 25).setScale(1.25)\n        const balloon = this.physics.add.sprite(0, y, _balname, 0).setCircle(12, 63, 25).setScale(1.25);\n        balloon.name = _balname;\n        (_a = this.balloons) === null || _a === void 0 ? void 0 : _a.add(balloon);\n    }\n    popBalloon(dart, balloon) {\n        var _a;\n        balloon.destroy();\n        console.log(balloon.name);\n        const scoreA = this.names[this.names.findIndex((e) => `balloon${e[0]}` === balloon.name)][1];\n        this.score += scoreA;\n        (_a = this.scoreText) === null || _a === void 0 ? void 0 : _a.setText(`Score: ${this.score}`);\n    }\n    updateTimer() {\n        var _a, _b;\n        this.timeLeft--;\n        (_a = this.timeText) === null || _a === void 0 ? void 0 : _a.setText(String(this.timeLeft));\n        if (this.timeLeft <= 0) {\n            (_b = this.gameTimer) === null || _b === void 0 ? void 0 : _b.remove();\n            this.scene.start('GameOver', { score: this.score });\n        }\n    }\n}\n\n\n//# sourceURL=webpack://balloon-popper/./src/scenes/BalloonPopGame.ts?");

/***/ }),

/***/ "./src/scenes/GameOver.ts":
/*!********************************!*\
  !*** ./src/scenes/GameOver.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameOver)\n/* harmony export */ });\n/* harmony import */ var _assets_Green_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Green.png */ \"./src/assets/Green.png\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ \"./src/main.ts\");\n\n\nclass GameOver extends Phaser.Scene {\n    constructor() {\n        super('GameOver');\n    }\n    preload() {\n        this.load.image('green', _assets_Green_png__WEBPACK_IMPORTED_MODULE_0__);\n    }\n    create(data) {\n        this.add.tileSprite(_main__WEBPACK_IMPORTED_MODULE_1__.config.width / 2, _main__WEBPACK_IMPORTED_MODULE_1__.config.height / 2, _main__WEBPACK_IMPORTED_MODULE_1__.config.width, _main__WEBPACK_IMPORTED_MODULE_1__.config.height, 'green', 0);\n        // this.add.text((config.width as number) / 2, 200, 'Game Over', {fontFamily: 'Roboto', fontSize: '48px', color: '#000' }).setDepth(2).setOrigin(0.5, 0);\n        this.add.text(_main__WEBPACK_IMPORTED_MODULE_1__.config.width / 2, 250, `Your Score: ${data.score}`, { fontFamily: 'Roboto', fontSize: '32px', color: '#000' }).setDepth(2).setOrigin(0.5, 0);\n        this.add.text(_main__WEBPACK_IMPORTED_MODULE_1__.config.width / 2, 300, 'click to restart', { fontFamily: 'Roboto', fontSize: '24px', color: '#000' }).setDepth(2).setOrigin(0.5, 0);\n        this.input.on('pointerdown', () => {\n            this.scene.start('BalloonPopGame');\n        });\n    }\n}\n\n\n//# sourceURL=webpack://balloon-popper/./src/scenes/GameOver.ts?");

/***/ }),

/***/ "./src/assets/Balloon_Blue.png":
/*!*************************************!*\
  !*** ./src/assets/Balloon_Blue.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"89ec57704879ec9f1e12.png\";\n\n//# sourceURL=webpack://balloon-popper/./src/assets/Balloon_Blue.png?");

/***/ }),

/***/ "./src/assets/Balloon_Grey.png":
/*!*************************************!*\
  !*** ./src/assets/Balloon_Grey.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7450514d8f76bf14e81b.png\";\n\n//# sourceURL=webpack://balloon-popper/./src/assets/Balloon_Grey.png?");

/***/ }),

/***/ "./src/assets/Balloon_Red.png":
/*!************************************!*\
  !*** ./src/assets/Balloon_Red.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eebaae821f70d7b03aff.png\";\n\n//# sourceURL=webpack://balloon-popper/./src/assets/Balloon_Red.png?");

/***/ }),

/***/ "./src/assets/Balloon_Yellow.png":
/*!***************************************!*\
  !*** ./src/assets/Balloon_Yellow.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7ebbca0c8615ae7291f3.png\";\n\n//# sourceURL=webpack://balloon-popper/./src/assets/Balloon_Yellow.png?");

/***/ }),

/***/ "./src/assets/Dart.png":
/*!*****************************!*\
  !*** ./src/assets/Dart.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a476926b9cbf2a5fb80c.png\";\n\n//# sourceURL=webpack://balloon-popper/./src/assets/Dart.png?");

/***/ }),

/***/ "./src/assets/Green.png":
/*!******************************!*\
  !*** ./src/assets/Green.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e4ee1fb7bc4ffa641cd7.png\";\n\n//# sourceURL=webpack://balloon-popper/./src/assets/Green.png?");

/***/ }),

/***/ "phaser":
/*!*************************!*\
  !*** external "Phaser" ***!
  \*************************/
/***/ ((module) => {

module.exports = Phaser;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;