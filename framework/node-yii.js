/**
 * Node-Yii bootstrap file.
 */
"use strict";
require('use-strict'); // for all future included modules
global.fs = require('fs');
global.path = require('path');
var locutus = require('locutus/php');

var requirePHPFunctions = function (){
   global.class_exists = require('php-class-exists');
   global.define = require('php-defined').define;
   global.defined = require('php-defined').defined;
   global.microtime = locutus.datetime.microtime;
}

requirePHPFunctions();
require('./yii');
