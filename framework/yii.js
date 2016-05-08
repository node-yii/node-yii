/**
 * Yii bootstrap file.
 */

if(!class_exists('YiiBase', false))
	var YiiBase = require('./YiiBase');

/**
 * Yii is a helper class serving common framework functionalities.
 *
 * It encapsulates {@link YiiBase} which provides the actual implementation.
 * By writing your own Yii class, you can customize some functionalities of YiiBase.
 */
class Yii extends YiiBase
{
}

//------BEGIN TEST------
//console.log("OK");
//-------END TEST-------
