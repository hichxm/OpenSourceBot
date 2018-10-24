/**
 * Load public library from node and npm
 */
const log = require("fancy-log");

/**
 * Log info in console
 * @param {string} message
 */
module.exports.info = function (message) {
    log.info(message);
};

/**
 * Log error in console
 * @param {string} message
 */
module.exports.error = function (message) {
    log.error(message);
};

/**
 * Log debug in console
 * @param {string} message
 */
module.exports.debug = function (message) {

    if (process.env.DEBUG.toLowerCase() === "true") {
        log.info(message);
    }

};