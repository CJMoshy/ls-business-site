/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scenes_play__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/play */ \"./src/scenes/play.ts\");\n/* harmony import */ var _scenes_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/menu */ \"./src/scenes/menu.ts\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webfontloader */ \"./node_modules/webfontloader/webfontloader.js\");\n/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webfontloader__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar config = {\n    parent: 'Ice Cream Game',\n    type: phaser__WEBPACK_IMPORTED_MODULE_2__.CANVAS,\n    width: 500,\n    height: 450,\n    backgroundColor: '#FACADE',\n    pixelArt: true,\n    physics: {\n        default: 'arcade',\n        arcade: {\n        // debug: true,\n        },\n    },\n    scene: [_scenes_play__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _scenes_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]],\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\nvar game;\n// Load the Google Font\nvar init = function () {\n    webfontloader__WEBPACK_IMPORTED_MODULE_3__.load({\n        google: {\n            families: ['Roboto'],\n        },\n        active: function () {\n            // Start the Phaser game after the font is loaded\n            game = new phaser__WEBPACK_IMPORTED_MODULE_2__.Game(config);\n        },\n    });\n};\nvar end = function () {\n    game.destroy(true);\n};\nwindow.run = function () {\n    return [init, end];\n};\n// init();\n// window.addEventListener('beforeunload', (e) => {\n//     e.preventDefault()\n//     game.scene.pause('playScene')\n// })\n\n\n//# sourceURL=webpack://ts-webpack/./src/main.ts?");

/***/ }),

/***/ "./src/prefabs/object.ts":
/*!*******************************!*\
  !*** ./src/prefabs/object.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ \"./src/main.ts\");\n/* harmony import */ var _scenes_play__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scenes/play */ \"./src/scenes/play.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n/**\n *\n */\nvar Obj = /** @class */ (function (_super) {\n    __extends(Obj, _super);\n    // this is the main games current 'collect' tag\n    /**\n     *\n     * @param {Phaser.Scene} scene\n     * @param {number} x\n     * @param {number} y\n     * @param {string} texture\n     * @param {number} frame\n     * @param {Phaser.Physics.Arcade.Sprite} player\n     * @param {number} speed\n     */\n    function Obj(scene, x, y, texture, frame, player, speed) {\n        var _this = _super.call(this, scene, x, y, texture, frame) || this;\n        // phaser stuff\n        scene.add.existing(_this);\n        scene.physics.add.existing(_this);\n        scene.events.on('update', _this.update, _this);\n        _this.parentScene = scene;\n        _this.setCircle(10).setOffset(5.5, 2);\n        _this.playerRef = player;\n        // properties\n        _this.name = texture;\n        _this.currentSelected = undefined;\n        _this.beginFollow = false;\n        _this.speedY = speed;\n        _this.dead = false;\n        return _this;\n    }\n    /**\n     * drop initially\n     * follow player (cone) if game is live\n     */\n    Obj.prototype.update = function () {\n        _super.prototype.update.call(this);\n        if (this.beginFollow) {\n            this.setX(this.playerRef.x);\n        }\n        else {\n            this.setY((this.y += this.speedY));\n        }\n        // destroy it if its out of bounds\n        if (this.y > _main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height + _scenes_play__WEBPACK_IMPORTED_MODULE_2__.gameConfig.padding_bottom) {\n            if (this.getName() === this.getCurrentSelected() && !this.dead) {\n                this.dead = true;\n                this.parentScene.lives -= 1;\n                console.log('yes');\n            }\n            this.destroy();\n        }\n    };\n    /**\n     *\n     * @param {string} _current\n     */\n    Obj.prototype.setCurrentSelected = function (_current) {\n        this.currentSelected = _current;\n    };\n    /**\n     *\n     * @return {string}\n     */\n    Obj.prototype.getCurrentSelected = function () {\n        return this.currentSelected;\n    };\n    /**\n     *\n     * @return {string}\n     */\n    Obj.prototype.getName = function () {\n        return this.name;\n    };\n    return Obj;\n}(phaser__WEBPACK_IMPORTED_MODULE_0__.Physics.Arcade.Sprite));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Obj);\n\n\n//# sourceURL=webpack://ts-webpack/./src/prefabs/object.ts?");

