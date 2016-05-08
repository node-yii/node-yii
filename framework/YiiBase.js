/**
 * YiiBase class file.
 */

/**
 * Gets the application start timestamp.
 */
defined('YII_BEGIN_TIME') || define('YII_BEGIN_TIME',microtime(true));
/**
 * This constant defines whether the application should be in debug mode or not. Defaults to false.
 */
defined('YII_DEBUG') || define('YII_DEBUG',false);
/**
 * This constant defines how much call stack information (file name and line number) should be logged by Yii::trace().
 * Defaults to 0, meaning no backtrace information. If it is greater than 0,
 * at most that number of call stacks will be logged. Note, only user application call stacks are considered.
 */
defined('YII_TRACE_LEVEL') || define('YII_TRACE_LEVEL',0);
/**
 * This constant defines whether exception handling should be enabled. Defaults to true.
 */
defined('YII_ENABLE_EXCEPTION_HANDLER') || define('YII_ENABLE_EXCEPTION_HANDLER',true);
/**
 * This constant defines whether error handling should be enabled. Defaults to true.
 */
defined('YII_ENABLE_ERROR_HANDLER') || define('YII_ENABLE_ERROR_HANDLER',true);
/**
 * Defines the Yii framework installation path.
 */
defined('YII_PATH') || define('YII_PATH',__dirname);
/**
 * Defines the Zii library installation path.
 */
defined('YII_ZII_PATH') || define('YII_ZII_PATH',YII_PATH+path.sep+'zii');

/**
 * YiiBase is a helper class serving common framework functionalities.
 *
 * Do not use YiiBase directly. Instead, use its child class {@link Yii} where
 * you can customize methods of YiiBase.
 */
class YiiBase
{

}

module.exports = YiiBase;
