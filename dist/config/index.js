"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
exports.config = {
    token: process.env.TOKEN,
    clientId: process.env.CLIENT_ID,
};