/***/ }),

/***/ "./src/scenes/menu.ts":
/*!****************************!*\
  !*** ./src/scenes/menu.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ \"./src/main.ts\");\n/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play */ \"./src/scenes/play.ts\");\n/* harmony import */ var _assets_general_cone_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/general/cone.png */ \"./src/assets/general/cone.png\");\n/* harmony import */ var _assets_general_star_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/general/star.png */ \"./src/assets/general/star.png\");\n/* harmony import */ var _assets_flavors_chocolateScoop_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/flavors/chocolateScoop.png */ \"./src/assets/flavors/chocolateScoop.png\");\n/* harmony import */ var _assets_flavors_cncScoop_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/flavors/cncScoop.png */ \"./src/assets/flavors/cncScoop.png\");\n/* harmony import */ var _assets_flavors_mcScoop_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/flavors/mcScoop.png */ \"./src/assets/flavors/mcScoop.png\");\n/* harmony import */ var _assets_flavors_orangeSorbetScoop_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/flavors/orangeSorbetScoop.png */ \"./src/assets/flavors/orangeSorbetScoop.png\");\n/* harmony import */ var _assets_flavors_rareBerryScoop_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/flavors/rareBerryScoop.png */ \"./src/assets/flavors/rareBerryScoop.png\");\n/* harmony import */ var _assets_flavors_strawberryScoop_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/flavors/strawberryScoop.png */ \"./src/assets/flavors/strawberryScoop.png\");\n/* harmony import */ var _assets_flavors_vanillaScoop_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/flavors/vanillaScoop.png */ \"./src/assets/flavors/vanillaScoop.png\");\n/* harmony import */ var _assets_general_coneStack_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/general/coneStack.png */ \"./src/assets/general/coneStack.png\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\n\n\n\n\n\n\n\n\n/**\n *\n */\nvar Menu = /** @class */ (function (_super) {\n    __extends(Menu, _super);\n    /**\n       *\n       */\n    function Menu() {\n        return _super.call(this, 'menuScene') || this;\n    }\n    /**\n     */\n    Menu.prototype.init = function () {\n        this.flavors = [\n            'Chocolate',\n            'Cookies and Cream',\n            'Mint Chip',\n            'Orange Sorbet',\n            'Rare Berry',\n            'Strawberry',\n            'Vanilla',\n        ];\n        this.sprite = [];\n    };\n    /**\n     *\n     */\n    Menu.prototype.preload = function () {\n        // cone and collision sprite png\n        this.load.image('player', _assets_general_cone_png__WEBPACK_IMPORTED_MODULE_2__);\n        this.load.image('star', _assets_general_star_png__WEBPACK_IMPORTED_MODULE_3__);\n        this.load.image('lives', _assets_general_coneStack_png__WEBPACK_IMPORTED_MODULE_11__);\n        // flavors\n        this.load.image('Chocolate', _assets_flavors_chocolateScoop_png__WEBPACK_IMPORTED_MODULE_4__);\n        this.load.image('Cookies and Cream', _assets_flavors_cncScoop_png__WEBPACK_IMPORTED_MODULE_5__);\n        this.load.image('Mint Chip', _assets_flavors_mcScoop_png__WEBPACK_IMPORTED_MODULE_6__);\n        this.load.image('Orange Sorbet', _assets_flavors_orangeSorbetScoop_png__WEBPACK_IMPORTED_MODULE_7__);\n        this.load.image('Rare Berry', _assets_flavors_rareBerryScoop_png__WEBPACK_IMPORTED_MODULE_8__);\n        this.load.image('Strawberry', _assets_flavors_strawberryScoop_png__WEBPACK_IMPORTED_MODULE_9__);\n        this.load.image('Vanilla', _assets_flavors_vanillaScoop_png__WEBPACK_IMPORTED_MODULE_10__);\n    };\n    /**\n     */\n    Menu.prototype.create = function () {\n        var _this = this;\n        this.startText = this.add\n            .text(this.sys.canvas.width / 2, this.sys.canvas.height / 3, 'Click to Start', { fontFamily: 'Nunito', fontSize: '20px', color: '#8B4513' })\n            .setOrigin(0.5, 0.5)\n            .setDepth(1)\n            .setInteractive()\n            .on('pointerdown', function () { return _this.scene.start('playScene'); });\n        this.time.addEvent({\n            callback: this.spawnIceCream,\n            callbackScope: this,\n            delay: 1500,\n            loop: true,\n        });\n        this.input.on('pointerdown', function () {\n            console.log('click');\n            _this.scene.start('playScene');\n        });\n    };\n    /**\n     *\n     */\n    Menu.prototype.spawnIceCream = function () {\n        this.sprite.push(this.physics.add.sprite(Phaser.Math.Between(_play__WEBPACK_IMPORTED_MODULE_1__.gameConfig.padding_sides, _main__WEBPACK_IMPORTED_MODULE_0__[\"default\"].width - _play__WEBPACK_IMPORTED_MODULE_1__.gameConfig.padding_sides), -_play__WEBPACK_IMPORTED_MODULE_1__.gameConfig.padding_top, // eslint-disable-next-line\n        this.flavors[Phaser.Math.Between(0, this.flavors.length - 1)], 0).setVelocityY(75));\n    };\n    /**\n     *\n     * @param {number} time\n     * @param {number} delta\n     */\n    Menu.prototype.update = function () {\n        var _this = this;\n        this.sprite.forEach(function (s) {\n            if (s.body.y > _main__WEBPACK_IMPORTED_MODULE_0__[\"default\"].height + _play__WEBPACK_IMPORTED_MODULE_1__.gameConfig.padding_bottom) {\n                _this.sprite\n                    .splice(_this.sprite.findIndex(function (e) { return e.body.y === s.body.y; }), 1);\n                s.destroy();\n            }\n        });\n    };\n    return Menu;\n}(Phaser.Scene));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);\n\n\n//# sourceURL=webpack://ts-webpack/./src/scenes/menu.ts?");

