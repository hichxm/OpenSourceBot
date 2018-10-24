/**
 * Load my libs from libs dir
 */
const log = require("./logger");

/**
 * BOT class.
 * @type {module.BOT}
 */
module.exports = class BOT {

    /**
     * BOT constructor
     *
     */
    constructor(Discord, Token) {
        log.debug(`Class: BOT`);
        log.debug(`Method: constructor()`);

        this.discord = Discord;
        this.token = Token;

        this.client = new this.discord.Client();
    }

    /**
     * Start BOT with token.
     * @param {null|string} token
     */
    start(token = this.token) {

        log.debug(`Class: BOT`);
        log.debug(`Method: start()`);
        log.debug(`token: ${token}`);

        log.info("BOT start");

        this.client.login(token)
            .then(() => {
                log.info(`BOT connected as ${this.client.user.tag}`);
            })
            .catch((err) => {
                log.error(err);
            })
    }

};