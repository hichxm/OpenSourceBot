/**
 * Load public library from node and npm
 */
const dotenv = require("dotenv");
const path = require("path");
const discord = require("discord.js");

/**
 * Load my libs from libs dir
 */
const log = require("./libs/logger");
const bot = require("./libs/bot");

/**
 * Load .env file
 */
let env = dotenv.config({
   path: path.resolve(".env")
});

if (env.error) {
    log.error(env.error)
} else {
    log.info("Environement file as parsed");

    for (let parsedKey in env.parsed) {
        log.debug(`process.env.${parsedKey}`);
        log.debug(`\t -> ${process.env[parsedKey]}`)
    }
}

let BOT;

BOT = new bot(discord, process.env.BOT_TOKEN);
BOT.start();