/***/ }),

/***/ "./src/scenes/play.ts":
/*!****************************!*\
  !*** ./src/scenes/play.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   gameConfig: () => (/* binding */ gameConfig)\n/* harmony export */ });\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! phaser */ \"phaser\");\n/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main */ \"./src/main.ts\");\n/* harmony import */ var _prefabs_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../prefabs/object */ \"./src/prefabs/object.ts\");\n/* harmony import */ var _assets_general_cone_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/general/cone.png */ \"./src/assets/general/cone.png\");\n/* harmony import */ var _assets_general_star_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/general/star.png */ \"./src/assets/general/star.png\");\n/* harmony import */ var _assets_flavors_chocolateScoop_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/flavors/chocolateScoop.png */ \"./src/assets/flavors/chocolateScoop.png\");\n/* harmony import */ var _assets_flavors_cncScoop_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/flavors/cncScoop.png */ \"./src/assets/flavors/cncScoop.png\");\n/* harmony import */ var _assets_flavors_mcScoop_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/flavors/mcScoop.png */ \"./src/assets/flavors/mcScoop.png\");\n/* harmony import */ var _assets_flavors_orangeSorbetScoop_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/flavors/orangeSorbetScoop.png */ \"./src/assets/flavors/orangeSorbetScoop.png\");\n/* harmony import */ var _assets_flavors_rareBerryScoop_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/flavors/rareBerryScoop.png */ \"./src/assets/flavors/rareBerryScoop.png\");\n/* harmony import */ var _assets_flavors_strawberryScoop_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/flavors/strawberryScoop.png */ \"./src/assets/flavors/strawberryScoop.png\");\n/* harmony import */ var _assets_flavors_vanillaScoop_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/flavors/vanillaScoop.png */ \"./src/assets/flavors/vanillaScoop.png\");\n/* harmony import */ var _assets_general_coneStack_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/general/coneStack.png */ \"./src/assets/general/coneStack.png\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n// images\n\n\n\n\n\n\n\n\n\n\nvar gameConfig = {\n    // game marigns\n    padding_bottom: 25,\n    padding_sides: 25,\n    padding_top: 20,\n    // for lives\n    livesPadding: 45,\n};\nvar speed = 0.5;\nvar SPEED_MUTATOR = 0.025;\n/**\n *\n */\nfunction increaseSpeed() {\n    speed += SPEED_MUTATOR; // either 0.025 or 0.5?\n}\n/**\n *\n */\nvar Play = /** @class */ (function (_super) {\n    __extends(Play, _super);\n    /**\n     *\n     */\n    function Play() {\n        return _super.call(this, 'playScene') || this;\n    }\n    /**\n     *\n     */\n    Play.prototype.preload = function () {\n        // cone and collision sprite png\n        this.load.image('player', _assets_general_cone_png__WEBPACK_IMPORTED_MODULE_3__);\n        this.load.image('star', _assets_general_star_png__WEBPACK_IMPORTED_MODULE_4__);\n        this.load.image('lives', _assets_general_coneStack_png__WEBPACK_IMPORTED_MODULE_12__);\n        // flavors\n        this.load.image('Chocolate', _assets_flavors_chocolateScoop_png__WEBPACK_IMPORTED_MODULE_5__);\n        this.load.image('Cookies and Cream', _assets_flavors_cncScoop_png__WEBPACK_IMPORTED_MODULE_6__);\n        this.load.image('Mint Chip', _assets_flavors_mcScoop_png__WEBPACK_IMPORTED_MODULE_7__);\n        this.load.image('Orange Sorbet', _assets_flavors_orangeSorbetScoop_png__WEBPACK_IMPORTED_MODULE_8__);\n        this.load.image('Rare Berry', _assets_flavors_rareBerryScoop_png__WEBPACK_IMPORTED_MODULE_9__);\n        this.load.image('Strawberry', _assets_flavors_strawberryScoop_png__WEBPACK_IMPORTED_MODULE_10__);\n        this.load.image('Vanilla', _assets_flavors_vanillaScoop_png__WEBPACK_IMPORTED_MODULE_11__);\n    };\n    /**\n     *\n     */\n    Play.prototype.init = function () {\n        // sprites\n        this.sprites = [];\n        // physics\n        this.VELOCITY = 100;\n        // score\n        this.score = 0;\n        // game logic properties\n        this.collectionOffset = 25;\n        this.flip = false;\n        // flavors (colors of scoops)\n        this.flavors = [\n            'Chocolate',\n            'Cookies and Cream',\n            'Mint Chip',\n            'Orange Sorbet',\n            'Rare Berry',\n            'Strawberry',\n            'Vanilla',\n        ];\n        this.flavorDecider = // eslint-disable-next-line\n            this.flavors[phaser__WEBPACK_IMPORTED_MODULE_0__.Math.Between(0, this.flavors.length - 1)];\n        // badluck\n        this.badLuck = 0;\n        // discount\n        this.discount = 0.0;\n        this.lives = 3;\n        this.gameOver = false; // fix\n    };\n    /**\n     *\n     */\n    Play.prototype.create = function () {\n        var _this = this;\n        // bounds\n        this.physics.world.setBoundsCollision();\n        // text\n        this.collecterText = this.add\n            .text(gameConfig.padding_sides, gameConfig.padding_top, 'Collect: ' + this.flavorDecider, { fontFamily: 'Nunito', fontSize: '20px', color: '#8B4513' })\n            .setDepth(1);\n        this.gameOverText = this.add\n            .text(this.sys.canvas.width / 2, this.sys.canvas.height / 3, 'GAME OVER', { fontFamily: 'Nunito', fontSize: '20px', color: '#8B4513' })\n            .setOrigin(0.5, 0.5)\n            .setDepth(1)\n            .setAlpha(0);\n        this.restartGameText = this.add\n            .text(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'Click or Tap to restart', { fontFamily: 'Nunito', fontSize: '15px', color: '#8B4513' })\n            .setOrigin(0.5, 0.5)\n            .setDepth(1)\n            .setAlpha(0);\n        // lives indiciator\n        this.life0 = this.add\n            .image(this.sys.canvas.width - gameConfig.livesPadding, gameConfig.livesPadding + gameConfig.padding_top, 'lives')\n            .setDepth(1);\n        this.life1 = this.add\n            .image(this.sys.canvas.width - gameConfig.livesPadding - 30, gameConfig.livesPadding + gameConfig.padding_top, 'lives')\n            .setDepth(1);\n        this.life2 = this.add\n            .image(this.sys.canvas.width - gameConfig.livesPadding - 60, gameConfig.livesPadding + gameConfig.padding_top, 'lives')\n            .setDepth(1);\n        // player\n        this.player = this.physics.add\n            .sprite(_main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width / 2, _main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].height - gameConfig.padding_bottom, 'player', 0)\n            .setCollideWorldBounds()\n            .setScale(2)\n            .setBounce(1);\n        // collector obj - thing that collides with icecream\n        this.collectionBoundObj = this.physics.add\n            .sprite(this.player.x, this.player.y - this.collectionOffset, 'star', 0)\n            .setVisible(false);\n        this.collectionBoundObj.body.checkCollision.down = false;\n        this.collectionBoundObj.body.checkCollision.left = false;\n        this.collectionBoundObj.body.checkCollision.right = false;\n        // movment\n        this.LEFTMOVEKEY = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0__.Input.Keyboard.KeyCodes.A);\n        this.RIGHTMOVEKEY = this.input.keyboard.addKey(phaser__WEBPACK_IMPORTED_MODULE_0__.Input.Keyboard.KeyCodes.D);\n        // spawn flavors\n        this.time.addEvent({\n            callback: this.spawnObject,\n            callbackScope: this,\n            delay: 2000,\n            loop: true,\n        });\n        this.input.on('pointerdown', function () {\n            if (_this.gameOver) {\n                console.log('click');\n                _this.scene.start('menuScene');\n            }\n        });\n        this.intervalID = setInterval(function () { return increaseSpeed(); }, 5000);\n    };\n    /**\n     *\n     */\n    Play.prototype.update = function () {\n        var _this = this;\n        switch (this.lives) {\n            case 2:\n                this.life2.setAlpha(0);\n                break;\n            case 1:\n                this.life1.setAlpha(0);\n                break;\n            case 0:\n                this.life0.setAlpha(0);\n                this.gameOver = true;\n                break;\n            default:\n                break;\n        }\n        if (this.gameOver) {\n            clearInterval(this.intervalID);\n            this.time.removeAllEvents(); // stop spawning flavors\n            // Disable player movement\n            this.player.setVelocity(0);\n            this.LEFTMOVEKEY.enabled = false;\n            this.RIGHTMOVEKEY.enabled = false;\n            this.gameOverText\n                .setAlpha(1)\n                .setInteractive()\n                .on('pointerdown', function () {\n                _this.scene.start('menuScene');\n            });\n            this.restartGameText\n                .setAlpha(1)\n                .setInteractive()\n                .on('pointerdown', function () {\n                _this.restartGameText.setAlpha(1);\n                _this.scene.start('menuScene');\n            });\n        }\n        this.collectionBoundObj.x = this.player.x;\n        // eslint-disable-next-line\n        if (phaser__WEBPACK_IMPORTED_MODULE_0__.Input.Keyboard.JustDown(this.LEFTMOVEKEY)) {\n            this.player.setVelocityX(-this.VELOCITY);\n        }\n        // eslint-disable-next-line\n        if (phaser__WEBPACK_IMPORTED_MODULE_0__.Input.Keyboard.JustDown(this.RIGHTMOVEKEY)) {\n            this.player.setVelocityX(this.VELOCITY);\n        }\n    };\n    /**\n     *\n     */\n    Play.prototype.spawnObject = function () {\n        var _this = this;\n        var flavor = // eslint-disable-next-line\n         this.flavors[phaser__WEBPACK_IMPORTED_MODULE_0__.Math.Between(0, this.flavors.length - 1)];\n        // bad luck protection\n        this.badLuck += 1;\n        if (this.badLuck >= 4 && flavor !== this.flavorDecider) {\n            this.badLuck = 0;\n            flavor = this.flavorDecider;\n        }\n        var x = new _prefabs_object__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this, // eslint-disable-next-line\n        phaser__WEBPACK_IMPORTED_MODULE_0__.Math.Between(gameConfig.padding_sides, _main__WEBPACK_IMPORTED_MODULE_1__[\"default\"].width - gameConfig.padding_sides), -gameConfig.padding_top, flavor, 0, this.player, // eslint-disable-next-line\n        speed).setScale(2);\n        x.setCurrentSelected(this.flavorDecider);\n        this.sprites.push(x);\n        this.physics.add.collider(x, this.collectionBoundObj, function () {\n            if (x.name === _this.flavorDecider) {\n                console.log('You collected the correct flavor');\n                _this.discount += 1;\n                var discountUpd = document.getElementById('discount-tracker');\n                discountUpd.innerHTML = _this.discount.toString() + '%';\n                _this.badLuck = 0;\n            }\n            else {\n                _this.lives -= 1;\n                // switch (this.lives) {\n                //   case 2:\n                //     this.life2.setAlpha(0);\n                //     break;\n                //   case 1:\n                //     this.life1.setAlpha(0);\n                //     break;\n                //   case 0:\n                //     this.life0.setAlpha(0);\n                //     break;\n                //   default:\n                //     break;\n                // }\n                console.log('You collected the wrong flavor');\n            }\n            _this.flip = !_this.flip;\n            _this.score += 1;\n            x.beginFollow = true;\n            x.setY(_this.collectionBoundObj.y);\n            x.body.destroy();\n            _this.collectionBoundObj.y -= _this.collectionOffset / 2;\n            if (_this.flip) {\n                x.flipX = true;\n            }\n            _this.flavorDecider = // eslint-disable-next-line\n                _this.flavors[phaser__WEBPACK_IMPORTED_MODULE_0__.Math.Between(0, _this.flavors.length - 1)];\n            _this.collecterText.setText('Collect: ' + _this.flavorDecider);\n            _this.sprites.forEach(function (s) {\n                s.setCurrentSelected(flavor);\n            });\n        });\n    };\n    return Play;\n}(phaser__WEBPACK_IMPORTED_MODULE_0__.Scene));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Play);\n\n\n//# sourceURL=webpack://ts-webpack/./src/scenes/play.ts?");

