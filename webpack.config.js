const devModule = require('./webpack-config/dev.js');
const prodModule = require('./webpack-config/prod.js');

let finalModule = {};

let ENV = process.env.NODE_ENV; //此处的变量可由命令行传入

switch (ENV) {
    case 'dev':
        finalModule = devModule;
        break;
    case 'prod':
        finalModule = prodModule;
        break;
    default:
        break;
}

module.exports = finalModule;

