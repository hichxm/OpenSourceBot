/**
 * Load public library from node and npm
 */
const dotenv = require("dotenv");
const path = require("path");

/**
 * Load .env file
 */
let env = dotenv.config({
   path: path.resolve(".env")
});

if (env.error) {
    console.log("error")
} else {
    console.log(env.parsed)
}