/***/ }),

/***/ "./node_modules/webfontloader/webfontloader.js":
/*!*****************************************************!*\
  !*** ./node_modules/webfontloader/webfontloader.js ***!
  \*****************************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf(\"native code\")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&(\"style\"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}\nfunction w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(\" \").replace(/\\s+/g,\" \").replace(/^\\s+|\\s+$/,\"\")}function y(a,b){for(var c=a.className.split(/\\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}\nfunction ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,\"link\",{rel:\"stylesheet\",href:b,media:\"all\"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error(\"Stylesheet failed to load\");d()}):setTimeout(function(){e=!0;d()},0);u(a,\"head\",b)}\nfunction A(a,b,c,d){var e=a.c.getElementsByTagName(\"head\")[0];if(e){var f=t(a,\"script\",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&\"loaded\"!=this.readyState&&\"complete\"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,\"HEAD\"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error(\"Script load timeout\")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||\"-\"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\\W_]+/g,\"\").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a=\"n\";var c=(b||\"n4\").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+\" \"+(a.f+\"00\")+\" 300px \"+I(a.c)}function I(a){var b=[];a=a.split(/,\\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['\"]/g,\"\");-1!=d.indexOf(\" \")||/^\\d/.test(d)?b.push(\"'\"+d+\"'\"):b.push(d)}return b.join(\",\")}function J(a){return a.a+a.f}function H(a){var b=\"normal\";\"o\"===a.a?b=\"oblique\":\"i\"===a.a&&(b=\"italic\");return b}\nfunction ga(a){var b=4,c=\"n\",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F(\"-\");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c(\"wf\",\"loading\")]);K(a,\"loading\")}function L(a){if(a.g){var b=y(a.f,a.a.c(\"wf\",\"active\")),c=[],d=[a.a.c(\"wf\",\"loading\")];b||c.push(a.a.c(\"wf\",\"inactive\"));w(a.f,c,d)}K(a,\"inactive\")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,\"span\",{\"aria-hidden\":\"true\"},this.f)}function N(a){u(a.c,\"body\",a.a)}function O(a){return\"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:\"+I(a.c)+\";\"+(\"font-style:\"+H(a)+\";font-weight:\"+(a.f+\"00\")+\";\")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||\"BESbswy\";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+\",serif\",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+\",sans-serif\",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G(\"serif\",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G(\"sans-serif\",J(this.a));a=\nO(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:\"serif\",C:\"sans-serif\"},S=null;function T(){if(null===S){var a=/AppleWebKit\\/([0-9]+)(?:\\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f[\"sans-serif\"]=this.m.a.offsetWidth;this.A=q();U(this)};\nfunction la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f[\"sans-serif\"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c(\"wf\",a.c,J(a).toString(),\"active\")],[b.a.c(\"wf\",a.c,J(a).toString(),\"loading\"),b.a.c(\"wf\",a.c,J(a).toString(),\"inactive\")]);K(b,\"fontactive\",a);this.m=!0;na(this)};\nW.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c(\"wf\",a.c,J(a).toString(),\"active\")),d=[],e=[b.a.c(\"wf\",a.c,J(a).toString(),\"loading\")];c||d.push(b.a.c(\"wf\",a.c,J(a).toString(),\"inactive\"));w(b.f,d,e)}K(b,\"fontinactive\",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c(\"wf\",\"active\")],[a.a.c(\"wf\",\"loading\"),a.a.c(\"wf\",\"inactive\")]),K(a,\"active\")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};\nfunction qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c(\"wf\",x.c,J(x).toString(),\"loading\")]);K(r,\"fontloading\",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\\/(\\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\\/10\\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);\nX=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}\nra.prototype.load=function(a){function b(){if(f[\"__mti_fntLst\"+d]){var c=f[\"__mti_fntLst\"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||\"https://fast.fonts.net/jsapi\")+\"/\"+d+\".js\"+(e?\"?v=\"+e:\"\"),function(e){e?a([]):(f[\"__MonotypeConfiguration__\"+\nd]=function(){return c.a},b())}).id=\"__MonotypeAPIScript__\"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(\":\"),d[1])for(var h=d[1].split(\",\"),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||\"\"}var ua=\"https://fonts.googleapis.com/css\";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(\":\");3==e.length&&a.f.push(e.pop());var f=\"\";2==e.length&&\"\"!=e[1]&&(f=\":\");a.a.push(e.join(f))}}\nfunction wa(a){if(0==a.a.length)throw Error(\"No fonts to load!\");if(-1!=a.c.indexOf(\"kit=\"))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,\"+\"));b=a.c+\"?family=\"+c.join(\"%7C\");0<a.f.length&&(b+=\"&subset=\"+a.f.join(\",\"));0<a.g.length&&(b+=\"&text=\"+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}\nvar za={latin:\"BESbswy\",\"latin-ext\":\"\\u00e7\\u00f6\\u00fc\\u011f\\u015f\",cyrillic:\"\\u0439\\u044f\\u0416\",greek:\"\\u03b1\\u03b2\\u03a3\",khmer:\"\\u1780\\u1781\\u1782\",Hanuman:\"\\u1780\\u1781\\u1782\"},Aa={thin:\"1\",extralight:\"2\",\"extra-light\":\"2\",ultralight:\"2\",\"ultra-light\":\"2\",light:\"3\",regular:\"4\",book:\"4\",medium:\"5\",\"semi-bold\":\"6\",semibold:\"6\",\"demi-bold\":\"6\",demibold:\"6\",bold:\"7\",\"extra-bold\":\"8\",extrabold:\"8\",\"ultra-bold\":\"8\",ultrabold:\"8\",black:\"9\",heavy:\"9\",l:\"3\",r:\"4\",b:\"7\"},Ba={i:\"i\",italic:\"i\",n:\"n\",normal:\"n\"},\nCa=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;\nfunction Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(\":\"),e=d[0].replace(/\\+/g,\" \"),f=[\"n4\"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(\",\"),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k=\"\";else{k=n[2];k=null==k||\"\"==k?\"n\":Ba[k];n=n[1];if(null==n||\"\"==n)n=\"4\";else var r=Aa[n],n=r?r:isNaN(n)?\"4\":n.substr(0,1);k=[k,n].join(\"\")}}else k=\"\";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(\",\"):\ng,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||\"https://use.typekit.net\")+\"/\"+b+\".js\",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga(\"font-weight:\"+h.weight+\";font-style:\"+h.style)))}a(d.a)},A(this.c,(this.f.api||\"https://f.fontdeck.com/s/css/js/\")+ea(this.c)+\"/\"+b+\".js\",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0;}());\n\n\n//# sourceURL=webpack://ts-webpack/./node_modules/webfontloader/webfontloader.js?");

/***/ }),

