"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
exports.default = (client, _config) => {
    client.on(discord_js_1.Events.ClientReady, async () => {
        if (!client.user || !client.application)
            return;
        console.log(`Logged in as ${client.user?.tag}!`);
    });
};