/***/ "./src/assets/flavors/chocolateScoop.png":
/*!***********************************************!*\
  !*** ./src/assets/flavors/chocolateScoop.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"252180ad04838601361d.png\";\n\n//# sourceURL=webpack://ts-webpack/./src/assets/flavors/chocolateScoop.png?");

/***/ }),

/***/ "./src/assets/flavors/cncScoop.png":
/*!*****************************************!*\
  !*** ./src/assets/flavors/cncScoop.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cc622eb545105be277a6.png\";\n\n//# sourceURL=webpack://ts-webpack/./src/assets/flavors/cncScoop.png?");

/***/ }),

/***/ "./src/assets/flavors/mcScoop.png":
/*!****************************************!*\
  !*** ./src/assets/flavors/mcScoop.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cd656c0e1fa3a1bfed9c.png\";\n\n//# sourceURL=webpack://ts-webpack/./src/assets/flavors/mcScoop.png?");

/***/ }),

/***/ "./src/assets/flavors/orangeSorbetScoop.png":
/*!**************************************************!*\
  !*** ./src/assets/flavors/orangeSorbetScoop.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ba9537c24d8f586b41d6.png\";\n\n//# sourceURL=webpack://ts-webpack/./src/assets/flavors/orangeSorbetScoop.png?");

/***/ }),

/***/ "./src/assets/flavors/rareBerryScoop.png":
/*!***********************************************!*\
  !*** ./src/assets/flavors/rareBerryScoop.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"82698050f455d29d0a9f.png\";\n\n//# sourceURL=webpack://ts-webpack/./src/assets/flavors/rareBerryScoop.png?");

/***/ }),

/***/ "./src/assets/flavors/strawberryScoop.png":
/*!************************************************!*\
  !*** ./src/assets/flavors/strawberryScoop.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"98961e787bf390c036a1.png\";\n\n//# sourceURL=webpack://ts-webpack/./src/assets/flavors/strawberryScoop.png?");

/***/ }),

/***/ "./src/assets/flavors/vanillaScoop.png":
/*!*********************************************!*\
  !*** ./src/assets/flavors/vanillaScoop.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"41444b15dde6d0aaa57d.png\";\n\n//# sourceURL=webpack://ts-webpack/./src/assets/flavors/vanillaScoop.png?");

/***/ }),

/***/ "./src/assets/general/cone.png":
/*!*************************************!*\
  !*** ./src/assets/general/cone.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2c70287012412010d00d.png\";\n\n//# sourceURL=webpack://ts-webpack/./src/assets/general/cone.png?");

/***/ }),

/***/ "./src/assets/general/coneStack.png":
/*!******************************************!*\
  !*** ./src/assets/general/coneStack.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8e11a3bde80a5bd96121.png\";\n\n//# sourceURL=webpack://ts-webpack/./src/assets/general/coneStack.png?");

/***/ }),

/***/ "./src/assets/general/star.png":
/*!*************************************!*\
  !*** ./src/assets/general/star.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0b713a1365deea8f8cc5.png\";\n\n//# sourceURL=webpack://ts-webpack/./src/assets/general/star.png?");

/***/ }),

/***/ "phaser":
/*!*************************!*\
  !*** external "Phaser" ***!
  \*************************/
/***/ ((module) => {

"use strict";
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